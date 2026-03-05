(async ()=>{
    function dd(e, t) {
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
    function pd(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var ca = {
        exports: {}
    }, Xo = {}, fa = {
        exports: {}
    }, B = {};
    var jr = Symbol.for("react.element"), md = Symbol.for("react.portal"), hd = Symbol.for("react.fragment"), gd = Symbol.for("react.strict_mode"), vd = Symbol.for("react.profiler"), yd = Symbol.for("react.provider"), wd = Symbol.for("react.context"), xd = Symbol.for("react.forward_ref"), kd = Symbol.for("react.suspense"), Sd = Symbol.for("react.memo"), Cd = Symbol.for("react.lazy"), As = Symbol.iterator;
    function Ed(e) {
        return e === null || typeof e != "object" ? null : (e = As && e[As] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var da = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, pa = Object.assign, ma = {};
    function Gn(e, t, n) {
        this.props = e, this.context = t, this.refs = ma, this.updater = n || da;
    }
    Gn.prototype.isReactComponent = {};
    Gn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Gn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function ha() {}
    ha.prototype = Gn.prototype;
    function Ui(e, t, n) {
        this.props = e, this.context = t, this.refs = ma, this.updater = n || da;
    }
    var Bi = Ui.prototype = new ha;
    Bi.constructor = Ui;
    pa(Bi, Gn.prototype);
    Bi.isPureReactComponent = !0;
    var Us = Array.isArray, ga = Object.prototype.hasOwnProperty, Vi = {
        current: null
    }, va = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ya(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)ga.call(t, r) && !va.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var u = Array(s), a = 0; a < s; a++)u[a] = arguments[a + 2];
            o.children = u;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: jr,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Vi.current
        };
    }
    function _d(e, t) {
        return {
            $$typeof: jr,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function $i(e) {
        return typeof e == "object" && e !== null && e.$$typeof === jr;
    }
    function Pd(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Bs = /\/+/g;
    function hl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Pd("" + e.key) : t.toString(36);
    }
    function ao(e, t, n, r, o) {
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
                    case jr:
                    case md:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + hl(i, 0) : r, Us(o) ? (n = "", e != null && (n = e.replace(Bs, "$&/") + "/"), ao(o, t, n, "", function(a) {
            return a;
        })) : o != null && ($i(o) && (o = _d(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Bs, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Us(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var u = r + hl(l, s);
            i += ao(l, t, n, u, o);
        }
        else if (u = Ed(e), typeof u == "function") for(e = u.call(e), s = 0; !(l = e.next()).done;)l = l.value, u = r + hl(l, s++), i += ao(l, t, n, u, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Wr(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return ao(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Nd(e) {
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
    var _e = {
        current: null
    }, co = {
        transition: null
    }, zd = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: co,
        ReactCurrentOwner: Vi
    };
    function wa() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    B.Children = {
        map: Wr,
        forEach: function(e, t, n) {
            Wr(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Wr(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Wr(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!$i(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    B.Component = Gn;
    B.Fragment = hd;
    B.Profiler = vd;
    B.PureComponent = Ui;
    B.StrictMode = gd;
    B.Suspense = kd;
    B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
    B.act = wa;
    B.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = pa({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Vi.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(u in t)ga.call(t, u) && !va.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (u === 1) r.children = n;
        else if (1 < u) {
            s = Array(u);
            for(var a = 0; a < u; a++)s[a] = arguments[a + 2];
            r.children = s;
        }
        return {
            $$typeof: jr,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    B.createContext = function(e) {
        return e = {
            $$typeof: wd,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: yd,
            _context: e
        }, e.Consumer = e;
    };
    B.createElement = ya;
    B.createFactory = function(e) {
        var t = ya.bind(null, e);
        return t.type = e, t;
    };
    B.createRef = function() {
        return {
            current: null
        };
    };
    B.forwardRef = function(e) {
        return {
            $$typeof: xd,
            render: e
        };
    };
    B.isValidElement = $i;
    B.lazy = function(e) {
        return {
            $$typeof: Cd,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Nd
        };
    };
    B.memo = function(e, t) {
        return {
            $$typeof: Sd,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    B.startTransition = function(e) {
        var t = co.transition;
        co.transition = {};
        try {
            e();
        } finally{
            co.transition = t;
        }
    };
    B.unstable_act = wa;
    B.useCallback = function(e, t) {
        return _e.current.useCallback(e, t);
    };
    B.useContext = function(e) {
        return _e.current.useContext(e);
    };
    B.useDebugValue = function() {};
    B.useDeferredValue = function(e) {
        return _e.current.useDeferredValue(e);
    };
    B.useEffect = function(e, t) {
        return _e.current.useEffect(e, t);
    };
    B.useId = function() {
        return _e.current.useId();
    };
    B.useImperativeHandle = function(e, t, n) {
        return _e.current.useImperativeHandle(e, t, n);
    };
    B.useInsertionEffect = function(e, t) {
        return _e.current.useInsertionEffect(e, t);
    };
    B.useLayoutEffect = function(e, t) {
        return _e.current.useLayoutEffect(e, t);
    };
    B.useMemo = function(e, t) {
        return _e.current.useMemo(e, t);
    };
    B.useReducer = function(e, t, n) {
        return _e.current.useReducer(e, t, n);
    };
    B.useRef = function(e) {
        return _e.current.useRef(e);
    };
    B.useState = function(e) {
        return _e.current.useState(e);
    };
    B.useSyncExternalStore = function(e, t, n) {
        return _e.current.useSyncExternalStore(e, t, n);
    };
    B.useTransition = function() {
        return _e.current.useTransition();
    };
    B.version = "18.3.1";
    fa.exports = B;
    var N = fa.exports;
    const q = pd(N), xa = dd({
        __proto__: null,
        default: q
    }, [
        N
    ]);
    var Rd = N, Td = Symbol.for("react.element"), Md = Symbol.for("react.fragment"), Id = Object.prototype.hasOwnProperty, Ld = Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ka(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Id.call(t, r) && !jd.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: Td,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Ld.current
        };
    }
    Xo.Fragment = Md;
    Xo.jsx = ka;
    Xo.jsxs = ka;
    ca.exports = Xo;
    var P = ca.exports, Wl = {}, Sa = {
        exports: {}
    }, Be = {}, Ca = {
        exports: {}
    }, Ea = {};
    (function(e) {
        function t(R, L) {
            var S = R.length;
            R.push(L);
            e: for(; 0 < S;){
                var b = S - 1 >>> 1, J = R[b];
                if (0 < o(J, L)) R[b] = L, R[S] = J, S = b;
                else break e;
            }
        }
        function n(R) {
            return R.length === 0 ? null : R[0];
        }
        function r(R) {
            if (R.length === 0) return null;
            var L = R[0], S = R.pop();
            if (S !== L) {
                R[0] = S;
                e: for(var b = 0, J = R.length, ot = J >>> 1; b < ot;){
                    var ze = 2 * (b + 1) - 1, le = R[ze], Y = ze + 1, Ye = R[Y];
                    if (0 > o(le, S)) Y < J && 0 > o(Ye, le) ? (R[b] = Ye, R[Y] = S, b = Y) : (R[b] = le, R[ze] = S, b = ze);
                    else if (Y < J && 0 > o(Ye, S)) R[b] = Ye, R[Y] = S, b = Y;
                    else break e;
                }
            }
            return L;
        }
        function o(R, L) {
            var S = R.sortIndex - L.sortIndex;
            return S !== 0 ? S : R.id - L.id;
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
        var u = [], a = [], m = 1, d = null, h = 3, y = !1, x = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function p(R) {
            for(var L = n(a); L !== null;){
                if (L.callback === null) r(a);
                else if (L.startTime <= R) r(a), L.sortIndex = L.expirationTime, t(u, L);
                else break;
                L = n(a);
            }
        }
        function g(R) {
            if (w = !1, p(R), !x) if (n(u) !== null) x = !0, Q(C);
            else {
                var L = n(a);
                L !== null && Ne(g, L.startTime - R);
            }
        }
        function C(R, L) {
            x = !1, w && (w = !1, f(v), v = -1), y = !0;
            var S = h;
            try {
                for(p(L), d = n(u); d !== null && (!(d.expirationTime > L) || R && !H());){
                    var b = d.callback;
                    if (typeof b == "function") {
                        d.callback = null, h = d.priorityLevel;
                        var J = b(d.expirationTime <= L);
                        L = e.unstable_now(), typeof J == "function" ? d.callback = J : d === n(u) && r(u), p(L);
                    } else r(u);
                    d = n(u);
                }
                if (d !== null) var ot = !0;
                else {
                    var ze = n(a);
                    ze !== null && Ne(g, ze.startTime - L), ot = !1;
                }
                return ot;
            } finally{
                d = null, h = S, y = !1;
            }
        }
        var _ = !1, z = null, v = -1, F = 5, D = -1;
        function H() {
            return !(e.unstable_now() - D < F);
        }
        function ye() {
            if (z !== null) {
                var R = e.unstable_now();
                D = R;
                var L = !0;
                try {
                    L = z(!0, R);
                } finally{
                    L ? je() : (_ = !1, z = null);
                }
            } else _ = !1;
        }
        var je;
        if (typeof c == "function") je = function() {
            c(ye);
        };
        else if (typeof MessageChannel < "u") {
            var $e = new MessageChannel, Oe = $e.port2;
            $e.port1.onmessage = ye, je = function() {
                Oe.postMessage(null);
            };
        } else je = function() {
            E(ye, 0);
        };
        function Q(R) {
            z = R, _ || (_ = !0, je());
        }
        function Ne(R, L) {
            v = E(function() {
                R(e.unstable_now());
            }, L);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
            R.callback = null;
        }, e.unstable_continueExecution = function() {
            x || y || (x = !0, Q(C));
        }, e.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < R ? Math.floor(1e3 / R) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return h;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(u);
        }, e.unstable_next = function(R) {
            switch(h){
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = h;
            }
            var S = h;
            h = L;
            try {
                return R();
            } finally{
                h = S;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, L) {
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
            var S = h;
            h = R;
            try {
                return L();
            } finally{
                h = S;
            }
        }, e.unstable_scheduleCallback = function(R, L, S) {
            var b = e.unstable_now();
            switch(typeof S == "object" && S !== null ? (S = S.delay, S = typeof S == "number" && 0 < S ? b + S : b) : S = b, R){
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
            return J = S + J, R = {
                id: m++,
                callback: L,
                priorityLevel: R,
                startTime: S,
                expirationTime: J,
                sortIndex: -1
            }, S > b ? (R.sortIndex = S, t(a, R), n(u) === null && R === n(a) && (w ? (f(v), v = -1) : w = !0, Ne(g, S - b))) : (R.sortIndex = J, t(u, R), x || y || (x = !0, Q(C))), R;
        }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(R) {
            var L = h;
            return function() {
                var S = h;
                h = L;
                try {
                    return R.apply(this, arguments);
                } finally{
                    h = S;
                }
            };
        };
    })(Ea);
    Ca.exports = Ea;
    var Od = Ca.exports;
    var Dd = N, Ue = Od;
    function k(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var _a = new Set, gr = {};
    function fn(e, t) {
        Dn(e, t), Dn(e + "Capture", t);
    }
    function Dn(e, t) {
        for(gr[e] = t, e = 0; e < t.length; e++)_a.add(t[e]);
    }
    var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Fd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vs = {}, $s = {};
    function Ad(e) {
        return Gl.call($s, e) ? !0 : Gl.call(Vs, e) ? !1 : Fd.test(e) ? $s[e] = !0 : (Vs[e] = !0, !1);
    }
    function Ud(e, t, n, r) {
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
    function Bd(e, t, n, r) {
        if (t === null || typeof t > "u" || Ud(e, t, n, r)) return !0;
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
    function Pe(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var ve = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ve[e] = new Pe(e, 0, !1, e, null, !1, !1);
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
        ve[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ve[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Wi = /[\-:]([a-z])/g;
    function Gi(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Wi, Gi);
        ve[t] = new Pe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Wi, Gi);
        ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Wi, Gi);
        ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ve.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Hi(e, t, n, r) {
        var o = ve.hasOwnProperty(t) ? ve[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bd(t, n, o, r) && (n = null), r || o === null ? Ad(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var kt = Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gr = Symbol.for("react.element"), vn = Symbol.for("react.portal"), yn = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), Hl = Symbol.for("react.profiler"), Pa = Symbol.for("react.provider"), Na = Symbol.for("react.context"), Qi = Symbol.for("react.forward_ref"), bl = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), Ki = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), za = Symbol.for("react.offscreen"), Ws = Symbol.iterator;
    function Qn(e) {
        return e === null || typeof e != "object" ? null : (e = Ws && e[Ws] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var re = Object.assign, gl;
    function nr(e) {
        if (gl === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gl = t && t[1] || "";
        }
        return `
` + gl + e;
    }
    var vl = !1;
    function yl(e, t) {
        if (!e || vl) return "";
        vl = !0;
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
            vl = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? nr(e) : "";
    }
    function Vd(e) {
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
                return e = yl(e.type, !1), e;
            case 11:
                return e = yl(e.type.render, !1), e;
            case 1:
                return e = yl(e.type, !0), e;
            default:
                return "";
        }
    }
    function Kl(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case yn:
                return "Fragment";
            case vn:
                return "Portal";
            case Hl:
                return "Profiler";
            case bi:
                return "StrictMode";
            case bl:
                return "Suspense";
            case Ql:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Na:
                return (e.displayName || "Context") + ".Consumer";
            case Pa:
                return (e._context.displayName || "Context") + ".Provider";
            case Qi:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Ki:
                return t = e.displayName || null, t !== null ? t : Kl(e.type) || "Memo";
            case Pt:
                t = e._payload, e = e._init;
                try {
                    return Kl(e(t));
                } catch  {}
        }
        return null;
    }
    function $d(e) {
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
                return Kl(t);
            case 8:
                return t === bi ? "StrictMode" : "Mode";
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
    function Bt(e) {
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
    function Ra(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Wd(e) {
        var t = Ra(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Hr(e) {
        e._valueTracker || (e._valueTracker = Wd(e));
    }
    function Ta(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Ra(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function Co(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Yl(e, t) {
        var n = t.checked;
        return re({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Gs(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = Bt(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Ma(e, t) {
        t = t.checked, t != null && Hi(e, "checked", t, !1);
    }
    function Xl(e, t) {
        Ma(e, t);
        var n = Bt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Zl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zl(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Hs(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Zl(e, t, n) {
        (t !== "number" || Co(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var rr = Array.isArray;
    function Tn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + Bt(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Jl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
        return re({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function bs(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(k(92));
                if (rr(n)) {
                    if (1 < n.length) throw Error(k(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: Bt(n)
        };
    }
    function Ia(e, t) {
        var n = Bt(t.value), r = Bt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Qs(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function La(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function ql(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? La(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var br, ja = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(br = br || document.createElement("div"), br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = br.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function vr(e, t) {
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
    }, Gd = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(ir).forEach(function(e) {
        Gd.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e];
        });
    });
    function Oa(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px";
    }
    function Da(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Oa(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Hd = re({
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
    function ei(e, t) {
        if (t) {
            if (Hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(k(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(k(62));
        }
    }
    function ti(e, t) {
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
    var ni = null;
    function Yi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ri = null, Mn = null, In = null;
    function Ks(e) {
        if (e = Fr(e)) {
            if (typeof ri != "function") throw Error(k(280));
            var t = e.stateNode;
            t && (t = tl(t), ri(e.stateNode, e.type, t));
        }
    }
    function Fa(e) {
        Mn ? In ? In.push(e) : In = [
            e
        ] : Mn = e;
    }
    function Aa() {
        if (Mn) {
            var e = Mn, t = In;
            if (In = Mn = null, Ks(e), t) for(e = 0; e < t.length; e++)Ks(t[e]);
        }
    }
    function Ua(e, t) {
        return e(t);
    }
    function Ba() {}
    var wl = !1;
    function Va(e, t, n) {
        if (wl) return e(t, n);
        wl = !0;
        try {
            return Ua(e, t, n);
        } finally{
            wl = !1, (Mn !== null || In !== null) && (Ba(), Aa());
        }
    }
    function yr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = tl(n);
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
    var oi = !1;
    if (vt) try {
        var Kn = {};
        Object.defineProperty(Kn, "passive", {
            get: function() {
                oi = !0;
            }
        }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
    } catch  {
        oi = !1;
    }
    function bd(e, t, n, r, o, l, i, s, u) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (m) {
            this.onError(m);
        }
    }
    var sr = !1, Eo = null, _o = !1, li = null, Qd = {
        onError: function(e) {
            sr = !0, Eo = e;
        }
    };
    function Kd(e, t, n, r, o, l, i, s, u) {
        sr = !1, Eo = null, bd.apply(Qd, arguments);
    }
    function Yd(e, t, n, r, o, l, i, s, u) {
        if (Kd.apply(this, arguments), sr) {
            if (sr) {
                var a = Eo;
                sr = !1, Eo = null;
            } else throw Error(k(198));
            _o || (_o = !0, li = a);
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
    function $a(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Ys(e) {
        if (dn(e) !== e) throw Error(k(188));
    }
    function Xd(e) {
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
                    if (l === n) return Ys(o), e;
                    if (l === r) return Ys(o), t;
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
    function Wa(e) {
        return e = Xd(e), e !== null ? Ga(e) : null;
    }
    function Ga(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Ga(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Ha = Ue.unstable_scheduleCallback, Xs = Ue.unstable_cancelCallback, Zd = Ue.unstable_shouldYield, Jd = Ue.unstable_requestPaint, ie = Ue.unstable_now, qd = Ue.unstable_getCurrentPriorityLevel, Xi = Ue.unstable_ImmediatePriority, ba = Ue.unstable_UserBlockingPriority, Po = Ue.unstable_NormalPriority, ep = Ue.unstable_LowPriority, Qa = Ue.unstable_IdlePriority, Zo = null, at = null;
    function tp(e) {
        if (at && typeof at.onCommitFiberRoot == "function") try {
            at.onCommitFiberRoot(Zo, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var tt = Math.clz32 ? Math.clz32 : op, np = Math.log, rp = Math.LN2;
    function op(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (np(e) / rp | 0) | 0;
    }
    var Qr = 64, Kr = 4194304;
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
    function No(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = or(s) : (l &= i, l !== 0 && (r = or(l)));
        } else i = n & ~o, i !== 0 ? r = or(i) : l !== 0 && (r = or(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - tt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function lp(e, t) {
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
    function ip(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - tt(l), s = 1 << i, u = o[i];
            u === -1 ? (!(s & n) || s & r) && (o[i] = lp(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ii(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ka() {
        var e = Qr;
        return Qr <<= 1, !(Qr & 4194240) && (Qr = 64), e;
    }
    function xl(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function Or(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
    }
    function sp(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - tt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Zi(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - tt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var G = 0;
    function Ya(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Xa, Ji, Za, Ja, qa, si = !1, Yr = [], It = null, Lt = null, jt = null, wr = new Map, xr = new Map, zt = [], up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Zs(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                It = null;
                break;
            case "dragenter":
            case "dragleave":
                Lt = null;
                break;
            case "mouseover":
            case "mouseout":
                jt = null;
                break;
            case "pointerover":
            case "pointerout":
                wr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                xr.delete(t.pointerId);
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
        }, t !== null && (t = Fr(t), t !== null && Ji(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ap(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return It = Yn(It, e, t, n, r, o), !0;
            case "dragenter":
                return Lt = Yn(Lt, e, t, n, r, o), !0;
            case "mouseover":
                return jt = Yn(jt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return wr.set(l, Yn(wr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, xr.set(l, Yn(xr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function ec(e) {
        var t = qt(e.target);
        if (t !== null) {
            var n = dn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = $a(n), t !== null) {
                        e.blockedOn = t, qa(e.priority, function() {
                            Za(n);
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
    function fo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ni = r, n.target.dispatchEvent(r), ni = null;
            } else return t = Fr(n), t !== null && Ji(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Js(e, t, n) {
        fo(e) && n.delete(t);
    }
    function cp() {
        si = !1, It !== null && fo(It) && (It = null), Lt !== null && fo(Lt) && (Lt = null), jt !== null && fo(jt) && (jt = null), wr.forEach(Js), xr.forEach(Js);
    }
    function Xn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, si || (si = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, cp)));
    }
    function kr(e) {
        function t(o) {
            return Xn(o, e);
        }
        if (0 < Yr.length) {
            Xn(Yr[0], e);
            for(var n = 1; n < Yr.length; n++){
                var r = Yr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(It !== null && Xn(It, e), Lt !== null && Xn(Lt, e), jt !== null && Xn(jt, e), wr.forEach(t), xr.forEach(t), n = 0; n < zt.length; n++)r = zt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < zt.length && (n = zt[0], n.blockedOn === null);)ec(n), n.blockedOn === null && zt.shift();
    }
    var Ln = kt.ReactCurrentBatchConfig, zo = !0;
    function fp(e, t, n, r) {
        var o = G, l = Ln.transition;
        Ln.transition = null;
        try {
            G = 1, qi(e, t, n, r);
        } finally{
            G = o, Ln.transition = l;
        }
    }
    function dp(e, t, n, r) {
        var o = G, l = Ln.transition;
        Ln.transition = null;
        try {
            G = 4, qi(e, t, n, r);
        } finally{
            G = o, Ln.transition = l;
        }
    }
    function qi(e, t, n, r) {
        if (zo) {
            var o = ui(e, t, n, r);
            if (o === null) Tl(e, t, r, Ro, n), Zs(e, r);
            else if (ap(o, e, t, n, r)) r.stopPropagation();
            else if (Zs(e, r), t & 4 && -1 < up.indexOf(e)) {
                for(; o !== null;){
                    var l = Fr(o);
                    if (l !== null && Xa(l), l = ui(e, t, n, r), l === null && Tl(e, t, r, Ro, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Tl(e, t, r, null, n);
        }
    }
    var Ro = null;
    function ui(e, t, n, r) {
        if (Ro = null, e = Yi(r), e = qt(e), e !== null) if (t = dn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = $a(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return Ro = e, null;
    }
    function tc(e) {
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
                switch(qd()){
                    case Xi:
                        return 1;
                    case ba:
                        return 4;
                    case Po:
                    case ep:
                        return 16;
                    case Qa:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Tt = null, es = null, po = null;
    function nc() {
        if (po) return po;
        var e, t = es, n = t.length, r, o = "value" in Tt ? Tt.value : Tt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return po = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function mo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Xr() {
        return !0;
    }
    function qs() {
        return !1;
    }
    function Ve(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Xr : qs, this.isPropagationStopped = qs, this;
        }
        return re(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xr);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xr);
            },
            persist: function() {},
            isPersistent: Xr
        }), t;
    }
    var Hn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ts = Ve(Hn), Dr = re({}, Hn, {
        view: 0,
        detail: 0
    }), pp = Ve(Dr), kl, Sl, Zn, Jo = re({}, Dr, {
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
        getModifierState: ns,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (kl = e.screenX - Zn.screenX, Sl = e.screenY - Zn.screenY) : Sl = kl = 0, Zn = e), kl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Sl;
        }
    }), eu = Ve(Jo), mp = re({}, Jo, {
        dataTransfer: 0
    }), hp = Ve(mp), gp = re({}, Dr, {
        relatedTarget: 0
    }), Cl = Ve(gp), vp = re({}, Hn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), yp = Ve(vp), wp = re({}, Hn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), xp = Ve(wp), kp = re({}, Hn, {
        data: 0
    }), tu = Ve(kp), Sp = {
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
    }, Cp = {
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
    }, Ep = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function _p(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ep[e]) ? !!t[e] : !1;
    }
    function ns() {
        return _p;
    }
    var Pp = re({}, Dr, {
        key: function(e) {
            if (e.key) {
                var t = Sp[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cp[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ns,
        charCode: function(e) {
            return e.type === "keypress" ? mo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Np = Ve(Pp), zp = re({}, Jo, {
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
    }), nu = Ve(zp), Rp = re({}, Dr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ns
    }), Tp = Ve(Rp), Mp = re({}, Hn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ip = Ve(Mp), Lp = re({}, Jo, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), jp = Ve(Lp), Op = [
        9,
        13,
        27,
        32
    ], rs = vt && "CompositionEvent" in window, ur = null;
    vt && "documentMode" in document && (ur = document.documentMode);
    var Dp = vt && "TextEvent" in window && !ur, rc = vt && (!rs || ur && 8 < ur && 11 >= ur), ru = " ", ou = !1;
    function oc(e, t) {
        switch(e){
            case "keyup":
                return Op.indexOf(t.keyCode) !== -1;
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
    function lc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var wn = !1;
    function Fp(e, t) {
        switch(e){
            case "compositionend":
                return lc(t);
            case "keypress":
                return t.which !== 32 ? null : (ou = !0, ru);
            case "textInput":
                return e = t.data, e === ru && ou ? null : e;
            default:
                return null;
        }
    }
    function Ap(e, t) {
        if (wn) return e === "compositionend" || !rs && oc(e, t) ? (e = nc(), po = es = Tt = null, wn = !1, e) : null;
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
                return rc && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Up = {
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
    function lu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Up[e.type] : t === "textarea";
    }
    function ic(e, t, n, r) {
        Fa(r), t = To(t, "onChange"), 0 < t.length && (n = new ts("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var ar = null, Sr = null;
    function Bp(e) {
        vc(e, 0);
    }
    function qo(e) {
        var t = Sn(e);
        if (Ta(t)) return e;
    }
    function Vp(e, t) {
        if (e === "change") return t;
    }
    var sc = !1;
    if (vt) {
        var El;
        if (vt) {
            var _l = "oninput" in document;
            if (!_l) {
                var iu = document.createElement("div");
                iu.setAttribute("oninput", "return;"), _l = typeof iu.oninput == "function";
            }
            El = _l;
        } else El = !1;
        sc = El && (!document.documentMode || 9 < document.documentMode);
    }
    function su() {
        ar && (ar.detachEvent("onpropertychange", uc), Sr = ar = null);
    }
    function uc(e) {
        if (e.propertyName === "value" && qo(Sr)) {
            var t = [];
            ic(t, Sr, e, Yi(e)), Va(Bp, t);
        }
    }
    function $p(e, t, n) {
        e === "focusin" ? (su(), ar = t, Sr = n, ar.attachEvent("onpropertychange", uc)) : e === "focusout" && su();
    }
    function Wp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return qo(Sr);
    }
    function Gp(e, t) {
        if (e === "click") return qo(t);
    }
    function Hp(e, t) {
        if (e === "input" || e === "change") return qo(t);
    }
    function bp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var rt = typeof Object.is == "function" ? Object.is : bp;
    function Cr(e, t) {
        if (rt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Gl.call(t, o) || !rt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function uu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function au(e, t) {
        var n = uu(e);
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
            n = uu(n);
        }
    }
    function ac(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ac(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function cc() {
        for(var e = window, t = Co(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = Co(e.document);
        }
        return t;
    }
    function os(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Qp(e) {
        var t = cc(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ac(n.ownerDocument.documentElement, n)) {
            if (r !== null && os(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = au(n, l);
                    var i = au(n, r);
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
    var Kp = vt && "documentMode" in document && 11 >= document.documentMode, xn = null, ai = null, cr = null, ci = !1;
    function cu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ci || xn == null || xn !== Co(r) || (r = xn, "selectionStart" in r && os(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), cr && Cr(cr, r) || (cr = r, r = To(ai, "onSelect"), 0 < r.length && (t = new ts("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = xn)));
    }
    function Zr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var kn = {
        animationend: Zr("Animation", "AnimationEnd"),
        animationiteration: Zr("Animation", "AnimationIteration"),
        animationstart: Zr("Animation", "AnimationStart"),
        transitionend: Zr("Transition", "TransitionEnd")
    }, Pl = {}, fc = {};
    vt && (fc = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
    function el(e) {
        if (Pl[e]) return Pl[e];
        if (!kn[e]) return e;
        var t = kn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in fc) return Pl[e] = t[n];
        return e;
    }
    var dc = el("animationend"), pc = el("animationiteration"), mc = el("animationstart"), hc = el("transitionend"), gc = new Map, fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function $t(e, t) {
        gc.set(e, t), fn(t, [
            e
        ]);
    }
    for(var Nl = 0; Nl < fu.length; Nl++){
        var zl = fu[Nl], Yp = zl.toLowerCase(), Xp = zl[0].toUpperCase() + zl.slice(1);
        $t(Yp, "on" + Xp);
    }
    $t(dc, "onAnimationEnd");
    $t(pc, "onAnimationIteration");
    $t(mc, "onAnimationStart");
    $t("dblclick", "onDoubleClick");
    $t("focusin", "onFocus");
    $t("focusout", "onBlur");
    $t(hc, "onTransitionEnd");
    Dn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    Dn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    Dn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    Dn("onPointerLeave", [
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
    var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
    function du(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Yd(r, t, void 0, e), e.currentTarget = null;
    }
    function vc(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], u = s.instance, a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    du(o, s, a), l = u;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    du(o, s, a), l = u;
                }
            }
        }
        if (_o) throw e = li, _o = !1, li = null, e;
    }
    function X(e, t) {
        var n = t[hi];
        n === void 0 && (n = t[hi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (yc(t, e, 2, !1), n.add(r));
    }
    function Rl(e, t, n) {
        var r = 0;
        t && (r |= 4), yc(n, e, r, t);
    }
    var Jr = "_reactListening" + Math.random().toString(36).slice(2);
    function Er(e) {
        if (!e[Jr]) {
            e[Jr] = !0, _a.forEach(function(n) {
                n !== "selectionchange" && (Zp.has(n) || Rl(n, !1, e), Rl(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Jr] || (t[Jr] = !0, Rl("selectionchange", !1, t));
        }
    }
    function yc(e, t, n, r) {
        switch(tc(t)){
            case 1:
                var o = fp;
                break;
            case 4:
                o = dp;
                break;
            default:
                o = qi;
        }
        n = o.bind(null, t, n, e), o = void 0, !oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function Tl(e, t, n, r, o) {
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
        Va(function() {
            var a = l, m = Yi(n), d = [];
            e: {
                var h = gc.get(e);
                if (h !== void 0) {
                    var y = ts, x = e;
                    switch(e){
                        case "keypress":
                            if (mo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            y = Np;
                            break;
                        case "focusin":
                            x = "focus", y = Cl;
                            break;
                        case "focusout":
                            x = "blur", y = Cl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            y = Cl;
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
                            y = eu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            y = hp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            y = Tp;
                            break;
                        case dc:
                        case pc:
                        case mc:
                            y = yp;
                            break;
                        case hc:
                            y = Ip;
                            break;
                        case "scroll":
                            y = pp;
                            break;
                        case "wheel":
                            y = jp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            y = xp;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            y = nu;
                    }
                    var w = (t & 4) !== 0, E = !w && e === "scroll", f = w ? h !== null ? h + "Capture" : null : h;
                    w = [];
                    for(var c = a, p; c !== null;){
                        p = c;
                        var g = p.stateNode;
                        if (p.tag === 5 && g !== null && (p = g, f !== null && (g = yr(c, f), g != null && w.push(_r(c, g, p)))), E) break;
                        c = c.return;
                    }
                    0 < w.length && (h = new y(h, x, null, n, m), d.push({
                        event: h,
                        listeners: w
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== ni && (x = n.relatedTarget || n.fromElement) && (qt(x) || x[yt])) break e;
                    if ((y || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (x = n.relatedTarget || n.toElement, y = a, x = x ? qt(x) : null, x !== null && (E = dn(x), x !== E || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null, x = a), y !== x)) {
                        if (w = eu, g = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = nu, g = "onPointerLeave", f = "onPointerEnter", c = "pointer"), E = y == null ? h : Sn(y), p = x == null ? h : Sn(x), h = new w(g, c + "leave", y, n, m), h.target = E, h.relatedTarget = p, g = null, qt(m) === a && (w = new w(f, c + "enter", x, n, m), w.target = p, w.relatedTarget = E, g = w), E = g, y && x) t: {
                            for(w = y, f = x, c = 0, p = w; p; p = gn(p))c++;
                            for(p = 0, g = f; g; g = gn(g))p++;
                            for(; 0 < c - p;)w = gn(w), c--;
                            for(; 0 < p - c;)f = gn(f), p--;
                            for(; c--;){
                                if (w === f || f !== null && w === f.alternate) break t;
                                w = gn(w), f = gn(f);
                            }
                            w = null;
                        }
                        else w = null;
                        y !== null && pu(d, h, y, w, !1), x !== null && E !== null && pu(d, E, x, w, !0);
                    }
                }
                e: {
                    if (h = a ? Sn(a) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var C = Vp;
                    else if (lu(h)) if (sc) C = Hp;
                    else {
                        C = Wp;
                        var _ = $p;
                    }
                    else (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = Gp);
                    if (C && (C = C(e, a))) {
                        ic(d, C, n, m);
                        break e;
                    }
                    _ && _(e, h, a), e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && Zl(h, "number", h.value);
                }
                switch(_ = a ? Sn(a) : window, e){
                    case "focusin":
                        (lu(_) || _.contentEditable === "true") && (xn = _, ai = a, cr = null);
                        break;
                    case "focusout":
                        cr = ai = xn = null;
                        break;
                    case "mousedown":
                        ci = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ci = !1, cu(d, n, m);
                        break;
                    case "selectionchange":
                        if (Kp) break;
                    case "keydown":
                    case "keyup":
                        cu(d, n, m);
                }
                var z;
                if (rs) e: {
                    switch(e){
                        case "compositionstart":
                            var v = "onCompositionStart";
                            break e;
                        case "compositionend":
                            v = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            v = "onCompositionUpdate";
                            break e;
                    }
                    v = void 0;
                }
                else wn ? oc(e, n) && (v = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
                v && (rc && n.locale !== "ko" && (wn || v !== "onCompositionStart" ? v === "onCompositionEnd" && wn && (z = nc()) : (Tt = m, es = "value" in Tt ? Tt.value : Tt.textContent, wn = !0)), _ = To(a, v), 0 < _.length && (v = new tu(v, e, null, n, m), d.push({
                    event: v,
                    listeners: _
                }), z ? v.data = z : (z = lc(n), z !== null && (v.data = z)))), (z = Dp ? Fp(e, n) : Ap(e, n)) && (a = To(a, "onBeforeInput"), 0 < a.length && (m = new tu("onBeforeInput", "beforeinput", null, n, m), d.push({
                    event: m,
                    listeners: a
                }), m.data = z));
            }
            vc(d, t);
        });
    }
    function _r(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function To(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = yr(e, n), l != null && r.unshift(_r(e, l, o)), l = yr(e, t), l != null && r.push(_r(e, l, o))), e = e.return;
        }
        return r;
    }
    function gn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function pu(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, u = s.alternate, a = s.stateNode;
            if (u !== null && u === r) break;
            s.tag === 5 && a !== null && (s = a, o ? (u = yr(n, l), u != null && i.unshift(_r(n, u, s))) : o || (u = yr(n, l), u != null && i.push(_r(n, u, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Jp = /\r\n?/g, qp = /\u0000|\uFFFD/g;
    function mu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Jp, `
`).replace(qp, "");
    }
    function qr(e, t, n) {
        if (t = mu(t), mu(e) !== t && n) throw Error(k(425));
    }
    function Mo() {}
    var fi = null, di = null;
    function pi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var mi = typeof setTimeout == "function" ? setTimeout : void 0, em = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
        return hu.resolve(null).then(e).catch(nm);
    } : mi;
    function nm(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Ml(e, t) {
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
    function Ot(e) {
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
    function gu(e) {
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
    var bn = Math.random().toString(36).slice(2), ut = "__reactFiber$" + bn, Pr = "__reactProps$" + bn, yt = "__reactContainer$" + bn, hi = "__reactEvents$" + bn, rm = "__reactListeners$" + bn, om = "__reactHandles$" + bn;
    function qt(e) {
        var t = e[ut];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[yt] || n[ut]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = gu(e); e !== null;){
                    if (n = e[ut]) return n;
                    e = gu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Fr(e) {
        return e = e[ut] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Sn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(k(33));
    }
    function tl(e) {
        return e[Pr] || null;
    }
    var gi = [], Cn = -1;
    function Wt(e) {
        return {
            current: e
        };
    }
    function Z(e) {
        0 > Cn || (e.current = gi[Cn], gi[Cn] = null, Cn--);
    }
    function K(e, t) {
        Cn++, gi[Cn] = e.current, e.current = t;
    }
    var Vt = {}, Se = Wt(Vt), Me = Wt(!1), ln = Vt;
    function Fn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Vt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Ie(e) {
        return e = e.childContextTypes, e != null;
    }
    function Io() {
        Z(Me), Z(Se);
    }
    function vu(e, t, n) {
        if (Se.current !== Vt) throw Error(k(168));
        K(Se, t), K(Me, n);
    }
    function wc(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(k(108, $d(e) || "Unknown", o));
        return re({}, n, r);
    }
    function Lo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, ln = Se.current, K(Se, e), K(Me, Me.current), !0;
    }
    function yu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(k(169));
        n ? (e = wc(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, Z(Me), Z(Se), K(Se, e)) : Z(Me), K(Me, n);
    }
    var pt = null, nl = !1, Il = !1;
    function xc(e) {
        pt === null ? pt = [
            e
        ] : pt.push(e);
    }
    function lm(e) {
        nl = !0, xc(e);
    }
    function Gt() {
        if (!Il && pt !== null) {
            Il = !0;
            var e = 0, t = G;
            try {
                var n = pt;
                for(G = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                pt = null, nl = !1;
            } catch (o) {
                throw pt !== null && (pt = pt.slice(e + 1)), Ha(Xi, Gt), o;
            } finally{
                G = t, Il = !1;
            }
        }
        return null;
    }
    var En = [], _n = 0, jo = null, Oo = 0, We = [], Ge = 0, sn = null, mt = 1, ht = "";
    function Zt(e, t) {
        En[_n++] = Oo, En[_n++] = jo, jo = e, Oo = t;
    }
    function kc(e, t, n) {
        We[Ge++] = mt, We[Ge++] = ht, We[Ge++] = sn, sn = e;
        var r = mt;
        e = ht;
        var o = 32 - tt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - tt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, mt = 1 << 32 - tt(t) + o | n << o | r, ht = l + e;
        } else mt = 1 << l | n << o | r, ht = e;
    }
    function ls(e) {
        e.return !== null && (Zt(e, 1), kc(e, 1, 0));
    }
    function is(e) {
        for(; e === jo;)jo = En[--_n], En[_n] = null, Oo = En[--_n], En[_n] = null;
        for(; e === sn;)sn = We[--Ge], We[Ge] = null, ht = We[--Ge], We[Ge] = null, mt = We[--Ge], We[Ge] = null;
    }
    var Ae = null, Fe = null, ee = !1, et = null;
    function Sc(e, t) {
        var n = He(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function wu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Fe = Ot(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Fe = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? {
                    id: mt,
                    overflow: ht
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Fe = null, !0) : !1;
            default:
                return !1;
        }
    }
    function vi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function yi(e) {
        if (ee) {
            var t = Fe;
            if (t) {
                var n = t;
                if (!wu(e, t)) {
                    if (vi(e)) throw Error(k(418));
                    t = Ot(n.nextSibling);
                    var r = Ae;
                    t && wu(e, t) ? Sc(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ae = e);
                }
            } else {
                if (vi(e)) throw Error(k(418));
                e.flags = e.flags & -4097 | 2, ee = !1, Ae = e;
            }
        }
    }
    function xu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ae = e;
    }
    function eo(e) {
        if (e !== Ae) return !1;
        if (!ee) return xu(e), ee = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !pi(e.type, e.memoizedProps)), t && (t = Fe)) {
            if (vi(e)) throw Cc(), Error(k(418));
            for(; t;)Sc(e, t), t = Ot(t.nextSibling);
        }
        if (xu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Fe = Ot(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Fe = null;
            }
        } else Fe = Ae ? Ot(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Cc() {
        for(var e = Fe; e;)e = Ot(e.nextSibling);
    }
    function An() {
        Fe = Ae = null, ee = !1;
    }
    function ss(e) {
        et === null ? et = [
            e
        ] : et.push(e);
    }
    var im = kt.ReactCurrentBatchConfig;
    function Jn(e, t, n) {
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
    function to(e, t) {
        throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function ku(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Ec(e) {
        function t(f, c) {
            if (e) {
                var p = f.deletions;
                p === null ? (f.deletions = [
                    c
                ], f.flags |= 16) : p.push(c);
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
            return f = Ut(f, c), f.index = 0, f.sibling = null, f;
        }
        function l(f, c, p) {
            return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
        }
        function i(f) {
            return e && f.alternate === null && (f.flags |= 2), f;
        }
        function s(f, c, p, g) {
            return c === null || c.tag !== 6 ? (c = Ul(p, f.mode, g), c.return = f, c) : (c = o(c, p), c.return = f, c);
        }
        function u(f, c, p, g) {
            var C = p.type;
            return C === yn ? m(f, c, p.props.children, g, p.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pt && ku(C) === c.type) ? (g = o(c, p.props), g.ref = Jn(f, c, p), g.return = f, g) : (g = ko(p.type, p.key, p.props, null, f.mode, g), g.ref = Jn(f, c, p), g.return = f, g);
        }
        function a(f, c, p, g) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Bl(p, f.mode, g), c.return = f, c) : (c = o(c, p.children || []), c.return = f, c);
        }
        function m(f, c, p, g, C) {
            return c === null || c.tag !== 7 ? (c = rn(p, f.mode, g, C), c.return = f, c) : (c = o(c, p), c.return = f, c);
        }
        function d(f, c, p) {
            if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ul("" + c, f.mode, p), c.return = f, c;
            if (typeof c == "object" && c !== null) {
                switch(c.$$typeof){
                    case Gr:
                        return p = ko(c.type, c.key, c.props, null, f.mode, p), p.ref = Jn(f, null, c), p.return = f, p;
                    case vn:
                        return c = Bl(c, f.mode, p), c.return = f, c;
                    case Pt:
                        var g = c._init;
                        return d(f, g(c._payload), p);
                }
                if (rr(c) || Qn(c)) return c = rn(c, f.mode, p, null), c.return = f, c;
                to(f, c);
            }
            return null;
        }
        function h(f, c, p, g) {
            var C = c !== null ? c.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return C !== null ? null : s(f, c, "" + p, g);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Gr:
                        return p.key === C ? u(f, c, p, g) : null;
                    case vn:
                        return p.key === C ? a(f, c, p, g) : null;
                    case Pt:
                        return C = p._init, h(f, c, C(p._payload), g);
                }
                if (rr(p) || Qn(p)) return C !== null ? null : m(f, c, p, g, null);
                to(f, p);
            }
            return null;
        }
        function y(f, c, p, g, C) {
            if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(p) || null, s(c, f, "" + g, C);
            if (typeof g == "object" && g !== null) {
                switch(g.$$typeof){
                    case Gr:
                        return f = f.get(g.key === null ? p : g.key) || null, u(c, f, g, C);
                    case vn:
                        return f = f.get(g.key === null ? p : g.key) || null, a(c, f, g, C);
                    case Pt:
                        var _ = g._init;
                        return y(f, c, p, _(g._payload), C);
                }
                if (rr(g) || Qn(g)) return f = f.get(p) || null, m(c, f, g, C, null);
                to(c, g);
            }
            return null;
        }
        function x(f, c, p, g) {
            for(var C = null, _ = null, z = c, v = c = 0, F = null; z !== null && v < p.length; v++){
                z.index > v ? (F = z, z = null) : F = z.sibling;
                var D = h(f, z, p[v], g);
                if (D === null) {
                    z === null && (z = F);
                    break;
                }
                e && z && D.alternate === null && t(f, z), c = l(D, c, v), _ === null ? C = D : _.sibling = D, _ = D, z = F;
            }
            if (v === p.length) return n(f, z), ee && Zt(f, v), C;
            if (z === null) {
                for(; v < p.length; v++)z = d(f, p[v], g), z !== null && (c = l(z, c, v), _ === null ? C = z : _.sibling = z, _ = z);
                return ee && Zt(f, v), C;
            }
            for(z = r(f, z); v < p.length; v++)F = y(z, f, v, p[v], g), F !== null && (e && F.alternate !== null && z.delete(F.key === null ? v : F.key), c = l(F, c, v), _ === null ? C = F : _.sibling = F, _ = F);
            return e && z.forEach(function(H) {
                return t(f, H);
            }), ee && Zt(f, v), C;
        }
        function w(f, c, p, g) {
            var C = Qn(p);
            if (typeof C != "function") throw Error(k(150));
            if (p = C.call(p), p == null) throw Error(k(151));
            for(var _ = C = null, z = c, v = c = 0, F = null, D = p.next(); z !== null && !D.done; v++, D = p.next()){
                z.index > v ? (F = z, z = null) : F = z.sibling;
                var H = h(f, z, D.value, g);
                if (H === null) {
                    z === null && (z = F);
                    break;
                }
                e && z && H.alternate === null && t(f, z), c = l(H, c, v), _ === null ? C = H : _.sibling = H, _ = H, z = F;
            }
            if (D.done) return n(f, z), ee && Zt(f, v), C;
            if (z === null) {
                for(; !D.done; v++, D = p.next())D = d(f, D.value, g), D !== null && (c = l(D, c, v), _ === null ? C = D : _.sibling = D, _ = D);
                return ee && Zt(f, v), C;
            }
            for(z = r(f, z); !D.done; v++, D = p.next())D = y(z, f, v, D.value, g), D !== null && (e && D.alternate !== null && z.delete(D.key === null ? v : D.key), c = l(D, c, v), _ === null ? C = D : _.sibling = D, _ = D);
            return e && z.forEach(function(ye) {
                return t(f, ye);
            }), ee && Zt(f, v), C;
        }
        function E(f, c, p, g) {
            if (typeof p == "object" && p !== null && p.type === yn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Gr:
                        e: {
                            for(var C = p.key, _ = c; _ !== null;){
                                if (_.key === C) {
                                    if (C = p.type, C === yn) {
                                        if (_.tag === 7) {
                                            n(f, _.sibling), c = o(_, p.props.children), c.return = f, f = c;
                                            break e;
                                        }
                                    } else if (_.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pt && ku(C) === _.type) {
                                        n(f, _.sibling), c = o(_, p.props), c.ref = Jn(f, _, p), c.return = f, f = c;
                                        break e;
                                    }
                                    n(f, _);
                                    break;
                                } else t(f, _);
                                _ = _.sibling;
                            }
                            p.type === yn ? (c = rn(p.props.children, f.mode, g, p.key), c.return = f, f = c) : (g = ko(p.type, p.key, p.props, null, f.mode, g), g.ref = Jn(f, c, p), g.return = f, f = g);
                        }
                        return i(f);
                    case vn:
                        e: {
                            for(_ = p.key; c !== null;){
                                if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = o(c, p.children || []), c.return = f, f = c;
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                                else t(f, c);
                                c = c.sibling;
                            }
                            c = Bl(p, f.mode, g), c.return = f, f = c;
                        }
                        return i(f);
                    case Pt:
                        return _ = p._init, E(f, c, _(p._payload), g);
                }
                if (rr(p)) return x(f, c, p, g);
                if (Qn(p)) return w(f, c, p, g);
                to(f, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, p), c.return = f, f = c) : (n(f, c), c = Ul(p, f.mode, g), c.return = f, f = c), i(f)) : n(f, c);
        }
        return E;
    }
    var Un = Ec(!0), _c = Ec(!1), Do = Wt(null), Fo = null, Pn = null, us = null;
    function as() {
        us = Pn = Fo = null;
    }
    function cs(e) {
        var t = Do.current;
        Z(Do), e._currentValue = t;
    }
    function wi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function jn(e, t) {
        Fo = e, us = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
    }
    function Qe(e) {
        var t = e._currentValue;
        if (us !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Pn === null) {
            if (Fo === null) throw Error(k(308));
            Pn = e, Fo.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Pn = Pn.next = e;
        return t;
    }
    var en = null;
    function fs(e) {
        en === null ? en = [
            e
        ] : en.push(e);
    }
    function Pc(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, fs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, wt(e, r);
    }
    function wt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Nt = !1;
    function ds(e) {
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
    function Nc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function gt(e, t) {
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
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, wt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, fs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, wt(e, n);
    }
    function ho(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
        }
    }
    function Su(e, t) {
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
    function Ao(e, t, n, r) {
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
            var d = o.baseState;
            i = 0, m = a = u = null, s = l;
            do {
                var h = s.lane, y = s.eventTime;
                if ((r & h) === h) {
                    m !== null && (m = m.next = {
                        eventTime: y,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var x = e, w = s;
                        switch(h = t, y = n, w.tag){
                            case 1:
                                if (x = w.payload, typeof x == "function") {
                                    d = x.call(y, d, h);
                                    break e;
                                }
                                d = x;
                                break e;
                            case 3:
                                x.flags = x.flags & -65537 | 128;
                            case 0:
                                if (x = w.payload, h = typeof x == "function" ? x.call(y, d, h) : x, h == null) break e;
                                d = re({}, d, h);
                                break e;
                            case 2:
                                Nt = !0;
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
                }, m === null ? (a = m = y, u = d) : m = m.next = y, i |= h;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
                }
            }while (!0);
            if (m === null && (u = d), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            an |= i, e.lanes = i, e.memoizedState = d;
        }
    }
    function Cu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(k(191, o));
                o.call(r);
            }
        }
    }
    var Ar = {}, ct = Wt(Ar), Nr = Wt(Ar), zr = Wt(Ar);
    function tn(e) {
        if (e === Ar) throw Error(k(174));
        return e;
    }
    function ps(e, t) {
        switch(K(zr, t), K(Nr, e), K(ct, Ar), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ql(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ql(t, e);
        }
        Z(ct), K(ct, t);
    }
    function Bn() {
        Z(ct), Z(Nr), Z(zr);
    }
    function zc(e) {
        tn(zr.current);
        var t = tn(ct.current), n = ql(t, e.type);
        t !== n && (K(Nr, e), K(ct, n));
    }
    function ms(e) {
        Nr.current === e && (Z(ct), Z(Nr));
    }
    var te = Wt(0);
    function Uo(e) {
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
    var Ll = [];
    function hs() {
        for(var e = 0; e < Ll.length; e++)Ll[e]._workInProgressVersionPrimary = null;
        Ll.length = 0;
    }
    var go = kt.ReactCurrentDispatcher, jl = kt.ReactCurrentBatchConfig, un = 0, ne = null, ce = null, pe = null, Bo = !1, fr = !1, Rr = 0, sm = 0;
    function we() {
        throw Error(k(321));
    }
    function gs(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!rt(e[n], t[n])) return !1;
        return !0;
    }
    function vs(e, t, n, r, o, l) {
        if (un = l, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, go.current = e === null || e.memoizedState === null ? fm : dm, e = n(r, o), fr) {
            l = 0;
            do {
                if (fr = !1, Rr = 0, 25 <= l) throw Error(k(301));
                l += 1, pe = ce = null, t.updateQueue = null, go.current = pm, e = n(r, o);
            }while (fr);
        }
        if (go.current = Vo, t = ce !== null && ce.next !== null, un = 0, pe = ce = ne = null, Bo = !1, t) throw Error(k(300));
        return e;
    }
    function ys() {
        var e = Rr !== 0;
        return Rr = 0, e;
    }
    function st() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return pe === null ? ne.memoizedState = pe = e : pe = pe.next = e, pe;
    }
    function Ke() {
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
    function Tr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ol(e) {
        var t = Ke(), n = t.queue;
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
                    var d = {
                        lane: m,
                        action: a.action,
                        hasEagerState: a.hasEagerState,
                        eagerState: a.eagerState,
                        next: null
                    };
                    u === null ? (s = u = d, i = r) : u = u.next = d, ne.lanes |= m, an |= m;
                }
                a = a.next;
            }while (a !== null && a !== l);
            u === null ? i = r : u.next = s, rt(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
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
    function Dl(e) {
        var t = Ke(), n = t.queue;
        if (n === null) throw Error(k(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            rt(l, t.memoizedState) || (Te = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Rc() {}
    function Tc(e, t) {
        var n = ne, r = Ke(), o = t(), l = !rt(r.memoizedState, o);
        if (l && (r.memoizedState = o, Te = !0), r = r.queue, ws(Lc.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || pe !== null && pe.memoizedState.tag & 1) {
            if (n.flags |= 2048, Mr(9, Ic.bind(null, n, r, o, t), void 0, null), me === null) throw Error(k(349));
            un & 30 || Mc(n, t, o);
        }
        return o;
    }
    function Mc(e, t, n) {
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
    function Ic(e, t, n, r) {
        t.value = n, t.getSnapshot = r, jc(t) && Oc(e);
    }
    function Lc(e, t, n) {
        return n(function() {
            jc(t) && Oc(e);
        });
    }
    function jc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !rt(e, n);
        } catch  {
            return !0;
        }
    }
    function Oc(e) {
        var t = wt(e, 1);
        t !== null && nt(t, e, 1, -1);
    }
    function Eu(e) {
        var t = st();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Tr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = cm.bind(null, ne, e), [
            t.memoizedState,
            e
        ];
    }
    function Mr(e, t, n, r) {
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
    function Dc() {
        return Ke().memoizedState;
    }
    function vo(e, t, n, r) {
        var o = st();
        ne.flags |= e, o.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function rl(e, t, n, r) {
        var o = Ke();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ce !== null) {
            var i = ce.memoizedState;
            if (l = i.destroy, r !== null && gs(r, i.deps)) {
                o.memoizedState = Mr(t, n, l, r);
                return;
            }
        }
        ne.flags |= e, o.memoizedState = Mr(1 | t, n, l, r);
    }
    function _u(e, t) {
        return vo(8390656, 8, e, t);
    }
    function ws(e, t) {
        return rl(2048, 8, e, t);
    }
    function Fc(e, t) {
        return rl(4, 2, e, t);
    }
    function Ac(e, t) {
        return rl(4, 4, e, t);
    }
    function Uc(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Bc(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, rl(4, 4, Uc.bind(null, t, e), n);
    }
    function xs() {}
    function Vc(e, t) {
        var n = Ke();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && gs(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function $c(e, t) {
        var n = Ke();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && gs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Wc(e, t, n) {
        return un & 21 ? (rt(n, t) || (n = Ka(), ne.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
    }
    function um(e, t) {
        var n = G;
        G = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = jl.transition;
        jl.transition = {};
        try {
            e(!1), t();
        } finally{
            G = n, jl.transition = r;
        }
    }
    function Gc() {
        return Ke().memoizedState;
    }
    function am(e, t, n) {
        var r = At(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Hc(e)) bc(t, n);
        else if (n = Pc(e, t, n, r), n !== null) {
            var o = Ee();
            nt(n, e, r, o), Qc(n, t, r);
        }
    }
    function cm(e, t, n) {
        var r = At(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Hc(e)) bc(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, rt(s, i)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o, fs(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Pc(e, t, o, r), n !== null && (o = Ee(), nt(n, e, r, o), Qc(n, t, r));
        }
    }
    function Hc(e) {
        var t = e.alternate;
        return e === ne || t !== null && t === ne;
    }
    function bc(e, t) {
        fr = Bo = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Qc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Zi(e, n);
        }
    }
    var Vo = {
        readContext: Qe,
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
    }, fm = {
        readContext: Qe,
        useCallback: function(e, t) {
            return st().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Qe,
        useEffect: _u,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, vo(4194308, 4, Uc.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return vo(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return vo(4, 2, e, t);
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
            }, r.queue = e, e = e.dispatch = am.bind(null, ne, e), [
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
        useState: Eu,
        useDebugValue: xs,
        useDeferredValue: function(e) {
            return st().memoizedState = e;
        },
        useTransition: function() {
            var e = Eu(!1), t = e[0];
            return e = um.bind(null, e[1]), st().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ne, o = st();
            if (ee) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (n = t(), me === null) throw Error(k(349));
                un & 30 || Mc(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, _u(Lc.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, Mr(9, Ic.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = st(), t = me.identifierPrefix;
            if (ee) {
                var n = ht, r = mt;
                n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = sm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, dm = {
        readContext: Qe,
        useCallback: Vc,
        useContext: Qe,
        useEffect: ws,
        useImperativeHandle: Bc,
        useInsertionEffect: Fc,
        useLayoutEffect: Ac,
        useMemo: $c,
        useReducer: Ol,
        useRef: Dc,
        useState: function() {
            return Ol(Tr);
        },
        useDebugValue: xs,
        useDeferredValue: function(e) {
            var t = Ke();
            return Wc(t, ce.memoizedState, e);
        },
        useTransition: function() {
            var e = Ol(Tr)[0], t = Ke().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Rc,
        useSyncExternalStore: Tc,
        useId: Gc,
        unstable_isNewReconciler: !1
    }, pm = {
        readContext: Qe,
        useCallback: Vc,
        useContext: Qe,
        useEffect: ws,
        useImperativeHandle: Bc,
        useInsertionEffect: Fc,
        useLayoutEffect: Ac,
        useMemo: $c,
        useReducer: Dl,
        useRef: Dc,
        useState: function() {
            return Dl(Tr);
        },
        useDebugValue: xs,
        useDeferredValue: function(e) {
            var t = Ke();
            return ce === null ? t.memoizedState = e : Wc(t, ce.memoizedState, e);
        },
        useTransition: function() {
            var e = Dl(Tr)[0], t = Ke().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Rc,
        useSyncExternalStore: Tc,
        useId: Gc,
        unstable_isNewReconciler: !1
    };
    function Je(e, t) {
        if (e && e.defaultProps) {
            t = re({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function xi(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var ol = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? dn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Ee(), o = At(e), l = gt(r, o);
            l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (nt(t, e, o, r), ho(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Ee(), o = At(e), l = gt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (nt(t, e, o, r), ho(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Ee(), r = At(e), o = gt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Dt(e, o, r), t !== null && (nt(t, e, r, n), ho(t, e, r));
        }
    };
    function Pu(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, r) || !Cr(o, l) : !0;
    }
    function Kc(e, t, n) {
        var r = !1, o = Vt, l = t.contextType;
        return typeof l == "object" && l !== null ? l = Qe(l) : (o = Ie(t) ? ln : Se.current, r = t.contextTypes, l = (r = r != null) ? Fn(e, o) : Vt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ol, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function Nu(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ol.enqueueReplaceState(t, t.state, null);
    }
    function ki(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, ds(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = Qe(l) : (l = Ie(t) ? ln : Se.current, o.context = Fn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (xi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ol.enqueueReplaceState(o, o.state, null), Ao(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Vn(e, t) {
        try {
            var n = "", r = t;
            do n += Vd(r), r = r.return;
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
    function Fl(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function Si(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var mm = typeof WeakMap == "function" ? WeakMap : Map;
    function Yc(e, t, n) {
        n = gt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Wo || (Wo = !0, Ii = r), Si(e, t);
        }, n;
    }
    function Xc(e, t, n) {
        n = gt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Si(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Si(e, t), typeof r != "function" && (Ft === null ? Ft = new Set([
                this
            ]) : Ft.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function zu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new mm;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = zm.bind(null, e, t, n), t.then(e, e));
    }
    function Ru(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function Tu(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
    }
    var hm = kt.ReactCurrentOwner, Te = !1;
    function Ce(e, t, n, r) {
        t.child = e === null ? _c(t, null, n, r) : Un(t, e.child, n, r);
    }
    function Mu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return jn(t, o), r = vs(e, t, n, r, l, o), n = ys(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, xt(e, t, o)) : (ee && n && ls(t), t.flags |= 1, Ce(e, t, r, o), t.child);
    }
    function Iu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !zs(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Zc(e, t, l, r, o)) : (e = ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Cr, n(i, r) && e.ref === t.ref) return xt(e, t, o);
        }
        return t.flags |= 1, e = Ut(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Zc(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Cr(l, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Te = !0);
            else return t.lanes = e.lanes, xt(e, t, o);
        }
        return Ci(e, t, n, r, o);
    }
    function Jc(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, K(zn, De), De |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, K(zn, De), De |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, K(zn, De), De |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(zn, De), De |= r;
        return Ce(e, t, o, n), t.child;
    }
    function qc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Ci(e, t, n, r, o) {
        var l = Ie(n) ? ln : Se.current;
        return l = Fn(t, l), jn(t, o), n = vs(e, t, n, r, l, o), r = ys(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, xt(e, t, o)) : (ee && r && ls(t), t.flags |= 1, Ce(e, t, n, o), t.child);
    }
    function Lu(e, t, n, r, o) {
        if (Ie(n)) {
            var l = !0;
            Lo(t);
        } else l = !1;
        if (jn(t, o), t.stateNode === null) yo(e, t), Kc(t, n, r), ki(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var u = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = Qe(a) : (a = Ie(n) ? ln : Se.current, a = Fn(t, a));
            var m = n.getDerivedStateFromProps, d = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && Nu(t, i, r, a), Nt = !1;
            var h = t.memoizedState;
            i.state = h, Ao(t, r, i, o), u = t.memoizedState, s !== r || h !== u || Me.current || Nt ? (typeof m == "function" && (xi(t, n, m, r), u = t.memoizedState), (s = Nt || Pu(t, n, s, r, h, u, a)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Nc(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : Je(t.type, s), i.props = a, d = t.pendingProps, h = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Qe(u) : (u = Ie(n) ? ln : Se.current, u = Fn(t, u));
            var y = n.getDerivedStateFromProps;
            (m = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || h !== u) && Nu(t, i, r, u), Nt = !1, h = t.memoizedState, i.state = h, Ao(t, r, i, o);
            var x = t.memoizedState;
            s !== d || h !== x || Me.current || Nt ? (typeof y == "function" && (xi(t, n, y, r), x = t.memoizedState), (a = Nt || Pu(t, n, a, r, h, x, u) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Ei(e, t, n, r, l, o);
    }
    function Ei(e, t, n, r, o, l) {
        qc(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && yu(t, n, !1), xt(e, t, l);
        r = t.stateNode, hm.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = Un(t, e.child, null, l), t.child = Un(t, null, s, l)) : Ce(e, t, s, l), t.memoizedState = r.state, o && yu(t, n, !0), t.child;
    }
    function ef(e) {
        var t = e.stateNode;
        t.pendingContext ? vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vu(e, t.context, !1), ps(e, t.containerInfo);
    }
    function ju(e, t, n, r, o) {
        return An(), ss(o), t.flags |= 256, Ce(e, t, n, r), t.child;
    }
    var _i = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Pi(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function tf(e, t, n) {
        var r = t.pendingProps, o = te.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(te, o & 1), e === null) return yi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = sl(i, r, 0, null), e = rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Pi(n), t.memoizedState = _i, e) : ks(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return gm(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var u = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ut(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Ut(s, l) : (l = rn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Pi(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = _i, r;
        }
        return l = e.child, e = l.sibling, r = Ut(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function ks(e, t) {
        return t = sl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function no(e, t, n, r) {
        return r !== null && ss(r), Un(t, e.child, null, n), e = ks(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function gm(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Fl(Error(k(422))), no(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = sl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = rn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Un(t, e.child, null, i), t.child.memoizedState = Pi(i), t.memoizedState = _i, l);
        if (!(t.mode & 1)) return no(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(k(419)), r = Fl(l, r, void 0), no(e, t, i, r);
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, wt(e, o), nt(r, e, o, -1));
            }
            return Ns(), r = Fl(Error(k(421))), no(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rm.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Fe = Ot(o.nextSibling), Ae = t, ee = !0, et = null, e !== null && (We[Ge++] = mt, We[Ge++] = ht, We[Ge++] = sn, mt = e.id, ht = e.overflow, sn = t), t = ks(t, r.children), t.flags |= 4096, t);
    }
    function Ou(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), wi(e.return, t, n);
    }
    function Al(e, t, n, r, o) {
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
    function nf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Ce(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Ou(e, n, t);
                else if (e.tag === 19) Ou(e, n, t);
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
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Uo(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Al(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Uo(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Al(t, !0, n, null, l);
                break;
            case "together":
                Al(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function yo(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function xt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(k(153));
        if (t.child !== null) {
            for(e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function vm(e, t, n) {
        switch(t.tag){
            case 3:
                ef(t), An();
                break;
            case 5:
                zc(t);
                break;
            case 1:
                Ie(t.type) && Lo(t);
                break;
            case 4:
                ps(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                K(Do, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (K(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tf(e, t, n) : (K(te, te.current & 1), e = xt(e, t, n), e !== null ? e.sibling : null);
                K(te, te.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return nf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(te, te.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Jc(e, t, n);
        }
        return xt(e, t, n);
    }
    var rf, Ni, of, lf;
    rf = function(e, t) {
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
    Ni = function() {};
    of = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, tn(ct.current);
            var l = null;
            switch(n){
                case "input":
                    o = Yl(e, o), r = Yl(e, r), l = [];
                    break;
                case "select":
                    o = re({}, o, {
                        value: void 0
                    }), r = re({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Jl(e, o), r = Jl(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Mo);
            }
            ei(n, r);
            var i;
            n = null;
            for(a in o)if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
                var s = o[a];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (gr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
            for(a in r){
                var u = r[a];
                if (s = o?.[a], r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in u)u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
                } else n || (l || (l = []), l.push(a, n)), n = u;
                else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (gr.hasOwnProperty(a) ? (u != null && a === "onScroll" && X("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
            }
            n && (l = l || []).push("style", n);
            var a = l;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    lf = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function qn(e, t) {
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
    function ym(e, t, n) {
        var r = t.pendingProps;
        switch(is(t), t.tag){
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
                return Ie(t.type) && Io(), xe(t), null;
            case 3:
                return r = t.stateNode, Bn(), Z(Me), Z(Se), hs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (Oi(et), et = null))), Ni(e, t), xe(t), null;
            case 5:
                ms(t);
                var o = tn(zr.current);
                if (n = t.type, e !== null && t.stateNode != null) of(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(k(166));
                        return xe(t), null;
                    }
                    if (e = tn(ct.current), eo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[ut] = t, r[Pr] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < lr.length; o++)X(lr[o], r);
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
                                Gs(r, l), X("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, X("invalid", r);
                                break;
                            case "textarea":
                                bs(r, l), X("invalid", r);
                        }
                        ei(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && qr(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && qr(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : gr.hasOwnProperty(i) && s != null && i === "onScroll" && X("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Hr(r), Hs(r, l, !0);
                                break;
                            case "textarea":
                                Hr(r), Qs(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = Mo);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = La(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ut] = t, e[Pr] = r, rf(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = ti(n, r), n){
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
                                    for(o = 0; o < lr.length; o++)X(lr[o], e);
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
                                    Gs(e, r), o = Yl(e, r), X("invalid", e);
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
                                    bs(e, r), o = Jl(e, r), X("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            ei(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? Da(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ja(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && vr(e, u) : typeof u == "number" && vr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (gr.hasOwnProperty(l) ? u != null && l === "onScroll" && X("scroll", e) : u != null && Hi(e, l, u, i));
                            }
                            switch(n){
                                case "input":
                                    Hr(e), Hs(e, r, !1);
                                    break;
                                case "textarea":
                                    Hr(e), Qs(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + Bt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Tn(e, !!r.multiple, l, !1) : r.defaultValue != null && Tn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = Mo);
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
                if (e && t.stateNode != null) lf(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
                    if (n = tn(zr.current), tn(ct.current), eo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (l = r.nodeValue !== n) && (e = Ae, e !== null)) switch(e.tag){
                            case 3:
                                qr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && qr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
                }
                return xe(t), null;
            case 13:
                if (Z(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128)) Cc(), An(), t.flags |= 98560, l = !1;
                    else if (l = eo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(k(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(k(317));
                            l[ut] = t;
                        } else An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        xe(t), l = !1;
                    } else et !== null && (Oi(et), et = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? fe === 0 && (fe = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
            case 4:
                return Bn(), Ni(e, t), e === null && Er(t.stateNode.containerInfo), xe(t), null;
            case 10:
                return cs(t.type._context), xe(t), null;
            case 17:
                return Ie(t.type) && Io(), xe(t), null;
            case 19:
                if (Z(te), l = t.memoizedState, l === null) return xe(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) qn(l, !1);
                else {
                    if (fe !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Uo(e), i !== null) {
                            for(t.flags |= 128, qn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return K(te, te.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && ie() > $n && (t.flags |= 128, r = !0, qn(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Uo(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ee) return xe(t), null;
                    } else 2 * ie() - l.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128, r = !0, qn(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ie(), t.sibling = null, n = te.current, K(te, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
            case 22:
            case 23:
                return Ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(k(156, t.tag));
    }
    function wm(e, t) {
        switch(is(t), t.tag){
            case 1:
                return Ie(t.type) && Io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Bn(), Z(Me), Z(Se), hs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ms(t), null;
            case 13:
                if (Z(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(k(340));
                    An();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Z(te), null;
            case 4:
                return Bn(), null;
            case 10:
                return cs(t.type._context), null;
            case 22:
            case 23:
                return Ps(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var ro = !1, ke = !1, xm = typeof WeakSet == "function" ? WeakSet : Set, T = null;
    function Nn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            oe(e, t, r);
        }
        else n.current = null;
    }
    function zi(e, t, n) {
        try {
            n();
        } catch (r) {
            oe(e, t, r);
        }
    }
    var Du = !1;
    function km(e, t) {
        if (fi = zo, e = cc(), os(e)) {
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
                    var i = 0, s = -1, u = -1, a = 0, m = 0, d = e, h = null;
                    t: for(;;){
                        for(var y; d !== n || o !== 0 && d.nodeType !== 3 || (s = i + o), d !== l || r !== 0 && d.nodeType !== 3 || (u = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (y = d.firstChild) !== null;)h = d, d = y;
                        for(;;){
                            if (d === e) break t;
                            if (h === n && ++a === o && (s = i), h === l && ++m === r && (u = i), (y = d.nextSibling) !== null) break;
                            d = h, h = d.parentNode;
                        }
                        d = y;
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
        for(di = {
            focusedElem: e,
            selectionRange: n
        }, zo = !1, T = t; T !== null;)if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
        else for(; T !== null;){
            t = T;
            try {
                var x = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (x !== null) {
                            var w = x.memoizedProps, E = x.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Je(t.type, w), E);
                            f.__reactInternalSnapshotBeforeUpdate = c;
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
                        throw Error(k(163));
                }
            } catch (g) {
                oe(t, t.return, g);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, T = e;
                break;
            }
            T = t.return;
        }
        return x = Du, Du = !1, x;
    }
    function dr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && zi(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function ll(e, t) {
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
    function Ri(e) {
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
    function sf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, sf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[Pr], delete t[hi], delete t[rm], delete t[om])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function uf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Fu(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || uf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Ti(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mo));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ti(e, t, n), e = e.sibling; e !== null;)Ti(e, t, n), e = e.sibling;
    }
    function Mi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Mi(e, t, n), e = e.sibling; e !== null;)Mi(e, t, n), e = e.sibling;
    }
    var he = null, qe = !1;
    function Ct(e, t, n) {
        for(n = n.child; n !== null;)af(e, t, n), n = n.sibling;
    }
    function af(e, t, n) {
        if (at && typeof at.onCommitFiberUnmount == "function") try {
            at.onCommitFiberUnmount(Zo, n);
        } catch  {}
        switch(n.tag){
            case 5:
                ke || Nn(n, t);
            case 6:
                var r = he, o = qe;
                he = null, Ct(e, t, n), he = r, qe = o, he !== null && (qe ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
                break;
            case 18:
                he !== null && (qe ? (e = he, n = n.stateNode, e.nodeType === 8 ? Ml(e.parentNode, n) : e.nodeType === 1 && Ml(e, n), kr(e)) : Ml(he, n.stateNode));
                break;
            case 4:
                r = he, o = qe, he = n.stateNode.containerInfo, qe = !0, Ct(e, t, n), he = r, qe = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && zi(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Ct(e, t, n);
                break;
            case 1:
                if (!ke && (Nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
                n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Ct(e, t, n), ke = r) : Ct(e, t, n);
                break;
            default:
                Ct(e, t, n);
        }
    }
    function Au(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new xm), t.forEach(function(r) {
                var o = Tm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function Ze(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            he = s.stateNode, qe = !1;
                            break e;
                        case 3:
                            he = s.stateNode.containerInfo, qe = !0;
                            break e;
                        case 4:
                            he = s.stateNode.containerInfo, qe = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (he === null) throw Error(k(160));
                af(l, i, o), he = null, qe = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null;
            } catch (a) {
                oe(o, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)cf(t, e), t = t.sibling;
    }
    function cf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (Ze(t, e), it(e), r & 4) {
                    try {
                        dr(3, e, e.return), ll(3, e);
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
                Ze(t, e), it(e), r & 512 && n !== null && Nn(n, n.return);
                break;
            case 5:
                if (Ze(t, e), it(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        vr(o, "");
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, u !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Ma(o, l), ti(s, i);
                        var a = ti(s, l);
                        for(i = 0; i < u.length; i += 2){
                            var m = u[i], d = u[i + 1];
                            m === "style" ? Da(o, d) : m === "dangerouslySetInnerHTML" ? ja(o, d) : m === "children" ? vr(o, d) : Hi(o, m, d, a);
                        }
                        switch(s){
                            case "input":
                                Xl(o, l);
                                break;
                            case "textarea":
                                Ia(o, l);
                                break;
                            case "select":
                                var h = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var y = l.value;
                                y != null ? Tn(o, !!l.multiple, y, !1) : h !== !!l.multiple && (l.defaultValue != null ? Tn(o, !!l.multiple, l.defaultValue, !0) : Tn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[Pr] = l;
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (Ze(t, e), it(e), r & 4) {
                    if (e.stateNode === null) throw Error(k(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                break;
            case 3:
                if (Ze(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    kr(t.containerInfo);
                } catch (w) {
                    oe(e, e.return, w);
                }
                break;
            case 4:
                Ze(t, e), it(e);
                break;
            case 13:
                Ze(t, e), it(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Es = ie())), r & 4 && Au(e);
                break;
            case 22:
                if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (a = ke) || m, Ze(t, e), ke = a) : Ze(t, e), it(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !m && e.mode & 1) for(T = e, m = e.child; m !== null;){
                        for(d = T = m; T !== null;){
                            switch(h = T, y = h.child, h.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    dr(4, h, h.return);
                                    break;
                                case 1:
                                    Nn(h, h.return);
                                    var x = h.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                                        } catch (w) {
                                            oe(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Nn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Bu(d);
                                        continue;
                                    }
                            }
                            y !== null ? (y.return = h, T = y) : Bu(d);
                        }
                        m = m.sibling;
                    }
                    e: for(m = null, d = e;;){
                        if (d.tag === 5) {
                            if (m === null) {
                                m = d;
                                try {
                                    o = d.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = d.stateNode, u = d.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Oa("display", i));
                                } catch (w) {
                                    oe(e, e.return, w);
                                }
                            }
                        } else if (d.tag === 6) {
                            if (m === null) try {
                                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                            } catch (w) {
                                oe(e, e.return, w);
                            }
                        } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e) break e;
                        for(; d.sibling === null;){
                            if (d.return === null || d.return === e) break e;
                            m === d && (m = null), d = d.return;
                        }
                        m === d && (m = null), d.sibling.return = d.return, d = d.sibling;
                    }
                }
                break;
            case 19:
                Ze(t, e), it(e), r & 4 && Au(e);
                break;
            case 21:
                break;
            default:
                Ze(t, e), it(e);
        }
    }
    function it(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (uf(n)) {
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
                        r.flags & 32 && (vr(o, ""), r.flags &= -33);
                        var l = Fu(e);
                        Mi(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = Fu(e);
                        Ti(e, s, i);
                        break;
                    default:
                        throw Error(k(161));
                }
            } catch (u) {
                oe(e, e.return, u);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Sm(e, t, n) {
        T = e, ff(e);
    }
    function ff(e, t, n) {
        for(var r = (e.mode & 1) !== 0; T !== null;){
            var o = T, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || ro;
                if (!i) {
                    var s = o.alternate, u = s !== null && s.memoizedState !== null || ke;
                    s = ro;
                    var a = ke;
                    if (ro = i, (ke = u) && !a) for(T = o; T !== null;)i = T, u = i.child, i.tag === 22 && i.memoizedState !== null ? Vu(o) : u !== null ? (u.return = i, T = u) : Vu(o);
                    for(; l !== null;)T = l, ff(l), l = l.sibling;
                    T = o, ro = s, ke = a;
                }
                Uu(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, T = l) : Uu(e);
        }
    }
    function Uu(e) {
        for(; T !== null;){
            var t = T;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            ke || ll(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && Cu(t, l, r);
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
                                Cu(t, i, n);
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
                                        var d = m.dehydrated;
                                        d !== null && kr(d);
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
                    ke || t.flags & 512 && Ri(t);
                } catch (h) {
                    oe(t, t.return, h);
                }
            }
            if (t === e) {
                T = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, T = n;
                break;
            }
            T = t.return;
        }
    }
    function Bu(e) {
        for(; T !== null;){
            var t = T;
            if (t === e) {
                T = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, T = n;
                break;
            }
            T = t.return;
        }
    }
    function Vu(e) {
        for(; T !== null;){
            var t = T;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            ll(4, t);
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
                            Ri(t);
                        } catch (u) {
                            oe(t, l, u);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Ri(t);
                        } catch (u) {
                            oe(t, i, u);
                        }
                }
            } catch (u) {
                oe(t, t.return, u);
            }
            if (t === e) {
                T = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, T = s;
                break;
            }
            T = t.return;
        }
    }
    var Cm = Math.ceil, $o = kt.ReactCurrentDispatcher, Ss = kt.ReactCurrentOwner, be = kt.ReactCurrentBatchConfig, V = 0, me = null, ue = null, ge = 0, De = 0, zn = Wt(0), fe = 0, Ir = null, an = 0, il = 0, Cs = 0, pr = null, Re = null, Es = 0, $n = 1 / 0, dt = null, Wo = !1, Ii = null, Ft = null, oo = !1, Mt = null, Go = 0, mr = 0, Li = null, wo = -1, xo = 0;
    function Ee() {
        return V & 6 ? ie() : wo !== -1 ? wo : wo = ie();
    }
    function At(e) {
        return e.mode & 1 ? V & 2 && ge !== 0 ? ge & -ge : im.transition !== null ? (xo === 0 && (xo = Ka()), xo) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tc(e.type)), e) : 1;
    }
    function nt(e, t, n, r) {
        if (50 < mr) throw mr = 0, Li = null, Error(k(185));
        Or(e, n, r), (!(V & 2) || e !== me) && (e === me && (!(V & 2) && (il |= n), fe === 4 && Rt(e, ge)), Le(e, r), n === 1 && V === 0 && !(t.mode & 1) && ($n = ie() + 500, nl && Gt()));
    }
    function Le(e, t) {
        var n = e.callbackNode;
        ip(e, t);
        var r = No(e, e === me ? ge : 0);
        if (r === 0) n !== null && Xs(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Xs(n), t === 1) e.tag === 0 ? lm($u.bind(null, e)) : xc($u.bind(null, e)), tm(function() {
                !(V & 6) && Gt();
            }), n = null;
            else {
                switch(Ya(r)){
                    case 1:
                        n = Xi;
                        break;
                    case 4:
                        n = ba;
                        break;
                    case 16:
                        n = Po;
                        break;
                    case 536870912:
                        n = Qa;
                        break;
                    default:
                        n = Po;
                }
                n = wf(n, df.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function df(e, t) {
        if (wo = -1, xo = 0, V & 6) throw Error(k(327));
        var n = e.callbackNode;
        if (On() && e.callbackNode !== n) return null;
        var r = No(e, e === me ? ge : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Ho(e, r);
        else {
            t = r;
            var o = V;
            V |= 2;
            var l = mf();
            (me !== e || ge !== t) && (dt = null, $n = ie() + 500, nn(e, t));
            do try {
                Pm();
                break;
            } catch (s) {
                pf(e, s);
            }
            while (!0);
            as(), $o.current = l, V = o, ue !== null ? t = 0 : (me = null, ge = 0, t = fe);
        }
        if (t !== 0) {
            if (t === 2 && (o = ii(e), o !== 0 && (r = o, t = ji(e, o))), t === 1) throw n = Ir, nn(e, 0), Rt(e, r), Le(e, ie()), n;
            if (t === 6) Rt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Em(o) && (t = Ho(e, r), t === 2 && (l = ii(e), l !== 0 && (r = l, t = ji(e, l))), t === 1)) throw n = Ir, nn(e, 0), Rt(e, r), Le(e, ie()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(k(345));
                    case 2:
                        Jt(e, Re, dt);
                        break;
                    case 3:
                        if (Rt(e, r), (r & 130023424) === r && (t = Es + 500 - ie(), 10 < t)) {
                            if (No(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Ee(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = mi(Jt.bind(null, e, Re, dt), t);
                            break;
                        }
                        Jt(e, Re, dt);
                        break;
                    case 4:
                        if (Rt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - tt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cm(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = mi(Jt.bind(null, e, Re, dt), r);
                            break;
                        }
                        Jt(e, Re, dt);
                        break;
                    case 5:
                        Jt(e, Re, dt);
                        break;
                    default:
                        throw Error(k(329));
                }
            }
        }
        return Le(e, ie()), e.callbackNode === n ? df.bind(null, e) : null;
    }
    function ji(e, t) {
        var n = pr;
        return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = Ho(e, t), e !== 2 && (t = Re, Re = n, t !== null && Oi(t)), e;
    }
    function Oi(e) {
        Re === null ? Re = e : Re.push.apply(Re, e);
    }
    function Em(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!rt(l(), o)) return !1;
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
        for(t &= ~Cs, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - tt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function $u(e) {
        if (V & 6) throw Error(k(327));
        On();
        var t = No(e, 0);
        if (!(t & 1)) return Le(e, ie()), null;
        var n = Ho(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ii(e);
            r !== 0 && (t = r, n = ji(e, r));
        }
        if (n === 1) throw n = Ir, nn(e, 0), Rt(e, t), Le(e, ie()), n;
        if (n === 6) throw Error(k(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, Re, dt), Le(e, ie()), null;
    }
    function _s(e, t) {
        var n = V;
        V |= 1;
        try {
            return e(t);
        } finally{
            V = n, V === 0 && ($n = ie() + 500, nl && Gt());
        }
    }
    function cn(e) {
        Mt !== null && Mt.tag === 0 && !(V & 6) && On();
        var t = V;
        V |= 1;
        var n = be.transition, r = G;
        try {
            if (be.transition = null, G = 1, e) return e();
        } finally{
            G = r, be.transition = n, V = t, !(V & 6) && Gt();
        }
    }
    function Ps() {
        De = zn.current, Z(zn);
    }
    function nn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, em(n)), ue !== null) for(n = ue.return; n !== null;){
            var r = n;
            switch(is(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Io();
                    break;
                case 3:
                    Bn(), Z(Me), Z(Se), hs();
                    break;
                case 5:
                    ms(r);
                    break;
                case 4:
                    Bn();
                    break;
                case 13:
                    Z(te);
                    break;
                case 19:
                    Z(te);
                    break;
                case 10:
                    cs(r.type._context);
                    break;
                case 22:
                case 23:
                    Ps();
            }
            n = n.return;
        }
        if (me = e, ue = e = Ut(e.current, null), ge = De = t, fe = 0, Ir = null, Cs = il = an = 0, Re = pr = null, en !== null) {
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
    function pf(e, t) {
        do {
            var n = ue;
            try {
                if (as(), go.current = Vo, Bo) {
                    for(var r = ne.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Bo = !1;
                }
                if (un = 0, pe = ce = ne = null, fr = !1, Rr = 0, Ss.current = null, n === null || n.return === null) {
                    fe = 1, Ir = t, ue = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, u = t;
                    if (t = ge, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                        var a = u, m = s, d = m.tag;
                        if (!(m.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                            var h = m.alternate;
                            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
                        }
                        var y = Ru(i);
                        if (y !== null) {
                            y.flags &= -257, Tu(y, i, s, l, t), y.mode & 1 && zu(l, a, t), t = y, u = a;
                            var x = t.updateQueue;
                            if (x === null) {
                                var w = new Set;
                                w.add(u), t.updateQueue = w;
                            } else x.add(u);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                zu(l, a, t), Ns();
                                break e;
                            }
                            u = Error(k(426));
                        }
                    } else if (ee && s.mode & 1) {
                        var E = Ru(i);
                        if (E !== null) {
                            !(E.flags & 65536) && (E.flags |= 256), Tu(E, i, s, l, t), ss(Vn(u, s));
                            break e;
                        }
                    }
                    l = u = Vn(u, s), fe !== 4 && (fe = 2), pr === null ? pr = [
                        l
                    ] : pr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var f = Yc(l, u, t);
                                Su(l, f);
                                break e;
                            case 1:
                                s = u;
                                var c = l.type, p = l.stateNode;
                                if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var g = Xc(l, s, t);
                                    Su(l, g);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                gf(n);
            } catch (C) {
                t = C, ue === n && n !== null && (ue = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function mf() {
        var e = $o.current;
        return $o.current = Vo, e === null ? Vo : e;
    }
    function Ns() {
        (fe === 0 || fe === 3 || fe === 2) && (fe = 4), me === null || !(an & 268435455) && !(il & 268435455) || Rt(me, ge);
    }
    function Ho(e, t) {
        var n = V;
        V |= 2;
        var r = mf();
        (me !== e || ge !== t) && (dt = null, nn(e, t));
        do try {
            _m();
            break;
        } catch (o) {
            pf(e, o);
        }
        while (!0);
        if (as(), V = n, $o.current = r, ue !== null) throw Error(k(261));
        return me = null, ge = 0, fe;
    }
    function _m() {
        for(; ue !== null;)hf(ue);
    }
    function Pm() {
        for(; ue !== null && !Zd();)hf(ue);
    }
    function hf(e) {
        var t = yf(e.alternate, e, De);
        e.memoizedProps = e.pendingProps, t === null ? gf(e) : ue = t, Ss.current = null;
    }
    function gf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = wm(n, t), n !== null) {
                    n.flags &= 32767, ue = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    fe = 6, ue = null;
                    return;
                }
            } else if (n = ym(n, t, De), n !== null) {
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
        var r = G, o = be.transition;
        try {
            be.transition = null, G = 1, Nm(e, t, n, r);
        } finally{
            be.transition = o, G = r;
        }
        return null;
    }
    function Nm(e, t, n, r) {
        do On();
        while (Mt !== null);
        if (V & 6) throw Error(k(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (sp(e, l), e === me && (ue = me = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oo || (oo = !0, wf(Po, function() {
            return On(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = be.transition, be.transition = null;
            var i = G;
            G = 1;
            var s = V;
            V |= 4, Ss.current = null, km(e, n), cf(n, e), Qp(di), zo = !!fi, di = fi = null, e.current = n, Sm(n), Jd(), V = s, G = i, be.transition = l;
        } else e.current = n;
        if (oo && (oo = !1, Mt = e, Go = o), l = e.pendingLanes, l === 0 && (Ft = null), tp(n.stateNode), Le(e, ie()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Wo) throw Wo = !1, e = Ii, Ii = null, e;
        return Go & 1 && e.tag !== 0 && On(), l = e.pendingLanes, l & 1 ? e === Li ? mr++ : (mr = 0, Li = e) : mr = 0, Gt(), null;
    }
    function On() {
        if (Mt !== null) {
            var e = Ya(Go), t = be.transition, n = G;
            try {
                if (be.transition = null, G = 16 > e ? 16 : e, Mt === null) var r = !1;
                else {
                    if (e = Mt, Mt = null, Go = 0, V & 6) throw Error(k(331));
                    var o = V;
                    for(V |= 4, T = e.current; T !== null;){
                        var l = T, i = l.child;
                        if (T.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var u = 0; u < s.length; u++){
                                    var a = s[u];
                                    for(T = a; T !== null;){
                                        var m = T;
                                        switch(m.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                dr(8, m, l);
                                        }
                                        var d = m.child;
                                        if (d !== null) d.return = m, T = d;
                                        else for(; T !== null;){
                                            m = T;
                                            var h = m.sibling, y = m.return;
                                            if (sf(m), m === a) {
                                                T = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                h.return = y, T = h;
                                                break;
                                            }
                                            T = y;
                                        }
                                    }
                                }
                                var x = l.alternate;
                                if (x !== null) {
                                    var w = x.child;
                                    if (w !== null) {
                                        x.child = null;
                                        do {
                                            var E = w.sibling;
                                            w.sibling = null, w = E;
                                        }while (w !== null);
                                    }
                                }
                                T = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, T = i;
                        else e: for(; T !== null;){
                            if (l = T, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    dr(9, l, l.return);
                            }
                            var f = l.sibling;
                            if (f !== null) {
                                f.return = l.return, T = f;
                                break e;
                            }
                            T = l.return;
                        }
                    }
                    var c = e.current;
                    for(T = c; T !== null;){
                        i = T;
                        var p = i.child;
                        if (i.subtreeFlags & 2064 && p !== null) p.return = i, T = p;
                        else e: for(i = c; T !== null;){
                            if (s = T, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        ll(9, s);
                                }
                            } catch (C) {
                                oe(s, s.return, C);
                            }
                            if (s === i) {
                                T = null;
                                break e;
                            }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return, T = g;
                                break e;
                            }
                            T = s.return;
                        }
                    }
                    if (V = o, Gt(), at && typeof at.onPostCommitFiberRoot == "function") try {
                        at.onPostCommitFiberRoot(Zo, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                G = n, be.transition = t;
            }
        }
        return !1;
    }
    function Wu(e, t, n) {
        t = Vn(n, t), t = Yc(e, t, 1), e = Dt(e, t, 1), t = Ee(), e !== null && (Or(e, 1, t), Le(e, t));
    }
    function oe(e, t, n) {
        if (e.tag === 3) Wu(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Wu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = Vn(n, e), e = Xc(t, e, 1), t = Dt(t, e, 1), e = Ee(), t !== null && (Or(t, 1, e), Le(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function zm(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ge & n) === n && (fe === 4 || fe === 3 && (ge & 130023424) === ge && 500 > ie() - Es ? nn(e, 0) : Cs |= n), Le(e, t);
    }
    function vf(e, t) {
        t === 0 && (e.mode & 1 ? (t = Kr, Kr <<= 1, !(Kr & 130023424) && (Kr = 4194304)) : t = 1);
        var n = Ee();
        e = wt(e, t), e !== null && (Or(e, t, n), Le(e, n));
    }
    function Rm(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), vf(e, n);
    }
    function Tm(e, t) {
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
        r !== null && r.delete(t), vf(e, n);
    }
    var yf;
    yf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, vm(e, t, n);
            Te = !!(e.flags & 131072);
        }
        else Te = !1, ee && t.flags & 1048576 && kc(t, Oo, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                yo(e, t), e = t.pendingProps;
                var o = Fn(t, Se.current);
                jn(t, n), o = vs(null, t, r, e, o, n);
                var l = ys();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (l = !0, Lo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ds(t), o.updater = ol, t.stateNode = o, o._reactInternals = t, ki(t, r, e, n), t = Ei(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && ls(t), Ce(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(yo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Im(r), e = Je(r, e), o){
                        case 0:
                            t = Ci(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Lu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Mu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Iu(null, t, r, Je(r.type, e), n);
                            break e;
                    }
                    throw Error(k(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), Ci(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), Lu(e, t, r, o, n);
            case 3:
                e: {
                    if (ef(t), e === null) throw Error(k(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Nc(e, t), Ao(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Vn(Error(k(423)), t), t = ju(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = Vn(Error(k(424)), t), t = ju(e, t, r, n, o);
                        break e;
                    } else for(Fe = Ot(t.stateNode.containerInfo.firstChild), Ae = t, ee = !0, et = null, n = _c(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (An(), r === o) {
                            t = xt(e, t, n);
                            break e;
                        }
                        Ce(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return zc(t), e === null && yi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, pi(r, o) ? i = null : l !== null && pi(r, l) && (t.flags |= 32), qc(e, t), Ce(e, t, i, n), t.child;
            case 6:
                return e === null && yi(t), null;
            case 13:
                return tf(e, t, n);
            case 4:
                return ps(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Un(t, null, r, n) : Ce(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), Mu(e, t, r, o, n);
            case 7:
                return Ce(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ce(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ce(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(Do, r._currentValue), r._currentValue = i, l !== null) if (rt(l.value, i)) {
                        if (l.children === o.children && !Me.current) {
                            t = xt(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var u = s.firstContext; u !== null;){
                                if (u.context === r) {
                                    if (l.tag === 1) {
                                        u = gt(-1, n & -n), u.tag = 2;
                                        var a = l.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var m = a.pending;
                                            m === null ? u.next = u : (u.next = m.next, m.next = u), a.pending = u;
                                        }
                                    }
                                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), wi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                u = u.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(k(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), wi(i, n, t), i = l.sibling;
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
                    Ce(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, jn(t, n), o = Qe(o), r = r(o), t.flags |= 1, Ce(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = Je(r, t.pendingProps), o = Je(r.type, o), Iu(e, t, r, o, n);
            case 15:
                return Zc(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Je(r, o), yo(e, t), t.tag = 1, Ie(r) ? (e = !0, Lo(t)) : e = !1, jn(t, n), Kc(t, r, o), ki(t, r, o, n), Ei(null, t, r, !0, e, n);
            case 19:
                return nf(e, t, n);
            case 22:
                return Jc(e, t, n);
        }
        throw Error(k(156, t.tag));
    };
    function wf(e, t) {
        return Ha(e, t);
    }
    function Mm(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function He(e, t, n, r) {
        return new Mm(e, t, n, r);
    }
    function zs(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Im(e) {
        if (typeof e == "function") return zs(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Qi) return 11;
            if (e === Ki) return 14;
        }
        return 2;
    }
    function Ut(e, t) {
        var n = e.alternate;
        return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function ko(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") zs(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case yn:
                return rn(n.children, o, l, t);
            case bi:
                i = 8, o |= 8;
                break;
            case Hl:
                return e = He(12, n, t, o | 2), e.elementType = Hl, e.lanes = l, e;
            case bl:
                return e = He(13, n, t, o), e.elementType = bl, e.lanes = l, e;
            case Ql:
                return e = He(19, n, t, o), e.elementType = Ql, e.lanes = l, e;
            case za:
                return sl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Pa:
                        i = 10;
                        break e;
                    case Na:
                        i = 9;
                        break e;
                    case Qi:
                        i = 11;
                        break e;
                    case Ki:
                        i = 14;
                        break e;
                    case Pt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(k(130, e == null ? e : typeof e, ""));
        }
        return t = He(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function rn(e, t, n, r) {
        return e = He(7, e, r, t), e.lanes = n, e;
    }
    function sl(e, t, n, r) {
        return e = He(22, e, r, t), e.elementType = za, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Ul(e, t, n) {
        return e = He(6, e, null, t), e.lanes = n, e;
    }
    function Bl(e, t, n) {
        return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function Lm(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xl(0), this.expirationTimes = xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Rs(e, t, n, r, o, l, i, s, u) {
        return e = new Lm(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = He(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ds(l), e;
    }
    function jm(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: vn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function xf(e) {
        if (!e) return Vt;
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
                        if (Ie(t.type)) {
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
            if (Ie(n)) return wc(e, n, t);
        }
        return t;
    }
    function kf(e, t, n, r, o, l, i, s, u) {
        return e = Rs(n, r, !0, e, o, l, i, s, u), e.context = xf(null), n = e.current, r = Ee(), o = At(n), l = gt(r, o), l.callback = t ?? null, Dt(n, l, o), e.current.lanes = o, Or(e, o, r), Le(e, r), e;
    }
    function ul(e, t, n, r) {
        var o = t.current, l = Ee(), i = At(o);
        return n = xf(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(o, t, i), e !== null && (nt(e, o, i, l), ho(e, o, i)), i;
    }
    function bo(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Gu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Ts(e, t) {
        Gu(e, t), (e = e.alternate) && Gu(e, t);
    }
    function Om() {
        return null;
    }
    var Sf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Ms(e) {
        this._internalRoot = e;
    }
    al.prototype.render = Ms.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(k(409));
        ul(e, t, null, null);
    };
    al.prototype.unmount = Ms.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            cn(function() {
                ul(null, e, null, null);
            }), t[yt] = null;
        }
    };
    function al(e) {
        this._internalRoot = e;
    }
    al.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ja();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
            zt.splice(n, 0, e), n === 0 && ec(e);
        }
    };
    function Is(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function cl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Hu() {}
    function Dm(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var a = bo(i);
                    l.call(a);
                };
            }
            var i = kf(t, r, e, 0, null, !1, !1, "", Hu);
            return e._reactRootContainer = i, e[yt] = i.current, Er(e.nodeType === 8 ? e.parentNode : e), cn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var a = bo(u);
                s.call(a);
            };
        }
        var u = Rs(e, 0, !1, null, null, !1, !1, "", Hu);
        return e._reactRootContainer = u, e[yt] = u.current, Er(e.nodeType === 8 ? e.parentNode : e), cn(function() {
            ul(t, u, n, r);
        }), u;
    }
    function fl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var u = bo(i);
                    s.call(u);
                };
            }
            ul(t, i, e, o);
        } else i = Dm(n, t, e, o, r);
        return bo(i);
    }
    Xa = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = or(t.pendingLanes);
                    n !== 0 && (Zi(t, n | 1), Le(t, ie()), !(V & 6) && ($n = ie() + 500, Gt()));
                }
                break;
            case 13:
                cn(function() {
                    var r = wt(e, 1);
                    if (r !== null) {
                        var o = Ee();
                        nt(r, e, 1, o);
                    }
                }), Ts(e, 1);
        }
    };
    Ji = function(e) {
        if (e.tag === 13) {
            var t = wt(e, 134217728);
            if (t !== null) {
                var n = Ee();
                nt(t, e, 134217728, n);
            }
            Ts(e, 134217728);
        }
    };
    Za = function(e) {
        if (e.tag === 13) {
            var t = At(e), n = wt(e, t);
            if (n !== null) {
                var r = Ee();
                nt(n, e, t, r);
            }
            Ts(e, t);
        }
    };
    Ja = function() {
        return G;
    };
    qa = function(e, t) {
        var n = G;
        try {
            return G = e, t();
        } finally{
            G = n;
        }
    };
    ri = function(e, t, n) {
        switch(t){
            case "input":
                if (Xl(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = tl(r);
                            if (!o) throw Error(k(90));
                            Ta(r), Xl(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Ia(e, n);
                break;
            case "select":
                t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
        }
    };
    Ua = _s;
    Ba = cn;
    var Fm = {
        usingClientEntryPoint: !1,
        Events: [
            Fr,
            Sn,
            tl,
            Fa,
            Aa,
            _s
        ]
    }, er = {
        findFiberByHostInstance: qt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Am = {
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
        currentDispatcherRef: kt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Wa(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: er.findFiberByHostInstance || Om,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!lo.isDisabled && lo.supportsFiber) try {
            Zo = lo.inject(Am), at = lo;
        } catch  {}
    }
    Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
    Be.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Is(t)) throw Error(k(200));
        return jm(e, t, null, n);
    };
    Be.createRoot = function(e, t) {
        if (!Is(e)) throw Error(k(299));
        var n = !1, r = "", o = Sf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Rs(e, 1, !1, null, null, n, !1, r, o), e[yt] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new Ms(t);
    };
    Be.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
        return e = Wa(t), e = e === null ? null : e.stateNode, e;
    };
    Be.flushSync = function(e) {
        return cn(e);
    };
    Be.hydrate = function(e, t, n) {
        if (!cl(t)) throw Error(k(200));
        return fl(null, e, t, !0, n);
    };
    Be.hydrateRoot = function(e, t, n) {
        if (!Is(e)) throw Error(k(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Sf;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kf(t, null, e, 1, n ?? null, o, !1, l, i), e[yt] = t.current, Er(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new al(t);
    };
    Be.render = function(e, t, n) {
        if (!cl(t)) throw Error(k(200));
        return fl(null, e, t, !1, n);
    };
    Be.unmountComponentAtNode = function(e) {
        if (!cl(e)) throw Error(k(40));
        return e._reactRootContainer ? (cn(function() {
            fl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[yt] = null;
            });
        }), !0) : !1;
    };
    Be.unstable_batchedUpdates = _s;
    Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!cl(n)) throw Error(k(200));
        if (e == null || e._reactInternals === void 0) throw Error(k(38));
        return fl(e, t, n, !1, r);
    };
    Be.version = "18.3.1-next-f1338f8080-20240426";
    function Cf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf);
        } catch (e) {
            console.error(e);
        }
    }
    Cf(), Sa.exports = Be;
    var Um = Sa.exports, bu = Um;
    Wl.createRoot = bu.createRoot, Wl.hydrateRoot = bu.hydrateRoot;
    const Bm = "modulepreload", Vm = function(e) {
        return "/grid-draw/" + e;
    }, Qu = {}, $m = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((u)=>{
                if (u = Vm(u), u in Qu) return;
                Qu[u] = !0;
                const a = u.endsWith(".css"), m = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${m}`)) return;
                const d = document.createElement("link");
                if (d.rel = a ? "stylesheet" : Bm, a || (d.as = "script"), d.crossOrigin = "", d.href = u, s && d.setAttribute("nonce", s), document.head.appendChild(d), a) return new Promise((h, y)=>{
                    d.addEventListener("load", h), d.addEventListener("error", ()=>y(new Error(`Unable to preload CSS for ${u}`)));
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
    function Wm(e, t, n) {
        const [r, o] = N.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = N.useRef(!1);
        return N.useEffect(()=>{
            l.current || (l.current = !0, (async ()=>{
                try {
                    const i = await $m(()=>import("./grid_draw_wasm.js"), []);
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
    const Ku = (e)=>{
        let t;
        const n = new Set, r = (a, m)=>{
            const d = typeof a == "function" ? a(t) : a;
            if (!Object.is(d, t)) {
                const h = t;
                t = m ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((y)=>y(t, h));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>u,
            subscribe: (a)=>(n.add(a), ()=>n.delete(a))
        }, u = t = e(r, o, s);
        return s;
    }, Gm = (e)=>e ? Ku(e) : Ku, Hm = (e)=>e;
    function bm(e, t = Hm) {
        const n = q.useSyncExternalStore(e.subscribe, q.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), q.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return q.useDebugValue(n), n;
    }
    const Yu = (e)=>{
        const t = Gm(e), n = (r)=>bm(t, r);
        return Object.assign(n, t), n;
    }, Qm = (e)=>e ? Yu(e) : Yu;
    function Ef(e, t) {
        return t.some((n)=>n.row === e.row && n.col === e.col);
    }
    function Km(e, t) {
        return Ef(e, t) ? t : [
            ...t,
            e
        ];
    }
    function Ym(e, t) {
        return t.filter((n)=>n.row !== e.row || n.col !== e.col);
    }
    function Xm(e, t) {
        const n = [
            ...e
        ];
        for (const r of t)Ef(r, n) || n.push(r);
        return n;
    }
    function hr(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    function Zm(e, t, n) {
        return e >= n.minRow && e <= n.maxRow && t >= n.minCol && t <= n.maxCol;
    }
    function Jm(e, t) {
        return e.filter((n)=>t(n.row, n.col));
    }
    const qm = Qm((e, t)=>({
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
            selectedCells: [],
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
            setSelectedCells: (n)=>e({
                    selectedCells: n
                }),
            addToSelection: (n)=>{
                const { selectedCells: r } = t(), o = Km(n, r);
                e({
                    selectedCells: o
                }), t().renderWithBoundingBox(o);
            },
            removeFromSelection: (n)=>{
                const { selectedCells: r } = t(), o = Ym(n, r);
                e({
                    selectedCells: o
                }), t().renderWithBoundingBox(o);
            },
            clearSelection: ()=>e({
                    selectedCells: []
                }),
            startBoxSelection: (n, r)=>{
                const { selectedCells: o, grid: l } = t(), i = r ? [
                    ...o
                ] : [];
                e({
                    selectMode: "box",
                    selectBoxStart: n,
                    isSelecting: !0,
                    previousSelection: i,
                    selectedCells: r ? o : []
                }), l?.render();
            },
            updateBoxSelection: (n)=>{
                const { grid: r, selectBoxStart: o, previousSelection: l } = t();
                if (!(!r || !o)) {
                    r.render_with_selection_box(o.row, o.col, n.row, n.col);
                    for (const i of l)r.highlight_cell(i.row, i.col);
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
                const i = Math.min(o.row, n.row), s = Math.max(o.row, n.row), u = Math.min(o.col, n.col), a = Math.max(o.col, n.col), m = r.get_rows(), d = r.get_cols(), h = [];
                for(let w = i; w <= s && w < m; w++)for(let E = u; E <= a && E < d; E++)h.push({
                    row: w,
                    col: E
                });
                const y = Jm(h, (w, E)=>r.get_cell(w, E)), x = Xm(l, y);
                e({
                    selectedCells: x,
                    selectMode: null,
                    selectBoxStart: null,
                    isSelecting: !1,
                    previousSelection: []
                }), t().renderWithBoundingBox(x);
            },
            cancelBoxSelection: ()=>{
                const { previousSelection: n } = t();
                e({
                    selectMode: null,
                    selectBoxStart: null,
                    isSelecting: !1,
                    selectedCells: n,
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
                const { grid: r, selectDragStart: o, selectedCells: l, updateOutputs: i } = t();
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
                    const a = r.get_rows(), m = r.get_cols(), d = [];
                    for (const h of l){
                        const y = h.row + s, x = h.col + u;
                        y >= 0 && y < a && x >= 0 && x < m && (r.move_cell(h.row, h.col, y, x), d.push({
                            row: y,
                            col: x
                        }));
                    }
                    e({
                        selectedCells: d,
                        selectMode: null,
                        selectDragStart: null,
                        isSelecting: !1
                    }), i(), t().renderWithBoundingBox(d);
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
            copy: ()=>{
                const { grid: n, selectedCells: r } = t();
                if (!n || r.length === 0) return;
                const o = hr(r);
                if (!o) return;
                const l = r.map((i)=>({
                        relRow: i.row - o.minRow,
                        relCol: i.col - o.minCol,
                        color: n.get_cell_color(i.row, i.col)
                    }));
                e({
                    clipboard: {
                        cells: l
                    }
                });
            },
            paste: ()=>{
                const { grid: n, clipboard: r, mousePos: o, updateOutputs: l } = t();
                if (!n || !r || r.cells.length === 0) return;
                const i = n.get_rows(), s = n.get_cols(), u = [];
                for (const a of r.cells){
                    const m = o.row + a.relRow, d = o.col + a.relCol;
                    m >= 0 && m < i && d >= 0 && d < s && (n.set_draw_color(a.color), n.set_cell(m, d, !0), u.push({
                        row: m,
                        col: d
                    }));
                }
                e({
                    selectedCells: u
                }), t().renderWithBoundingBox(u), l();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedCells: r, updateOutputs: o } = t();
                if (!(!n || r.length === 0)) {
                    for (const l of r)n.delete_cell(l.row, l.col);
                    e({
                        selectedCells: []
                    }), n.render(), o();
                }
            },
            updateOutputs: ()=>{
                const { grid: n } = t();
                n && e({
                    jsonOutput: n.export_json(),
                    tensorOutput: n.export_pytorch_tensor()
                });
            },
            importJson: (n)=>{
                const { grid: r } = t();
                if (!(!r || !n.trim())) try {
                    r.import_json(n), e({
                        selectedCells: [],
                        jsonOutput: n
                    }), e({
                        tensorOutput: r.export_pytorch_tensor()
                    });
                } catch  {}
            },
            importTensor: (n)=>{
                const { grid: r } = t();
                if (!(!r || !n.trim())) try {
                    let o = n.trim();
                    o.startsWith("tensor(") && (o = o.slice(7), o.endsWith(")") && (o = o.slice(0, -1))), r.import_tensor(o), e({
                        selectedCells: [],
                        tensorOutput: n
                    }), e({
                        jsonOutput: r.export_json()
                    });
                } catch  {}
            },
            clear: ()=>{
                const { grid: n, updateOutputs: r } = t();
                n?.clear(), e({
                    selectedCells: []
                }), r();
            },
            renderSelection: ()=>{
                const { grid: n, selectedCells: r } = t();
                if (!n) return;
                n.render();
                for (const l of r)n.highlight_cell(l.row, l.col);
                const o = hr(r);
                o && r.length > 1 && n.draw_selection_box(o.minRow, o.minCol, o.maxRow + 1, o.maxCol + 1);
            },
            renderWithBoundingBox: (n)=>{
                const { grid: r } = t();
                if (!r) return;
                r.render();
                for (const l of n)r.highlight_cell(l.row, l.col);
                const o = hr(n);
                o && n.length > 1 && r.draw_selection_box(o.minRow, o.minCol, o.maxRow + 1, o.maxCol + 1);
            }
        }));
    function _f(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = _f(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Pf() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = _f(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Xu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Zu = Pf, Nf = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Zu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((a)=>{
                const m = n?.[a], d = l?.[a];
                if (m === null) return null;
                const h = Xu(m) || Xu(d);
                return o[a][h];
            }), s = n && Object.entries(n).reduce((a, m)=>{
                let [d, h] = m;
                return h === void 0 || (a[d] = h), a;
            }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, m)=>{
                let { class: d, className: h, ...y } = m;
                return Object.entries(y).every((x)=>{
                    let [w, E] = x;
                    return Array.isArray(E) ? E.includes({
                        ...l,
                        ...s
                    }[w]) : {
                        ...l,
                        ...s
                    }[w] === E;
                }) ? [
                    ...a,
                    d,
                    h
                ] : a;
            }, []);
            return Zu(e, i, u, n?.class, n?.className);
        };
    function Ju(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function zf(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Ju(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Ju(e[o], null);
                }
            };
        };
    }
    function Di(...e) {
        return N.useCallback(zf(...e), e);
    }
    function Qo(e) {
        const t = th(e), n = N.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = N.Children.toArray(l), u = s.find(rh);
            if (u) {
                const a = u.props.children, m = s.map((d)=>d === u ? N.Children.count(a) > 1 ? N.Children.only(null) : N.isValidElement(a) ? a.props.children : null : d);
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
    var eh = Qo("Slot");
    function th(e) {
        const t = N.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (N.isValidElement(o)) {
                const i = lh(o), s = oh(l, o.props);
                return o.type !== N.Fragment && (s.ref = r ? zf(r, i) : i), N.cloneElement(o, s);
            }
            return N.Children.count(o) > 1 ? N.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var nh = Symbol("radix.slottable");
    function rh(e) {
        return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === nh;
    }
    function oh(e, t) {
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
    function lh(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var ih = [
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
    ], Lr = ih.reduce((e, t)=>{
        const n = Qo(`Primitive.${t}`), r = N.forwardRef((o, l)=>{
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
    function Ls(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = N.createContext(i), u = n.length;
            n = [
                ...n,
                i
            ];
            const a = (d)=>{
                const { scope: h, children: y, ...x } = d, w = h?.[e]?.[u] || s, E = N.useMemo(()=>x, Object.values(x));
                return P.jsx(w.Provider, {
                    value: E,
                    children: y
                });
            };
            a.displayName = l + "Provider";
            function m(d, h) {
                const y = h?.[e]?.[u] || s, x = N.useContext(y);
                if (x) return x;
                if (i !== void 0) return i;
                throw new Error(`\`${d}\` must be used within \`${l}\``);
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
            sh(o, ...t)
        ];
    }
    function sh(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: u, scopeName: a })=>{
                    const d = u(l)[`__scope${a}`];
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
    function uh(e) {
        const t = e + "CollectionProvider", [n, r] = Ls(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (w)=>{
            const { scope: E, children: f } = w, c = q.useRef(null), p = q.useRef(new Map).current;
            return P.jsx(o, {
                scope: E,
                itemMap: p,
                collectionRef: c,
                children: f
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", u = Qo(s), a = q.forwardRef((w, E)=>{
            const { scope: f, children: c } = w, p = l(s, f), g = Di(E, p.collectionRef);
            return P.jsx(u, {
                ref: g,
                children: c
            });
        });
        a.displayName = s;
        const m = e + "CollectionItemSlot", d = "data-radix-collection-item", h = Qo(m), y = q.forwardRef((w, E)=>{
            const { scope: f, children: c, ...p } = w, g = q.useRef(null), C = Di(E, g), _ = l(m, f);
            return q.useEffect(()=>(_.itemMap.set(g, {
                    ref: g,
                    ...p
                }), ()=>void _.itemMap.delete(g))), P.jsx(h, {
                [d]: "",
                ref: C,
                children: c
            });
        });
        y.displayName = m;
        function x(w) {
            const E = l(e + "CollectionConsumer", w);
            return q.useCallback(()=>{
                const c = E.collectionRef.current;
                if (!c) return [];
                const p = Array.from(c.querySelectorAll(`[${d}]`));
                return Array.from(E.itemMap.values()).sort((_, z)=>p.indexOf(_.ref.current) - p.indexOf(z.ref.current));
            }, [
                E.collectionRef,
                E.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: a,
                ItemSlot: y
            },
            x,
            r
        ];
    }
    function on(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Rf = globalThis?.document ? N.useLayoutEffect : ()=>{}, ah = xa[" useInsertionEffect ".trim().toString()] || Rf;
    function dl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = ch({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, u = s ? e : o;
        {
            const m = N.useRef(e !== void 0);
            N.useEffect(()=>{
                const d = m.current;
                d !== s && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), m.current = s;
            }, [
                s,
                r
            ]);
        }
        const a = N.useCallback((m)=>{
            if (s) {
                const d = fh(m) ? m(e) : m;
                d !== e && i.current?.(d);
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
    function ch({ defaultProp: e, onChange: t }) {
        const [n, r] = N.useState(e), o = N.useRef(n), l = N.useRef(t);
        return ah(()=>{
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
    function fh(e) {
        return typeof e == "function";
    }
    var dh = xa[" useId ".trim().toString()] || (()=>{}), ph = 0;
    function mh(e) {
        const [t, n] = N.useState(dh());
        return Rf(()=>{
            n((r)=>r ?? String(ph++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var hh = N.createContext(void 0);
    function Tf(e) {
        const t = N.useContext(hh);
        return e || t || "ltr";
    }
    function gh(e) {
        const t = N.useRef(e);
        return N.useEffect(()=>{
            t.current = e;
        }), N.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Vl = "rovingFocusGroup.onEntryFocus", vh = {
        bubbles: !1,
        cancelable: !0
    }, Ur = "RovingFocusGroup", [Fi, Mf, yh] = uh(Ur), [wh, If] = Ls(Ur, [
        yh
    ]), [xh, kh] = wh(Ur), Lf = N.forwardRef((e, t)=>P.jsx(Fi.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: P.jsx(Fi.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: P.jsx(Sh, {
                    ...e,
                    ref: t
                })
            })
        }));
    Lf.displayName = Ur;
    var Sh = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: u, onEntryFocus: a, preventScrollOnEntryFocus: m = !1, ...d } = e, h = N.useRef(null), y = Di(t, h), x = Tf(l), [w, E] = dl({
            prop: i,
            defaultProp: s ?? null,
            onChange: u,
            caller: Ur
        }), [f, c] = N.useState(!1), p = gh(a), g = Mf(n), C = N.useRef(!1), [_, z] = N.useState(0);
        return N.useEffect(()=>{
            const v = h.current;
            if (v) return v.addEventListener(Vl, p), ()=>v.removeEventListener(Vl, p);
        }, [
            p
        ]), P.jsx(xh, {
            scope: n,
            orientation: r,
            dir: x,
            loop: o,
            currentTabStopId: w,
            onItemFocus: N.useCallback((v)=>E(v), [
                E
            ]),
            onItemShiftTab: N.useCallback(()=>c(!0), []),
            onFocusableItemAdd: N.useCallback(()=>z((v)=>v + 1), []),
            onFocusableItemRemove: N.useCallback(()=>z((v)=>v - 1), []),
            children: P.jsx(Lr.div, {
                tabIndex: f || _ === 0 ? -1 : 0,
                "data-orientation": r,
                ...d,
                ref: y,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: on(e.onMouseDown, ()=>{
                    C.current = !0;
                }),
                onFocus: on(e.onFocus, (v)=>{
                    const F = !C.current;
                    if (v.target === v.currentTarget && F && !f) {
                        const D = new CustomEvent(Vl, vh);
                        if (v.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const H = g().filter((Q)=>Q.focusable), ye = H.find((Q)=>Q.active), je = H.find((Q)=>Q.id === w), Oe = [
                                ye,
                                je,
                                ...H
                            ].filter(Boolean).map((Q)=>Q.ref.current);
                            Df(Oe, m);
                        }
                    }
                    C.current = !1;
                }),
                onBlur: on(e.onBlur, ()=>c(!1))
            })
        });
    }), jf = "RovingFocusGroupItem", Of = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, u = mh(), a = l || u, m = kh(jf, n), d = m.currentTabStopId === a, h = Mf(n), { onFocusableItemAdd: y, onFocusableItemRemove: x, currentTabStopId: w } = m;
        return N.useEffect(()=>{
            if (r) return y(), ()=>x();
        }, [
            r,
            y,
            x
        ]), P.jsx(Fi.ItemSlot, {
            scope: n,
            id: a,
            focusable: r,
            active: o,
            children: P.jsx(Lr.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": m.orientation,
                ...s,
                ref: t,
                onMouseDown: on(e.onMouseDown, (E)=>{
                    r ? m.onItemFocus(a) : E.preventDefault();
                }),
                onFocus: on(e.onFocus, ()=>m.onItemFocus(a)),
                onKeyDown: on(e.onKeyDown, (E)=>{
                    if (E.key === "Tab" && E.shiftKey) {
                        m.onItemShiftTab();
                        return;
                    }
                    if (E.target !== E.currentTarget) return;
                    const f = _h(E, m.orientation, m.dir);
                    if (f !== void 0) {
                        if (E.metaKey || E.ctrlKey || E.altKey || E.shiftKey) return;
                        E.preventDefault();
                        let p = h().filter((g)=>g.focusable).map((g)=>g.ref.current);
                        if (f === "last") p.reverse();
                        else if (f === "prev" || f === "next") {
                            f === "prev" && p.reverse();
                            const g = p.indexOf(E.currentTarget);
                            p = m.loop ? Ph(p, g + 1) : p.slice(g + 1);
                        }
                        setTimeout(()=>Df(p));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: d,
                    hasTabStop: w != null
                }) : i
            })
        });
    });
    Of.displayName = jf;
    var Ch = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function Eh(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function _h(e, t, n) {
        const r = Eh(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Ch[r];
    }
    function Df(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Ph(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Nh = Lf, zh = Of, Ff = "Toggle", Af = N.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = dl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Ff
        });
        return P.jsx(Lr.button, {
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
    Af.displayName = Ff;
    var Ht = "ToggleGroup", [Uf] = Ls(Ht, [
        If
    ]), Bf = If(), js = q.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return P.jsx(Rh, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return P.jsx(Th, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${Ht}\``);
    });
    js.displayName = Ht;
    var [Vf, $f] = Uf(Ht), Rh = q.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = dl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: Ht
        });
        return P.jsx(Vf, {
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
            children: P.jsx(Wf, {
                ...l,
                ref: t
            })
        });
    }), Th = q.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = dl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: Ht
        }), u = q.useCallback((m)=>s((d = [])=>[
                    ...d,
                    m
                ]), [
            s
        ]), a = q.useCallback((m)=>s((d = [])=>d.filter((h)=>h !== m)), [
            s
        ]);
        return P.jsx(Vf, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: u,
            onItemDeactivate: a,
            children: P.jsx(Wf, {
                ...l,
                ref: t
            })
        });
    });
    js.displayName = Ht;
    var [Mh, Ih] = Uf(Ht), Wf = q.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...u } = e, a = Bf(n), m = Tf(i), d = {
            role: "group",
            dir: m,
            ...u
        };
        return P.jsx(Mh, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? P.jsx(Nh, {
                asChild: !0,
                ...a,
                orientation: l,
                dir: m,
                loop: s,
                children: P.jsx(Lr.div, {
                    ...d,
                    ref: t
                })
            }) : P.jsx(Lr.div, {
                ...d,
                ref: t
            })
        });
    }), Ko = "ToggleGroupItem", Gf = q.forwardRef((e, t)=>{
        const n = $f(Ko, e.__scopeToggleGroup), r = Ih(Ko, e.__scopeToggleGroup), o = Bf(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, u = q.useRef(null);
        return r.rovingFocus ? P.jsx(zh, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: u,
            children: P.jsx(qu, {
                ...s,
                ref: t
            })
        }) : P.jsx(qu, {
            ...s,
            ref: t
        });
    });
    Gf.displayName = Ko;
    var qu = q.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = $f(Ko, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return P.jsx(Af, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (u)=>{
                u ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Lh = js, jh = Gf;
    const Oh = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Dh = (e, t)=>({
            classGroupId: e,
            validator: t
        }), Hf = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Yo = "-", ea = [], Fh = "arbitrary..", Ah = (e)=>{
        const t = Bh(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Uh(i);
                const s = i.split(Yo), u = s[0] === "" && s.length > 1 ? 1 : 0;
                return bf(s, u, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const u = r[i], a = n[i];
                    return u ? a ? Oh(a, u) : u : a || ea;
                }
                return n[i] || ea;
            }
        };
    }, bf = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const a = bf(e, t + 1, l);
            if (a) return a;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Yo) : e.slice(t).join(Yo), u = i.length;
        for(let a = 0; a < u; a++){
            const m = i[a];
            if (m.validator(s)) return m.classGroupId;
        }
    }, Uh = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Fh + r : void 0;
        })(), Bh = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Vh(n, t);
    }, Vh = (e, t)=>{
        const n = Hf();
        for(const r in e){
            const o = e[r];
            Os(o, n, r, t);
        }
        return n;
    }, Os = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            $h(i, t, n, r);
        }
    }, $h = (e, t, n, r)=>{
        if (typeof e == "string") {
            Wh(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Gh(e, t, n, r);
            return;
        }
        Hh(e, t, n, r);
    }, Wh = (e, t, n)=>{
        const r = e === "" ? t : Qf(t, e);
        r.classGroupId = n;
    }, Gh = (e, t, n, r)=>{
        if (bh(e)) {
            Os(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Dh(n, e));
    }, Hh = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, u] = o[i];
            Os(u, Qf(t, s), n, r);
        }
    }, Qf = (e, t)=>{
        let n = e;
        const r = t.split(Yo), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = Hf(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, bh = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Qh = (e)=>{
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
    }, Ai = "!", ta = ":", Kh = [], na = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Yh = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, u = 0, a;
            const m = o.length;
            for(let w = 0; w < m; w++){
                const E = o[w];
                if (i === 0 && s === 0) {
                    if (E === ta) {
                        l.push(o.slice(u, w)), u = w + 1;
                        continue;
                    }
                    if (E === "/") {
                        a = w;
                        continue;
                    }
                }
                E === "[" ? i++ : E === "]" ? i-- : E === "(" ? s++ : E === ")" && s--;
            }
            const d = l.length === 0 ? o : o.slice(u);
            let h = d, y = !1;
            d.endsWith(Ai) ? (h = d.slice(0, -1), y = !0) : d.startsWith(Ai) && (h = d.slice(1), y = !0);
            const x = a && a > u ? a - u : void 0;
            return na(l, y, h, x);
        };
        if (t) {
            const o = t + ta, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : na(Kh, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Xh = (e)=>{
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
    }, Zh = (e)=>({
            cache: Qh(e.cacheSize),
            parseClassName: Yh(e),
            sortModifiers: Xh(e),
            ...Ah(e)
        }), Jh = /\s+/, qh = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Jh);
        let u = "";
        for(let a = s.length - 1; a >= 0; a -= 1){
            const m = s[a], { isExternal: d, modifiers: h, hasImportantModifier: y, baseClassName: x, maybePostfixModifierPosition: w } = n(m);
            if (d) {
                u = m + (u.length > 0 ? " " + u : u);
                continue;
            }
            let E = !!w, f = r(E ? x.substring(0, w) : x);
            if (!f) {
                if (!E) {
                    u = m + (u.length > 0 ? " " + u : u);
                    continue;
                }
                if (f = r(x), !f) {
                    u = m + (u.length > 0 ? " " + u : u);
                    continue;
                }
                E = !1;
            }
            const c = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), p = y ? c + Ai : c, g = p + f;
            if (i.indexOf(g) > -1) continue;
            i.push(g);
            const C = o(f, E);
            for(let _ = 0; _ < C.length; ++_){
                const z = C[_];
                i.push(p + z);
            }
            u = m + (u.length > 0 ? " " + u : u);
        }
        return u;
    }, eg = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = Kf(n)) && (o && (o += " "), o += r);
        return o;
    }, Kf = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = Kf(e[r])) && (n && (n += " "), n += t);
        return n;
    }, tg = (e, ...t)=>{
        let n, r, o, l;
        const i = (u)=>{
            const a = t.reduce((m, d)=>d(m), e());
            return n = Zh(a), r = n.cache.get, o = n.cache.set, l = s, s(u);
        }, s = (u)=>{
            const a = r(u);
            if (a) return a;
            const m = qh(u, n);
            return o(u, m), m;
        };
        return l = i, (...u)=>l(eg(...u));
    }, ng = [], ae = (e)=>{
        const t = (n)=>n[e] || ng;
        return t.isThemeGetter = !0, t;
    }, Yf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, rg = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, og = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ig = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, sg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ug = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Et = (e)=>rg.test(e), A = (e)=>!!e && !Number.isNaN(Number(e)), _t = (e)=>!!e && Number.isInteger(Number(e)), $l = (e)=>e.endsWith("%") && A(e.slice(0, -1)), ft = (e)=>og.test(e), Zf = ()=>!0, ag = (e)=>lg.test(e) && !ig.test(e), Ds = ()=>!1, cg = (e)=>sg.test(e), fg = (e)=>ug.test(e), dg = (e)=>!M(e) && !I(e), pg = (e)=>bt(e, ed, Ds), M = (e)=>Yf.test(e), Xt = (e)=>bt(e, td, ag), ra = (e)=>bt(e, kg, A), mg = (e)=>bt(e, rd, Zf), hg = (e)=>bt(e, nd, Ds), oa = (e)=>bt(e, Jf, Ds), gg = (e)=>bt(e, qf, fg), io = (e)=>bt(e, od, cg), I = (e)=>Xf.test(e), tr = (e)=>pn(e, td), vg = (e)=>pn(e, nd), la = (e)=>pn(e, Jf), yg = (e)=>pn(e, ed), wg = (e)=>pn(e, qf), so = (e)=>pn(e, od, !0), xg = (e)=>pn(e, rd, !0), bt = (e, t, n)=>{
        const r = Yf.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, pn = (e, t, n = !1)=>{
        const r = Xf.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, Jf = (e)=>e === "position" || e === "percentage", qf = (e)=>e === "image" || e === "url", ed = (e)=>e === "length" || e === "size" || e === "bg-size", td = (e)=>e === "length", kg = (e)=>e === "number", nd = (e)=>e === "family-name", rd = (e)=>e === "number" || e === "weight", od = (e)=>e === "shadow", Sg = ()=>{
        const e = ae("color"), t = ae("font"), n = ae("text"), r = ae("font-weight"), o = ae("tracking"), l = ae("leading"), i = ae("breakpoint"), s = ae("container"), u = ae("spacing"), a = ae("radius"), m = ae("shadow"), d = ae("inset-shadow"), h = ae("text-shadow"), y = ae("drop-shadow"), x = ae("blur"), w = ae("perspective"), E = ae("aspect"), f = ae("ease"), c = ae("animate"), p = ()=>[
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column"
            ], g = ()=>[
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
                ...g(),
                I,
                M
            ], _ = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], z = ()=>[
                "auto",
                "contain",
                "none"
            ], v = ()=>[
                I,
                M,
                u
            ], F = ()=>[
                Et,
                "full",
                "auto",
                ...v()
            ], D = ()=>[
                _t,
                "none",
                "subgrid",
                I,
                M
            ], H = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        _t,
                        I,
                        M
                    ]
                },
                _t,
                I,
                M
            ], ye = ()=>[
                _t,
                "auto",
                I,
                M
            ], je = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                I,
                M
            ], $e = ()=>[
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
            ], Oe = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], Q = ()=>[
                "auto",
                ...v()
            ], Ne = ()=>[
                Et,
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
                ...v()
            ], R = ()=>[
                Et,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...v()
            ], L = ()=>[
                Et,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ...v()
            ], S = ()=>[
                e,
                I,
                M
            ], b = ()=>[
                ...g(),
                la,
                oa,
                {
                    position: [
                        I,
                        M
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
            ], ot = ()=>[
                "auto",
                "cover",
                "contain",
                yg,
                pg,
                {
                    size: [
                        I,
                        M
                    ]
                }
            ], ze = ()=>[
                $l,
                tr,
                Xt
            ], le = ()=>[
                "",
                "none",
                "full",
                a,
                I,
                M
            ], Y = ()=>[
                "",
                A,
                tr,
                Xt
            ], Ye = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], Br = ()=>[
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
                $l,
                la,
                oa
            ], lt = ()=>[
                "",
                "none",
                x,
                I,
                M
            ], Qt = ()=>[
                "none",
                A,
                I,
                M
            ], Kt = ()=>[
                "none",
                A,
                I,
                M
            ], mn = ()=>[
                A,
                I,
                M
            ], Xe = ()=>[
                Et,
                "full",
                ...v()
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
                    Zf
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
                    dg
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
                            Et,
                            M,
                            I,
                            E
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
                            I,
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
                        object: C()
                    }
                ],
                overflow: [
                    {
                        overflow: _()
                    }
                ],
                "overflow-x": [
                    {
                        "overflow-x": _()
                    }
                ],
                "overflow-y": [
                    {
                        "overflow-y": _()
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
                            _t,
                            "auto",
                            I,
                            M
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            Et,
                            "full",
                            "auto",
                            s,
                            ...v()
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
                            Et,
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
                            I,
                            M
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            A,
                            I,
                            M
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            _t,
                            "first",
                            "last",
                            "none",
                            I,
                            M
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
                        col: H()
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
                        row: H()
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
                        gap: v()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": v()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": v()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...$e(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...Oe(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...Oe()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...$e()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...Oe(),
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
                            ...Oe(),
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
                        "place-content": $e()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...Oe(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...Oe()
                        ]
                    }
                ],
                p: [
                    {
                        p: v()
                    }
                ],
                px: [
                    {
                        px: v()
                    }
                ],
                py: [
                    {
                        py: v()
                    }
                ],
                ps: [
                    {
                        ps: v()
                    }
                ],
                pe: [
                    {
                        pe: v()
                    }
                ],
                pbs: [
                    {
                        pbs: v()
                    }
                ],
                pbe: [
                    {
                        pbe: v()
                    }
                ],
                pt: [
                    {
                        pt: v()
                    }
                ],
                pr: [
                    {
                        pr: v()
                    }
                ],
                pb: [
                    {
                        pb: v()
                    }
                ],
                pl: [
                    {
                        pl: v()
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
                        "space-x": v()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": v()
                    }
                ],
                "space-y-reverse": [
                    "space-y-reverse"
                ],
                size: [
                    {
                        size: Ne()
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
                            ...L()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...L()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...L()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...Ne()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...Ne()
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
                            ...Ne()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...Ne()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...Ne()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...Ne()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            tr,
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
                            xg,
                            mg
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
                            $l,
                            M
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            vg,
                            hg,
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
                            I,
                            M
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            A,
                            "none",
                            I,
                            ra
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...v()
                        ]
                    }
                ],
                "list-image": [
                    {
                        "list-image": [
                            "none",
                            I,
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
                            I,
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
                        placeholder: S()
                    }
                ],
                "text-color": [
                    {
                        text: S()
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
                            ...Ye(),
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
                            I,
                            Xt
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: S()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            A,
                            "auto",
                            I,
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
                        indent: v()
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
                            I,
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
                            I,
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
                        bg: b()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: J()
                    }
                ],
                "bg-size": [
                    {
                        bg: ot()
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
                                    _t,
                                    I,
                                    M
                                ],
                                radial: [
                                    "",
                                    I,
                                    M
                                ],
                                conic: [
                                    _t,
                                    I,
                                    M
                                ]
                            },
                            wg,
                            gg
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: S()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: ze()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: ze()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: ze()
                    }
                ],
                "gradient-from": [
                    {
                        from: S()
                    }
                ],
                "gradient-via": [
                    {
                        via: S()
                    }
                ],
                "gradient-to": [
                    {
                        to: S()
                    }
                ],
                rounded: [
                    {
                        rounded: le()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": le()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": le()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": le()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": le()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": le()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": le()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": le()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": le()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": le()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": le()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": le()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": le()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": le()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": le()
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
                            ...Ye(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Ye(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "border-color": [
                    {
                        border: S()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": S()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": S()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": S()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": S()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": S()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": S()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": S()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": S()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": S()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": S()
                    }
                ],
                "divide-color": [
                    {
                        divide: S()
                    }
                ],
                "outline-style": [
                    {
                        outline: [
                            ...Ye(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            A,
                            tr,
                            Xt
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: S()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            m,
                            so,
                            io
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: S()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            d,
                            so,
                            io
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": S()
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
                        ring: S()
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
                        "ring-offset": S()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": Y()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": S()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            h,
                            so,
                            io
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": S()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...Br(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": Br()
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
                        "mask-linear-from": S()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": S()
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
                        "mask-t-from": S()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": S()
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
                        "mask-r-from": S()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": S()
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
                        "mask-b-from": S()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": S()
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
                        "mask-l-from": S()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": S()
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
                        "mask-x-from": S()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": S()
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
                        "mask-y-from": S()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": S()
                    }
                ],
                "mask-image-radial": [
                    {
                        "mask-radial": [
                            I,
                            M
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
                        "mask-radial-from": S()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": S()
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
                        "mask-radial-at": g()
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
                        "mask-conic-from": S()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": S()
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
                        mask: J()
                    }
                ],
                "mask-size": [
                    {
                        mask: ot()
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
                            I,
                            M
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            I,
                            M
                        ]
                    }
                ],
                blur: [
                    {
                        blur: lt()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            y,
                            so,
                            io
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": S()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            A,
                            I,
                            M
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": lt()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            A,
                            I,
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
                        "border-spacing": v()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": v()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": v()
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
                            I,
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
                            I,
                            M
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            f,
                            I,
                            M
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            A,
                            I,
                            M
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            c,
                            I,
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
                            w,
                            I,
                            M
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
                        rotate: Qt()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": Qt()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": Qt()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": Qt()
                    }
                ],
                scale: [
                    {
                        scale: Kt()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": Kt()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": Kt()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": Kt()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: mn()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": mn()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": mn()
                    }
                ],
                transform: [
                    {
                        transform: [
                            I,
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
                        translate: Xe()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": Xe()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": Xe()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": Xe()
                    }
                ],
                "translate-none": [
                    "translate-none"
                ],
                accent: [
                    {
                        accent: S()
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
                        caret: S()
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
                            I,
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
                        "scroll-m": v()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": v()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": v()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": v()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": v()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": v()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": v()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": v()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": v()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": v()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": v()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": v()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": v()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": v()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": v()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": v()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": v()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": v()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": v()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": v()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": v()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": v()
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
                            I,
                            M
                        ]
                    }
                ],
                fill: [
                    {
                        fill: [
                            "none",
                            ...S()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            A,
                            tr,
                            Xt,
                            ra
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ...S()
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
    }, Cg = tg(Sg);
    function Wn(...e) {
        return Cg(Pf(e));
    }
    const Eg = Nf("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function _g({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? eh : "button";
        return P.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Wn(Eg({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Pg = Nf("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), ld = N.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Ng({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return P.jsx(Lh, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Wn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: P.jsx(ld.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function uo({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = N.useContext(ld);
        return P.jsx(jh, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Wn(Pg({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function ia({ title: e, defaultPosition: t, children: n, className: r }) {
        const [o, l] = N.useState(t), i = N.useRef(!1), s = N.useRef({
            x: 0,
            y: 0
        }), u = N.useCallback((a)=>{
            i.current = !0, s.current = {
                x: a.clientX - o.x,
                y: a.clientY - o.y
            };
            const m = (h)=>{
                if (!i.current) return;
                const y = Math.max(0, h.clientX - s.current.x), x = Math.max(0, h.clientY - s.current.y);
                l({
                    x: y,
                    y: x
                });
            }, d = ()=>{
                i.current = !1, window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", d);
            };
            window.addEventListener("mousemove", m), window.addEventListener("mouseup", d);
        }, [
            o
        ]);
        return P.jsxs("div", {
            className: Wn("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
    const sa = "grid-canvas", Rn = 16, So = 48, zg = [
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
    function ua() {
        const e = Math.floor(window.innerWidth / Rn), t = Math.floor((window.innerHeight - So) / Rn);
        return {
            rows: Math.max(10, t),
            cols: Math.max(10, e)
        };
    }
    function Rg() {
        const [e, t] = N.useState(ua), { grid: n, loading: r, error: o } = Wm(sa, e.rows, e.cols), l = N.useRef(null), i = qm(), { tool: s, setTool: u, colorIdx: a, setColorIdx: m, isDrawing: d, drawMode: h, startDrawing: y, stopDrawing: x, lineStart: w, startLine: E, finishLine: f, rectStart: c, startRect: p, finishRect: g, selectedCells: C, setSelectedCells: _, clipboard: z, copy: v, paste: F, deleteSelected: D, selectMode: H, isSelecting: ye, selectBoxStart: je, selectDragStart: $e, startBoxSelection: Oe, updateBoxSelection: Q, finishBoxSelection: Ne, cancelBoxSelection: R, startDragSelection: L, finishDragSelection: S, cancelDragSelection: b, setMousePos: J, addToSelection: ot, removeFromSelection: ze, jsonOutput: le, tensorOutput: Y, importJson: Ye, importTensor: Br, clear: se, updateOutputs: lt, renderSelection: Qt, setGrid: Kt } = i;
        N.useEffect(()=>{
            Kt(n);
        }, [
            n,
            Kt
        ]), N.useEffect(()=>{
            const O = ()=>{
                const j = ua();
                t(j), n && n.resize(j.rows, j.cols);
            };
            return window.addEventListener("resize", O), ()=>window.removeEventListener("resize", O);
        }, [
            n
        ]), N.useEffect(()=>{
            const O = (j)=>{
                j.key === "\\" && u(s === "line" ? "draw" : "line"), j.key === "m" && u(s === "rect" ? "draw" : "rect"), j.key === "s" && u(s === "select" ? "draw" : "select"), (j.key === "Delete" || j.key === "Backspace") && C.length > 0 && (j.preventDefault(), D()), (j.ctrlKey || j.metaKey) && j.key === "c" && C.length > 0 && (j.preventDefault(), v()), (j.ctrlKey || j.metaKey) && j.key === "v" && z && (j.preventDefault(), F());
                const W = parseInt(j.key);
                W >= 1 && W <= 7 && m(W - 1);
            };
            return window.addEventListener("keydown", O), ()=>window.removeEventListener("keydown", O);
        }, [
            s,
            u,
            m,
            C,
            D,
            v,
            F,
            z
        ]);
        const mn = (O)=>{
            const j = O.currentTarget, W = j.getBoundingClientRect(), $ = j.width / W.width, U = j.height / W.height;
            return {
                x: (O.clientX - W.left) * $,
                y: (O.clientY - W.top) * U
            };
        }, Xe = (O)=>{
            const { x: j, y: W } = mn(O);
            return {
                col: Math.floor(j / Rn),
                row: Math.floor(W / Rn)
            };
        }, hn = (O)=>{
            const { x: j, y: W } = mn(O), $ = n?.get_cols() ?? e.cols, U = n?.get_rows() ?? e.rows, de = Math.max(0, Math.min($, Math.round(j / Rn))), Yt = Math.max(0, Math.min(U, Math.round(W / Rn)));
            return {
                col: de,
                row: Yt
            };
        }, Fs = (O, j)=>C.some((W)=>W.row === O && W.col === j), id = N.useCallback((O)=>{
            if (!n) return;
            n.set_draw_color(a);
            const j = n.get_cols(), W = n.get_rows();
            if (s === "draw") {
                const { col: $, row: U } = Xe(O);
                if ($ >= j || U >= W) return;
                const de = a === 6 ? !1 : !n.get_cell(U, $);
                y(de), n.set_cell(U, $, de), lt();
            } else if (s === "line") {
                const { col: $, row: U } = hn(O);
                E({
                    row: U,
                    col: $
                }), n.render_with_line(U, $, U, $);
            } else if (s === "rect") {
                const { col: $, row: U } = hn(O);
                p({
                    row: U,
                    col: $
                }), n.render_with_rect(U, $, U, $);
            } else if (s === "select") {
                const { col: $, row: U } = Xe(O);
                if ($ >= j || U >= W) return;
                const de = O.shiftKey, Yt = hr(C);
                Yt && Zm(U, $, Yt) && C.length > 0 && !de ? (L({
                    row: U,
                    col: $
                }), Qt()) : n.get_cell(U, $) ? de && !Fs(U, $) ? ot({
                    row: U,
                    col: $
                }) : de && Fs(U, $) ? ze({
                    row: U,
                    col: $
                }) : (_([
                    {
                        row: U,
                        col: $
                    }
                ]), L({
                    row: U,
                    col: $
                }), n.render(), n.highlight_cell(U, $)) : Oe({
                    row: U,
                    col: $
                }, de);
            }
        }, [
            n,
            s,
            a,
            C,
            y,
            E,
            p,
            Oe,
            L,
            ot,
            ze,
            _,
            lt,
            Qt
        ]), sd = N.useCallback((O)=>{
            if (!n) return;
            const j = Xe(O);
            if (J(j), !d && !ye) return;
            const W = n.get_cols(), $ = n.get_rows();
            if (s === "draw" && d) {
                const { col: U, row: de } = Xe(O);
                if (U >= W || de >= $) return;
                n.set_cell(de, U, h), lt();
            } else if (s === "line" && w) {
                const { col: U, row: de } = hn(O);
                n.render_with_line(w.row, w.col, de, U);
            } else if (s === "rect" && c) {
                const { col: U, row: de } = hn(O);
                n.render_with_rect(c.row, c.col, de, U);
            } else if (s === "select" && ye) {
                const { col: U, row: de } = Xe(O), Yt = Math.max(0, Math.min(W - 1, U)), pl = Math.max(0, Math.min($ - 1, de));
                if (H === "box" && je) Q({
                    row: pl,
                    col: Yt
                });
                else if (H === "drag" && $e && C.length > 0) {
                    const cd = pl - $e.row, fd = Yt - $e.col;
                    n.render();
                    const ml = [];
                    for (const St of C){
                        const Vr = St.row + cd, $r = St.col + fd;
                        Vr >= 0 && Vr < $ && $r >= 0 && $r < W && (n.highlight_cell(Vr, $r), ml.push({
                            row: Vr,
                            col: $r
                        }));
                    }
                    if (ml.length > 1) {
                        const St = hr(ml);
                        St && n.draw_selection_box(St.minRow, St.minCol, St.maxRow + 1, St.maxCol + 1);
                    }
                }
            }
        }, [
            n,
            s,
            d,
            ye,
            h,
            w,
            c,
            H,
            je,
            $e,
            C,
            J,
            Q,
            lt
        ]), ud = N.useCallback((O)=>{
            if (n) {
                if (s === "draw") x();
                else if (s === "line") {
                    if (w) {
                        const { col: j, row: W } = hn(O);
                        n.draw_line(w.row, w.col, W, j), lt();
                    }
                    f();
                } else if (s === "rect") {
                    if (c) {
                        const { col: j, row: W } = hn(O);
                        n.draw_rect(c.row, c.col, W, j), lt();
                    }
                    g();
                } else if (s === "select") {
                    const { col: j, row: W } = Xe(O);
                    H === "box" ? Ne({
                        row: W,
                        col: j
                    }) : H === "drag" && S({
                        row: W,
                        col: j
                    });
                }
            }
        }, [
            n,
            s,
            w,
            c,
            H,
            x,
            f,
            g,
            Ne,
            S,
            lt
        ]), ad = N.useCallback(()=>{
            s === "draw" ? x() : s === "line" ? (n && n.render(), f()) : s === "rect" ? (n && n.render(), g()) : s === "select" && (H === "box" ? R() : H === "drag" && b());
        }, [
            n,
            s,
            H,
            x,
            f,
            g,
            R,
            b
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
                    id: sa,
                    className: Wn("fixed left-0 right-0 bottom-0", r && "opacity-50"),
                    style: {
                        top: So,
                        cursor: r ? "wait" : "crosshair"
                    },
                    onMouseDown: id,
                    onMouseMove: sd,
                    onMouseUp: ud,
                    onMouseLeave: ad
                }),
                P.jsx(ia, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: So + 20
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
                                    P.jsxs(Ng, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (O)=>O && u(O),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            P.jsx(uo, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            P.jsx(uo, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            P.jsx(uo, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            P.jsx(uo, {
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
                                        children: zg.map((O, j)=>P.jsx("button", {
                                                onClick: ()=>m(j),
                                                title: `${j + 1}: ${O.name}`,
                                                className: Wn("w-6 h-6 rounded border-2 transition-all", a === j ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", O.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: O.hex ?? "transparent",
                                                    backgroundImage: O.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: O.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: O.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, j))
                                    })
                                ]
                            }),
                            P.jsx(_g, {
                                variant: "destructive",
                                onClick: se,
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
                P.jsx(ia, {
                    title: "Data (10x10 zone)",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: So + 20
                    },
                    children: P.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            P.jsxs("div", {
                                children: [
                                    P.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "JSON"
                                    }),
                                    P.jsx("textarea", {
                                        value: le,
                                        onChange: (O)=>Ye(O.target.value),
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            P.jsxs("div", {
                                children: [
                                    P.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "2D Array (black cells)"
                                    }),
                                    P.jsx("textarea", {
                                        value: Y,
                                        onChange: (O)=>Br(O.target.value),
                                        placeholder: "Paste tensor([[1., 0.], ...]) or [[1, 0], ...]",
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            P.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "Edit to import. Supports ints, floats, booleans."
                            })
                        ]
                    })
                })
            ]
        });
    }
    function Tg() {
        return P.jsx("div", {
            className: "grid-draw-app",
            children: P.jsx(Rg, {})
        });
    }
    const aa = document.getElementById("grid-draw-root");
    aa && Wl.createRoot(aa).render(P.jsx(q.StrictMode, {
        children: P.jsx(Tg, {})
    }));
})();
