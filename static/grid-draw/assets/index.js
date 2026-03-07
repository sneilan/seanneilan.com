(async ()=>{
    function _d(e, t) {
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
    function Ed(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var Ea = {
        exports: {}
    }, tl = {}, Pa = {
        exports: {}
    }, U = {};
    var Br = Symbol.for("react.element"), Pd = Symbol.for("react.portal"), Nd = Symbol.for("react.fragment"), zd = Symbol.for("react.strict_mode"), Rd = Symbol.for("react.profiler"), Id = Symbol.for("react.provider"), Td = Symbol.for("react.context"), Md = Symbol.for("react.forward_ref"), jd = Symbol.for("react.suspense"), Ld = Symbol.for("react.memo"), Od = Symbol.for("react.lazy"), qs = Symbol.iterator;
    function Dd(e) {
        return e === null || typeof e != "object" ? null : (e = qs && e[qs] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Na = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, za = Object.assign, Ra = {};
    function Yn(e, t, n) {
        this.props = e, this.context = t, this.refs = Ra, this.updater = n || Na;
    }
    Yn.prototype.isReactComponent = {};
    Yn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Yn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Ia() {}
    Ia.prototype = Yn.prototype;
    function Hi(e, t, n) {
        this.props = e, this.context = t, this.refs = Ra, this.updater = n || Na;
    }
    var Qi = Hi.prototype = new Ia;
    Qi.constructor = Hi;
    za(Qi, Yn.prototype);
    Qi.isPureReactComponent = !0;
    var eu = Array.isArray, Ta = Object.prototype.hasOwnProperty, Ki = {
        current: null
    }, Ma = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ja(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)Ta.call(t, r) && !Ma.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var u = Array(s), a = 0; a < s; a++)u[a] = arguments[a + 2];
            o.children = u;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: Br,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Ki.current
        };
    }
    function Fd(e, t) {
        return {
            $$typeof: Br,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Yi(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Br;
    }
    function Ad(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var tu = /\/+/g;
    function xl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Ad("" + e.key) : t.toString(36);
    }
    function go(e, t, n, r, o) {
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
                    case Br:
                    case Pd:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + xl(i, 0) : r, eu(o) ? (n = "", e != null && (n = e.replace(tu, "$&/") + "/"), go(o, t, n, "", function(a) {
            return a;
        })) : o != null && (Yi(o) && (o = Fd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(tu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", eu(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var u = r + xl(l, s);
            i += go(l, t, n, u, o);
        }
        else if (u = Dd(e), typeof u == "function") for(e = u.call(e), s = 0; !(l = e.next()).done;)l = l.value, u = r + xl(l, s++), i += go(l, t, n, u, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Xr(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return go(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Ud(e) {
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
    var Ne = {
        current: null
    }, vo = {
        transition: null
    }, Vd = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: vo,
        ReactCurrentOwner: Ki
    };
    function La() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    U.Children = {
        map: Xr,
        forEach: function(e, t, n) {
            Xr(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Xr(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Xr(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    U.Component = Yn;
    U.Fragment = Nd;
    U.Profiler = Rd;
    U.PureComponent = Hi;
    U.StrictMode = zd;
    U.Suspense = jd;
    U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
    U.act = La;
    U.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = za({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Ki.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(u in t)Ta.call(t, u) && !Ma.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (u === 1) r.children = n;
        else if (1 < u) {
            s = Array(u);
            for(var a = 0; a < u; a++)s[a] = arguments[a + 2];
            r.children = s;
        }
        return {
            $$typeof: Br,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    U.createContext = function(e) {
        return e = {
            $$typeof: Td,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Id,
            _context: e
        }, e.Consumer = e;
    };
    U.createElement = ja;
    U.createFactory = function(e) {
        var t = ja.bind(null, e);
        return t.type = e, t;
    };
    U.createRef = function() {
        return {
            current: null
        };
    };
    U.forwardRef = function(e) {
        return {
            $$typeof: Md,
            render: e
        };
    };
    U.isValidElement = Yi;
    U.lazy = function(e) {
        return {
            $$typeof: Od,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Ud
        };
    };
    U.memo = function(e, t) {
        return {
            $$typeof: Ld,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    U.startTransition = function(e) {
        var t = vo.transition;
        vo.transition = {};
        try {
            e();
        } finally{
            vo.transition = t;
        }
    };
    U.unstable_act = La;
    U.useCallback = function(e, t) {
        return Ne.current.useCallback(e, t);
    };
    U.useContext = function(e) {
        return Ne.current.useContext(e);
    };
    U.useDebugValue = function() {};
    U.useDeferredValue = function(e) {
        return Ne.current.useDeferredValue(e);
    };
    U.useEffect = function(e, t) {
        return Ne.current.useEffect(e, t);
    };
    U.useId = function() {
        return Ne.current.useId();
    };
    U.useImperativeHandle = function(e, t, n) {
        return Ne.current.useImperativeHandle(e, t, n);
    };
    U.useInsertionEffect = function(e, t) {
        return Ne.current.useInsertionEffect(e, t);
    };
    U.useLayoutEffect = function(e, t) {
        return Ne.current.useLayoutEffect(e, t);
    };
    U.useMemo = function(e, t) {
        return Ne.current.useMemo(e, t);
    };
    U.useReducer = function(e, t, n) {
        return Ne.current.useReducer(e, t, n);
    };
    U.useRef = function(e) {
        return Ne.current.useRef(e);
    };
    U.useState = function(e) {
        return Ne.current.useState(e);
    };
    U.useSyncExternalStore = function(e, t, n) {
        return Ne.current.useSyncExternalStore(e, t, n);
    };
    U.useTransition = function() {
        return Ne.current.useTransition();
    };
    U.version = "18.3.1";
    Pa.exports = U;
    var z = Pa.exports;
    const J = Ed(z), Oa = _d({
        __proto__: null,
        default: J
    }, [
        z
    ]);
    var Bd = z, $d = Symbol.for("react.element"), bd = Symbol.for("react.fragment"), Gd = Object.prototype.hasOwnProperty, Wd = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Da(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Gd.call(t, r) && !Hd.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: $d,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Wd.current
        };
    }
    tl.Fragment = bd;
    tl.jsx = Da;
    tl.jsxs = Da;
    Ea.exports = tl;
    var k = Ea.exports, Xl = {}, Fa = {
        exports: {}
    }, $e = {}, Aa = {
        exports: {}
    }, Ua = {};
    (function(e) {
        function t(N, D) {
            var _ = N.length;
            N.push(D);
            e: for(; 0 < _;){
                var H = _ - 1 >>> 1, Z = N[H];
                if (0 < o(Z, D)) N[H] = D, N[_] = Z, _ = H;
                else break e;
            }
        }
        function n(N) {
            return N.length === 0 ? null : N[0];
        }
        function r(N) {
            if (N.length === 0) return null;
            var D = N[0], _ = N.pop();
            if (_ !== D) {
                N[0] = _;
                e: for(var H = 0, Z = N.length, Ze = Z >>> 1; H < Ze;){
                    var Ie = 2 * (H + 1) - 1, re = N[Ie], Q = Ie + 1, Ge = N[Q];
                    if (0 > o(re, _)) Q < Z && 0 > o(Ge, re) ? (N[H] = Ge, N[Q] = _, H = Q) : (N[H] = re, N[Ie] = _, H = Ie);
                    else if (Q < Z && 0 > o(Ge, _)) N[H] = Ge, N[Q] = _, H = Q;
                    else break e;
                }
            }
            return D;
        }
        function o(N, D) {
            var _ = N.sortIndex - D.sortIndex;
            return _ !== 0 ? _ : N.id - D.id;
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
        var u = [], a = [], p = 1, c = null, h = 3, v = !1, y = !1, g = !1, S = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function m(N) {
            for(var D = n(a); D !== null;){
                if (D.callback === null) r(a);
                else if (D.startTime <= N) r(a), D.sortIndex = D.expirationTime, t(u, D);
                else break;
                D = n(a);
            }
        }
        function x(N) {
            if (g = !1, m(N), !y) if (n(u) !== null) y = !0, W(E);
            else {
                var D = n(a);
                D !== null && Re(x, D.startTime - N);
            }
        }
        function E(N, D) {
            y = !1, g && (g = !1, d(w), w = -1), v = !0;
            var _ = h;
            try {
                for(m(D), c = n(u); c !== null && (!(c.expirationTime > D) || N && !le());){
                    var H = c.callback;
                    if (typeof H == "function") {
                        c.callback = null, h = c.priorityLevel;
                        var Z = H(c.expirationTime <= D);
                        D = e.unstable_now(), typeof Z == "function" ? c.callback = Z : c === n(u) && r(u), m(D);
                    } else r(u);
                    c = n(u);
                }
                if (c !== null) var Ze = !0;
                else {
                    var Ie = n(a);
                    Ie !== null && Re(x, Ie.startTime - D), Ze = !1;
                }
                return Ze;
            } finally{
                c = null, h = _, v = !1;
            }
        }
        var P = !1, R = null, w = -1, O = 5, F = -1;
        function le() {
            return !(e.unstable_now() - F < O);
        }
        function Ce() {
            if (R !== null) {
                var N = e.unstable_now();
                F = N;
                var D = !0;
                try {
                    D = R(!0, N);
                } finally{
                    D ? De() : (P = !1, R = null);
                }
            } else P = !1;
        }
        var De;
        if (typeof f == "function") De = function() {
            f(Ce);
        };
        else if (typeof MessageChannel < "u") {
            var lt = new MessageChannel, ue = lt.port2;
            lt.port1.onmessage = Ce, De = function() {
                ue.postMessage(null);
            };
        } else De = function() {
            S(Ce, 0);
        };
        function W(N) {
            R = N, P || (P = !0, De());
        }
        function Re(N, D) {
            w = S(function() {
                N(e.unstable_now());
            }, D);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
            N.callback = null;
        }, e.unstable_continueExecution = function() {
            y || v || (y = !0, W(E));
        }, e.unstable_forceFrameRate = function(N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < N ? Math.floor(1e3 / N) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return h;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(u);
        }, e.unstable_next = function(N) {
            switch(h){
                case 1:
                case 2:
                case 3:
                    var D = 3;
                    break;
                default:
                    D = h;
            }
            var _ = h;
            h = D;
            try {
                return N();
            } finally{
                h = _;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, D) {
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
            var _ = h;
            h = N;
            try {
                return D();
            } finally{
                h = _;
            }
        }, e.unstable_scheduleCallback = function(N, D, _) {
            var H = e.unstable_now();
            switch(typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? H + _ : H) : _ = H, N){
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
            return Z = _ + Z, N = {
                id: p++,
                callback: D,
                priorityLevel: N,
                startTime: _,
                expirationTime: Z,
                sortIndex: -1
            }, _ > H ? (N.sortIndex = _, t(a, N), n(u) === null && N === n(a) && (g ? (d(w), w = -1) : g = !0, Re(x, _ - H))) : (N.sortIndex = Z, t(u, N), y || v || (y = !0, W(E))), N;
        }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(N) {
            var D = h;
            return function() {
                var _ = h;
                h = D;
                try {
                    return N.apply(this, arguments);
                } finally{
                    h = _;
                }
            };
        };
    })(Ua);
    Aa.exports = Ua;
    var Qd = Aa.exports;
    var Kd = z, Be = Qd;
    function C(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Va = new Set, Cr = {};
    function mn(e, t) {
        $n(e, t), $n(e + "Capture", t);
    }
    function $n(e, t) {
        for(Cr[e] = t, e = 0; e < t.length; e++)Va.add(t[e]);
    }
    var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = Object.prototype.hasOwnProperty, Yd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nu = {}, ru = {};
    function Xd(e) {
        return Zl.call(ru, e) ? !0 : Zl.call(nu, e) ? !1 : Yd.test(e) ? ru[e] = !0 : (nu[e] = !0, !1);
    }
    function Zd(e, t, n, r) {
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
    function Jd(e, t, n, r) {
        if (t === null || typeof t > "u" || Zd(e, t, n, r)) return !0;
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
    function ze(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var ye = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ye[e] = new ze(e, 0, !1, e, null, !1, !1);
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
        ye[t] = new ze(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        ye[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        ye[e] = new ze(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ye[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        ye[e] = new ze(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        ye[e] = new ze(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        ye[e] = new ze(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        ye[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Xi = /[\-:]([a-z])/g;
    function Zi(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Xi, Zi);
        ye[t] = new ze(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Xi, Zi);
        ye[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Xi, Zi);
        ye[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        ye[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ye.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        ye[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Ji(e, t, n, r) {
        var o = ye.hasOwnProperty(t) ? ye[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jd(t, n, o, r) && (n = null), r || o === null ? Xd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var kt = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Zr = Symbol.for("react.element"), _n = Symbol.for("react.portal"), En = Symbol.for("react.fragment"), qi = Symbol.for("react.strict_mode"), Jl = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), $a = Symbol.for("react.context"), es = Symbol.for("react.forward_ref"), ql = Symbol.for("react.suspense"), ei = Symbol.for("react.suspense_list"), ts = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), ba = Symbol.for("react.offscreen"), ou = Symbol.iterator;
    function tr(e) {
        return e === null || typeof e != "object" ? null : (e = ou && e[ou] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ne = Object.assign, Sl;
    function cr(e) {
        if (Sl === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Sl = t && t[1] || "";
        }
        return `
` + Sl + e;
    }
    var kl = !1;
    function Cl(e, t) {
        if (!e || kl) return "";
        kl = !0;
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
            kl = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
    }
    function qd(e) {
        switch(e.tag){
            case 5:
                return cr(e.type);
            case 16:
                return cr("Lazy");
            case 13:
                return cr("Suspense");
            case 19:
                return cr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Cl(e.type, !1), e;
            case 11:
                return e = Cl(e.type.render, !1), e;
            case 1:
                return e = Cl(e.type, !0), e;
            default:
                return "";
        }
    }
    function ti(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case En:
                return "Fragment";
            case _n:
                return "Portal";
            case Jl:
                return "Profiler";
            case qi:
                return "StrictMode";
            case ql:
                return "Suspense";
            case ei:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case $a:
                return (e.displayName || "Context") + ".Consumer";
            case Ba:
                return (e._context.displayName || "Context") + ".Provider";
            case es:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ts:
                return t = e.displayName || null, t !== null ? t : ti(e.type) || "Memo";
            case Nt:
                t = e._payload, e = e._init;
                try {
                    return ti(e(t));
                } catch  {}
        }
        return null;
    }
    function ep(e) {
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
                return ti(t);
            case 8:
                return t === qi ? "StrictMode" : "Mode";
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
    function $t(e) {
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
    function Ga(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tp(e) {
        var t = Ga(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Jr(e) {
        e._valueTracker || (e._valueTracker = tp(e));
    }
    function Wa(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Ga(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function zo(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function ni(e, t) {
        var n = t.checked;
        return ne({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function lu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = $t(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Ha(e, t) {
        t = t.checked, t != null && Ji(e, "checked", t, !1);
    }
    function ri(e, t) {
        Ha(e, t);
        var n = $t(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? oi(e, t.type, n) : t.hasOwnProperty("defaultValue") && oi(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function iu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function oi(e, t, n) {
        (t !== "number" || zo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var fr = Array.isArray;
    function Dn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + $t(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function li(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
        return ne({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function su(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(C(92));
                if (fr(n)) {
                    if (1 < n.length) throw Error(C(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: $t(n)
        };
    }
    function Qa(e, t) {
        var n = $t(t.value), r = $t(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function uu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Ka(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function ii(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Ka(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var qr, Ya = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qr.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function _r(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var mr = {
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
    }, np = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(mr).forEach(function(e) {
        np.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), mr[t] = mr[e];
        });
    });
    function Xa(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px";
    }
    function Za(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Xa(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var rp = ne({
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
    function si(e, t) {
        if (t) {
            if (rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(C(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(C(62));
        }
    }
    function ui(e, t) {
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
    var ai = null;
    function ns(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ci = null, Fn = null, An = null;
    function au(e) {
        if (e = Gr(e)) {
            if (typeof ci != "function") throw Error(C(280));
            var t = e.stateNode;
            t && (t = il(t), ci(e.stateNode, e.type, t));
        }
    }
    function Ja(e) {
        Fn ? An ? An.push(e) : An = [
            e
        ] : Fn = e;
    }
    function qa() {
        if (Fn) {
            var e = Fn, t = An;
            if (An = Fn = null, au(e), t) for(e = 0; e < t.length; e++)au(t[e]);
        }
    }
    function ec(e, t) {
        return e(t);
    }
    function tc() {}
    var _l = !1;
    function nc(e, t, n) {
        if (_l) return e(t, n);
        _l = !0;
        try {
            return ec(e, t, n);
        } finally{
            _l = !1, (Fn !== null || An !== null) && (tc(), qa());
        }
    }
    function Er(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = il(n);
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
    var fi = !1;
    if (yt) try {
        var nr = {};
        Object.defineProperty(nr, "passive", {
            get: function() {
                fi = !0;
            }
        }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
    } catch  {
        fi = !1;
    }
    function op(e, t, n, r, o, l, i, s, u) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (p) {
            this.onError(p);
        }
    }
    var hr = !1, Ro = null, Io = !1, di = null, lp = {
        onError: function(e) {
            hr = !0, Ro = e;
        }
    };
    function ip(e, t, n, r, o, l, i, s, u) {
        hr = !1, Ro = null, op.apply(lp, arguments);
    }
    function sp(e, t, n, r, o, l, i, s, u) {
        if (ip.apply(this, arguments), hr) {
            if (hr) {
                var a = Ro;
                hr = !1, Ro = null;
            } else throw Error(C(198));
            Io || (Io = !0, di = a);
        }
    }
    function hn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function rc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function cu(e) {
        if (hn(e) !== e) throw Error(C(188));
    }
    function up(e) {
        var t = e.alternate;
        if (!t) {
            if (t = hn(e), t === null) throw Error(C(188));
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
                    if (l === n) return cu(o), e;
                    if (l === r) return cu(o), t;
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
    function oc(e) {
        return e = up(e), e !== null ? lc(e) : null;
    }
    function lc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = lc(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var ic = Be.unstable_scheduleCallback, fu = Be.unstable_cancelCallback, ap = Be.unstable_shouldYield, cp = Be.unstable_requestPaint, se = Be.unstable_now, fp = Be.unstable_getCurrentPriorityLevel, rs = Be.unstable_ImmediatePriority, sc = Be.unstable_UserBlockingPriority, To = Be.unstable_NormalPriority, dp = Be.unstable_LowPriority, uc = Be.unstable_IdlePriority, nl = null, at = null;
    function pp(e) {
        if (at && typeof at.onCommitFiberRoot == "function") try {
            at.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var nt = Math.clz32 ? Math.clz32 : gp, mp = Math.log, hp = Math.LN2;
    function gp(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (mp(e) / hp | 0) | 0;
    }
    var eo = 64, to = 4194304;
    function dr(e) {
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
    function Mo(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = dr(s) : (l &= i, l !== 0 && (r = dr(l)));
        } else i = n & ~o, i !== 0 ? r = dr(i) : l !== 0 && (r = dr(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - nt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function vp(e, t) {
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
    function yp(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - nt(l), s = 1 << i, u = o[i];
            u === -1 ? (!(s & n) || s & r) && (o[i] = vp(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function pi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function ac() {
        var e = eo;
        return eo <<= 1, !(eo & 4194240) && (eo = 64), e;
    }
    function El(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function $r(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
    }
    function wp(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - nt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function os(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - nt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var b = 0;
    function cc(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var fc, ls, dc, pc, mc, mi = !1, no = [], Lt = null, Ot = null, Dt = null, Pr = new Map, Nr = new Map, Rt = [], xp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function du(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Lt = null;
                break;
            case "dragenter":
            case "dragleave":
                Ot = null;
                break;
            case "mouseover":
            case "mouseout":
                Dt = null;
                break;
            case "pointerover":
            case "pointerout":
                Pr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Nr.delete(t.pointerId);
        }
    }
    function rr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = Gr(t), t !== null && ls(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Sp(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Lt = rr(Lt, e, t, n, r, o), !0;
            case "dragenter":
                return Ot = rr(Ot, e, t, n, r, o), !0;
            case "mouseover":
                return Dt = rr(Dt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Pr.set(l, rr(Pr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Nr.set(l, rr(Nr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function hc(e) {
        var t = nn(e.target);
        if (t !== null) {
            var n = hn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = rc(n), t !== null) {
                        e.blockedOn = t, mc(e.priority, function() {
                            dc(n);
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
    function yo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ai = r, n.target.dispatchEvent(r), ai = null;
            } else return t = Gr(n), t !== null && ls(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function pu(e, t, n) {
        yo(e) && n.delete(t);
    }
    function kp() {
        mi = !1, Lt !== null && yo(Lt) && (Lt = null), Ot !== null && yo(Ot) && (Ot = null), Dt !== null && yo(Dt) && (Dt = null), Pr.forEach(pu), Nr.forEach(pu);
    }
    function or(e, t) {
        e.blockedOn === t && (e.blockedOn = null, mi || (mi = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, kp)));
    }
    function zr(e) {
        function t(o) {
            return or(o, e);
        }
        if (0 < no.length) {
            or(no[0], e);
            for(var n = 1; n < no.length; n++){
                var r = no[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Lt !== null && or(Lt, e), Ot !== null && or(Ot, e), Dt !== null && or(Dt, e), Pr.forEach(t), Nr.forEach(t), n = 0; n < Rt.length; n++)r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Rt.length && (n = Rt[0], n.blockedOn === null);)hc(n), n.blockedOn === null && Rt.shift();
    }
    var Un = kt.ReactCurrentBatchConfig, jo = !0;
    function Cp(e, t, n, r) {
        var o = b, l = Un.transition;
        Un.transition = null;
        try {
            b = 1, is(e, t, n, r);
        } finally{
            b = o, Un.transition = l;
        }
    }
    function _p(e, t, n, r) {
        var o = b, l = Un.transition;
        Un.transition = null;
        try {
            b = 4, is(e, t, n, r);
        } finally{
            b = o, Un.transition = l;
        }
    }
    function is(e, t, n, r) {
        if (jo) {
            var o = hi(e, t, n, r);
            if (o === null) Ol(e, t, r, Lo, n), du(e, r);
            else if (Sp(o, e, t, n, r)) r.stopPropagation();
            else if (du(e, r), t & 4 && -1 < xp.indexOf(e)) {
                for(; o !== null;){
                    var l = Gr(o);
                    if (l !== null && fc(l), l = hi(e, t, n, r), l === null && Ol(e, t, r, Lo, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ol(e, t, r, null, n);
        }
    }
    var Lo = null;
    function hi(e, t, n, r) {
        if (Lo = null, e = ns(r), e = nn(e), e !== null) if (t = hn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = rc(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return Lo = e, null;
    }
    function gc(e) {
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
                switch(fp()){
                    case rs:
                        return 1;
                    case sc:
                        return 4;
                    case To:
                    case dp:
                        return 16;
                    case uc:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Tt = null, ss = null, wo = null;
    function vc() {
        if (wo) return wo;
        var e, t = ss, n = t.length, r, o = "value" in Tt ? Tt.value : Tt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return wo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function xo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ro() {
        return !0;
    }
    function mu() {
        return !1;
    }
    function be(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? ro : mu, this.isPropagationStopped = mu, this;
        }
        return ne(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ro);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ro);
            },
            persist: function() {},
            isPersistent: ro
        }), t;
    }
    var Xn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, us = be(Xn), br = ne({}, Xn, {
        view: 0,
        detail: 0
    }), Ep = be(br), Pl, Nl, lr, rl = ne({}, br, {
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
        getModifierState: as,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (Pl = e.screenX - lr.screenX, Nl = e.screenY - lr.screenY) : Nl = Pl = 0, lr = e), Pl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Nl;
        }
    }), hu = be(rl), Pp = ne({}, rl, {
        dataTransfer: 0
    }), Np = be(Pp), zp = ne({}, br, {
        relatedTarget: 0
    }), zl = be(zp), Rp = ne({}, Xn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ip = be(Rp), Tp = ne({}, Xn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Mp = be(Tp), jp = ne({}, Xn, {
        data: 0
    }), gu = be(jp), Lp = {
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
    }, Op = {
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
    }, Dp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Fp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
    }
    function as() {
        return Fp;
    }
    var Ap = ne({}, br, {
        key: function(e) {
            if (e.key) {
                var t = Lp[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = xo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Op[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: as,
        charCode: function(e) {
            return e.type === "keypress" ? xo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Up = be(Ap), Vp = ne({}, rl, {
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
    }), vu = be(Vp), Bp = ne({}, br, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: as
    }), $p = be(Bp), bp = ne({}, Xn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Gp = be(bp), Wp = ne({}, rl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Hp = be(Wp), Qp = [
        9,
        13,
        27,
        32
    ], cs = yt && "CompositionEvent" in window, gr = null;
    yt && "documentMode" in document && (gr = document.documentMode);
    var Kp = yt && "TextEvent" in window && !gr, yc = yt && (!cs || gr && 8 < gr && 11 >= gr), yu = " ", wu = !1;
    function wc(e, t) {
        switch(e){
            case "keyup":
                return Qp.indexOf(t.keyCode) !== -1;
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
    function xc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Pn = !1;
    function Yp(e, t) {
        switch(e){
            case "compositionend":
                return xc(t);
            case "keypress":
                return t.which !== 32 ? null : (wu = !0, yu);
            case "textInput":
                return e = t.data, e === yu && wu ? null : e;
            default:
                return null;
        }
    }
    function Xp(e, t) {
        if (Pn) return e === "compositionend" || !cs && wc(e, t) ? (e = vc(), wo = ss = Tt = null, Pn = !1, e) : null;
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
                return yc && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Zp = {
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
    function xu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Zp[e.type] : t === "textarea";
    }
    function Sc(e, t, n, r) {
        Ja(r), t = Oo(t, "onChange"), 0 < t.length && (n = new us("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var vr = null, Rr = null;
    function Jp(e) {
        Mc(e, 0);
    }
    function ol(e) {
        var t = Rn(e);
        if (Wa(t)) return e;
    }
    function qp(e, t) {
        if (e === "change") return t;
    }
    var kc = !1;
    if (yt) {
        var Rl;
        if (yt) {
            var Il = "oninput" in document;
            if (!Il) {
                var Su = document.createElement("div");
                Su.setAttribute("oninput", "return;"), Il = typeof Su.oninput == "function";
            }
            Rl = Il;
        } else Rl = !1;
        kc = Rl && (!document.documentMode || 9 < document.documentMode);
    }
    function ku() {
        vr && (vr.detachEvent("onpropertychange", Cc), Rr = vr = null);
    }
    function Cc(e) {
        if (e.propertyName === "value" && ol(Rr)) {
            var t = [];
            Sc(t, Rr, e, ns(e)), nc(Jp, t);
        }
    }
    function em(e, t, n) {
        e === "focusin" ? (ku(), vr = t, Rr = n, vr.attachEvent("onpropertychange", Cc)) : e === "focusout" && ku();
    }
    function tm(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol(Rr);
    }
    function nm(e, t) {
        if (e === "click") return ol(t);
    }
    function rm(e, t) {
        if (e === "input" || e === "change") return ol(t);
    }
    function om(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ot = typeof Object.is == "function" ? Object.is : om;
    function Ir(e, t) {
        if (ot(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Zl.call(t, o) || !ot(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Cu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function _u(e, t) {
        var n = Cu(e);
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
            n = Cu(n);
        }
    }
    function _c(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _c(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Ec() {
        for(var e = window, t = zo(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = zo(e.document);
        }
        return t;
    }
    function fs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function lm(e) {
        var t = Ec(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && _c(n.ownerDocument.documentElement, n)) {
            if (r !== null && fs(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = _u(n, l);
                    var i = _u(n, r);
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
    var im = yt && "documentMode" in document && 11 >= document.documentMode, Nn = null, gi = null, yr = null, vi = !1;
    function Eu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        vi || Nn == null || Nn !== zo(r) || (r = Nn, "selectionStart" in r && fs(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), yr && Ir(yr, r) || (yr = r, r = Oo(gi, "onSelect"), 0 < r.length && (t = new us("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Nn)));
    }
    function oo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var zn = {
        animationend: oo("Animation", "AnimationEnd"),
        animationiteration: oo("Animation", "AnimationIteration"),
        animationstart: oo("Animation", "AnimationStart"),
        transitionend: oo("Transition", "TransitionEnd")
    }, Tl = {}, Pc = {};
    yt && (Pc = document.createElement("div").style, "AnimationEvent" in window || (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation), "TransitionEvent" in window || delete zn.transitionend.transition);
    function ll(e) {
        if (Tl[e]) return Tl[e];
        if (!zn[e]) return e;
        var t = zn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in Pc) return Tl[e] = t[n];
        return e;
    }
    var Nc = ll("animationend"), zc = ll("animationiteration"), Rc = ll("animationstart"), Ic = ll("transitionend"), Tc = new Map, Pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Gt(e, t) {
        Tc.set(e, t), mn(t, [
            e
        ]);
    }
    for(var Ml = 0; Ml < Pu.length; Ml++){
        var jl = Pu[Ml], sm = jl.toLowerCase(), um = jl[0].toUpperCase() + jl.slice(1);
        Gt(sm, "on" + um);
    }
    Gt(Nc, "onAnimationEnd");
    Gt(zc, "onAnimationIteration");
    Gt(Rc, "onAnimationStart");
    Gt("dblclick", "onDoubleClick");
    Gt("focusin", "onFocus");
    Gt("focusout", "onBlur");
    Gt(Ic, "onTransitionEnd");
    $n("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    $n("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    $n("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    $n("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    mn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), am = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
    function Nu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, sp(r, t, void 0, e), e.currentTarget = null;
    }
    function Mc(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], u = s.instance, a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    Nu(o, s, a), l = u;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    Nu(o, s, a), l = u;
                }
            }
        }
        if (Io) throw e = di, Io = !1, di = null, e;
    }
    function Y(e, t) {
        var n = t[ki];
        n === void 0 && (n = t[ki] = new Set);
        var r = e + "__bubble";
        n.has(r) || (jc(t, e, 2, !1), n.add(r));
    }
    function Ll(e, t, n) {
        var r = 0;
        t && (r |= 4), jc(n, e, r, t);
    }
    var lo = "_reactListening" + Math.random().toString(36).slice(2);
    function Tr(e) {
        if (!e[lo]) {
            e[lo] = !0, Va.forEach(function(n) {
                n !== "selectionchange" && (am.has(n) || Ll(n, !1, e), Ll(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[lo] || (t[lo] = !0, Ll("selectionchange", !1, t));
        }
    }
    function jc(e, t, n, r) {
        switch(gc(t)){
            case 1:
                var o = Cp;
                break;
            case 4:
                o = _p;
                break;
            default:
                o = is;
        }
        n = o.bind(null, t, n, e), o = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
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
                    if (i = nn(s), i === null) return;
                    if (u = i.tag, u === 5 || u === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        nc(function() {
            var a = l, p = ns(n), c = [];
            e: {
                var h = Tc.get(e);
                if (h !== void 0) {
                    var v = us, y = e;
                    switch(e){
                        case "keypress":
                            if (xo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            v = Up;
                            break;
                        case "focusin":
                            y = "focus", v = zl;
                            break;
                        case "focusout":
                            y = "blur", v = zl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            v = zl;
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
                            v = hu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            v = Np;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            v = $p;
                            break;
                        case Nc:
                        case zc:
                        case Rc:
                            v = Ip;
                            break;
                        case Ic:
                            v = Gp;
                            break;
                        case "scroll":
                            v = Ep;
                            break;
                        case "wheel":
                            v = Hp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            v = Mp;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            v = vu;
                    }
                    var g = (t & 4) !== 0, S = !g && e === "scroll", d = g ? h !== null ? h + "Capture" : null : h;
                    g = [];
                    for(var f = a, m; f !== null;){
                        m = f;
                        var x = m.stateNode;
                        if (m.tag === 5 && x !== null && (m = x, d !== null && (x = Er(f, d), x != null && g.push(Mr(f, x, m)))), S) break;
                        f = f.return;
                    }
                    0 < g.length && (h = new v(h, y, null, n, p), c.push({
                        event: h,
                        listeners: g
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== ai && (y = n.relatedTarget || n.fromElement) && (nn(y) || y[wt])) break e;
                    if ((v || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = a, y = y ? nn(y) : null, y !== null && (S = hn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = a), v !== y)) {
                        if (g = hu, x = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = vu, x = "onPointerLeave", d = "onPointerEnter", f = "pointer"), S = v == null ? h : Rn(v), m = y == null ? h : Rn(y), h = new g(x, f + "leave", v, n, p), h.target = S, h.relatedTarget = m, x = null, nn(p) === a && (g = new g(d, f + "enter", y, n, p), g.target = m, g.relatedTarget = S, x = g), S = x, v && y) t: {
                            for(g = v, d = y, f = 0, m = g; m; m = Cn(m))f++;
                            for(m = 0, x = d; x; x = Cn(x))m++;
                            for(; 0 < f - m;)g = Cn(g), f--;
                            for(; 0 < m - f;)d = Cn(d), m--;
                            for(; f--;){
                                if (g === d || d !== null && g === d.alternate) break t;
                                g = Cn(g), d = Cn(d);
                            }
                            g = null;
                        }
                        else g = null;
                        v !== null && zu(c, h, v, g, !1), y !== null && S !== null && zu(c, S, y, g, !0);
                    }
                }
                e: {
                    if (h = a ? Rn(a) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var E = qp;
                    else if (xu(h)) if (kc) E = rm;
                    else {
                        E = tm;
                        var P = em;
                    }
                    else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = nm);
                    if (E && (E = E(e, a))) {
                        Sc(c, E, n, p);
                        break e;
                    }
                    P && P(e, h, a), e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && oi(h, "number", h.value);
                }
                switch(P = a ? Rn(a) : window, e){
                    case "focusin":
                        (xu(P) || P.contentEditable === "true") && (Nn = P, gi = a, yr = null);
                        break;
                    case "focusout":
                        yr = gi = Nn = null;
                        break;
                    case "mousedown":
                        vi = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        vi = !1, Eu(c, n, p);
                        break;
                    case "selectionchange":
                        if (im) break;
                    case "keydown":
                    case "keyup":
                        Eu(c, n, p);
                }
                var R;
                if (cs) e: {
                    switch(e){
                        case "compositionstart":
                            var w = "onCompositionStart";
                            break e;
                        case "compositionend":
                            w = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            w = "onCompositionUpdate";
                            break e;
                    }
                    w = void 0;
                }
                else Pn ? wc(e, n) && (w = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
                w && (yc && n.locale !== "ko" && (Pn || w !== "onCompositionStart" ? w === "onCompositionEnd" && Pn && (R = vc()) : (Tt = p, ss = "value" in Tt ? Tt.value : Tt.textContent, Pn = !0)), P = Oo(a, w), 0 < P.length && (w = new gu(w, e, null, n, p), c.push({
                    event: w,
                    listeners: P
                }), R ? w.data = R : (R = xc(n), R !== null && (w.data = R)))), (R = Kp ? Yp(e, n) : Xp(e, n)) && (a = Oo(a, "onBeforeInput"), 0 < a.length && (p = new gu("onBeforeInput", "beforeinput", null, n, p), c.push({
                    event: p,
                    listeners: a
                }), p.data = R));
            }
            Mc(c, t);
        });
    }
    function Mr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function Oo(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Er(e, n), l != null && r.unshift(Mr(e, l, o)), l = Er(e, t), l != null && r.push(Mr(e, l, o))), e = e.return;
        }
        return r;
    }
    function Cn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function zu(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, u = s.alternate, a = s.stateNode;
            if (u !== null && u === r) break;
            s.tag === 5 && a !== null && (s = a, o ? (u = Er(n, l), u != null && i.unshift(Mr(n, u, s))) : o || (u = Er(n, l), u != null && i.push(Mr(n, u, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var cm = /\r\n?/g, fm = /\u0000|\uFFFD/g;
    function Ru(e) {
        return (typeof e == "string" ? e : "" + e).replace(cm, `
`).replace(fm, "");
    }
    function io(e, t, n) {
        if (t = Ru(t), Ru(e) !== t && n) throw Error(C(425));
    }
    function Do() {}
    var yi = null, wi = null;
    function xi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Si = typeof setTimeout == "function" ? setTimeout : void 0, dm = typeof clearTimeout == "function" ? clearTimeout : void 0, Iu = typeof Promise == "function" ? Promise : void 0, pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Iu < "u" ? function(e) {
        return Iu.resolve(null).then(e).catch(mm);
    } : Si;
    function mm(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Dl(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), zr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        zr(t);
    }
    function Ft(e) {
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
    function Tu(e) {
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
    var Zn = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Zn, jr = "__reactProps$" + Zn, wt = "__reactContainer$" + Zn, ki = "__reactEvents$" + Zn, hm = "__reactListeners$" + Zn, gm = "__reactHandles$" + Zn;
    function nn(e) {
        var t = e[ut];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[wt] || n[ut]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = Tu(e); e !== null;){
                    if (n = e[ut]) return n;
                    e = Tu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Gr(e) {
        return e = e[ut] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Rn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(C(33));
    }
    function il(e) {
        return e[jr] || null;
    }
    var Ci = [], In = -1;
    function Wt(e) {
        return {
            current: e
        };
    }
    function X(e) {
        0 > In || (e.current = Ci[In], Ci[In] = null, In--);
    }
    function K(e, t) {
        In++, Ci[In] = e.current, e.current = t;
    }
    var bt = {}, ke = Wt(bt), je = Wt(!1), an = bt;
    function bn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return bt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Le(e) {
        return e = e.childContextTypes, e != null;
    }
    function Fo() {
        X(je), X(ke);
    }
    function Mu(e, t, n) {
        if (ke.current !== bt) throw Error(C(168));
        K(ke, t), K(je, n);
    }
    function Lc(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(C(108, ep(e) || "Unknown", o));
        return ne({}, n, r);
    }
    function Ao(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bt, an = ke.current, K(ke, e), K(je, je.current), !0;
    }
    function ju(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(C(169));
        n ? (e = Lc(e, t, an), r.__reactInternalMemoizedMergedChildContext = e, X(je), X(ke), K(ke, e)) : X(je), K(je, n);
    }
    var pt = null, sl = !1, Fl = !1;
    function Oc(e) {
        pt === null ? pt = [
            e
        ] : pt.push(e);
    }
    function vm(e) {
        sl = !0, Oc(e);
    }
    function Ht() {
        if (!Fl && pt !== null) {
            Fl = !0;
            var e = 0, t = b;
            try {
                var n = pt;
                for(b = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                pt = null, sl = !1;
            } catch (o) {
                throw pt !== null && (pt = pt.slice(e + 1)), ic(rs, Ht), o;
            } finally{
                b = t, Fl = !1;
            }
        }
        return null;
    }
    var Tn = [], Mn = 0, Uo = null, Vo = 0, We = [], He = 0, cn = null, ht = 1, gt = "";
    function qt(e, t) {
        Tn[Mn++] = Vo, Tn[Mn++] = Uo, Uo = e, Vo = t;
    }
    function Dc(e, t, n) {
        We[He++] = ht, We[He++] = gt, We[He++] = cn, cn = e;
        var r = ht;
        e = gt;
        var o = 32 - nt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - nt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, ht = 1 << 32 - nt(t) + o | n << o | r, gt = l + e;
        } else ht = 1 << l | n << o | r, gt = e;
    }
    function ds(e) {
        e.return !== null && (qt(e, 1), Dc(e, 1, 0));
    }
    function ps(e) {
        for(; e === Uo;)Uo = Tn[--Mn], Tn[Mn] = null, Vo = Tn[--Mn], Tn[Mn] = null;
        for(; e === cn;)cn = We[--He], We[He] = null, gt = We[--He], We[He] = null, ht = We[--He], We[He] = null;
    }
    var Ve = null, Ue = null, q = !1, tt = null;
    function Fc(e, t) {
        var n = Qe(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function Lu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = Ft(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = cn !== null ? {
                    id: ht,
                    overflow: gt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, Ue = null, !0) : !1;
            default:
                return !1;
        }
    }
    function _i(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Ei(e) {
        if (q) {
            var t = Ue;
            if (t) {
                var n = t;
                if (!Lu(e, t)) {
                    if (_i(e)) throw Error(C(418));
                    t = Ft(n.nextSibling);
                    var r = Ve;
                    t && Lu(e, t) ? Fc(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, Ve = e);
                }
            } else {
                if (_i(e)) throw Error(C(418));
                e.flags = e.flags & -4097 | 2, q = !1, Ve = e;
            }
        }
    }
    function Ou(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ve = e;
    }
    function so(e) {
        if (e !== Ve) return !1;
        if (!q) return Ou(e), q = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)), t && (t = Ue)) {
            if (_i(e)) throw Ac(), Error(C(418));
            for(; t;)Fc(e, t), t = Ft(t.nextSibling);
        }
        if (Ou(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Ue = Ft(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Ue = null;
            }
        } else Ue = Ve ? Ft(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Ac() {
        for(var e = Ue; e;)e = Ft(e.nextSibling);
    }
    function Gn() {
        Ue = Ve = null, q = !1;
    }
    function ms(e) {
        tt === null ? tt = [
            e
        ] : tt.push(e);
    }
    var ym = kt.ReactCurrentBatchConfig;
    function ir(e, t, n) {
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
    function uo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function Du(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Uc(e) {
        function t(d, f) {
            if (e) {
                var m = d.deletions;
                m === null ? (d.deletions = [
                    f
                ], d.flags |= 16) : m.push(f);
            }
        }
        function n(d, f) {
            if (!e) return null;
            for(; f !== null;)t(d, f), f = f.sibling;
            return null;
        }
        function r(d, f) {
            for(d = new Map; f !== null;)f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
            return d;
        }
        function o(d, f) {
            return d = Bt(d, f), d.index = 0, d.sibling = null, d;
        }
        function l(d, f, m) {
            return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < f ? (d.flags |= 2, f) : m) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
        }
        function i(d) {
            return e && d.alternate === null && (d.flags |= 2), d;
        }
        function s(d, f, m, x) {
            return f === null || f.tag !== 6 ? (f = Gl(m, d.mode, x), f.return = d, f) : (f = o(f, m), f.return = d, f);
        }
        function u(d, f, m, x) {
            var E = m.type;
            return E === En ? p(d, f, m.props.children, x, m.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Nt && Du(E) === f.type) ? (x = o(f, m.props), x.ref = ir(d, f, m), x.return = d, x) : (x = No(m.type, m.key, m.props, null, d.mode, x), x.ref = ir(d, f, m), x.return = d, x);
        }
        function a(d, f, m, x) {
            return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Wl(m, d.mode, x), f.return = d, f) : (f = o(f, m.children || []), f.return = d, f);
        }
        function p(d, f, m, x, E) {
            return f === null || f.tag !== 7 ? (f = sn(m, d.mode, x, E), f.return = d, f) : (f = o(f, m), f.return = d, f);
        }
        function c(d, f, m) {
            if (typeof f == "string" && f !== "" || typeof f == "number") return f = Gl("" + f, d.mode, m), f.return = d, f;
            if (typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case Zr:
                        return m = No(f.type, f.key, f.props, null, d.mode, m), m.ref = ir(d, null, f), m.return = d, m;
                    case _n:
                        return f = Wl(f, d.mode, m), f.return = d, f;
                    case Nt:
                        var x = f._init;
                        return c(d, x(f._payload), m);
                }
                if (fr(f) || tr(f)) return f = sn(f, d.mode, m, null), f.return = d, f;
                uo(d, f);
            }
            return null;
        }
        function h(d, f, m, x) {
            var E = f !== null ? f.key : null;
            if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : s(d, f, "" + m, x);
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case Zr:
                        return m.key === E ? u(d, f, m, x) : null;
                    case _n:
                        return m.key === E ? a(d, f, m, x) : null;
                    case Nt:
                        return E = m._init, h(d, f, E(m._payload), x);
                }
                if (fr(m) || tr(m)) return E !== null ? null : p(d, f, m, x, null);
                uo(d, m);
            }
            return null;
        }
        function v(d, f, m, x, E) {
            if (typeof x == "string" && x !== "" || typeof x == "number") return d = d.get(m) || null, s(f, d, "" + x, E);
            if (typeof x == "object" && x !== null) {
                switch(x.$$typeof){
                    case Zr:
                        return d = d.get(x.key === null ? m : x.key) || null, u(f, d, x, E);
                    case _n:
                        return d = d.get(x.key === null ? m : x.key) || null, a(f, d, x, E);
                    case Nt:
                        var P = x._init;
                        return v(d, f, m, P(x._payload), E);
                }
                if (fr(x) || tr(x)) return d = d.get(m) || null, p(f, d, x, E, null);
                uo(f, x);
            }
            return null;
        }
        function y(d, f, m, x) {
            for(var E = null, P = null, R = f, w = f = 0, O = null; R !== null && w < m.length; w++){
                R.index > w ? (O = R, R = null) : O = R.sibling;
                var F = h(d, R, m[w], x);
                if (F === null) {
                    R === null && (R = O);
                    break;
                }
                e && R && F.alternate === null && t(d, R), f = l(F, f, w), P === null ? E = F : P.sibling = F, P = F, R = O;
            }
            if (w === m.length) return n(d, R), q && qt(d, w), E;
            if (R === null) {
                for(; w < m.length; w++)R = c(d, m[w], x), R !== null && (f = l(R, f, w), P === null ? E = R : P.sibling = R, P = R);
                return q && qt(d, w), E;
            }
            for(R = r(d, R); w < m.length; w++)O = v(R, d, w, m[w], x), O !== null && (e && O.alternate !== null && R.delete(O.key === null ? w : O.key), f = l(O, f, w), P === null ? E = O : P.sibling = O, P = O);
            return e && R.forEach(function(le) {
                return t(d, le);
            }), q && qt(d, w), E;
        }
        function g(d, f, m, x) {
            var E = tr(m);
            if (typeof E != "function") throw Error(C(150));
            if (m = E.call(m), m == null) throw Error(C(151));
            for(var P = E = null, R = f, w = f = 0, O = null, F = m.next(); R !== null && !F.done; w++, F = m.next()){
                R.index > w ? (O = R, R = null) : O = R.sibling;
                var le = h(d, R, F.value, x);
                if (le === null) {
                    R === null && (R = O);
                    break;
                }
                e && R && le.alternate === null && t(d, R), f = l(le, f, w), P === null ? E = le : P.sibling = le, P = le, R = O;
            }
            if (F.done) return n(d, R), q && qt(d, w), E;
            if (R === null) {
                for(; !F.done; w++, F = m.next())F = c(d, F.value, x), F !== null && (f = l(F, f, w), P === null ? E = F : P.sibling = F, P = F);
                return q && qt(d, w), E;
            }
            for(R = r(d, R); !F.done; w++, F = m.next())F = v(R, d, w, F.value, x), F !== null && (e && F.alternate !== null && R.delete(F.key === null ? w : F.key), f = l(F, f, w), P === null ? E = F : P.sibling = F, P = F);
            return e && R.forEach(function(Ce) {
                return t(d, Ce);
            }), q && qt(d, w), E;
        }
        function S(d, f, m, x) {
            if (typeof m == "object" && m !== null && m.type === En && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case Zr:
                        e: {
                            for(var E = m.key, P = f; P !== null;){
                                if (P.key === E) {
                                    if (E = m.type, E === En) {
                                        if (P.tag === 7) {
                                            n(d, P.sibling), f = o(P, m.props.children), f.return = d, d = f;
                                            break e;
                                        }
                                    } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Nt && Du(E) === P.type) {
                                        n(d, P.sibling), f = o(P, m.props), f.ref = ir(d, P, m), f.return = d, d = f;
                                        break e;
                                    }
                                    n(d, P);
                                    break;
                                } else t(d, P);
                                P = P.sibling;
                            }
                            m.type === En ? (f = sn(m.props.children, d.mode, x, m.key), f.return = d, d = f) : (x = No(m.type, m.key, m.props, null, d.mode, x), x.ref = ir(d, f, m), x.return = d, d = x);
                        }
                        return i(d);
                    case _n:
                        e: {
                            for(P = m.key; f !== null;){
                                if (f.key === P) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                                    n(d, f.sibling), f = o(f, m.children || []), f.return = d, d = f;
                                    break e;
                                } else {
                                    n(d, f);
                                    break;
                                }
                                else t(d, f);
                                f = f.sibling;
                            }
                            f = Wl(m, d.mode, x), f.return = d, d = f;
                        }
                        return i(d);
                    case Nt:
                        return P = m._init, S(d, f, P(m._payload), x);
                }
                if (fr(m)) return y(d, f, m, x);
                if (tr(m)) return g(d, f, m, x);
                uo(d, m);
            }
            return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(d, f.sibling), f = o(f, m), f.return = d, d = f) : (n(d, f), f = Gl(m, d.mode, x), f.return = d, d = f), i(d)) : n(d, f);
        }
        return S;
    }
    var Wn = Uc(!0), Vc = Uc(!1), Bo = Wt(null), $o = null, jn = null, hs = null;
    function gs() {
        hs = jn = $o = null;
    }
    function vs(e) {
        var t = Bo.current;
        X(Bo), e._currentValue = t;
    }
    function Pi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function Vn(e, t) {
        $o = e, hs = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
    }
    function Ye(e) {
        var t = e._currentValue;
        if (hs !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, jn === null) {
            if ($o === null) throw Error(C(308));
            jn = e, $o.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else jn = jn.next = e;
        return t;
    }
    var rn = null;
    function ys(e) {
        rn === null ? rn = [
            e
        ] : rn.push(e);
    }
    function Bc(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ys(t)) : (n.next = o.next, o.next = n), t.interleaved = n, xt(e, r);
    }
    function xt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var zt = !1;
    function ws(e) {
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
    function $c(e, t) {
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
    function At(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, V & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, xt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, ys(r)) : (t.next = o.next, o.next = t), r.interleaved = t, xt(e, n);
    }
    function So(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, os(e, n);
        }
    }
    function Fu(e, t) {
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
    function bo(e, t, n, r) {
        var o = e.updateQueue;
        zt = !1;
        var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
        if (s !== null) {
            o.shared.pending = null;
            var u = s, a = u.next;
            u.next = null, i === null ? l = a : i.next = a, i = u;
            var p = e.alternate;
            p !== null && (p = p.updateQueue, s = p.lastBaseUpdate, s !== i && (s === null ? p.firstBaseUpdate = a : s.next = a, p.lastBaseUpdate = u));
        }
        if (l !== null) {
            var c = o.baseState;
            i = 0, p = a = u = null, s = l;
            do {
                var h = s.lane, v = s.eventTime;
                if ((r & h) === h) {
                    p !== null && (p = p.next = {
                        eventTime: v,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var y = e, g = s;
                        switch(h = t, v = n, g.tag){
                            case 1:
                                if (y = g.payload, typeof y == "function") {
                                    c = y.call(v, c, h);
                                    break e;
                                }
                                c = y;
                                break e;
                            case 3:
                                y.flags = y.flags & -65537 | 128;
                            case 0:
                                if (y = g.payload, h = typeof y == "function" ? y.call(v, c, h) : y, h == null) break e;
                                c = ne({}, c, h);
                                break e;
                            case 2:
                                zt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [
                        s
                    ] : h.push(s));
                } else v = {
                    eventTime: v,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, p === null ? (a = p = v, u = c) : p = p.next = v, i |= h;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
                }
            }while (!0);
            if (p === null && (u = c), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            dn |= i, e.lanes = i, e.memoizedState = c;
        }
    }
    function Au(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(C(191, o));
                o.call(r);
            }
        }
    }
    var Wr = {}, ct = Wt(Wr), Lr = Wt(Wr), Or = Wt(Wr);
    function on(e) {
        if (e === Wr) throw Error(C(174));
        return e;
    }
    function xs(e, t) {
        switch(K(Or, t), K(Lr, e), K(ct, Wr), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ii(t, e);
        }
        X(ct), K(ct, t);
    }
    function Hn() {
        X(ct), X(Lr), X(Or);
    }
    function bc(e) {
        on(Or.current);
        var t = on(ct.current), n = ii(t, e.type);
        t !== n && (K(Lr, e), K(ct, n));
    }
    function Ss(e) {
        Lr.current === e && (X(ct), X(Lr));
    }
    var ee = Wt(0);
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
    var Al = [];
    function ks() {
        for(var e = 0; e < Al.length; e++)Al[e]._workInProgressVersionPrimary = null;
        Al.length = 0;
    }
    var ko = kt.ReactCurrentDispatcher, Ul = kt.ReactCurrentBatchConfig, fn = 0, te = null, fe = null, me = null, Wo = !1, wr = !1, Dr = 0, wm = 0;
    function we() {
        throw Error(C(321));
    }
    function Cs(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!ot(e[n], t[n])) return !1;
        return !0;
    }
    function _s(e, t, n, r, o, l) {
        if (fn = l, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ko.current = e === null || e.memoizedState === null ? Cm : _m, e = n(r, o), wr) {
            l = 0;
            do {
                if (wr = !1, Dr = 0, 25 <= l) throw Error(C(301));
                l += 1, me = fe = null, t.updateQueue = null, ko.current = Em, e = n(r, o);
            }while (wr);
        }
        if (ko.current = Ho, t = fe !== null && fe.next !== null, fn = 0, me = fe = te = null, Wo = !1, t) throw Error(C(300));
        return e;
    }
    function Es() {
        var e = Dr !== 0;
        return Dr = 0, e;
    }
    function st() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return me === null ? te.memoizedState = me = e : me = me.next = e, me;
    }
    function Xe() {
        if (fe === null) {
            var e = te.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = fe.next;
        var t = me === null ? te.memoizedState : me.next;
        if (t !== null) me = t, fe = e;
        else {
            if (e === null) throw Error(C(310));
            fe = e, e = {
                memoizedState: fe.memoizedState,
                baseState: fe.baseState,
                baseQueue: fe.baseQueue,
                queue: fe.queue,
                next: null
            }, me === null ? te.memoizedState = me = e : me = me.next = e;
        }
        return me;
    }
    function Fr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Vl(e) {
        var t = Xe(), n = t.queue;
        if (n === null) throw Error(C(311));
        n.lastRenderedReducer = e;
        var r = fe, o = r.baseQueue, l = n.pending;
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
                if ((fn & p) === p) u !== null && (u = u.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
                else {
                    var c = {
                        lane: p,
                        action: a.action,
                        hasEagerState: a.hasEagerState,
                        eagerState: a.eagerState,
                        next: null
                    };
                    u === null ? (s = u = c, i = r) : u = u.next = c, te.lanes |= p, dn |= p;
                }
                a = a.next;
            }while (a !== null && a !== l);
            u === null ? i = r : u.next = s, ot(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, te.lanes |= l, dn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Bl(e) {
        var t = Xe(), n = t.queue;
        if (n === null) throw Error(C(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            ot(l, t.memoizedState) || (Me = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Gc() {}
    function Wc(e, t) {
        var n = te, r = Xe(), o = t(), l = !ot(r.memoizedState, o);
        if (l && (r.memoizedState = o, Me = !0), r = r.queue, Ps(Kc.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || me !== null && me.memoizedState.tag & 1) {
            if (n.flags |= 2048, Ar(9, Qc.bind(null, n, r, o, t), void 0, null), he === null) throw Error(C(349));
            fn & 30 || Hc(n, t, o);
        }
        return o;
    }
    function Hc(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, te.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function Qc(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Yc(t) && Xc(e);
    }
    function Kc(e, t, n) {
        return n(function() {
            Yc(t) && Xc(e);
        });
    }
    function Yc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ot(e, n);
        } catch  {
            return !0;
        }
    }
    function Xc(e) {
        var t = xt(e, 1);
        t !== null && rt(t, e, 1, -1);
    }
    function Uu(e) {
        var t = st();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = km.bind(null, te, e), [
            t.memoizedState,
            e
        ];
    }
    function Ar(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Zc() {
        return Xe().memoizedState;
    }
    function Co(e, t, n, r) {
        var o = st();
        te.flags |= e, o.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function ul(e, t, n, r) {
        var o = Xe();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (fe !== null) {
            var i = fe.memoizedState;
            if (l = i.destroy, r !== null && Cs(r, i.deps)) {
                o.memoizedState = Ar(t, n, l, r);
                return;
            }
        }
        te.flags |= e, o.memoizedState = Ar(1 | t, n, l, r);
    }
    function Vu(e, t) {
        return Co(8390656, 8, e, t);
    }
    function Ps(e, t) {
        return ul(2048, 8, e, t);
    }
    function Jc(e, t) {
        return ul(4, 2, e, t);
    }
    function qc(e, t) {
        return ul(4, 4, e, t);
    }
    function ef(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function tf(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, ul(4, 4, ef.bind(null, t, e), n);
    }
    function Ns() {}
    function nf(e, t) {
        var n = Xe();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Cs(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function rf(e, t) {
        var n = Xe();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Cs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function of(e, t, n) {
        return fn & 21 ? (ot(n, t) || (n = ac(), te.lanes |= n, dn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n);
    }
    function xm(e, t) {
        var n = b;
        b = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Ul.transition;
        Ul.transition = {};
        try {
            e(!1), t();
        } finally{
            b = n, Ul.transition = r;
        }
    }
    function lf() {
        return Xe().memoizedState;
    }
    function Sm(e, t, n) {
        var r = Vt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, sf(e)) uf(t, n);
        else if (n = Bc(e, t, n, r), n !== null) {
            var o = Pe();
            rt(n, e, r, o), af(n, t, r);
        }
    }
    function km(e, t, n) {
        var r = Vt(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (sf(e)) uf(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, ot(s, i)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o, ys(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Bc(e, t, o, r), n !== null && (o = Pe(), rt(n, e, r, o), af(n, t, r));
        }
    }
    function sf(e) {
        var t = e.alternate;
        return e === te || t !== null && t === te;
    }
    function uf(e, t) {
        wr = Wo = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function af(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, os(e, n);
        }
    }
    var Ho = {
        readContext: Ye,
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
    }, Cm = {
        readContext: Ye,
        useCallback: function(e, t) {
            return st().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Ye,
        useEffect: Vu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, Co(4194308, 4, ef.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return Co(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return Co(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = st();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = st();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Sm.bind(null, te, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = st();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: Uu,
        useDebugValue: Ns,
        useDeferredValue: function(e) {
            return st().memoizedState = e;
        },
        useTransition: function() {
            var e = Uu(!1), t = e[0];
            return e = xm.bind(null, e[1]), st().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = te, o = st();
            if (q) {
                if (n === void 0) throw Error(C(407));
                n = n();
            } else {
                if (n = t(), he === null) throw Error(C(349));
                fn & 30 || Hc(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, Vu(Kc.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, Ar(9, Qc.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = st(), t = he.identifierPrefix;
            if (q) {
                var n = gt, r = ht;
                n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = wm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, _m = {
        readContext: Ye,
        useCallback: nf,
        useContext: Ye,
        useEffect: Ps,
        useImperativeHandle: tf,
        useInsertionEffect: Jc,
        useLayoutEffect: qc,
        useMemo: rf,
        useReducer: Vl,
        useRef: Zc,
        useState: function() {
            return Vl(Fr);
        },
        useDebugValue: Ns,
        useDeferredValue: function(e) {
            var t = Xe();
            return of(t, fe.memoizedState, e);
        },
        useTransition: function() {
            var e = Vl(Fr)[0], t = Xe().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Gc,
        useSyncExternalStore: Wc,
        useId: lf,
        unstable_isNewReconciler: !1
    }, Em = {
        readContext: Ye,
        useCallback: nf,
        useContext: Ye,
        useEffect: Ps,
        useImperativeHandle: tf,
        useInsertionEffect: Jc,
        useLayoutEffect: qc,
        useMemo: rf,
        useReducer: Bl,
        useRef: Zc,
        useState: function() {
            return Bl(Fr);
        },
        useDebugValue: Ns,
        useDeferredValue: function(e) {
            var t = Xe();
            return fe === null ? t.memoizedState = e : of(t, fe.memoizedState, e);
        },
        useTransition: function() {
            var e = Bl(Fr)[0], t = Xe().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Gc,
        useSyncExternalStore: Wc,
        useId: lf,
        unstable_isNewReconciler: !1
    };
    function qe(e, t) {
        if (e && e.defaultProps) {
            t = ne({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function Ni(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var al = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? hn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Pe(), o = Vt(e), l = vt(r, o);
            l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (rt(t, e, o, r), So(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Pe(), o = Vt(e), l = vt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (rt(t, e, o, r), So(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Pe(), r = Vt(e), o = vt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = At(e, o, r), t !== null && (rt(t, e, r, n), So(t, e, r));
        }
    };
    function Bu(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(o, l) : !0;
    }
    function cf(e, t, n) {
        var r = !1, o = bt, l = t.contextType;
        return typeof l == "object" && l !== null ? l = Ye(l) : (o = Le(t) ? an : ke.current, r = t.contextTypes, l = (r = r != null) ? bn(e, o) : bt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function $u(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
    }
    function zi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, ws(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = Ye(l) : (l = Le(t) ? an : ke.current, o.context = bn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ni(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && al.enqueueReplaceState(o, o.state, null), bo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Qn(e, t) {
        try {
            var n = "", r = t;
            do n += qd(r), r = r.return;
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
    function $l(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function Ri(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var Pm = typeof WeakMap == "function" ? WeakMap : Map;
    function ff(e, t, n) {
        n = vt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Ko || (Ko = !0, Ui = r), Ri(e, t);
        }, n;
    }
    function df(e, t, n) {
        n = vt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Ri(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Ri(e, t), typeof r != "function" && (Ut === null ? Ut = new Set([
                this
            ]) : Ut.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function bu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Pm;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Vm.bind(null, e, t, n), t.then(e, e));
    }
    function Gu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function Wu(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
    }
    var Nm = kt.ReactCurrentOwner, Me = !1;
    function Ee(e, t, n, r) {
        t.child = e === null ? Vc(t, null, n, r) : Wn(t, e.child, n, r);
    }
    function Hu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return Vn(t, o), r = _s(e, t, n, r, l, o), n = Es(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, St(e, t, o)) : (q && n && ds(t), t.flags |= 1, Ee(e, t, r, o), t.child);
    }
    function Qu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Os(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, pf(e, t, l, r, o)) : (e = No(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Ir, n(i, r) && e.ref === t.ref) return St(e, t, o);
        }
        return t.flags |= 1, e = Bt(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function pf(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Ir(l, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Me = !0);
            else return t.lanes = e.lanes, St(e, t, o);
        }
        return Ii(e, t, n, r, o);
    }
    function mf(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, K(On, Ae), Ae |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, K(On, Ae), Ae |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, K(On, Ae), Ae |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(On, Ae), Ae |= r;
        return Ee(e, t, o, n), t.child;
    }
    function hf(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Ii(e, t, n, r, o) {
        var l = Le(n) ? an : ke.current;
        return l = bn(t, l), Vn(t, o), n = _s(e, t, n, r, l, o), r = Es(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, St(e, t, o)) : (q && r && ds(t), t.flags |= 1, Ee(e, t, n, o), t.child);
    }
    function Ku(e, t, n, r, o) {
        if (Le(n)) {
            var l = !0;
            Ao(t);
        } else l = !1;
        if (Vn(t, o), t.stateNode === null) _o(e, t), cf(t, n, r), zi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var u = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = Ye(a) : (a = Le(n) ? an : ke.current, a = bn(t, a));
            var p = n.getDerivedStateFromProps, c = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && $u(t, i, r, a), zt = !1;
            var h = t.memoizedState;
            i.state = h, bo(t, r, i, o), u = t.memoizedState, s !== r || h !== u || je.current || zt ? (typeof p == "function" && (Ni(t, n, p, r), u = t.memoizedState), (s = zt || Bu(t, n, s, r, h, u, a)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, $c(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : qe(t.type, s), i.props = a, c = t.pendingProps, h = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ye(u) : (u = Le(n) ? an : ke.current, u = bn(t, u));
            var v = n.getDerivedStateFromProps;
            (p = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || h !== u) && $u(t, i, r, u), zt = !1, h = t.memoizedState, i.state = h, bo(t, r, i, o);
            var y = t.memoizedState;
            s !== c || h !== y || je.current || zt ? (typeof v == "function" && (Ni(t, n, v, r), y = t.memoizedState), (a = zt || Bu(t, n, a, r, h, y, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Ti(e, t, n, r, l, o);
    }
    function Ti(e, t, n, r, o, l) {
        hf(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && ju(t, n, !1), St(e, t, l);
        r = t.stateNode, Nm.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = Wn(t, e.child, null, l), t.child = Wn(t, null, s, l)) : Ee(e, t, s, l), t.memoizedState = r.state, o && ju(t, n, !0), t.child;
    }
    function gf(e) {
        var t = e.stateNode;
        t.pendingContext ? Mu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Mu(e, t.context, !1), xs(e, t.containerInfo);
    }
    function Yu(e, t, n, r, o) {
        return Gn(), ms(o), t.flags |= 256, Ee(e, t, n, r), t.child;
    }
    var Mi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function ji(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function vf(e, t, n) {
        var r = t.pendingProps, o = ee.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(ee, o & 1), e === null) return Ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = dl(i, r, 0, null), e = sn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ji(n), t.memoizedState = Mi, e) : zs(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return zm(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var u = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Bt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Bt(s, l) : (l = sn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? ji(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Mi, r;
        }
        return l = e.child, e = l.sibling, r = Bt(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function zs(e, t) {
        return t = dl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function ao(e, t, n, r) {
        return r !== null && ms(r), Wn(t, e.child, null, n), e = zs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function zm(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = $l(Error(C(422))), ao(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = dl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = sn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Wn(t, e.child, null, i), t.child.memoizedState = ji(i), t.memoizedState = Mi, l);
        if (!(t.mode & 1)) return ao(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(C(419)), r = $l(l, r, void 0), ao(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Me || s) {
            if (r = he, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, xt(e, o), rt(r, e, o, -1));
            }
            return Ls(), r = $l(Error(C(421))), ao(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bm.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ue = Ft(o.nextSibling), Ve = t, q = !0, tt = null, e !== null && (We[He++] = ht, We[He++] = gt, We[He++] = cn, ht = e.id, gt = e.overflow, cn = t), t = zs(t, r.children), t.flags |= 4096, t);
    }
    function Xu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Pi(e.return, t, n);
    }
    function bl(e, t, n, r, o) {
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
    function yf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Ee(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
                else if (e.tag === 19) Xu(e, n, t);
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
        if (K(ee, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Go(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), bl(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Go(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                bl(t, !0, n, null, l);
                break;
            case "together":
                bl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function _o(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function St(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), dn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(C(153));
        if (t.child !== null) {
            for(e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = Bt(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function Rm(e, t, n) {
        switch(t.tag){
            case 3:
                gf(t), Gn();
                break;
            case 5:
                bc(t);
                break;
            case 1:
                Le(t.type) && Ao(t);
                break;
            case 4:
                xs(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                K(Bo, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (K(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? vf(e, t, n) : (K(ee, ee.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
                K(ee, ee.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return yf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(ee, ee.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, mf(e, t, n);
        }
        return St(e, t, n);
    }
    var wf, Li, xf, Sf;
    wf = function(e, t) {
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
    Li = function() {};
    xf = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, on(ct.current);
            var l = null;
            switch(n){
                case "input":
                    o = ni(e, o), r = ni(e, r), l = [];
                    break;
                case "select":
                    o = ne({}, o, {
                        value: void 0
                    }), r = ne({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = li(e, o), r = li(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Do);
            }
            si(n, r);
            var i;
            n = null;
            for(a in o)if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
                var s = o[a];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Cr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
            for(a in r){
                var u = r[a];
                if (s = o?.[a], r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in u)u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
                } else n || (l || (l = []), l.push(a, n)), n = u;
                else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Cr.hasOwnProperty(a) ? (u != null && a === "onScroll" && Y("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
            }
            n && (l = l || []).push("style", n);
            var a = l;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    Sf = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function sr(e, t) {
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
    function xe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Im(e, t, n) {
        var r = t.pendingProps;
        switch(ps(t), t.tag){
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
                return Le(t.type) && Fo(), xe(t), null;
            case 3:
                return r = t.stateNode, Hn(), X(je), X(ke), ks(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (so(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && ($i(tt), tt = null))), Li(e, t), xe(t), null;
            case 5:
                Ss(t);
                var o = on(Or.current);
                if (n = t.type, e !== null && t.stateNode != null) xf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(C(166));
                        return xe(t), null;
                    }
                    if (e = on(ct.current), so(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[ut] = t, r[jr] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                Y("cancel", r), Y("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Y("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < pr.length; o++)Y(pr[o], r);
                                break;
                            case "source":
                                Y("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Y("error", r), Y("load", r);
                                break;
                            case "details":
                                Y("toggle", r);
                                break;
                            case "input":
                                lu(r, l), Y("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, Y("invalid", r);
                                break;
                            case "textarea":
                                su(r, l), Y("invalid", r);
                        }
                        si(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && io(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && io(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Cr.hasOwnProperty(i) && s != null && i === "onScroll" && Y("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Jr(r), iu(r, l, !0);
                                break;
                            case "textarea":
                                Jr(r), uu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = Do);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ka(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ut] = t, e[jr] = r, wf(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = ui(n, r), n){
                                case "dialog":
                                    Y("cancel", e), Y("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Y("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < pr.length; o++)Y(pr[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    Y("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Y("error", e), Y("load", e), o = r;
                                    break;
                                case "details":
                                    Y("toggle", e), o = r;
                                    break;
                                case "input":
                                    lu(e, r), o = ni(e, r), Y("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = ne({}, r, {
                                        value: void 0
                                    }), Y("invalid", e);
                                    break;
                                case "textarea":
                                    su(e, r), o = li(e, r), Y("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            si(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? Za(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ya(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && _r(e, u) : typeof u == "number" && _r(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Cr.hasOwnProperty(l) ? u != null && l === "onScroll" && Y("scroll", e) : u != null && Ji(e, l, u, i));
                            }
                            switch(n){
                                case "input":
                                    Jr(e), iu(e, r, !1);
                                    break;
                                case "textarea":
                                    Jr(e), uu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + $t(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Dn(e, !!r.multiple, l, !1) : r.defaultValue != null && Dn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = Do);
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
                if (e && t.stateNode != null) Sf(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                    if (n = on(Or.current), on(ct.current), so(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (l = r.nodeValue !== n) && (e = Ve, e !== null)) switch(e.tag){
                            case 3:
                                io(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && io(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
                }
                return xe(t), null;
            case 13:
                if (X(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (q && Ue !== null && t.mode & 1 && !(t.flags & 128)) Ac(), Gn(), t.flags |= 98560, l = !1;
                    else if (l = so(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(C(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
                            l[ut] = t;
                        } else Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        xe(t), l = !1;
                    } else tt !== null && ($i(tt), tt = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? de === 0 && (de = 3) : Ls())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
            case 4:
                return Hn(), Li(e, t), e === null && Tr(t.stateNode.containerInfo), xe(t), null;
            case 10:
                return vs(t.type._context), xe(t), null;
            case 17:
                return Le(t.type) && Fo(), xe(t), null;
            case 19:
                if (X(ee), l = t.memoizedState, l === null) return xe(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) sr(l, !1);
                else {
                    if (de !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Go(e), i !== null) {
                            for(t.flags |= 128, sr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return K(ee, ee.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && se() > Kn && (t.flags |= 128, r = !0, sr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Go(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !q) return xe(t), null;
                    } else 2 * se() - l.renderingStartTime > Kn && n !== 1073741824 && (t.flags |= 128, r = !0, sr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = se(), t.sibling = null, n = ee.current, K(ee, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
            case 22:
            case 23:
                return js(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(C(156, t.tag));
    }
    function Tm(e, t) {
        switch(ps(t), t.tag){
            case 1:
                return Le(t.type) && Fo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Hn(), X(je), X(ke), ks(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Ss(t), null;
            case 13:
                if (X(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(C(340));
                    Gn();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return X(ee), null;
            case 4:
                return Hn(), null;
            case 10:
                return vs(t.type._context), null;
            case 22:
            case 23:
                return js(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var co = !1, Se = !1, Mm = typeof WeakSet == "function" ? WeakSet : Set, I = null;
    function Ln(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            oe(e, t, r);
        }
        else n.current = null;
    }
    function Oi(e, t, n) {
        try {
            n();
        } catch (r) {
            oe(e, t, r);
        }
    }
    var Zu = !1;
    function jm(e, t) {
        if (yi = jo, e = Ec(), fs(e)) {
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
                    var i = 0, s = -1, u = -1, a = 0, p = 0, c = e, h = null;
                    t: for(;;){
                        for(var v; c !== n || o !== 0 && c.nodeType !== 3 || (s = i + o), c !== l || r !== 0 && c.nodeType !== 3 || (u = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (v = c.firstChild) !== null;)h = c, c = v;
                        for(;;){
                            if (c === e) break t;
                            if (h === n && ++a === o && (s = i), h === l && ++p === r && (u = i), (v = c.nextSibling) !== null) break;
                            c = h, h = c.parentNode;
                        }
                        c = v;
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
        for(wi = {
            focusedElem: e,
            selectionRange: n
        }, jo = !1, I = t; I !== null;)if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
        else for(; I !== null;){
            t = I;
            try {
                var y = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (y !== null) {
                            var g = y.memoizedProps, S = y.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? g : qe(t.type, g), S);
                            d.__reactInternalSnapshotBeforeUpdate = f;
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
                        throw Error(C(163));
                }
            } catch (x) {
                oe(t, t.return, x);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, I = e;
                break;
            }
            I = t.return;
        }
        return y = Zu, Zu = !1, y;
    }
    function xr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Oi(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function cl(e, t) {
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
    function Di(e) {
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
    function kf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[jr], delete t[ki], delete t[hm], delete t[gm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Cf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Ju(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || Cf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Fi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Do));
        else if (r !== 4 && (e = e.child, e !== null)) for(Fi(e, t, n), e = e.sibling; e !== null;)Fi(e, t, n), e = e.sibling;
    }
    function Ai(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Ai(e, t, n), e = e.sibling; e !== null;)Ai(e, t, n), e = e.sibling;
    }
    var ge = null, et = !1;
    function Ct(e, t, n) {
        for(n = n.child; n !== null;)_f(e, t, n), n = n.sibling;
    }
    function _f(e, t, n) {
        if (at && typeof at.onCommitFiberUnmount == "function") try {
            at.onCommitFiberUnmount(nl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Se || Ln(n, t);
            case 6:
                var r = ge, o = et;
                ge = null, Ct(e, t, n), ge = r, et = o, ge !== null && (et ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
                break;
            case 18:
                ge !== null && (et ? (e = ge, n = n.stateNode, e.nodeType === 8 ? Dl(e.parentNode, n) : e.nodeType === 1 && Dl(e, n), zr(e)) : Dl(ge, n.stateNode));
                break;
            case 4:
                r = ge, o = et, ge = n.stateNode.containerInfo, et = !0, Ct(e, t, n), ge = r, et = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Oi(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Ct(e, t, n);
                break;
            case 1:
                if (!Se && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    oe(n, t, s);
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
    function qu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Mm), t.forEach(function(r) {
                var o = $m.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function Je(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            ge = s.stateNode, et = !1;
                            break e;
                        case 3:
                            ge = s.stateNode.containerInfo, et = !0;
                            break e;
                        case 4:
                            ge = s.stateNode.containerInfo, et = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (ge === null) throw Error(C(160));
                _f(l, i, o), ge = null, et = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null;
            } catch (a) {
                oe(o, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)Ef(t, e), t = t.sibling;
    }
    function Ef(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (Je(t, e), it(e), r & 4) {
                    try {
                        xr(3, e, e.return), cl(3, e);
                    } catch (g) {
                        oe(e, e.return, g);
                    }
                    try {
                        xr(5, e, e.return);
                    } catch (g) {
                        oe(e, e.return, g);
                    }
                }
                break;
            case 1:
                Je(t, e), it(e), r & 512 && n !== null && Ln(n, n.return);
                break;
            case 5:
                if (Je(t, e), it(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        _r(o, "");
                    } catch (g) {
                        oe(e, e.return, g);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, u !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Ha(o, l), ui(s, i);
                        var a = ui(s, l);
                        for(i = 0; i < u.length; i += 2){
                            var p = u[i], c = u[i + 1];
                            p === "style" ? Za(o, c) : p === "dangerouslySetInnerHTML" ? Ya(o, c) : p === "children" ? _r(o, c) : Ji(o, p, c, a);
                        }
                        switch(s){
                            case "input":
                                ri(o, l);
                                break;
                            case "textarea":
                                Qa(o, l);
                                break;
                            case "select":
                                var h = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var v = l.value;
                                v != null ? Dn(o, !!l.multiple, v, !1) : h !== !!l.multiple && (l.defaultValue != null ? Dn(o, !!l.multiple, l.defaultValue, !0) : Dn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[jr] = l;
                    } catch (g) {
                        oe(e, e.return, g);
                    }
                }
                break;
            case 6:
                if (Je(t, e), it(e), r & 4) {
                    if (e.stateNode === null) throw Error(C(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (g) {
                        oe(e, e.return, g);
                    }
                }
                break;
            case 3:
                if (Je(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    zr(t.containerInfo);
                } catch (g) {
                    oe(e, e.return, g);
                }
                break;
            case 4:
                Je(t, e), it(e);
                break;
            case 13:
                Je(t, e), it(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ts = se())), r & 4 && qu(e);
                break;
            case 22:
                if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || p, Je(t, e), Se = a) : Je(t, e), it(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1) for(I = e, p = e.child; p !== null;){
                        for(c = I = p; I !== null;){
                            switch(h = I, v = h.child, h.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    xr(4, h, h.return);
                                    break;
                                case 1:
                                    Ln(h, h.return);
                                    var y = h.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                                        } catch (g) {
                                            oe(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ln(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        ta(c);
                                        continue;
                                    }
                            }
                            v !== null ? (v.return = h, I = v) : ta(c);
                        }
                        p = p.sibling;
                    }
                    e: for(p = null, c = e;;){
                        if (c.tag === 5) {
                            if (p === null) {
                                p = c;
                                try {
                                    o = c.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = c.stateNode, u = c.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Xa("display", i));
                                } catch (g) {
                                    oe(e, e.return, g);
                                }
                            }
                        } else if (c.tag === 6) {
                            if (p === null) try {
                                c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                            } catch (g) {
                                oe(e, e.return, g);
                            }
                        } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                            c.child.return = c, c = c.child;
                            continue;
                        }
                        if (c === e) break e;
                        for(; c.sibling === null;){
                            if (c.return === null || c.return === e) break e;
                            p === c && (p = null), c = c.return;
                        }
                        p === c && (p = null), c.sibling.return = c.return, c = c.sibling;
                    }
                }
                break;
            case 19:
                Je(t, e), it(e), r & 4 && qu(e);
                break;
            case 21:
                break;
            default:
                Je(t, e), it(e);
        }
    }
    function it(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (Cf(n)) {
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
                        r.flags & 32 && (_r(o, ""), r.flags &= -33);
                        var l = Ju(e);
                        Ai(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = Ju(e);
                        Fi(e, s, i);
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
    function Lm(e, t, n) {
        I = e, Pf(e);
    }
    function Pf(e, t, n) {
        for(var r = (e.mode & 1) !== 0; I !== null;){
            var o = I, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || co;
                if (!i) {
                    var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
                    s = co;
                    var a = Se;
                    if (co = i, (Se = u) && !a) for(I = o; I !== null;)i = I, u = i.child, i.tag === 22 && i.memoizedState !== null ? na(o) : u !== null ? (u.return = i, I = u) : na(o);
                    for(; l !== null;)I = l, Pf(l), l = l.sibling;
                    I = o, co = s, Se = a;
                }
                ea(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, I = l) : ea(e);
        }
    }
    function ea(e) {
        for(; I !== null;){
            var t = I;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Se || cl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && Au(t, l, r);
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
                                Au(t, i, n);
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
                                        var c = p.dehydrated;
                                        c !== null && zr(c);
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
                    Se || t.flags & 512 && Di(t);
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
    function ta(e) {
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
    function na(e) {
        for(; I !== null;){
            var t = I;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            cl(4, t);
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
                            Di(t);
                        } catch (u) {
                            oe(t, l, u);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Di(t);
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
    var Om = Math.ceil, Qo = kt.ReactCurrentDispatcher, Rs = kt.ReactCurrentOwner, Ke = kt.ReactCurrentBatchConfig, V = 0, he = null, ae = null, ve = 0, Ae = 0, On = Wt(0), de = 0, Ur = null, dn = 0, fl = 0, Is = 0, Sr = null, Te = null, Ts = 0, Kn = 1 / 0, dt = null, Ko = !1, Ui = null, Ut = null, fo = !1, Mt = null, Yo = 0, kr = 0, Vi = null, Eo = -1, Po = 0;
    function Pe() {
        return V & 6 ? se() : Eo !== -1 ? Eo : Eo = se();
    }
    function Vt(e) {
        return e.mode & 1 ? V & 2 && ve !== 0 ? ve & -ve : ym.transition !== null ? (Po === 0 && (Po = ac()), Po) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gc(e.type)), e) : 1;
    }
    function rt(e, t, n, r) {
        if (50 < kr) throw kr = 0, Vi = null, Error(C(185));
        $r(e, n, r), (!(V & 2) || e !== he) && (e === he && (!(V & 2) && (fl |= n), de === 4 && It(e, ve)), Oe(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Kn = se() + 500, sl && Ht()));
    }
    function Oe(e, t) {
        var n = e.callbackNode;
        yp(e, t);
        var r = Mo(e, e === he ? ve : 0);
        if (r === 0) n !== null && fu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && fu(n), t === 1) e.tag === 0 ? vm(ra.bind(null, e)) : Oc(ra.bind(null, e)), pm(function() {
                !(V & 6) && Ht();
            }), n = null;
            else {
                switch(cc(r)){
                    case 1:
                        n = rs;
                        break;
                    case 4:
                        n = sc;
                        break;
                    case 16:
                        n = To;
                        break;
                    case 536870912:
                        n = uc;
                        break;
                    default:
                        n = To;
                }
                n = Lf(n, Nf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function Nf(e, t) {
        if (Eo = -1, Po = 0, V & 6) throw Error(C(327));
        var n = e.callbackNode;
        if (Bn() && e.callbackNode !== n) return null;
        var r = Mo(e, e === he ? ve : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Xo(e, r);
        else {
            t = r;
            var o = V;
            V |= 2;
            var l = Rf();
            (he !== e || ve !== t) && (dt = null, Kn = se() + 500, ln(e, t));
            do try {
                Am();
                break;
            } catch (s) {
                zf(e, s);
            }
            while (!0);
            gs(), Qo.current = l, V = o, ae !== null ? t = 0 : (he = null, ve = 0, t = de);
        }
        if (t !== 0) {
            if (t === 2 && (o = pi(e), o !== 0 && (r = o, t = Bi(e, o))), t === 1) throw n = Ur, ln(e, 0), It(e, r), Oe(e, se()), n;
            if (t === 6) It(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Dm(o) && (t = Xo(e, r), t === 2 && (l = pi(e), l !== 0 && (r = l, t = Bi(e, l))), t === 1)) throw n = Ur, ln(e, 0), It(e, r), Oe(e, se()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(C(345));
                    case 2:
                        en(e, Te, dt);
                        break;
                    case 3:
                        if (It(e, r), (r & 130023424) === r && (t = Ts + 500 - se(), 10 < t)) {
                            if (Mo(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Pe(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = Si(en.bind(null, e, Te, dt), t);
                            break;
                        }
                        en(e, Te, dt);
                        break;
                    case 4:
                        if (It(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - nt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Om(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Si(en.bind(null, e, Te, dt), r);
                            break;
                        }
                        en(e, Te, dt);
                        break;
                    case 5:
                        en(e, Te, dt);
                        break;
                    default:
                        throw Error(C(329));
                }
            }
        }
        return Oe(e, se()), e.callbackNode === n ? Nf.bind(null, e) : null;
    }
    function Bi(e, t) {
        var n = Sr;
        return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256), e = Xo(e, t), e !== 2 && (t = Te, Te = n, t !== null && $i(t)), e;
    }
    function $i(e) {
        Te === null ? Te = e : Te.push.apply(Te, e);
    }
    function Dm(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ot(l(), o)) return !1;
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
    function It(e, t) {
        for(t &= ~Is, t &= ~fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - nt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function ra(e) {
        if (V & 6) throw Error(C(327));
        Bn();
        var t = Mo(e, 0);
        if (!(t & 1)) return Oe(e, se()), null;
        var n = Xo(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = pi(e);
            r !== 0 && (t = r, n = Bi(e, r));
        }
        if (n === 1) throw n = Ur, ln(e, 0), It(e, t), Oe(e, se()), n;
        if (n === 6) throw Error(C(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, en(e, Te, dt), Oe(e, se()), null;
    }
    function Ms(e, t) {
        var n = V;
        V |= 1;
        try {
            return e(t);
        } finally{
            V = n, V === 0 && (Kn = se() + 500, sl && Ht());
        }
    }
    function pn(e) {
        Mt !== null && Mt.tag === 0 && !(V & 6) && Bn();
        var t = V;
        V |= 1;
        var n = Ke.transition, r = b;
        try {
            if (Ke.transition = null, b = 1, e) return e();
        } finally{
            b = r, Ke.transition = n, V = t, !(V & 6) && Ht();
        }
    }
    function js() {
        Ae = On.current, X(On);
    }
    function ln(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, dm(n)), ae !== null) for(n = ae.return; n !== null;){
            var r = n;
            switch(ps(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Fo();
                    break;
                case 3:
                    Hn(), X(je), X(ke), ks();
                    break;
                case 5:
                    Ss(r);
                    break;
                case 4:
                    Hn();
                    break;
                case 13:
                    X(ee);
                    break;
                case 19:
                    X(ee);
                    break;
                case 10:
                    vs(r.type._context);
                    break;
                case 22:
                case 23:
                    js();
            }
            n = n.return;
        }
        if (he = e, ae = e = Bt(e.current, null), ve = Ae = t, de = 0, Ur = null, Is = fl = dn = 0, Te = Sr = null, rn !== null) {
            for(t = 0; t < rn.length; t++)if (n = rn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            rn = null;
        }
        return e;
    }
    function zf(e, t) {
        do {
            var n = ae;
            try {
                if (gs(), ko.current = Ho, Wo) {
                    for(var r = te.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Wo = !1;
                }
                if (fn = 0, me = fe = te = null, wr = !1, Dr = 0, Rs.current = null, n === null || n.return === null) {
                    de = 1, Ur = t, ae = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, u = t;
                    if (t = ve, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                        var a = u, p = s, c = p.tag;
                        if (!(p.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                            var h = p.alternate;
                            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
                        }
                        var v = Gu(i);
                        if (v !== null) {
                            v.flags &= -257, Wu(v, i, s, l, t), v.mode & 1 && bu(l, a, t), t = v, u = a;
                            var y = t.updateQueue;
                            if (y === null) {
                                var g = new Set;
                                g.add(u), t.updateQueue = g;
                            } else y.add(u);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                bu(l, a, t), Ls();
                                break e;
                            }
                            u = Error(C(426));
                        }
                    } else if (q && s.mode & 1) {
                        var S = Gu(i);
                        if (S !== null) {
                            !(S.flags & 65536) && (S.flags |= 256), Wu(S, i, s, l, t), ms(Qn(u, s));
                            break e;
                        }
                    }
                    l = u = Qn(u, s), de !== 4 && (de = 2), Sr === null ? Sr = [
                        l
                    ] : Sr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var d = ff(l, u, t);
                                Fu(l, d);
                                break e;
                            case 1:
                                s = u;
                                var f = l.type, m = l.stateNode;
                                if (!(l.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ut === null || !Ut.has(m)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var x = df(l, s, t);
                                    Fu(l, x);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                Tf(n);
            } catch (E) {
                t = E, ae === n && n !== null && (ae = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function Rf() {
        var e = Qo.current;
        return Qo.current = Ho, e === null ? Ho : e;
    }
    function Ls() {
        (de === 0 || de === 3 || de === 2) && (de = 4), he === null || !(dn & 268435455) && !(fl & 268435455) || It(he, ve);
    }
    function Xo(e, t) {
        var n = V;
        V |= 2;
        var r = Rf();
        (he !== e || ve !== t) && (dt = null, ln(e, t));
        do try {
            Fm();
            break;
        } catch (o) {
            zf(e, o);
        }
        while (!0);
        if (gs(), V = n, Qo.current = r, ae !== null) throw Error(C(261));
        return he = null, ve = 0, de;
    }
    function Fm() {
        for(; ae !== null;)If(ae);
    }
    function Am() {
        for(; ae !== null && !ap();)If(ae);
    }
    function If(e) {
        var t = jf(e.alternate, e, Ae);
        e.memoizedProps = e.pendingProps, t === null ? Tf(e) : ae = t, Rs.current = null;
    }
    function Tf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Tm(n, t), n !== null) {
                    n.flags &= 32767, ae = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    de = 6, ae = null;
                    return;
                }
            } else if (n = Im(n, t, Ae), n !== null) {
                ae = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                ae = t;
                return;
            }
            ae = t = e;
        }while (t !== null);
        de === 0 && (de = 5);
    }
    function en(e, t, n) {
        var r = b, o = Ke.transition;
        try {
            Ke.transition = null, b = 1, Um(e, t, n, r);
        } finally{
            Ke.transition = o, b = r;
        }
        return null;
    }
    function Um(e, t, n, r) {
        do Bn();
        while (Mt !== null);
        if (V & 6) throw Error(C(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (wp(e, l), e === he && (ae = he = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fo || (fo = !0, Lf(To, function() {
            return Bn(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = Ke.transition, Ke.transition = null;
            var i = b;
            b = 1;
            var s = V;
            V |= 4, Rs.current = null, jm(e, n), Ef(n, e), lm(wi), jo = !!yi, wi = yi = null, e.current = n, Lm(n), cp(), V = s, b = i, Ke.transition = l;
        } else e.current = n;
        if (fo && (fo = !1, Mt = e, Yo = o), l = e.pendingLanes, l === 0 && (Ut = null), pp(n.stateNode), Oe(e, se()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Ko) throw Ko = !1, e = Ui, Ui = null, e;
        return Yo & 1 && e.tag !== 0 && Bn(), l = e.pendingLanes, l & 1 ? e === Vi ? kr++ : (kr = 0, Vi = e) : kr = 0, Ht(), null;
    }
    function Bn() {
        if (Mt !== null) {
            var e = cc(Yo), t = Ke.transition, n = b;
            try {
                if (Ke.transition = null, b = 16 > e ? 16 : e, Mt === null) var r = !1;
                else {
                    if (e = Mt, Mt = null, Yo = 0, V & 6) throw Error(C(331));
                    var o = V;
                    for(V |= 4, I = e.current; I !== null;){
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
                                                xr(8, p, l);
                                        }
                                        var c = p.child;
                                        if (c !== null) c.return = p, I = c;
                                        else for(; I !== null;){
                                            p = I;
                                            var h = p.sibling, v = p.return;
                                            if (kf(p), p === a) {
                                                I = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                h.return = v, I = h;
                                                break;
                                            }
                                            I = v;
                                        }
                                    }
                                }
                                var y = l.alternate;
                                if (y !== null) {
                                    var g = y.child;
                                    if (g !== null) {
                                        y.child = null;
                                        do {
                                            var S = g.sibling;
                                            g.sibling = null, g = S;
                                        }while (g !== null);
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
                                    xr(9, l, l.return);
                            }
                            var d = l.sibling;
                            if (d !== null) {
                                d.return = l.return, I = d;
                                break e;
                            }
                            I = l.return;
                        }
                    }
                    var f = e.current;
                    for(I = f; I !== null;){
                        i = I;
                        var m = i.child;
                        if (i.subtreeFlags & 2064 && m !== null) m.return = i, I = m;
                        else e: for(i = f; I !== null;){
                            if (s = I, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        cl(9, s);
                                }
                            } catch (E) {
                                oe(s, s.return, E);
                            }
                            if (s === i) {
                                I = null;
                                break e;
                            }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return, I = x;
                                break e;
                            }
                            I = s.return;
                        }
                    }
                    if (V = o, Ht(), at && typeof at.onPostCommitFiberRoot == "function") try {
                        at.onPostCommitFiberRoot(nl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                b = n, Ke.transition = t;
            }
        }
        return !1;
    }
    function oa(e, t, n) {
        t = Qn(n, t), t = ff(e, t, 1), e = At(e, t, 1), t = Pe(), e !== null && ($r(e, 1, t), Oe(e, t));
    }
    function oe(e, t, n) {
        if (e.tag === 3) oa(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                oa(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
                    e = Qn(n, e), e = df(t, e, 1), t = At(t, e, 1), e = Pe(), t !== null && ($r(t, 1, e), Oe(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Vm(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ve & n) === n && (de === 4 || de === 3 && (ve & 130023424) === ve && 500 > se() - Ts ? ln(e, 0) : Is |= n), Oe(e, t);
    }
    function Mf(e, t) {
        t === 0 && (e.mode & 1 ? (t = to, to <<= 1, !(to & 130023424) && (to = 4194304)) : t = 1);
        var n = Pe();
        e = xt(e, t), e !== null && ($r(e, t, n), Oe(e, n));
    }
    function Bm(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Mf(e, n);
    }
    function $m(e, t) {
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
        r !== null && r.delete(t), Mf(e, n);
    }
    var jf;
    jf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || je.current) Me = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, Rm(e, t, n);
            Me = !!(e.flags & 131072);
        }
        else Me = !1, q && t.flags & 1048576 && Dc(t, Vo, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                _o(e, t), e = t.pendingProps;
                var o = bn(t, ke.current);
                Vn(t, n), o = _s(null, t, r, e, o, n);
                var l = Es();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(r) ? (l = !0, Ao(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ws(t), o.updater = al, t.stateNode = o, o._reactInternals = t, zi(t, r, e, n), t = Ti(null, t, r, !0, l, n)) : (t.tag = 0, q && l && ds(t), Ee(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(_o(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Gm(r), e = qe(r, e), o){
                        case 0:
                            t = Ii(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ku(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Hu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Qu(null, t, r, qe(r.type, e), n);
                            break e;
                    }
                    throw Error(C(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Ii(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Ku(e, t, r, o, n);
            case 3:
                e: {
                    if (gf(t), e === null) throw Error(C(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, $c(e, t), bo(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Qn(Error(C(423)), t), t = Yu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = Qn(Error(C(424)), t), t = Yu(e, t, r, n, o);
                        break e;
                    } else for(Ue = Ft(t.stateNode.containerInfo.firstChild), Ve = t, q = !0, tt = null, n = Vc(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Gn(), r === o) {
                            t = St(e, t, n);
                            break e;
                        }
                        Ee(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return bc(t), e === null && Ei(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, xi(r, o) ? i = null : l !== null && xi(r, l) && (t.flags |= 32), hf(e, t), Ee(e, t, i, n), t.child;
            case 6:
                return e === null && Ei(t), null;
            case 13:
                return vf(e, t, n);
            case 4:
                return xs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Ee(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Hu(e, t, r, o, n);
            case 7:
                return Ee(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ee(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ee(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(Bo, r._currentValue), r._currentValue = i, l !== null) if (ot(l.value, i)) {
                        if (l.children === o.children && !je.current) {
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
                                            var p = a.pending;
                                            p === null ? u.next = u : (u.next = p.next, p.next = u), a.pending = u;
                                        }
                                    }
                                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Pi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                u = u.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(C(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Pi(i, n, t), i = l.sibling;
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
                    Ee(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, Vn(t, n), o = Ye(o), r = r(o), t.flags |= 1, Ee(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = qe(r, t.pendingProps), o = qe(r.type, o), Qu(e, t, r, o, n);
            case 15:
                return pf(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), _o(e, t), t.tag = 1, Le(r) ? (e = !0, Ao(t)) : e = !1, Vn(t, n), cf(t, r, o), zi(t, r, o, n), Ti(null, t, r, !0, e, n);
            case 19:
                return yf(e, t, n);
            case 22:
                return mf(e, t, n);
        }
        throw Error(C(156, t.tag));
    };
    function Lf(e, t) {
        return ic(e, t);
    }
    function bm(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Qe(e, t, n, r) {
        return new bm(e, t, n, r);
    }
    function Os(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Gm(e) {
        if (typeof e == "function") return Os(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === es) return 11;
            if (e === ts) return 14;
        }
        return 2;
    }
    function Bt(e, t) {
        var n = e.alternate;
        return n === null ? (n = Qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function No(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Os(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case En:
                return sn(n.children, o, l, t);
            case qi:
                i = 8, o |= 8;
                break;
            case Jl:
                return e = Qe(12, n, t, o | 2), e.elementType = Jl, e.lanes = l, e;
            case ql:
                return e = Qe(13, n, t, o), e.elementType = ql, e.lanes = l, e;
            case ei:
                return e = Qe(19, n, t, o), e.elementType = ei, e.lanes = l, e;
            case ba:
                return dl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ba:
                        i = 10;
                        break e;
                    case $a:
                        i = 9;
                        break e;
                    case es:
                        i = 11;
                        break e;
                    case ts:
                        i = 14;
                        break e;
                    case Nt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(C(130, e == null ? e : typeof e, ""));
        }
        return t = Qe(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function sn(e, t, n, r) {
        return e = Qe(7, e, r, t), e.lanes = n, e;
    }
    function dl(e, t, n, r) {
        return e = Qe(22, e, r, t), e.elementType = ba, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Gl(e, t, n) {
        return e = Qe(6, e, null, t), e.lanes = n, e;
    }
    function Wl(e, t, n) {
        return t = Qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function Wm(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = El(0), this.expirationTimes = El(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = El(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Ds(e, t, n, r, o, l, i, s, u) {
        return e = new Wm(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Qe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ws(l), e;
    }
    function Hm(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: _n,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Of(e) {
        if (!e) return bt;
        e = e._reactInternals;
        e: {
            if (hn(e) !== e || e.tag !== 1) throw Error(C(170));
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
            throw Error(C(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Le(n)) return Lc(e, n, t);
        }
        return t;
    }
    function Df(e, t, n, r, o, l, i, s, u) {
        return e = Ds(n, r, !0, e, o, l, i, s, u), e.context = Of(null), n = e.current, r = Pe(), o = Vt(n), l = vt(r, o), l.callback = t ?? null, At(n, l, o), e.current.lanes = o, $r(e, o, r), Oe(e, r), e;
    }
    function pl(e, t, n, r) {
        var o = t.current, l = Pe(), i = Vt(o);
        return n = Of(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(o, t, i), e !== null && (rt(e, o, i, l), So(e, o, i)), i;
    }
    function Zo(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function la(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Fs(e, t) {
        la(e, t), (e = e.alternate) && la(e, t);
    }
    function Qm() {
        return null;
    }
    var Ff = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function As(e) {
        this._internalRoot = e;
    }
    ml.prototype.render = As.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(C(409));
        pl(e, t, null, null);
    };
    ml.prototype.unmount = As.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            pn(function() {
                pl(null, e, null, null);
            }), t[wt] = null;
        }
    };
    function ml(e) {
        this._internalRoot = e;
    }
    ml.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = pc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
            Rt.splice(n, 0, e), n === 0 && hc(e);
        }
    };
    function Us(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function hl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function ia() {}
    function Km(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var a = Zo(i);
                    l.call(a);
                };
            }
            var i = Df(t, r, e, 0, null, !1, !1, "", ia);
            return e._reactRootContainer = i, e[wt] = i.current, Tr(e.nodeType === 8 ? e.parentNode : e), pn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var a = Zo(u);
                s.call(a);
            };
        }
        var u = Ds(e, 0, !1, null, null, !1, !1, "", ia);
        return e._reactRootContainer = u, e[wt] = u.current, Tr(e.nodeType === 8 ? e.parentNode : e), pn(function() {
            pl(t, u, n, r);
        }), u;
    }
    function gl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var u = Zo(i);
                    s.call(u);
                };
            }
            pl(t, i, e, o);
        } else i = Km(n, t, e, o, r);
        return Zo(i);
    }
    fc = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = dr(t.pendingLanes);
                    n !== 0 && (os(t, n | 1), Oe(t, se()), !(V & 6) && (Kn = se() + 500, Ht()));
                }
                break;
            case 13:
                pn(function() {
                    var r = xt(e, 1);
                    if (r !== null) {
                        var o = Pe();
                        rt(r, e, 1, o);
                    }
                }), Fs(e, 1);
        }
    };
    ls = function(e) {
        if (e.tag === 13) {
            var t = xt(e, 134217728);
            if (t !== null) {
                var n = Pe();
                rt(t, e, 134217728, n);
            }
            Fs(e, 134217728);
        }
    };
    dc = function(e) {
        if (e.tag === 13) {
            var t = Vt(e), n = xt(e, t);
            if (n !== null) {
                var r = Pe();
                rt(n, e, t, r);
            }
            Fs(e, t);
        }
    };
    pc = function() {
        return b;
    };
    mc = function(e, t) {
        var n = b;
        try {
            return b = e, t();
        } finally{
            b = n;
        }
    };
    ci = function(e, t, n) {
        switch(t){
            case "input":
                if (ri(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = il(r);
                            if (!o) throw Error(C(90));
                            Wa(r), ri(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Qa(e, n);
                break;
            case "select":
                t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
        }
    };
    ec = Ms;
    tc = pn;
    var Ym = {
        usingClientEntryPoint: !1,
        Events: [
            Gr,
            Rn,
            il,
            Ja,
            qa,
            Ms
        ]
    }, ur = {
        findFiberByHostInstance: nn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Xm = {
        bundleType: ur.bundleType,
        version: ur.version,
        rendererPackageName: ur.rendererPackageName,
        rendererConfig: ur.rendererConfig,
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
            return e = oc(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: ur.findFiberByHostInstance || Qm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!po.isDisabled && po.supportsFiber) try {
            nl = po.inject(Xm), at = po;
        } catch  {}
    }
    $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
    $e.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Us(t)) throw Error(C(200));
        return Hm(e, t, null, n);
    };
    $e.createRoot = function(e, t) {
        if (!Us(e)) throw Error(C(299));
        var n = !1, r = "", o = Ff;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ds(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Tr(e.nodeType === 8 ? e.parentNode : e), new As(t);
    };
    $e.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
        return e = oc(t), e = e === null ? null : e.stateNode, e;
    };
    $e.flushSync = function(e) {
        return pn(e);
    };
    $e.hydrate = function(e, t, n) {
        if (!hl(t)) throw Error(C(200));
        return gl(null, e, t, !0, n);
    };
    $e.hydrateRoot = function(e, t, n) {
        if (!Us(e)) throw Error(C(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Ff;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Df(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Tr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new ml(t);
    };
    $e.render = function(e, t, n) {
        if (!hl(t)) throw Error(C(200));
        return gl(null, e, t, !1, n);
    };
    $e.unmountComponentAtNode = function(e) {
        if (!hl(e)) throw Error(C(40));
        return e._reactRootContainer ? (pn(function() {
            gl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[wt] = null;
            });
        }), !0) : !1;
    };
    $e.unstable_batchedUpdates = Ms;
    $e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!hl(n)) throw Error(C(200));
        if (e == null || e._reactInternals === void 0) throw Error(C(38));
        return gl(e, t, n, !1, r);
    };
    $e.version = "18.3.1-next-f1338f8080-20240426";
    function Af() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af);
        } catch (e) {
            console.error(e);
        }
    }
    Af(), Fa.exports = $e;
    var Zm = Fa.exports, sa = Zm;
    Xl.createRoot = sa.createRoot, Xl.hydrateRoot = sa.hydrateRoot;
    const Jm = "modulepreload", qm = function(e) {
        return "/grid-draw/" + e;
    }, ua = {}, eh = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((u)=>{
                if (u = qm(u), u in ua) return;
                ua[u] = !0;
                const a = u.endsWith(".css"), p = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${p}`)) return;
                const c = document.createElement("link");
                if (c.rel = a ? "stylesheet" : Jm, a || (c.as = "script"), c.crossOrigin = "", c.href = u, s && c.setAttribute("nonce", s), document.head.appendChild(c), a) return new Promise((h, v)=>{
                    c.addEventListener("load", h), c.addEventListener("error", ()=>v(new Error(`Unable to preload CSS for ${u}`)));
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
    function th(e, t, n) {
        const [r, o] = z.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = z.useRef(!1);
        return z.useEffect(()=>{
            if (l.current) return;
            const i = e.current;
            i && (l.current = !0, (async ()=>{
                try {
                    const s = await eh(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const u = s.GridCanvas.from_canvas(i, t, n);
                    o({
                        grid: u,
                        loading: !1,
                        error: null,
                        initialized: !0
                    });
                } catch (s) {
                    l.current = !1, o((u)=>({
                            ...u,
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
    const aa = (e)=>{
        let t;
        const n = new Set, r = (a, p)=>{
            const c = typeof a == "function" ? a(t) : a;
            if (!Object.is(c, t)) {
                const h = t;
                t = p ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((v)=>v(t, h));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>u,
            subscribe: (a)=>(n.add(a), ()=>n.delete(a))
        }, u = t = e(r, o, s);
        return s;
    }, nh = (e)=>e ? aa(e) : aa, rh = (e)=>e;
    function oh(e, t = rh) {
        const n = J.useSyncExternalStore(e.subscribe, J.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), J.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return J.useDebugValue(n), n;
    }
    const ca = (e)=>{
        const t = nh(e), n = (r)=>oh(t, r);
        return Object.assign(n, t), n;
    }, lh = (e)=>e ? ca(e) : ca;
    function Uf(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    function Vf(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" ? e.index === t.index : !1;
    }
    function Bf(e, t) {
        return t.some((n)=>Vf(n, e));
    }
    function ih(e, t) {
        return Bf(e, t) ? t : [
            ...t,
            e
        ];
    }
    function sh(e, t) {
        return t.filter((n)=>!Vf(n, e));
    }
    function Vs(e, t) {
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
    function uh(e, t) {
        const n = Vs(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    const ah = lh((e, t)=>({
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
                const { selectedItems: r } = t(), o = ih(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = sh(n, r);
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
                const i = Math.min(o.row, n.row), s = Math.max(o.row, n.row), u = Math.min(o.col, n.col), a = Math.max(o.col, n.col), p = r.get_rows(), c = r.get_cols(), h = [];
                for(let S = i; S <= s && S < p; S++)for(let d = u; d <= a && d < c; d++)r.get_cell(S, d) && h.push({
                    type: "cell",
                    row: S,
                    col: d
                });
                const v = r.get_line_count();
                for(let S = 0; S < v; S++)r.line_intersects_box(S, i, u, s, a) && h.push({
                    type: "line",
                    index: S
                });
                const y = r.get_rect_count();
                for(let S = 0; S < y; S++)r.rect_intersects_box(S, i, u, s, a) && h.push({
                    type: "rect",
                    index: S
                });
                let g = [
                    ...l
                ];
                for (const S of h)Bf(S, g) || g.push(S);
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
                    const a = r.get_rows(), p = r.get_cols(), c = [];
                    for (const y of l)if (y.type === "cell") {
                        const g = y.row + s, S = y.col + u;
                        g >= 0 && g < a && S >= 0 && S < p && (r.move_cell(y.row, y.col, g, S), c.push({
                            type: "cell",
                            row: g,
                            col: S
                        }));
                    }
                    const h = l.filter((y)=>y.type === "line");
                    for (const y of h)r.move_line(y.index, s, u), c.push({
                        type: "line",
                        index: y.index
                    });
                    const v = l.filter((y)=>y.type === "rect");
                    for (const y of v)r.move_rect(y.index, s, u), c.push({
                        type: "rect",
                        index: y.index
                    });
                    e({
                        selectedItems: c,
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
                const o = uh(r, n);
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
                    const p = o.row + a.relRow, c = o.col + a.relCol;
                    p >= 0 && p < i && c >= 0 && c < s && (n.set_draw_color(a.color), n.set_cell(p, c, !0), u.push({
                        type: "cell",
                        row: p,
                        col: c
                    }));
                }
                for (const a of r.lines){
                    const p = o.row + a.relR1, c = o.col + a.relC1, h = o.row + a.relR2, v = o.col + a.relC2;
                    p >= 0 && c >= 0 && h >= 0 && v >= 0 && (n.add_line(p, c, h, v, a.color), u.push({
                        type: "line",
                        index: n.get_line_count() - 1
                    }));
                }
                for (const a of r.rects){
                    const p = o.row + a.relR1, c = o.col + a.relC1, h = o.row + a.relR2, v = o.col + a.relC2;
                    p >= 0 && c >= 0 && h >= 0 && v >= 0 && (n.add_rect(p, c, h, v, a.color), u.push({
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
                    })), u = Uf(s);
                if (!u) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const g of o)if (n.get_cell(g.row, g.col)) {
                    const S = n.get_cell_color(g.row, g.col), d = l[S] ?? "#000000";
                    i.push({
                        row: g.row - u.minRow,
                        col: g.col - u.minCol,
                        color: d
                    });
                }
                i.sort((g, S)=>g.row - S.row || g.col - S.col);
                const a = u.maxRow - u.minRow + 1, p = u.maxCol - u.minCol + 1, c = [], h = [];
                for (const g of i)g.color === "#000000" && (c.push(g.row), h.push(g.col));
                const v = c.map(()=>"1.0").join(", "), y = `import torch

indices = torch.tensor([[${c.join(", ")}], [${h.join(", ")}]])
values = torch.tensor([${v}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${a}, ${p}))
sparse = sparse.coalesce()`;
                e({
                    jsonOutput: JSON.stringify(i, null, 2),
                    tensorOutput: y
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
                    if (i.length > 0 && typeof i[0] == "object" && "row" in i[0] && "col" in i[0]) for (const c of i){
                        if (typeof c != "object" || c === null) continue;
                        const h = c.row, v = c.col, y = c.color;
                        if (typeof h != "number" || typeof v != "number") continue;
                        const g = o.row + h, S = o.col + v;
                        if (g >= 0 && g < s && S >= 0 && S < u) {
                            const d = l[y] ?? 0;
                            r.set_draw_color(d), r.set_cell(g, S, !0), a.push({
                                type: "cell",
                                row: g,
                                col: S
                            });
                        }
                    }
                    else for(let c = 0; c < i.length; c++){
                        const h = i[c];
                        if (Array.isArray(h)) for(let v = 0; v < h.length; v++){
                            const y = o.row + c, g = o.col + v;
                            if (y >= s || g >= u) continue;
                            const S = h[v];
                            if (S && typeof S == "object" && S.color) {
                                const d = l[S.color] ?? 0;
                                r.set_draw_color(d), r.set_cell(y, g, !0), a.push({
                                    type: "cell",
                                    row: y,
                                    col: g
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
                    for(let p = 0; p < i.length; p++){
                        const c = i[p];
                        if (Array.isArray(c)) for(let h = 0; h < c.length; h++){
                            const v = o.row + p, y = o.col + h;
                            if (v >= s || y >= u) continue;
                            Number(c[h]) > .5 && (r.set_cell(v, y, !0), a.push({
                                type: "cell",
                                row: v,
                                col: y
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
                        const o = Vs(r, n);
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
    function $f(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = $f(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function bf() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = $f(e)) && (r && (r += " "), r += t);
        return r;
    }
    const fa = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, da = bf, Gf = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return da(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((a)=>{
                const p = n?.[a], c = l?.[a];
                if (p === null) return null;
                const h = fa(p) || fa(c);
                return o[a][h];
            }), s = n && Object.entries(n).reduce((a, p)=>{
                let [c, h] = p;
                return h === void 0 || (a[c] = h), a;
            }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, p)=>{
                let { class: c, className: h, ...v } = p;
                return Object.entries(v).every((y)=>{
                    let [g, S] = y;
                    return Array.isArray(S) ? S.includes({
                        ...l,
                        ...s
                    }[g]) : {
                        ...l,
                        ...s
                    }[g] === S;
                }) ? [
                    ...a,
                    c,
                    h
                ] : a;
            }, []);
            return da(e, i, u, n?.class, n?.className);
        };
    function pa(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Wf(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = pa(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : pa(e[o], null);
                }
            };
        };
    }
    function bi(...e) {
        return z.useCallback(Wf(...e), e);
    }
    function Jo(e) {
        const t = fh(e), n = z.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = z.Children.toArray(l), u = s.find(ph);
            if (u) {
                const a = u.props.children, p = s.map((c)=>c === u ? z.Children.count(a) > 1 ? z.Children.only(null) : z.isValidElement(a) ? a.props.children : null : c);
                return k.jsx(t, {
                    ...i,
                    ref: o,
                    children: z.isValidElement(a) ? z.cloneElement(a, void 0, p) : null
                });
            }
            return k.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var ch = Jo("Slot");
    function fh(e) {
        const t = z.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (z.isValidElement(o)) {
                const i = hh(o), s = mh(l, o.props);
                return o.type !== z.Fragment && (s.ref = r ? Wf(r, i) : i), z.cloneElement(o, s);
            }
            return z.Children.count(o) > 1 ? z.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var dh = Symbol("radix.slottable");
    function ph(e) {
        return z.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === dh;
    }
    function mh(e, t) {
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
    function hh(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var gh = [
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
    ], Vr = gh.reduce((e, t)=>{
        const n = Jo(`Primitive.${t}`), r = z.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, u = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), k.jsx(u, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function Bs(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = z.createContext(i), u = n.length;
            n = [
                ...n,
                i
            ];
            const a = (c)=>{
                const { scope: h, children: v, ...y } = c, g = h?.[e]?.[u] || s, S = z.useMemo(()=>y, Object.values(y));
                return k.jsx(g.Provider, {
                    value: S,
                    children: v
                });
            };
            a.displayName = l + "Provider";
            function p(c, h) {
                const v = h?.[e]?.[u] || s, y = z.useContext(v);
                if (y) return y;
                if (i !== void 0) return i;
                throw new Error(`\`${c}\` must be used within \`${l}\``);
            }
            return [
                a,
                p
            ];
        }
        const o = ()=>{
            const l = n.map((i)=>z.createContext(i));
            return function(s) {
                const u = s?.[e] || l;
                return z.useMemo(()=>({
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
            vh(o, ...t)
        ];
    }
    function vh(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: u, scopeName: a })=>{
                    const c = u(l)[`__scope${a}`];
                    return {
                        ...s,
                        ...c
                    };
                }, {});
                return z.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function yh(e) {
        const t = e + "CollectionProvider", [n, r] = Bs(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (g)=>{
            const { scope: S, children: d } = g, f = J.useRef(null), m = J.useRef(new Map).current;
            return k.jsx(o, {
                scope: S,
                itemMap: m,
                collectionRef: f,
                children: d
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", u = Jo(s), a = J.forwardRef((g, S)=>{
            const { scope: d, children: f } = g, m = l(s, d), x = bi(S, m.collectionRef);
            return k.jsx(u, {
                ref: x,
                children: f
            });
        });
        a.displayName = s;
        const p = e + "CollectionItemSlot", c = "data-radix-collection-item", h = Jo(p), v = J.forwardRef((g, S)=>{
            const { scope: d, children: f, ...m } = g, x = J.useRef(null), E = bi(S, x), P = l(p, d);
            return J.useEffect(()=>(P.itemMap.set(x, {
                    ref: x,
                    ...m
                }), ()=>void P.itemMap.delete(x))), k.jsx(h, {
                [c]: "",
                ref: E,
                children: f
            });
        });
        v.displayName = p;
        function y(g) {
            const S = l(e + "CollectionConsumer", g);
            return J.useCallback(()=>{
                const f = S.collectionRef.current;
                if (!f) return [];
                const m = Array.from(f.querySelectorAll(`[${c}]`));
                return Array.from(S.itemMap.values()).sort((P, R)=>m.indexOf(P.ref.current) - m.indexOf(R.ref.current));
            }, [
                S.collectionRef,
                S.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: a,
                ItemSlot: v
            },
            y,
            r
        ];
    }
    function un(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Hf = globalThis?.document ? z.useLayoutEffect : ()=>{}, wh = Oa[" useInsertionEffect ".trim().toString()] || Hf;
    function vl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = xh({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, u = s ? e : o;
        {
            const p = z.useRef(e !== void 0);
            z.useEffect(()=>{
                const c = p.current;
                c !== s && console.warn(`${r} is changing from ${c ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), p.current = s;
            }, [
                s,
                r
            ]);
        }
        const a = z.useCallback((p)=>{
            if (s) {
                const c = Sh(p) ? p(e) : p;
                c !== e && i.current?.(c);
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
    function xh({ defaultProp: e, onChange: t }) {
        const [n, r] = z.useState(e), o = z.useRef(n), l = z.useRef(t);
        return wh(()=>{
            l.current = t;
        }, [
            t
        ]), z.useEffect(()=>{
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
    function Sh(e) {
        return typeof e == "function";
    }
    var kh = Oa[" useId ".trim().toString()] || (()=>{}), Ch = 0;
    function _h(e) {
        const [t, n] = z.useState(kh());
        return Hf(()=>{
            n((r)=>r ?? String(Ch++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var Eh = z.createContext(void 0);
    function Qf(e) {
        const t = z.useContext(Eh);
        return e || t || "ltr";
    }
    function Ph(e) {
        const t = z.useRef(e);
        return z.useEffect(()=>{
            t.current = e;
        }), z.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Hl = "rovingFocusGroup.onEntryFocus", Nh = {
        bubbles: !1,
        cancelable: !0
    }, Hr = "RovingFocusGroup", [Gi, Kf, zh] = yh(Hr), [Rh, Yf] = Bs(Hr, [
        zh
    ]), [Ih, Th] = Rh(Hr), Xf = z.forwardRef((e, t)=>k.jsx(Gi.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: k.jsx(Gi.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: k.jsx(Mh, {
                    ...e,
                    ref: t
                })
            })
        }));
    Xf.displayName = Hr;
    var Mh = z.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: u, onEntryFocus: a, preventScrollOnEntryFocus: p = !1, ...c } = e, h = z.useRef(null), v = bi(t, h), y = Qf(l), [g, S] = vl({
            prop: i,
            defaultProp: s ?? null,
            onChange: u,
            caller: Hr
        }), [d, f] = z.useState(!1), m = Ph(a), x = Kf(n), E = z.useRef(!1), [P, R] = z.useState(0);
        return z.useEffect(()=>{
            const w = h.current;
            if (w) return w.addEventListener(Hl, m), ()=>w.removeEventListener(Hl, m);
        }, [
            m
        ]), k.jsx(Ih, {
            scope: n,
            orientation: r,
            dir: y,
            loop: o,
            currentTabStopId: g,
            onItemFocus: z.useCallback((w)=>S(w), [
                S
            ]),
            onItemShiftTab: z.useCallback(()=>f(!0), []),
            onFocusableItemAdd: z.useCallback(()=>R((w)=>w + 1), []),
            onFocusableItemRemove: z.useCallback(()=>R((w)=>w - 1), []),
            children: k.jsx(Vr.div, {
                tabIndex: d || P === 0 ? -1 : 0,
                "data-orientation": r,
                ...c,
                ref: v,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: un(e.onMouseDown, ()=>{
                    E.current = !0;
                }),
                onFocus: un(e.onFocus, (w)=>{
                    const O = !E.current;
                    if (w.target === w.currentTarget && O && !d) {
                        const F = new CustomEvent(Hl, Nh);
                        if (w.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                            const le = x().filter((W)=>W.focusable), Ce = le.find((W)=>W.active), De = le.find((W)=>W.id === g), ue = [
                                Ce,
                                De,
                                ...le
                            ].filter(Boolean).map((W)=>W.ref.current);
                            qf(ue, p);
                        }
                    }
                    E.current = !1;
                }),
                onBlur: un(e.onBlur, ()=>f(!1))
            })
        });
    }), Zf = "RovingFocusGroupItem", Jf = z.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, u = _h(), a = l || u, p = Th(Zf, n), c = p.currentTabStopId === a, h = Kf(n), { onFocusableItemAdd: v, onFocusableItemRemove: y, currentTabStopId: g } = p;
        return z.useEffect(()=>{
            if (r) return v(), ()=>y();
        }, [
            r,
            v,
            y
        ]), k.jsx(Gi.ItemSlot, {
            scope: n,
            id: a,
            focusable: r,
            active: o,
            children: k.jsx(Vr.span, {
                tabIndex: c ? 0 : -1,
                "data-orientation": p.orientation,
                ...s,
                ref: t,
                onMouseDown: un(e.onMouseDown, (S)=>{
                    r ? p.onItemFocus(a) : S.preventDefault();
                }),
                onFocus: un(e.onFocus, ()=>p.onItemFocus(a)),
                onKeyDown: un(e.onKeyDown, (S)=>{
                    if (S.key === "Tab" && S.shiftKey) {
                        p.onItemShiftTab();
                        return;
                    }
                    if (S.target !== S.currentTarget) return;
                    const d = Oh(S, p.orientation, p.dir);
                    if (d !== void 0) {
                        if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                        S.preventDefault();
                        let m = h().filter((x)=>x.focusable).map((x)=>x.ref.current);
                        if (d === "last") m.reverse();
                        else if (d === "prev" || d === "next") {
                            d === "prev" && m.reverse();
                            const x = m.indexOf(S.currentTarget);
                            m = p.loop ? Dh(m, x + 1) : m.slice(x + 1);
                        }
                        setTimeout(()=>qf(m));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: c,
                    hasTabStop: g != null
                }) : i
            })
        });
    });
    Jf.displayName = Zf;
    var jh = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function Lh(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function Oh(e, t, n) {
        const r = Lh(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return jh[r];
    }
    function qf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Dh(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Fh = Xf, Ah = Jf, ed = "Toggle", td = z.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = vl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: ed
        });
        return k.jsx(Vr.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: un(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    td.displayName = ed;
    var Qt = "ToggleGroup", [nd] = Bs(Qt, [
        Yf
    ]), rd = Yf(), $s = J.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return k.jsx(Uh, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return k.jsx(Vh, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${Qt}\``);
    });
    $s.displayName = Qt;
    var [od, ld] = nd(Qt), Uh = J.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = vl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: Qt
        });
        return k.jsx(od, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: J.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: J.useCallback(()=>s(""), [
                s
            ]),
            children: k.jsx(id, {
                ...l,
                ref: t
            })
        });
    }), Vh = J.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = vl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: Qt
        }), u = J.useCallback((p)=>s((c = [])=>[
                    ...c,
                    p
                ]), [
            s
        ]), a = J.useCallback((p)=>s((c = [])=>c.filter((h)=>h !== p)), [
            s
        ]);
        return k.jsx(od, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: u,
            onItemDeactivate: a,
            children: k.jsx(id, {
                ...l,
                ref: t
            })
        });
    });
    $s.displayName = Qt;
    var [Bh, $h] = nd(Qt), id = J.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...u } = e, a = rd(n), p = Qf(i), c = {
            role: "group",
            dir: p,
            ...u
        };
        return k.jsx(Bh, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? k.jsx(Fh, {
                asChild: !0,
                ...a,
                orientation: l,
                dir: p,
                loop: s,
                children: k.jsx(Vr.div, {
                    ...c,
                    ref: t
                })
            }) : k.jsx(Vr.div, {
                ...c,
                ref: t
            })
        });
    }), qo = "ToggleGroupItem", sd = J.forwardRef((e, t)=>{
        const n = ld(qo, e.__scopeToggleGroup), r = $h(qo, e.__scopeToggleGroup), o = rd(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, u = J.useRef(null);
        return r.rovingFocus ? k.jsx(Ah, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: u,
            children: k.jsx(ma, {
                ...s,
                ref: t
            })
        }) : k.jsx(ma, {
            ...s,
            ref: t
        });
    });
    sd.displayName = qo;
    var ma = J.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = ld(qo, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return k.jsx(td, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (u)=>{
                u ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), bh = $s, Gh = sd;
    const Wh = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Hh = (e, t)=>({
            classGroupId: e,
            validator: t
        }), ud = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), el = "-", ha = [], Qh = "arbitrary..", Kh = (e)=>{
        const t = Xh(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Yh(i);
                const s = i.split(el), u = s[0] === "" && s.length > 1 ? 1 : 0;
                return ad(s, u, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const u = r[i], a = n[i];
                    return u ? a ? Wh(a, u) : u : a || ha;
                }
                return n[i] || ha;
            }
        };
    }, ad = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const a = ad(e, t + 1, l);
            if (a) return a;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(el) : e.slice(t).join(el), u = i.length;
        for(let a = 0; a < u; a++){
            const p = i[a];
            if (p.validator(s)) return p.classGroupId;
        }
    }, Yh = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Qh + r : void 0;
        })(), Xh = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Zh(n, t);
    }, Zh = (e, t)=>{
        const n = ud();
        for(const r in e){
            const o = e[r];
            bs(o, n, r, t);
        }
        return n;
    }, bs = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Jh(i, t, n, r);
        }
    }, Jh = (e, t, n, r)=>{
        if (typeof e == "string") {
            qh(e, t, n);
            return;
        }
        if (typeof e == "function") {
            eg(e, t, n, r);
            return;
        }
        tg(e, t, n, r);
    }, qh = (e, t, n)=>{
        const r = e === "" ? t : cd(t, e);
        r.classGroupId = n;
    }, eg = (e, t, n, r)=>{
        if (ng(e)) {
            bs(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Hh(n, e));
    }, tg = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, u] = o[i];
            bs(u, cd(t, s), n, r);
        }
    }, cd = (e, t)=>{
        let n = e;
        const r = t.split(el), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = ud(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, ng = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, rg = (e)=>{
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
    }, Wi = "!", ga = ":", og = [], va = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), lg = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, u = 0, a;
            const p = o.length;
            for(let g = 0; g < p; g++){
                const S = o[g];
                if (i === 0 && s === 0) {
                    if (S === ga) {
                        l.push(o.slice(u, g)), u = g + 1;
                        continue;
                    }
                    if (S === "/") {
                        a = g;
                        continue;
                    }
                }
                S === "[" ? i++ : S === "]" ? i-- : S === "(" ? s++ : S === ")" && s--;
            }
            const c = l.length === 0 ? o : o.slice(u);
            let h = c, v = !1;
            c.endsWith(Wi) ? (h = c.slice(0, -1), v = !0) : c.startsWith(Wi) && (h = c.slice(1), v = !0);
            const y = a && a > u ? a - u : void 0;
            return va(l, v, h, y);
        };
        if (t) {
            const o = t + ga, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : va(og, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, ig = (e)=>{
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
    }, sg = (e)=>({
            cache: rg(e.cacheSize),
            parseClassName: lg(e),
            sortModifiers: ig(e),
            ...Kh(e)
        }), ug = /\s+/, ag = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(ug);
        let u = "";
        for(let a = s.length - 1; a >= 0; a -= 1){
            const p = s[a], { isExternal: c, modifiers: h, hasImportantModifier: v, baseClassName: y, maybePostfixModifierPosition: g } = n(p);
            if (c) {
                u = p + (u.length > 0 ? " " + u : u);
                continue;
            }
            let S = !!g, d = r(S ? y.substring(0, g) : y);
            if (!d) {
                if (!S) {
                    u = p + (u.length > 0 ? " " + u : u);
                    continue;
                }
                if (d = r(y), !d) {
                    u = p + (u.length > 0 ? " " + u : u);
                    continue;
                }
                S = !1;
            }
            const f = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), m = v ? f + Wi : f, x = m + d;
            if (i.indexOf(x) > -1) continue;
            i.push(x);
            const E = o(d, S);
            for(let P = 0; P < E.length; ++P){
                const R = E[P];
                i.push(m + R);
            }
            u = p + (u.length > 0 ? " " + u : u);
        }
        return u;
    }, cg = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = fd(n)) && (o && (o += " "), o += r);
        return o;
    }, fd = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = fd(e[r])) && (n && (n += " "), n += t);
        return n;
    }, fg = (e, ...t)=>{
        let n, r, o, l;
        const i = (u)=>{
            const a = t.reduce((p, c)=>c(p), e());
            return n = sg(a), r = n.cache.get, o = n.cache.set, l = s, s(u);
        }, s = (u)=>{
            const a = r(u);
            if (a) return a;
            const p = ag(u, n);
            return o(u, p), p;
        };
        return l = i, (...u)=>l(cg(...u));
    }, dg = [], ce = (e)=>{
        const t = (n)=>n[e] || dg;
        return t.isThemeGetter = !0, t;
    }, dd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, pg = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, mg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _t = (e)=>pg.test(e), A = (e)=>!!e && !Number.isNaN(Number(e)), Et = (e)=>!!e && Number.isInteger(Number(e)), Ql = (e)=>e.endsWith("%") && A(e.slice(0, -1)), ft = (e)=>mg.test(e), md = ()=>!0, wg = (e)=>hg.test(e) && !gg.test(e), Gs = ()=>!1, xg = (e)=>vg.test(e), Sg = (e)=>yg.test(e), kg = (e)=>!M(e) && !j(e), Cg = (e)=>Kt(e, vd, Gs), M = (e)=>dd.test(e), Jt = (e)=>Kt(e, yd, wg), ya = (e)=>Kt(e, Tg, A), _g = (e)=>Kt(e, xd, md), Eg = (e)=>Kt(e, wd, Gs), wa = (e)=>Kt(e, hd, Gs), Pg = (e)=>Kt(e, gd, Sg), mo = (e)=>Kt(e, Sd, xg), j = (e)=>pd.test(e), ar = (e)=>gn(e, yd), Ng = (e)=>gn(e, wd), xa = (e)=>gn(e, hd), zg = (e)=>gn(e, vd), Rg = (e)=>gn(e, gd), ho = (e)=>gn(e, Sd, !0), Ig = (e)=>gn(e, xd, !0), Kt = (e, t, n)=>{
        const r = dd.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, gn = (e, t, n = !1)=>{
        const r = pd.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, hd = (e)=>e === "position" || e === "percentage", gd = (e)=>e === "image" || e === "url", vd = (e)=>e === "length" || e === "size" || e === "bg-size", yd = (e)=>e === "length", Tg = (e)=>e === "number", wd = (e)=>e === "family-name", xd = (e)=>e === "number" || e === "weight", Sd = (e)=>e === "shadow", Mg = ()=>{
        const e = ce("color"), t = ce("font"), n = ce("text"), r = ce("font-weight"), o = ce("tracking"), l = ce("leading"), i = ce("breakpoint"), s = ce("container"), u = ce("spacing"), a = ce("radius"), p = ce("shadow"), c = ce("inset-shadow"), h = ce("text-shadow"), v = ce("drop-shadow"), y = ce("blur"), g = ce("perspective"), S = ce("aspect"), d = ce("ease"), f = ce("animate"), m = ()=>[
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column"
            ], x = ()=>[
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
                ...x(),
                j,
                M
            ], P = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], R = ()=>[
                "auto",
                "contain",
                "none"
            ], w = ()=>[
                j,
                M,
                u
            ], O = ()=>[
                _t,
                "full",
                "auto",
                ...w()
            ], F = ()=>[
                Et,
                "none",
                "subgrid",
                j,
                M
            ], le = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Et,
                        j,
                        M
                    ]
                },
                Et,
                j,
                M
            ], Ce = ()=>[
                Et,
                "auto",
                j,
                M
            ], De = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                j,
                M
            ], lt = ()=>[
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
            ], ue = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], W = ()=>[
                "auto",
                ...w()
            ], Re = ()=>[
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
                ...w()
            ], N = ()=>[
                _t,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...w()
            ], D = ()=>[
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
                ...w()
            ], _ = ()=>[
                e,
                j,
                M
            ], H = ()=>[
                ...x(),
                xa,
                wa,
                {
                    position: [
                        j,
                        M
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
            ], Ze = ()=>[
                "auto",
                "cover",
                "contain",
                zg,
                Cg,
                {
                    size: [
                        j,
                        M
                    ]
                }
            ], Ie = ()=>[
                Ql,
                ar,
                Jt
            ], re = ()=>[
                "",
                "none",
                "full",
                a,
                j,
                M
            ], Q = ()=>[
                "",
                A,
                ar,
                Jt
            ], Ge = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], Jn = ()=>[
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
                A,
                Ql,
                xa,
                wa
            ], Qr = ()=>[
                "",
                "none",
                y,
                j,
                M
            ], vn = ()=>[
                "none",
                A,
                j,
                M
            ], yn = ()=>[
                "none",
                A,
                j,
                M
            ], qn = ()=>[
                A,
                j,
                M
            ], wn = ()=>[
                _t,
                "full",
                ...w()
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
                    ft
                ],
                breakpoint: [
                    ft
                ],
                color: [
                    md
                ],
                container: [
                    ft
                ],
                "drop-shadow": [
                    ft
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    kg
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
                    ft
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
                    ft
                ],
                shadow: [
                    ft
                ],
                spacing: [
                    "px",
                    A
                ],
                text: [
                    ft
                ],
                "text-shadow": [
                    ft
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
                            M,
                            j,
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
                            M,
                            j,
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
                        overscroll: R()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": R()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": R()
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
                            Et,
                            "auto",
                            j,
                            M
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
                            ...w()
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
                            M
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            A,
                            j,
                            M
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            A,
                            j,
                            M
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
                            j,
                            M
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
                        col: le()
                    }
                ],
                "col-start": [
                    {
                        "col-start": Ce()
                    }
                ],
                "col-end": [
                    {
                        "col-end": Ce()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": F()
                    }
                ],
                "row-start-end": [
                    {
                        row: le()
                    }
                ],
                "row-start": [
                    {
                        "row-start": Ce()
                    }
                ],
                "row-end": [
                    {
                        "row-end": Ce()
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
                        "auto-cols": De()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": De()
                    }
                ],
                gap: [
                    {
                        gap: w()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": w()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": w()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...lt(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...ue(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...ue()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...lt()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...ue(),
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
                            ...ue(),
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
                        "place-content": lt()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...ue(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...ue()
                        ]
                    }
                ],
                p: [
                    {
                        p: w()
                    }
                ],
                px: [
                    {
                        px: w()
                    }
                ],
                py: [
                    {
                        py: w()
                    }
                ],
                ps: [
                    {
                        ps: w()
                    }
                ],
                pe: [
                    {
                        pe: w()
                    }
                ],
                pbs: [
                    {
                        pbs: w()
                    }
                ],
                pbe: [
                    {
                        pbe: w()
                    }
                ],
                pt: [
                    {
                        pt: w()
                    }
                ],
                pr: [
                    {
                        pr: w()
                    }
                ],
                pb: [
                    {
                        pb: w()
                    }
                ],
                pl: [
                    {
                        pl: w()
                    }
                ],
                m: [
                    {
                        m: W()
                    }
                ],
                mx: [
                    {
                        mx: W()
                    }
                ],
                my: [
                    {
                        my: W()
                    }
                ],
                ms: [
                    {
                        ms: W()
                    }
                ],
                me: [
                    {
                        me: W()
                    }
                ],
                mbs: [
                    {
                        mbs: W()
                    }
                ],
                mbe: [
                    {
                        mbe: W()
                    }
                ],
                mt: [
                    {
                        mt: W()
                    }
                ],
                mr: [
                    {
                        mr: W()
                    }
                ],
                mb: [
                    {
                        mb: W()
                    }
                ],
                ml: [
                    {
                        ml: W()
                    }
                ],
                "space-x": [
                    {
                        "space-x": w()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": w()
                    }
                ],
                "space-y-reverse": [
                    "space-y-reverse"
                ],
                size: [
                    {
                        size: Re()
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
                            ...D()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...D()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...D()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...Re()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...Re()
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
                            ...Re()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...Re()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...Re()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...Re()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            ar,
                            Jt
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
                            Ig,
                            _g
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
                            Ql,
                            M
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            Ng,
                            Eg,
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
                            j,
                            M
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            A,
                            "none",
                            j,
                            ya
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...w()
                        ]
                    }
                ],
                "list-image": [
                    {
                        "list-image": [
                            "none",
                            j,
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
                            j,
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
                            ...Ge(),
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
                            j,
                            Jt
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
                            j,
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
                        indent: w()
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
                            j,
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
                            j,
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
                        bg: H()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: Z()
                    }
                ],
                "bg-size": [
                    {
                        bg: Ze()
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
                                    j,
                                    M
                                ],
                                radial: [
                                    "",
                                    j,
                                    M
                                ],
                                conic: [
                                    Et,
                                    j,
                                    M
                                ]
                            },
                            Rg,
                            Pg
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
                        from: Ie()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Ie()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Ie()
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
                        border: Q()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": Q()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": Q()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": Q()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": Q()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": Q()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": Q()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": Q()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": Q()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": Q()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": Q()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": Q()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": Q()
                    }
                ],
                "divide-y-reverse": [
                    "divide-y-reverse"
                ],
                "border-style": [
                    {
                        border: [
                            ...Ge(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Ge(),
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
                            ...Ge(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            A,
                            ar,
                            Jt
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
                            ho,
                            mo
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
                            c,
                            ho,
                            mo
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
                        ring: Q()
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
                            Jt
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
                        "inset-ring": Q()
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
                            ho,
                            mo
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
                            j,
                            M
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...Jn(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": Jn()
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
                            j,
                            M
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
                        "mask-radial-at": x()
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
                        mask: H()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: Z()
                    }
                ],
                "mask-size": [
                    {
                        mask: Ze()
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
                            j,
                            M
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            j,
                            M
                        ]
                    }
                ],
                blur: [
                    {
                        blur: Qr()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            v,
                            ho,
                            mo
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
                            j,
                            M
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            A,
                            j,
                            M
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": Qr()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            A,
                            j,
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
                        "border-spacing": w()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": w()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": w()
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
                            j,
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
                            A,
                            "initial",
                            j,
                            M
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            d,
                            j,
                            M
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            A,
                            j,
                            M
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            f,
                            j,
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
                            g,
                            j,
                            M
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
                        rotate: vn()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": vn()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": vn()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": vn()
                    }
                ],
                scale: [
                    {
                        scale: yn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": yn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": yn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": yn()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: qn()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": qn()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": qn()
                    }
                ],
                transform: [
                    {
                        transform: [
                            j,
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
                        translate: wn()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": wn()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": wn()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": wn()
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
                            j,
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
                        "scroll-m": w()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": w()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": w()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": w()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": w()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": w()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": w()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": w()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": w()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": w()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": w()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": w()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": w()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": w()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": w()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": w()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": w()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": w()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": w()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": w()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": w()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": w()
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
                            j,
                            M
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
                            ar,
                            Jt,
                            ya
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
    }, jg = fg(Mg);
    function mt(...e) {
        return jg(bf(e));
    }
    const Lg = Gf("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function Kl({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? ch : "button";
        return k.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: mt(Lg({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Og = Gf("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), kd = z.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Sa({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return k.jsx(bh, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: mt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: k.jsx(kd.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function Pt({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = z.useContext(kd);
        return k.jsx(Gh, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: mt(Og({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function Yl({ title: e, defaultPosition: t, children: n, className: r }) {
        const [o, l] = z.useState(t), i = z.useRef(!1), s = z.useRef({
            x: 0,
            y: 0
        }), u = z.useCallback((a)=>{
            i.current = !0, s.current = {
                x: a.clientX - o.x,
                y: a.clientY - o.y
            };
            const p = (h)=>{
                if (!i.current) return;
                const v = Math.max(0, h.clientX - s.current.x), y = Math.max(0, h.clientY - s.current.y);
                l({
                    x: v,
                    y
                });
            }, c = ()=>{
                i.current = !1, window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", c);
            };
            window.addEventListener("mousemove", p), window.addEventListener("mouseup", c);
        }, [
            o
        ]);
        return k.jsxs("div", {
            className: mt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: o.x,
                top: o.y
            },
            children: [
                k.jsx("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg",
                    onMouseDown: u,
                    children: e
                }),
                k.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const jt = 16, tn = 48, ka = [
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
    function Ca(e, t) {
        if (e && t) {
            const o = Math.floor(e / jt), l = Math.floor((t - tn) / jt);
            return {
                rows: Math.max(10, l),
                cols: Math.max(10, o)
            };
        }
        const n = Math.floor(window.innerWidth / jt), r = Math.floor((window.innerHeight - tn) / jt);
        return {
            rows: Math.max(10, r),
            cols: Math.max(10, n)
        };
    }
    function Dg({ anywidgetModel: e, widgetWidth: t, widgetHeight: n } = {}) {
        const r = !!e, [o, l] = z.useState(()=>Ca(t, n)), i = z.useRef(null), { grid: s, loading: u, error: a } = th(i, o.rows, o.cols), p = ah(), { tool: c, setTool: h, colorIdx: v, setColorIdx: y, isDrawing: g, drawMode: S, startDrawing: d, stopDrawing: f, lineStart: m, startLine: x, finishLine: E, rectStart: P, startRect: R, finishRect: w, selectedItems: O, setSelectedItems: F, clipboard: le, copy: Ce, paste: De, deleteSelected: lt, selectMode: ue, isSelecting: W, selectBoxStart: Re, selectDragStart: N, startBoxSelection: D, updateBoxSelection: _, finishBoxSelection: H, cancelBoxSelection: Z, startDragSelection: Ze, finishDragSelection: Ie, cancelDragSelection: re, setMousePos: Q, addItemToSelection: Ge, removeItemFromSelection: Jn, hitTestShapes: ie, getSelectedCells: Qr, jsonOutput: vn, tensorOutput: yn, importJson: qn, importTensor: wn, clear: Ws, updateOutputs: Yt, renderSelection: Hs, setGrid: Qs } = p, er = Qr();
        z.useEffect(()=>{
            Qs(s);
        }, [
            s,
            Qs
        ]), z.useEffect(()=>{
            if (r) return;
            const T = ()=>{
                const L = Ca();
                l(L), s && s.resize(L.rows, L.cols);
            };
            return window.addEventListener("resize", T), ()=>window.removeEventListener("resize", T);
        }, [
            s,
            r
        ]);
        const Cd = z.useCallback(()=>{
            if (!e || !s) return;
            const T = s.export_pytorch_tensor(), L = s.export_json();
            try {
                const $ = JSON.parse(T), G = JSON.parse(L);
                e.set("tensor_data", $), e.set("json_data", G), e.save_changes();
            } catch ($) {
                console.error("Failed to send data to Python:", $);
            }
        }, [
            e,
            s
        ]);
        z.useEffect(()=>{
            if (r) return;
            const T = (L)=>{
                L.key === "\\" && h(c === "line" ? "draw" : "line"), L.key === "m" && h(c === "rect" ? "draw" : "rect"), L.key === "s" && h(c === "select" ? "draw" : "select"), (L.key === "Delete" || L.key === "Backspace") && O.length > 0 && (L.preventDefault(), lt()), (L.ctrlKey || L.metaKey) && L.key === "c" && O.length > 0 && (L.preventDefault(), Ce()), (L.ctrlKey || L.metaKey) && L.key === "v" && le && (L.preventDefault(), De());
                const $ = parseInt(L.key);
                $ >= 1 && $ <= 7 && y($ - 1);
            };
            return window.addEventListener("keydown", T), ()=>window.removeEventListener("keydown", T);
        }, [
            c,
            h,
            y,
            O,
            lt,
            Ce,
            De,
            le,
            r
        ]);
        const yl = (T)=>{
            const L = T.currentTarget, $ = L.getBoundingClientRect(), G = L.width / $.width, B = L.height / $.height;
            return {
                x: (T.clientX - $.left) * G,
                y: (T.clientY - $.top) * B
            };
        }, xn = (T)=>{
            const { x: L, y: $ } = yl(T);
            return {
                col: Math.floor(L / jt),
                row: Math.floor($ / jt)
            };
        }, Sn = (T)=>{
            const { x: L, y: $ } = yl(T), G = s?.get_cols() ?? o.cols, B = s?.get_rows() ?? o.rows, _e = Math.max(0, Math.min(G, Math.round(L / jt))), kn = Math.max(0, Math.min(B, Math.round($ / jt)));
            return {
                col: _e,
                row: kn
            };
        }, Ks = (T)=>O.some((L)=>L.type !== T.type ? !1 : L.type === "cell" && T.type === "cell" ? L.row === T.row && L.col === T.col : L.type === "line" && T.type === "line" || L.type === "rect" && T.type === "rect" ? L.index === T.index : !1), Ys = z.useCallback((T)=>{
            if (!s) return;
            s.set_draw_color(v);
            const L = s.get_cols(), $ = s.get_rows();
            if (c === "draw") {
                const { col: G, row: B } = xn(T);
                if (G >= L || B >= $) return;
                const _e = v === 6 ? !1 : !s.get_cell(B, G);
                d(_e), s.set_cell(B, G, _e), Yt();
            } else if (c === "line") {
                const { col: G, row: B } = Sn(T);
                x({
                    row: B,
                    col: G
                }), s.render_with_line(B, G, B, G);
            } else if (c === "rect") {
                const { col: G, row: B } = Sn(T);
                R({
                    row: B,
                    col: G
                }), s.render_with_rect(B, G, B, G);
            } else if (c === "select") {
                const { col: G, row: B } = xn(T), { x: _e, y: kn } = yl(T);
                if (G >= L || B >= $) return;
                const Xt = T.shiftKey, Zt = Vs(O, s), wl = Zt && B >= Zt.minRow && B <= Zt.maxRow && G >= Zt.minCol && G <= Zt.maxCol, pe = ie(_e, kn);
                wl && O.length > 0 && !Xt && !pe ? (Ze({
                    row: B,
                    col: G
                }), Hs()) : pe ? Xt && !Ks(pe) ? Ge(pe) : Xt && Ks(pe) ? Jn(pe) : (F([
                    pe
                ]), Ze({
                    row: B,
                    col: G
                }), s.render(), pe.type === "cell" ? s.highlight_cell(pe.row, pe.col) : pe.type === "line" ? s.highlight_line(pe.index) : pe.type === "rect" && s.highlight_rect(pe.index)) : D({
                    row: B,
                    col: G
                }, Xt);
            }
        }, [
            s,
            c,
            v,
            O,
            er,
            ie,
            d,
            x,
            R,
            D,
            Ze,
            Ge,
            Jn,
            F,
            Yt,
            Hs
        ]), Xs = z.useCallback((T)=>{
            if (!s) return;
            const L = xn(T);
            if (Q(L), !g && !W) return;
            const $ = s.get_cols(), G = s.get_rows();
            if (c === "draw" && g) {
                const { col: B, row: _e } = xn(T);
                if (B >= $ || _e >= G) return;
                s.set_cell(_e, B, S), Yt();
            } else if (c === "line" && m) {
                const { col: B, row: _e } = Sn(T);
                s.render_with_line(m.row, m.col, _e, B);
            } else if (c === "rect" && P) {
                const { col: B, row: _e } = Sn(T);
                s.render_with_rect(P.row, P.col, _e, B);
            } else if (c === "select" && W) {
                const { col: B, row: _e } = xn(T), kn = Math.max(0, Math.min($ - 1, B)), Xt = Math.max(0, Math.min(G - 1, _e));
                if (ue === "box" && Re) _({
                    row: Xt,
                    col: kn
                });
                else if (ue === "drag" && N && O.length > 0) {
                    const Zt = Xt - N.row, wl = kn - N.col;
                    s.render();
                    const pe = [];
                    for (const Fe of O)if (Fe.type === "cell") {
                        const Kr = Fe.row + Zt, Yr = Fe.col + wl;
                        Kr >= 0 && Kr < G && Yr >= 0 && Yr < $ && (s.highlight_cell(Kr, Yr), pe.push({
                            row: Kr,
                            col: Yr
                        }));
                    } else Fe.type === "line" ? s.highlight_line(Fe.index) : Fe.type === "rect" && s.highlight_rect(Fe.index);
                    if (pe.length > 1) {
                        const Fe = Uf(pe);
                        Fe && s.draw_selection_box(Fe.minRow, Fe.minCol, Fe.maxRow + 1, Fe.maxCol + 1);
                    }
                }
            }
        }, [
            s,
            c,
            g,
            W,
            S,
            m,
            P,
            ue,
            Re,
            N,
            O,
            Q,
            _,
            Yt
        ]), Zs = z.useCallback((T)=>{
            if (s) {
                if (c === "draw") f();
                else if (c === "line") {
                    if (m) {
                        const { col: L, row: $ } = Sn(T);
                        s.draw_line(m.row, m.col, $, L), Yt();
                    }
                    E();
                } else if (c === "rect") {
                    if (P) {
                        const { col: L, row: $ } = Sn(T);
                        s.draw_rect(P.row, P.col, $, L), Yt();
                    }
                    w();
                } else if (c === "select") {
                    const { col: L, row: $ } = xn(T);
                    ue === "box" ? H({
                        row: $,
                        col: L
                    }) : ue === "drag" && Ie({
                        row: $,
                        col: L
                    });
                }
            }
        }, [
            s,
            c,
            m,
            P,
            ue,
            f,
            E,
            w,
            H,
            Ie,
            Yt
        ]), Js = z.useCallback(()=>{
            c === "draw" ? f() : c === "line" ? (s && s.render(), E()) : c === "rect" ? (s && s.render(), w()) : c === "select" && (ue === "box" ? Z() : ue === "drag" && re());
        }, [
            s,
            c,
            ue,
            f,
            E,
            w,
            Z,
            re
        ]);
        return a ? k.jsx("div", {
            className: mt("flex items-center justify-center bg-gray-100", r ? "w-full h-full" : "min-h-screen"),
            children: k.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: k.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        a
                    ]
                })
            })
        }) : r ? k.jsxs("div", {
            className: "relative bg-gray-50 border rounded overflow-hidden",
            style: {
                width: t,
                height: n
            },
            children: [
                k.jsxs("header", {
                    className: "absolute top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        k.jsx("h1", {
                            className: "text-lg font-bold",
                            children: "Grid Draw"
                        }),
                        u && k.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        k.jsx("div", {
                            className: "ml-auto",
                            children: k.jsx(Kl, {
                                variant: "default",
                                onClick: Cd,
                                disabled: u,
                                size: "sm",
                                children: "Send to Python"
                            })
                        })
                    ]
                }),
                k.jsx("canvas", {
                    ref: i,
                    className: mt("absolute left-0 right-0 bottom-0", u && "opacity-50"),
                    style: {
                        top: tn,
                        cursor: u ? "wait" : "crosshair"
                    },
                    onMouseDown: Ys,
                    onMouseMove: Xs,
                    onMouseUp: Zs,
                    onMouseLeave: Js
                }),
                k.jsx(Yl, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: tn + 20
                    },
                    children: k.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            k.jsxs("div", {
                                children: [
                                    k.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    k.jsxs(Sa, {
                                        type: "single",
                                        value: c,
                                        onValueChange: (T)=>T && h(T),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            k.jsx(Pt, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            k.jsx(Pt, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            k.jsx(Pt, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            k.jsx(Pt, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            k.jsxs("div", {
                                children: [
                                    k.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    k.jsx("div", {
                                        className: "flex gap-1",
                                        children: ka.map((T, L)=>k.jsx("button", {
                                                onClick: ()=>y(L),
                                                title: T.name,
                                                className: mt("w-6 h-6 rounded border-2 transition-all", v === L ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", T.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: T.hex ?? "transparent",
                                                    backgroundImage: T.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: T.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: T.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, L))
                                    })
                                ]
                            }),
                            k.jsx(Kl, {
                                variant: "destructive",
                                onClick: Ws,
                                disabled: u,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            })
                        ]
                    })
                })
            ]
        }) : k.jsxs(k.Fragment, {
            children: [
                k.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        k.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        u && k.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        })
                    ]
                }),
                k.jsx("canvas", {
                    ref: i,
                    className: mt("fixed left-0 right-0 bottom-0", u && "opacity-50"),
                    style: {
                        top: tn,
                        cursor: u ? "wait" : "crosshair"
                    },
                    onMouseDown: Ys,
                    onMouseMove: Xs,
                    onMouseUp: Zs,
                    onMouseLeave: Js
                }),
                k.jsx(Yl, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: tn + 20
                    },
                    children: k.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            k.jsxs("div", {
                                children: [
                                    k.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    k.jsxs(Sa, {
                                        type: "single",
                                        value: c,
                                        onValueChange: (T)=>T && h(T),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            k.jsx(Pt, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            k.jsx(Pt, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            k.jsx(Pt, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            k.jsx(Pt, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            k.jsxs("div", {
                                children: [
                                    k.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    k.jsx("div", {
                                        className: "flex gap-1",
                                        children: ka.map((T, L)=>k.jsx("button", {
                                                onClick: ()=>y(L),
                                                title: `${L + 1}: ${T.name}`,
                                                className: mt("w-6 h-6 rounded border-2 transition-all", v === L ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", T.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: T.hex ?? "transparent",
                                                    backgroundImage: T.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: T.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: T.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, L))
                                    })
                                ]
                            }),
                            k.jsx(Kl, {
                                variant: "destructive",
                                onClick: Ws,
                                disabled: u,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            k.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, s select, 1-7 colors"
                            })
                        ]
                    })
                }),
                k.jsx(Yl, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: tn + 20
                    },
                    children: k.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            er.length > 0 && k.jsxs(k.Fragment, {
                                children: [
                                    k.jsxs("div", {
                                        children: [
                                            k.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            k.jsx("textarea", {
                                                value: vn,
                                                onChange: (T)=>qn(T.target.value),
                                                placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    }),
                                    k.jsxs("div", {
                                        children: [
                                            k.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "2D Array (black = 1)"
                                            }),
                                            k.jsx("textarea", {
                                                value: yn,
                                                onChange: (T)=>wn(T.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            k.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: O.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${O.length} item${O.length !== 1 ? "s" : ""} selected${er.length > 0 ? ` (${er.length} cell${er.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                })
            ]
        });
    }
    function Fg() {
        return k.jsx("div", {
            className: "grid-draw-app",
            children: k.jsx(Dg, {})
        });
    }
    const _a = document.getElementById("grid-draw-root");
    _a && Xl.createRoot(_a).render(k.jsx(J.StrictMode, {
        children: k.jsx(Fg, {})
    }));
})();
