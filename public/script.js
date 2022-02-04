// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var m = Object.create;
var c = Object.defineProperty;
var O = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf, d6 = Object.prototype.hasOwnProperty;
var v = (r)=>c(r, "__esModule", {
        value: !0
    })
;
var y = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports)
;
var h = (r, e, t, a1)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let n of j(e))!d6.call(r, n) && (t || n !== "default") && c(r, n, {
        get: ()=>e[n]
        ,
        enumerable: !(a1 = O(e, n)) || a1.enumerable
    });
    return r;
}, l74 = (r, e)=>h(v(c(r != null ? m(g(r)) : {}, "default", !e && r && r.__esModule ? {
        get: ()=>r.default
        ,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r)
;
var u = y((C, p1)=>{
    "use strict";
    var i = Object.getOwnPropertySymbols, w = Object.prototype.hasOwnProperty, P1 = Object.prototype.propertyIsEnumerable;
    function E2(r) {
        if (r == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(r);
    }
    function S1() {
        try {
            if (!Object.assign) return !1;
            var r = new String("abc");
            if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5") return !1;
            for(var e = {}, t = 0; t < 10; t++)e["_" + String.fromCharCode(t)] = t;
            var a2 = Object.getOwnPropertyNames(e).map(function(o1) {
                return e[o1];
            });
            if (a2.join("") !== "0123456789") return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(o2) {
                n[o2] = o2;
            }), Object.keys(Object.assign({}, n)).join("") === "abcdefghijklmnopqrst";
        } catch  {
            return !1;
        }
    }
    p1.exports = S1() ? Object.assign : function(r, e) {
        for(var t, a3 = E2(r), n, o3 = 1; o3 < arguments.length; o3++){
            t = Object(arguments[o3]);
            for(var s in t)w.call(t, s) && (a3[s] = t[s]);
            if (i) {
                n = i(t);
                for(var f1 = 0; f1 < n.length; f1++)P1.call(t, n[f1]) && (a3[n[f1]] = t[n[f1]]);
            }
        }
        return a3;
    };
});
var b = l74(u()), $ = l74(u()), { default: N , ...q } = $, I = (b.default ?? N) ?? q;
var G = Object.create;
var h1 = Object.defineProperty;
var J = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var Q = Object.getPrototypeOf, X = Object.prototype.hasOwnProperty;
var Z = (e)=>h1(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (t, r)=>(typeof require != "undefined" ? require : t)[r]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var O1 = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports)
;
var ee = (e, t, r, u1)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o4 of K(t))!X.call(e, o4) && (r || o4 !== "default") && h1(e, o4, {
        get: ()=>t[o4]
        ,
        enumerable: !(u1 = J(t, o4)) || u1.enumerable
    });
    return e;
}, P = (e, t)=>ee(Z(h1(e != null ? G(Q(e)) : {}, "default", !t && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var z = O1((n)=>{
    "use strict";
    var E3 = I, y2 = 60103, j1 = 60106;
    n.Fragment = 60107;
    n.StrictMode = 60108;
    n.Profiler = 60114;
    var x3 = 60109, I2 = 60110, w = 60112;
    n.Suspense = 60113;
    var A2 = 60115, F1 = 60116;
    typeof Symbol == "function" && Symbol.for && (l2 = Symbol.for, y2 = l2("react.element"), j1 = l2("react.portal"), n.Fragment = l2("react.fragment"), n.StrictMode = l2("react.strict_mode"), n.Profiler = l2("react.profiler"), x3 = l2("react.provider"), I2 = l2("react.context"), w = l2("react.forward_ref"), n.Suspense = l2("react.suspense"), A2 = l2("react.memo"), F1 = l2("react.lazy"));
    var l2, L1 = typeof Symbol == "function" && Symbol.iterator;
    function te2(e) {
        return e === null || typeof e != "object" ? null : (e = L1 && e[L1] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function _1(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var q4 = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, D2 = {};
    function d3(e, t, r) {
        this.props = e, this.context = t, this.refs = D2, this.updater = r || q4;
    }
    d3.prototype.isReactComponent = {};
    d3.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error(_1(85));
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    d3.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function M3() {}
    M3.prototype = d3.prototype;
    function S2(e, t, r) {
        this.props = e, this.context = t, this.refs = D2, this.updater = r || q4;
    }
    var C2 = S2.prototype = new M3;
    C2.constructor = S2;
    E3(C2, d3.prototype);
    C2.isPureReactComponent = !0;
    var R1 = {
        current: null
    }, N1 = Object.prototype.hasOwnProperty, U = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function T3(e, t, r) {
        var u2, o5 = {}, f2 = null, s = null;
        if (t != null) for(u2 in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (f2 = "" + t.key), t)N1.call(t, u2) && !U.hasOwnProperty(u2) && (o5[u2] = t[u2]);
        var c2 = arguments.length - 2;
        if (c2 === 1) o5.children = r;
        else if (1 < c2) {
            for(var i = Array(c2), p2 = 0; p2 < c2; p2++)i[p2] = arguments[p2 + 2];
            o5.children = i;
        }
        if (e && e.defaultProps) for(u2 in c2 = e.defaultProps, c2)o5[u2] === void 0 && (o5[u2] = c2[u2]);
        return {
            $$typeof: y2,
            type: e,
            key: f2,
            ref: s,
            props: o5,
            _owner: R1.current
        };
    }
    function re2(e, t) {
        return {
            $$typeof: y2,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function $3(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y2;
    }
    function ne2(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(r) {
            return t[r];
        });
    }
    var V2 = /\/+/g;
    function k3(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ne2("" + e.key) : t.toString(36);
    }
    function v3(e, t, r, u3, o6) {
        var f3 = typeof e;
        (f3 === "undefined" || f3 === "boolean") && (e = null);
        var s = !1;
        if (e === null) s = !0;
        else switch(f3){
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case y2:
                    case j1:
                        s = !0;
                }
        }
        if (s) return s = e, o6 = o6(s), e = u3 === "" ? "." + k3(s, 0) : u3, Array.isArray(o6) ? (r = "", e != null && (r = e.replace(V2, "$&/") + "/"), v3(o6, t, r, "", function(p3) {
            return p3;
        })) : o6 != null && ($3(o6) && (o6 = re2(o6, r + (!o6.key || s && s.key === o6.key ? "" : ("" + o6.key).replace(V2, "$&/") + "/") + e)), t.push(o6)), 1;
        if (s = 0, u3 = u3 === "" ? "." : u3 + ":", Array.isArray(e)) for(var c3 = 0; c3 < e.length; c3++){
            f3 = e[c3];
            var i = u3 + k3(f3, c3);
            s += v3(f3, t, r, i, o6);
        }
        else if (i = te2(e), typeof i == "function") for(e = i.call(e), c3 = 0; !(f3 = e.next()).done;)f3 = f3.value, i = u3 + k3(f3, c3++), s += v3(f3, t, r, i, o6);
        else if (f3 === "object") throw t = "" + e, Error(_1(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
        return s;
    }
    function m3(e, t, r) {
        if (e == null) return e;
        var u4 = [], o7 = 0;
        return v3(e, u4, "", "", function(f4) {
            return t.call(r, f4, o7++);
        }), u4;
    }
    function oe1(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), e._status = 0, e._result = t, t.then(function(r) {
                e._status === 0 && (r = r.default, e._status = 1, e._result = r);
            }, function(r) {
                e._status === 0 && (e._status = 2, e._result = r);
            });
        }
        if (e._status === 1) return e._result;
        throw e._result;
    }
    var B3 = {
        current: null
    };
    function a4() {
        var e = B3.current;
        if (e === null) throw Error(_1(321));
        return e;
    }
    var ue2 = {
        ReactCurrentDispatcher: B3,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: R1,
        IsSomeRendererActing: {
            current: !1
        },
        assign: E3
    };
    n.Children = {
        map: m3,
        forEach: function(e, t, r) {
            m3(e, function() {
                t.apply(this, arguments);
            }, r);
        },
        count: function(e) {
            var t = 0;
            return m3(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return m3(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!$3(e)) throw Error(_1(143));
            return e;
        }
    };
    n.Component = d3;
    n.PureComponent = S2;
    n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue2;
    n.cloneElement = function(e, t, r) {
        if (e == null) throw Error(_1(267, e));
        var u5 = E3({}, e.props), o8 = e.key, f5 = e.ref, s = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (f5 = t.ref, s = R1.current), t.key !== void 0 && (o8 = "" + t.key), e.type && e.type.defaultProps) var c4 = e.type.defaultProps;
            for(i in t)N1.call(t, i) && !U.hasOwnProperty(i) && (u5[i] = t[i] === void 0 && c4 !== void 0 ? c4[i] : t[i]);
        }
        var i = arguments.length - 2;
        if (i === 1) u5.children = r;
        else if (1 < i) {
            c4 = Array(i);
            for(var p4 = 0; p4 < i; p4++)c4[p4] = arguments[p4 + 2];
            u5.children = c4;
        }
        return {
            $$typeof: y2,
            type: e.type,
            key: o8,
            ref: f5,
            props: u5,
            _owner: s
        };
    };
    n.createContext = function(e, t) {
        return t === void 0 && (t = null), e = {
            $$typeof: I2,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, e.Provider = {
            $$typeof: x3,
            _context: e
        }, e.Consumer = e;
    };
    n.createElement = T3;
    n.createFactory = function(e) {
        var t = T3.bind(null, e);
        return t.type = e, t;
    };
    n.createRef = function() {
        return {
            current: null
        };
    };
    n.forwardRef = function(e) {
        return {
            $$typeof: w,
            render: e
        };
    };
    n.isValidElement = $3;
    n.lazy = function(e) {
        return {
            $$typeof: F1,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: oe1
        };
    };
    n.memo = function(e, t) {
        return {
            $$typeof: A2,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    n.useCallback = function(e, t) {
        return a4().useCallback(e, t);
    };
    n.useContext = function(e, t) {
        return a4().useContext(e, t);
    };
    n.useDebugValue = function() {};
    n.useEffect = function(e, t) {
        return a4().useEffect(e, t);
    };
    n.useImperativeHandle = function(e, t, r) {
        return a4().useImperativeHandle(e, t, r);
    };
    n.useLayoutEffect = function(e, t) {
        return a4().useLayoutEffect(e, t);
    };
    n.useMemo = function(e, t) {
        return a4().useMemo(e, t);
    };
    n.useReducer = function(e, t, r) {
        return a4().useReducer(e, t, r);
    };
    n.useRef = function(e) {
        return a4().useRef(e);
    };
    n.useState = function(e) {
        return a4().useState(e);
    };
    n.version = "17.0.2";
});
var g1 = O1((le, H2)=>{
    "use strict";
    H2.exports = z();
});
var W = P(g1()), Y = P(g1()), { Fragment: pe , StrictMode: ae , Profiler: ye , Suspense: de , Children: _e , Component: ve , PureComponent: me , __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: he , cloneElement: Ee , createContext: Se , createElement: Ce , createFactory: Re , createRef: $e , forwardRef: ke , isValidElement: ge , lazy: Oe , memo: Pe , useCallback: je , useContext: xe , useDebugValue: Ie , useEffect: we , useImperativeHandle: Ae , useLayoutEffect: Fe , useMemo: Le , useReducer: qe , useRef: De , useState: Me , version: Ne  } = Y, { default: ie , ...fe } = Y, Ue = (W.default ?? ie) ?? fe;
var B = Object.create;
var C = Object.defineProperty;
var G1 = Object.getOwnPropertyDescriptor;
var ee1 = Object.getOwnPropertyNames;
var ne = Object.getPrototypeOf, te = Object.prototype.hasOwnProperty;
var re = (e)=>C(e, "__esModule", {
        value: !0
    })
;
var V = (e, n)=>()=>(n || e((n = {
            exports: {}
        }).exports, n), n.exports)
;
var le = (e, n, t, l3)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let o9 of ee1(n))!te.call(e, o9) && (t || o9 !== "default") && C(e, o9, {
        get: ()=>n[o9]
        ,
        enumerable: !(l3 = G1(n, o9)) || l3.enumerable
    });
    return e;
}, H = (e, n)=>le(re(C(e != null ? B(ne(e)) : {}, "default", !n && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var Z1 = V((r)=>{
    "use strict";
    var _2, v4, g4, L2;
    typeof performance == "object" && typeof performance.now == "function" ? (J3 = performance, r.unstable_now = function() {
        return J3.now();
    }) : (N2 = Date, K3 = N2.now(), r.unstable_now = function() {
        return N2.now() - K3;
    });
    var J3, N2, K3;
    typeof window == "undefined" || typeof MessageChannel != "function" ? (y3 = null, j2 = null, E4 = function() {
        if (y3 !== null) try {
            var e = r.unstable_now();
            y3(!0, e), y3 = null;
        } catch (n) {
            throw setTimeout(E4, 0), n;
        }
    }, _2 = function(e) {
        y3 !== null ? setTimeout(_2, 0, e) : (y3 = e, setTimeout(E4, 0));
    }, v4 = function(e, n) {
        j2 = setTimeout(e, n);
    }, g4 = function() {
        clearTimeout(j2);
    }, r.unstable_shouldYield = function() {
        return !1;
    }, L2 = r.unstable_forceFrameRate = function() {}) : (Q2 = window.setTimeout, S3 = window.clearTimeout, typeof console != "undefined" && (X2 = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof X2 != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), w = !1, h3 = null, P2 = -1, F2 = 5, q5 = 0, r.unstable_shouldYield = function() {
        return r.unstable_now() >= q5;
    }, L2 = function() {}, r.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F2 = 0 < e ? Math.floor(1000 / e) : 5;
    }, R2 = new MessageChannel, x4 = R2.port2, R2.port1.onmessage = function() {
        if (h3 !== null) {
            var e = r.unstable_now();
            q5 = e + F2;
            try {
                h3(!0, e) ? x4.postMessage(null) : (w = !1, h3 = null);
            } catch (n) {
                throw x4.postMessage(null), n;
            }
        } else w = !1;
    }, _2 = function(e) {
        h3 = e, w || (w = !0, x4.postMessage(null));
    }, v4 = function(e, n) {
        P2 = Q2(function() {
            e(r.unstable_now());
        }, n);
    }, g4 = function() {
        S3(P2), P2 = -1;
    });
    var y3, j2, E4, Q2, S3, X2, w, h3, P2, F2, q5, R2, x4;
    function Y2(e, n) {
        var t = e.length;
        e.push(n);
        e: for(;;){
            var l4 = t - 1 >>> 1, o10 = e[l4];
            if (o10 !== void 0 && 0 < I3(o10, n)) e[l4] = n, e[t] = o10, t = l4;
            else break e;
        }
    }
    function a5(e) {
        return e = e[0], e === void 0 ? null : e;
    }
    function T4(e) {
        var n = e[0];
        if (n !== void 0) {
            var t = e.pop();
            if (t !== n) {
                e[0] = t;
                e: for(var l5 = 0, o11 = e.length; l5 < o11;){
                    var f6 = 2 * (l5 + 1) - 1, b3 = e[f6], m4 = f6 + 1, d4 = e[m4];
                    if (b3 !== void 0 && 0 > I3(b3, t)) d4 !== void 0 && 0 > I3(d4, b3) ? (e[l5] = d4, e[m4] = t, l5 = m4) : (e[l5] = b3, e[f6] = t, l5 = f6);
                    else if (d4 !== void 0 && 0 > I3(d4, t)) e[l5] = d4, e[m4] = t, l5 = m4;
                    else break e;
                }
            }
            return n;
        }
        return null;
    }
    function I3(e, n) {
        var t = e.sortIndex - n.sortIndex;
        return t !== 0 ? t : e.id - n.id;
    }
    var s = [], c5 = [], oe2 = 1, u6 = null, i = 3, M4 = !1, p5 = !1, k4 = !1;
    function $4(e) {
        for(var n = a5(c5); n !== null;){
            if (n.callback === null) T4(c5);
            else if (n.startTime <= e) T4(c5), n.sortIndex = n.expirationTime, Y2(s, n);
            else break;
            n = a5(c5);
        }
    }
    function U(e) {
        if (k4 = !1, $4(e), !p5) if (a5(s) !== null) p5 = !0, _2(W2);
        else {
            var n = a5(c5);
            n !== null && v4(U, n.startTime - e);
        }
    }
    function W2(e, n) {
        p5 = !1, k4 && (k4 = !1, g4()), M4 = !0;
        var t = i;
        try {
            for($4(n), u6 = a5(s); u6 !== null && (!(u6.expirationTime > n) || e && !r.unstable_shouldYield());){
                var l6 = u6.callback;
                if (typeof l6 == "function") {
                    u6.callback = null, i = u6.priorityLevel;
                    var o12 = l6(u6.expirationTime <= n);
                    n = r.unstable_now(), typeof o12 == "function" ? u6.callback = o12 : u6 === a5(s) && T4(s), $4(n);
                } else T4(s);
                u6 = a5(s);
            }
            if (u6 !== null) var f7 = !0;
            else {
                var b4 = a5(c5);
                b4 !== null && v4(U, b4.startTime - n), f7 = !1;
            }
            return f7;
        } finally{
            u6 = null, i = t, M4 = !1;
        }
    }
    var ie2 = L2;
    r.unstable_IdlePriority = 5;
    r.unstable_ImmediatePriority = 1;
    r.unstable_LowPriority = 4;
    r.unstable_NormalPriority = 3;
    r.unstable_Profiling = null;
    r.unstable_UserBlockingPriority = 2;
    r.unstable_cancelCallback = function(e) {
        e.callback = null;
    };
    r.unstable_continueExecution = function() {
        p5 || M4 || (p5 = !0, _2(W2));
    };
    r.unstable_getCurrentPriorityLevel = function() {
        return i;
    };
    r.unstable_getFirstCallbackNode = function() {
        return a5(s);
    };
    r.unstable_next = function(e) {
        switch(i){
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = i;
        }
        var t = i;
        i = n;
        try {
            return e();
        } finally{
            i = t;
        }
    };
    r.unstable_pauseExecution = function() {};
    r.unstable_requestPaint = ie2;
    r.unstable_runWithPriority = function(e, n) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        var t = i;
        i = e;
        try {
            return n();
        } finally{
            i = t;
        }
    };
    r.unstable_scheduleCallback = function(e, n, t) {
        var l7 = r.unstable_now();
        switch(typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l7 + t : l7) : t = l7, e){
            case 1:
                var o13 = -1;
                break;
            case 2:
                o13 = 250;
                break;
            case 5:
                o13 = 1073741823;
                break;
            case 4:
                o13 = 10000;
                break;
            default:
                o13 = 5000;
        }
        return o13 = t + o13, e = {
            id: oe2++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: o13,
            sortIndex: -1
        }, t > l7 ? (e.sortIndex = t, Y2(c5, e), a5(s) === null && e === a5(c5) && (k4 ? g4() : k4 = !0, v4(U, t - l7))) : (e.sortIndex = o13, Y2(s, e), p5 || M4 || (p5 = !0, _2(W2))), e;
    };
    r.unstable_wrapCallback = function(e) {
        var n = i;
        return function() {
            var t = i;
            i = n;
            try {
                return e.apply(this, arguments);
            } finally{
                i = t;
            }
        };
    };
});
var O2 = V((fe, A3)=>{
    "use strict";
    A3.exports = Z1();
});
var D = H(O2()), z1 = H(O2()), { unstable_now: be , unstable_shouldYield: pe1 , unstable_IdlePriority: de1 , unstable_ImmediatePriority: _e1 , unstable_LowPriority: ye1 , unstable_NormalPriority: me1 , unstable_Profiling: ve1 , unstable_UserBlockingPriority: we1 , unstable_cancelCallback: he1 , unstable_continueExecution: ke1 , unstable_getCurrentPriorityLevel: ge1 , unstable_getFirstCallbackNode: Pe1 , unstable_next: xe1 , unstable_pauseExecution: Te , unstable_requestPaint: Ie1 , unstable_runWithPriority: Me1 , unstable_scheduleCallback: Ce1 , unstable_wrapCallback: Le1  } = z1, { default: ue , ...ae1 } = z1, Ne1 = (D.default ?? ue) ?? ae1;
var Ps = Object.create;
var Or = Object.defineProperty;
var Ts = Object.getOwnPropertyDescriptor;
var Ls = Object.getOwnPropertyNames;
var zs = Object.getPrototypeOf, Os = Object.prototype.hasOwnProperty;
var Ms = (e)=>Or(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (n, t)=>(typeof require != "undefined" ? require : n)[t]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var Ri = (e, n)=>()=>(n || e((n = {
            exports: {}
        }).exports, n), n.exports)
;
var Rs = (e, n, t, r)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let l8 of Ls(n))!Os.call(e, l8) && (t || l8 !== "default") && Or(e, l8, {
        get: ()=>n[l8]
        ,
        enumerable: !(r = Ts(n, l8)) || r.enumerable
    });
    return e;
}, Di = (e, n)=>Rs(Ms(Or(e != null ? Ps(zs(e)) : {}, "default", !n && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var Es = Ri((ie3)=>{
    "use strict";
    var _t = Ue, M5 = I, U = Ne1;
    function v5(e) {
        for(var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!_t) throw Error(v5(227));
    var Ii = new Set, On = {};
    function He(e, n) {
        nn(e, n), nn(e + "Capture", n);
    }
    function nn(e, n) {
        for(On[e] = n, e = 0; e < n.length; e++)Ii.add(n[e]);
    }
    var me3 = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Ds = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fi = Object.prototype.hasOwnProperty, ji = {}, Ui = {};
    function Is(e) {
        return Fi.call(Ui, e) ? !0 : Fi.call(ji, e) ? !1 : Ds.test(e) ? Ui[e] = !0 : (ji[e] = !0, !1);
    }
    function Fs(e, n, t, r) {
        if (t !== null && t.type === 0) return !1;
        switch(typeof n){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function js(e, n, t, r) {
        if (n === null || typeof n == "undefined" || Fs(e, n, t, r)) return !0;
        if (r) return !1;
        if (t !== null) switch(t.type){
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
        return !1;
    }
    function Y3(e, n, t, r, l9, i, o14) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l9, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o14;
    }
    var V3 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        V3[e] = new Y3(e, 0, !1, e, null, !1, !1);
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
        var n = e[0];
        V3[n] = new Y3(n, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        V3[e] = new Y3(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Rr = /[\-:]([a-z])/g;
    function Dr(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(Rr, Dr);
        V3[n] = new Y3(n, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(Rr, Dr);
        V3[n] = new Y3(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var n = e.replace(Rr, Dr);
        V3[n] = new Y3(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    V3.xlinkHref = new Y3("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        V3[e] = new Y3(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Ir(e, n, t, r) {
        var l10 = V3.hasOwnProperty(n) ? V3[n] : null, i = l10 !== null ? l10.type === 0 : r ? !1 : !(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N");
        i || (js(n, t, l10, r) && (t = null), r || l10 === null ? Is(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l10.mustUseProperty ? e[l10.propertyName] = t === null ? l10.type === 3 ? !1 : "" : t : (n = l10.attributeName, r = l10.attributeNamespace, t === null ? e.removeAttribute(n) : (l10 = l10.type, t = l10 === 3 || l10 === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    var We1 = _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Mn = 60103, Ae2 = 60106, Ee2 = 60107, Fr = 60108, Rn = 60114, jr = 60109, Ur = 60110, Nt = 60112, Dn = 60113, Pt = 60120, Tt = 60115, Vr = 60116, Br = 60121, Hr = 60128, Vi = 60129, Wr = 60130, Ar = 60131;
    typeof Symbol == "function" && Symbol.for && (F3 = Symbol.for, Mn = F3("react.element"), Ae2 = F3("react.portal"), Ee2 = F3("react.fragment"), Fr = F3("react.strict_mode"), Rn = F3("react.profiler"), jr = F3("react.provider"), Ur = F3("react.context"), Nt = F3("react.forward_ref"), Dn = F3("react.suspense"), Pt = F3("react.suspense_list"), Tt = F3("react.memo"), Vr = F3("react.lazy"), Br = F3("react.block"), F3("react.scope"), Hr = F3("react.opaque.id"), Vi = F3("react.debug_trace_mode"), Wr = F3("react.offscreen"), Ar = F3("react.legacy_hidden"));
    var F3, Bi = typeof Symbol == "function" && Symbol.iterator;
    function In(e) {
        return e === null || typeof e != "object" ? null : (e = Bi && e[Bi] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var $r;
    function Fn(e) {
        if ($r === void 0) try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            $r = n && n[1] || "";
        }
        return `
` + $r + e;
    }
    var Qr = !1;
    function Lt(e, n) {
        if (!e || Qr) return "";
        Qr = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n) if (n = function() {
                throw Error();
            }, Object.defineProperty(n.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (s) {
                    r = s;
                }
                e.call(n.prototype);
            }
            else {
                try {
                    throw Error();
                } catch (s) {
                    r = s;
                }
                e();
            }
        } catch (s) {
            if (s && r && typeof s.stack == "string") {
                for(var l11 = s.stack.split(`
`), i = r.stack.split(`
`), o15 = l11.length - 1, u7 = i.length - 1; 1 <= o15 && 0 <= u7 && l11[o15] !== i[u7];)u7--;
                for(; 1 <= o15 && 0 <= u7; o15--, u7--)if (l11[o15] !== i[u7]) {
                    if (o15 !== 1 || u7 !== 1) do if (o15--, u7--, 0 > u7 || l11[o15] !== i[u7]) return `
` + l11[o15].replace(" at new ", " at ");
                    while (1 <= o15 && 0 <= u7)
                    break;
                }
            }
        } finally{
            Qr = !1, Error.prepareStackTrace = t;
        }
        return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
    }
    function Us(e) {
        switch(e.tag){
            case 5:
                return Fn(e.type);
            case 16:
                return Fn("Lazy");
            case 13:
                return Fn("Suspense");
            case 19:
                return Fn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Lt(e.type, !1), e;
            case 11:
                return e = Lt(e.type.render, !1), e;
            case 22:
                return e = Lt(e.type._render, !1), e;
            case 1:
                return e = Lt(e.type, !0), e;
            default:
                return "";
        }
    }
    function tn(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Ee2:
                return "Fragment";
            case Ae2:
                return "Portal";
            case Rn:
                return "Profiler";
            case Fr:
                return "StrictMode";
            case Dn:
                return "Suspense";
            case Pt:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Ur:
                return (e.displayName || "Context") + ".Consumer";
            case jr:
                return (e._context.displayName || "Context") + ".Provider";
            case Nt:
                var n = e.render;
                return n = n.displayName || n.name || "", e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case Tt:
                return tn(e.type);
            case Br:
                return tn(e._render);
            case Vr:
                n = e._payload, e = e._init;
                try {
                    return tn(e(n));
                } catch  {}
        }
        return null;
    }
    function ke2(e) {
        switch(typeof e){
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return "";
        }
    }
    function Hi(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function Vs(e) {
        var n = Hi(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
        if (!e.hasOwnProperty(n) && typeof t != "undefined" && typeof t.get == "function" && typeof t.set == "function") {
            var l12 = t.get, i = t.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return l12.call(this);
                },
                set: function(o16) {
                    r = "" + o16, i.call(this, o16);
                }
            }), Object.defineProperty(e, n, {
                enumerable: t.enumerable
            }), {
                getValue: function() {
                    return r;
                },
                setValue: function(o17) {
                    r = "" + o17;
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[n];
                }
            };
        }
    }
    function zt(e) {
        e._valueTracker || (e._valueTracker = Vs(e));
    }
    function Wi(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var t = n.getValue(), r = "";
        return e && (r = Hi(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
    }
    function Ot(e) {
        if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Yr(e, n) {
        var t = n.checked;
        return M5({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: t ?? e._wrapperState.initialChecked
        });
    }
    function Ai(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
        t = ke2(n.value != null ? n.value : t), e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        };
    }
    function $i(e, n) {
        n = n.checked, n != null && Ir(e, "checked", n, !1);
    }
    function Xr(e, n) {
        $i(e, n);
        var t = ke2(n.value), r = n.type;
        if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        n.hasOwnProperty("value") ? Kr(e, n.type, t) : n.hasOwnProperty("defaultValue") && Kr(e, n.type, ke2(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function Qi(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
            n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
        }
        t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
    }
    function Kr(e, n, t) {
        (n !== "number" || Ot(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    function Bs(e) {
        var n = "";
        return _t.Children.forEach(e, function(t) {
            t != null && (n += t);
        }), n;
    }
    function Gr(e, n) {
        return e = M5({
            children: void 0
        }, n), (n = Bs(n.children)) && (e.children = n), e;
    }
    function rn(e, n, t, r) {
        if (e = e.options, n) {
            n = {};
            for(var l13 = 0; l13 < t.length; l13++)n["$" + t[l13]] = !0;
            for(t = 0; t < e.length; t++)l13 = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l13 && (e[t].selected = l13), l13 && r && (e[t].defaultSelected = !0);
        } else {
            for(t = "" + ke2(t), n = null, l13 = 0; l13 < e.length; l13++){
                if (e[l13].value === t) {
                    e[l13].selected = !0, r && (e[l13].defaultSelected = !0);
                    return;
                }
                n !== null || e[l13].disabled || (n = e[l13]);
            }
            n !== null && (n.selected = !0);
        }
    }
    function Zr(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(v5(91));
        return M5({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Yi(e, n) {
        var t = n.value;
        if (t == null) {
            if (t = n.children, n = n.defaultValue, t != null) {
                if (n != null) throw Error(v5(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(v5(93));
                    t = t[0];
                }
                n = t;
            }
            n == null && (n = ""), t = n;
        }
        e._wrapperState = {
            initialValue: ke2(t)
        };
    }
    function Xi(e, n) {
        var t = ke2(n.value), r = ke2(n.defaultValue);
        t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
    }
    function Ki(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
    }
    var Jr = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    function Gi(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function qr(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Gi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Mt, Zi = function(e) {
        return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l14) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(n, t, r, l14);
            });
        } : e;
    }(function(e, n) {
        if (e.namespaceURI !== Jr.svg || "innerHTML" in e) e.innerHTML = n;
        else {
            for(Mt = Mt || document.createElement("div"), Mt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Mt.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; n.firstChild;)e.appendChild(n.firstChild);
        }
    });
    function jn(e, n) {
        if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = n;
                return;
            }
        }
        e.textContent = n;
    }
    var Un = {
        animationIterationCount: !0,
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
    }, Hs = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Un).forEach(function(e) {
        Hs.forEach(function(n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), Un[n] = Un[e];
        });
    });
    function Ji(e, n, t) {
        return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + n).trim() : n + "px";
    }
    function qi(e, n) {
        e = e.style;
        for(var t in n)if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0, l15 = Ji(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l15) : e[t] = l15;
        }
    }
    var Ws = M5({
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
    function br(e, n) {
        if (n) {
            if (Ws[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v5(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(v5(60));
                if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML)) throw Error(v5(61));
            }
            if (n.style != null && typeof n.style != "object") throw Error(v5(62));
        }
    }
    function el(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
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
    function nl(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var tl = null, ln = null, on = null;
    function bi(e) {
        if (e = tt(e)) {
            if (typeof tl != "function") throw Error(v5(280));
            var n = e.stateNode;
            n && (n = bt(n), tl(e.stateNode, e.type, n));
        }
    }
    function eo(e) {
        ln ? on ? on.push(e) : on = [
            e
        ] : ln = e;
    }
    function no() {
        if (ln) {
            var e = ln, n = on;
            if (on = ln = null, bi(e), n) for(e = 0; e < n.length; e++)bi(n[e]);
        }
    }
    function rl(e, n) {
        return e(n);
    }
    function to(e, n, t, r, l16) {
        return e(n, t, r, l16);
    }
    function ll() {}
    var ro = rl, $e2 = !1, il = !1;
    function ol() {
        (ln !== null || on !== null) && (ll(), no());
    }
    function As(e, n, t) {
        if (il) return e(n, t);
        il = !0;
        try {
            return ro(e, n, t);
        } finally{
            il = !1, ol();
        }
    }
    function Vn(e, n) {
        var t = e.stateNode;
        if (t === null) return null;
        var r = bt(t);
        if (r === null) return null;
        t = r[n];
        e: switch(n){
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
        if (t && typeof t != "function") throw Error(v5(231, n, typeof t));
        return t;
    }
    var ul = !1;
    if (me3) try {
        un = {}, Object.defineProperty(un, "passive", {
            get: function() {
                ul = !0;
            }
        }), window.addEventListener("test", un, un), window.removeEventListener("test", un, un);
    } catch  {
        ul = !1;
    }
    var un;
    function $s(e, n, t, r, l, i, o, u, s) {
        var d5 = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(t, d5);
        } catch (y4) {
            this.onError(y4);
        }
    }
    var Bn = !1, Rt = null, Dt = !1, sl = null, Qs = {
        onError: function(e) {
            Bn = !0, Rt = e;
        }
    };
    function Ys(e, n, t, r, l, i, o, u, s) {
        Bn = !1, Rt = null, $s.apply(Qs, arguments);
    }
    function Xs(e, n, t, r, l, i, o, u, s) {
        if (Ys.apply(this, arguments), Bn) {
            if (Bn) {
                var d = Rt;
                Bn = !1, Rt = null;
            } else throw Error(v5(198));
            Dt || (Dt = !0, sl = d);
        }
    }
    function Qe(e) {
        var n = e, t = e;
        if (e.alternate) for(; n.return;)n = n.return;
        else {
            e = n;
            do n = e, (n.flags & 1026) !== 0 && (t = n.return), e = n.return;
            while (e)
        }
        return n.tag === 3 ? t : null;
    }
    function lo(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
        }
        return null;
    }
    function io(e) {
        if (Qe(e) !== e) throw Error(v5(188));
    }
    function Ks(e) {
        var n = e.alternate;
        if (!n) {
            if (n = Qe(e), n === null) throw Error(v5(188));
            return n !== e ? null : e;
        }
        for(var t = e, r = n;;){
            var l17 = t.return;
            if (l17 === null) break;
            var i = l17.alternate;
            if (i === null) {
                if (r = l17.return, r !== null) {
                    t = r;
                    continue;
                }
                break;
            }
            if (l17.child === i.child) {
                for(i = l17.child; i;){
                    if (i === t) return io(l17), e;
                    if (i === r) return io(l17), n;
                    i = i.sibling;
                }
                throw Error(v5(188));
            }
            if (t.return !== r.return) t = l17, r = i;
            else {
                for(var o18 = !1, u8 = l17.child; u8;){
                    if (u8 === t) {
                        o18 = !0, t = l17, r = i;
                        break;
                    }
                    if (u8 === r) {
                        o18 = !0, r = l17, t = i;
                        break;
                    }
                    u8 = u8.sibling;
                }
                if (!o18) {
                    for(u8 = i.child; u8;){
                        if (u8 === t) {
                            o18 = !0, t = i, r = l17;
                            break;
                        }
                        if (u8 === r) {
                            o18 = !0, r = i, t = l17;
                            break;
                        }
                        u8 = u8.sibling;
                    }
                    if (!o18) throw Error(v5(189));
                }
            }
            if (t.alternate !== r) throw Error(v5(190));
        }
        if (t.tag !== 3) throw Error(v5(188));
        return t.stateNode.current === t ? e : n;
    }
    function oo(e) {
        if (e = Ks(e), !e) return null;
        for(var n = e;;){
            if (n.tag === 5 || n.tag === 6) return n;
            if (n.child) n.child.return = n, n = n.child;
            else {
                if (n === e) break;
                for(; !n.sibling;){
                    if (!n.return || n.return === e) return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
        }
        return null;
    }
    function uo(e, n) {
        for(var t = e.alternate; n !== null;){
            if (n === e || n === t) return !0;
            n = n.return;
        }
        return !1;
    }
    var so, al, ao, fo, fl = !1, se2 = [], xe3 = null, Ce2 = null, _e3 = null, Hn = new Map, Wn = new Map, An = [], co = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function cl(e, n, t, r, l18) {
        return {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: t | 16,
            nativeEvent: l18,
            targetContainers: [
                r
            ]
        };
    }
    function po(e, n) {
        switch(e){
            case "focusin":
            case "focusout":
                xe3 = null;
                break;
            case "dragenter":
            case "dragleave":
                Ce2 = null;
                break;
            case "mouseover":
            case "mouseout":
                _e3 = null;
                break;
            case "pointerover":
            case "pointerout":
                Hn.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Wn.delete(n.pointerId);
        }
    }
    function $n(e, n, t, r, l19, i) {
        return e === null || e.nativeEvent !== i ? (e = cl(n, t, r, l19, i), n !== null && (n = tt(n), n !== null && al(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l19 !== null && n.indexOf(l19) === -1 && n.push(l19), e);
    }
    function Gs(e, n, t, r, l20) {
        switch(n){
            case "focusin":
                return xe3 = $n(xe3, e, n, t, r, l20), !0;
            case "dragenter":
                return Ce2 = $n(Ce2, e, n, t, r, l20), !0;
            case "mouseover":
                return _e3 = $n(_e3, e, n, t, r, l20), !0;
            case "pointerover":
                var i = l20.pointerId;
                return Hn.set(i, $n(Hn.get(i) || null, e, n, t, r, l20)), !0;
            case "gotpointercapture":
                return i = l20.pointerId, Wn.set(i, $n(Wn.get(i) || null, e, n, t, r, l20)), !0;
        }
        return !1;
    }
    function Zs(e) {
        var n = Ye(e.target);
        if (n !== null) {
            var t = Qe(n);
            if (t !== null) {
                if (n = t.tag, n === 13) {
                    if (n = lo(t), n !== null) {
                        e.blockedOn = n, fo(e.lanePriority, function() {
                            U.unstable_runWithPriority(e.priority, function() {
                                ao(t);
                            });
                        });
                        return;
                    }
                } else if (n === 3 && t.stateNode.hydrate) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function It(e) {
        if (e.blockedOn !== null) return !1;
        for(var n = e.targetContainers; 0 < n.length;){
            var t = yl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (t !== null) return n = tt(t), n !== null && al(n), e.blockedOn = t, !1;
            n.shift();
        }
        return !0;
    }
    function mo(e, n, t) {
        It(e) && t.delete(n);
    }
    function Js() {
        for(fl = !1; 0 < se2.length;){
            var e = se2[0];
            if (e.blockedOn !== null) {
                e = tt(e.blockedOn), e !== null && so(e);
                break;
            }
            for(var n = e.targetContainers; 0 < n.length;){
                var t = yl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                if (t !== null) {
                    e.blockedOn = t;
                    break;
                }
                n.shift();
            }
            e.blockedOn === null && se2.shift();
        }
        xe3 !== null && It(xe3) && (xe3 = null), Ce2 !== null && It(Ce2) && (Ce2 = null), _e3 !== null && It(_e3) && (_e3 = null), Hn.forEach(mo), Wn.forEach(mo);
    }
    function Qn(e, n) {
        e.blockedOn === n && (e.blockedOn = null, fl || (fl = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, Js)));
    }
    function ho(e) {
        function n(l21) {
            return Qn(l21, e);
        }
        if (0 < se2.length) {
            Qn(se2[0], e);
            for(var t = 1; t < se2.length; t++){
                var r = se2[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(xe3 !== null && Qn(xe3, e), Ce2 !== null && Qn(Ce2, e), _e3 !== null && Qn(_e3, e), Hn.forEach(n), Wn.forEach(n), t = 0; t < An.length; t++)r = An[t], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < An.length && (t = An[0], t.blockedOn === null);)Zs(t), t.blockedOn === null && An.shift();
    }
    function Ft(e, n) {
        var t = {};
        return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
    }
    var sn = {
        animationend: Ft("Animation", "AnimationEnd"),
        animationiteration: Ft("Animation", "AnimationIteration"),
        animationstart: Ft("Animation", "AnimationStart"),
        transitionend: Ft("Transition", "TransitionEnd")
    }, dl = {}, vo = {};
    me3 && (vo = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
    function jt(e) {
        if (dl[e]) return dl[e];
        if (!sn[e]) return e;
        var n = sn[e], t;
        for(t in n)if (n.hasOwnProperty(t) && t in vo) return dl[e] = n[t];
        return e;
    }
    var yo = jt("animationend"), go = jt("animationiteration"), wo = jt("animationstart"), So = jt("transitionend"), Eo = new Map, pl = new Map, qs = [
        "abort",
        "abort",
        yo,
        "animationEnd",
        go,
        "animationIteration",
        wo,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        So,
        "transitionEnd",
        "waiting",
        "waiting"
    ];
    function ml(e, n) {
        for(var t = 0; t < e.length; t += 2){
            var r = e[t], l22 = e[t + 1];
            l22 = "on" + (l22[0].toUpperCase() + l22.slice(1)), pl.set(r, n), Eo.set(r, l22), He(l22, [
                r
            ]);
        }
    }
    var bs = U.unstable_now;
    bs();
    var L3 = 8;
    function an(e) {
        if ((1 & e) !== 0) return L3 = 15, 1;
        if ((2 & e) !== 0) return L3 = 14, 2;
        if ((4 & e) !== 0) return L3 = 13, 4;
        var n = 24 & e;
        return n !== 0 ? (L3 = 12, n) : (e & 32) !== 0 ? (L3 = 11, 32) : (n = 192 & e, n !== 0 ? (L3 = 10, n) : (e & 256) !== 0 ? (L3 = 9, 256) : (n = 3584 & e, n !== 0 ? (L3 = 8, n) : (e & 4096) !== 0 ? (L3 = 7, 4096) : (n = 4186112 & e, n !== 0 ? (L3 = 6, n) : (n = 62914560 & e, n !== 0 ? (L3 = 5, n) : e & 67108864 ? (L3 = 4, 67108864) : (e & 134217728) !== 0 ? (L3 = 3, 134217728) : (n = 805306368 & e, n !== 0 ? (L3 = 2, n) : (1073741824 & e) !== 0 ? (L3 = 1, 1073741824) : (L3 = 8, e))))));
    }
    function ea(e) {
        switch(e){
            case 99:
                return 15;
            case 98:
                return 10;
            case 97:
            case 96:
                return 8;
            case 95:
                return 2;
            default:
                return 0;
        }
    }
    function na(e) {
        switch(e){
            case 15:
            case 14:
                return 99;
            case 13:
            case 12:
            case 11:
            case 10:
                return 98;
            case 9:
            case 8:
            case 7:
            case 6:
            case 4:
            case 5:
                return 97;
            case 3:
            case 2:
            case 1:
                return 95;
            case 0:
                return 90;
            default:
                throw Error(v5(358, e));
        }
    }
    function Yn(e, n) {
        var t = e.pendingLanes;
        if (t === 0) return L3 = 0;
        var r = 0, l23 = 0, i = e.expiredLanes, o19 = e.suspendedLanes, u9 = e.pingedLanes;
        if (i !== 0) r = i, l23 = L3 = 15;
        else if (i = t & 134217727, i !== 0) {
            var s = i & ~o19;
            s !== 0 ? (r = an(s), l23 = L3) : (u9 &= i, u9 !== 0 && (r = an(u9), l23 = L3));
        } else i = t & ~o19, i !== 0 ? (r = an(i), l23 = L3) : u9 !== 0 && (r = an(u9), l23 = L3);
        if (r === 0) return 0;
        if (r = 31 - Ne2(r), r = t & ((0 > r ? 0 : 1 << r) << 1) - 1, n !== 0 && n !== r && (n & o19) === 0) {
            if (an(n), l23 <= L3) return n;
            L3 = l23;
        }
        if (n = e.entangledLanes, n !== 0) for(e = e.entanglements, n &= r; 0 < n;)t = 31 - Ne2(n), l23 = 1 << t, r |= e[t], n &= ~l23;
        return r;
    }
    function ko(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ut(e, n) {
        switch(e){
            case 15:
                return 1;
            case 14:
                return 2;
            case 12:
                return e = fn(24 & ~n), e === 0 ? Ut(10, n) : e;
            case 10:
                return e = fn(192 & ~n), e === 0 ? Ut(8, n) : e;
            case 8:
                return e = fn(3584 & ~n), e === 0 && (e = fn(4186112 & ~n), e === 0 && (e = 512)), e;
            case 2:
                return n = fn(805306368 & ~n), n === 0 && (n = 268435456), n;
        }
        throw Error(v5(358, e));
    }
    function fn(e) {
        return e & -e;
    }
    function hl(e) {
        for(var n = [], t = 0; 31 > t; t++)n.push(e);
        return n;
    }
    function Vt(e, n, t) {
        e.pendingLanes |= n;
        var r = n - 1;
        e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, n = 31 - Ne2(n), e[n] = t;
    }
    var Ne2 = Math.clz32 ? Math.clz32 : la, ta = Math.log, ra = Math.LN2;
    function la(e) {
        return e === 0 ? 32 : 31 - (ta(e) / ra | 0) | 0;
    }
    var ia = U.unstable_UserBlockingPriority, oa = U.unstable_runWithPriority, Bt = !0;
    function ua(e, n, t, r) {
        $e2 || ll();
        var l24 = vl, i = $e2;
        $e2 = !0;
        try {
            to(l24, e, n, t, r);
        } finally{
            ($e2 = i) || ol();
        }
    }
    function sa(e, n, t, r) {
        oa(ia, vl.bind(null, e, n, t, r));
    }
    function vl(e, n, t, r) {
        if (Bt) {
            var l25;
            if ((l25 = (n & 4) === 0) && 0 < se2.length && -1 < co.indexOf(e)) e = cl(null, e, n, t, r), se2.push(e);
            else {
                var i = yl(e, n, t, r);
                if (i === null) l25 && po(e, r);
                else {
                    if (l25) {
                        if (-1 < co.indexOf(e)) {
                            e = cl(i, e, n, t, r), se2.push(e);
                            return;
                        }
                        if (Gs(i, e, n, t, r)) return;
                        po(e, r);
                    }
                    Zo(e, n, r, null, t);
                }
            }
        }
    }
    function yl(e, n, t, r) {
        var l26 = nl(r);
        if (l26 = Ye(l26), l26 !== null) {
            var i = Qe(l26);
            if (i === null) l26 = null;
            else {
                var o20 = i.tag;
                if (o20 === 13) {
                    if (l26 = lo(i), l26 !== null) return l26;
                    l26 = null;
                } else if (o20 === 3) {
                    if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
                    l26 = null;
                } else i !== l26 && (l26 = null);
            }
        }
        return Zo(e, n, r, l26, t), null;
    }
    var Pe3 = null, gl = null, Ht = null;
    function xo() {
        if (Ht) return Ht;
        var e, n = gl, t = n.length, r, l27 = "value" in Pe3 ? Pe3.value : Pe3.textContent, i = l27.length;
        for(e = 0; e < t && n[e] === l27[e]; e++);
        var o21 = t - e;
        for(r = 1; r <= o21 && n[t - r] === l27[i - r]; r++);
        return Ht = l27.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Wt(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function At() {
        return !0;
    }
    function Co() {
        return !1;
    }
    function q6(e) {
        function n(t, r, l28, i, o22) {
            this._reactName = t, this._targetInst = l28, this.type = r, this.nativeEvent = i, this.target = o22, this.currentTarget = null;
            for(var u10 in e)e.hasOwnProperty(u10) && (t = e[u10], this[u10] = t ? t(i) : i[u10]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? At : Co, this.isPropagationStopped = Co, this;
        }
        return M5(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = At);
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = At);
            },
            persist: function() {},
            isPersistent: At
        }), n;
    }
    var cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, wl = q6(cn), Xn = M5({}, cn, {
        view: 0,
        detail: 0
    }), aa = q6(Xn), Sl, El, Kn, $t = M5({}, Xn, {
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
        getModifierState: xl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Sl = e.screenX - Kn.screenX, El = e.screenY - Kn.screenY) : El = Sl = 0, Kn = e), Sl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : El;
        }
    }), _o = q6($t), fa = M5({}, $t, {
        dataTransfer: 0
    }), ca = q6(fa), da = M5({}, Xn, {
        relatedTarget: 0
    }), kl = q6(da), pa = M5({}, cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ma = q6(pa), ha = M5({}, cn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), va = q6(ha), ya = M5({}, cn, {
        data: 0
    }), No = q6(ya), ga = {
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
    }, wa = {
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
    }, Sa = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ea(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = Sa[e]) ? !!n[e] : !1;
    }
    function xl() {
        return Ea;
    }
    var ka = M5({}, Xn, {
        key: function(e) {
            if (e.key) {
                var n = ga[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress" ? (e = Wt(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wa[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xl,
        charCode: function(e) {
            return e.type === "keypress" ? Wt(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Wt(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), xa = q6(ka), Ca = M5({}, $t, {
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
    }), Po = q6(Ca), _a = M5({}, Xn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xl
    }), Na = q6(_a), Pa = M5({}, cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ta = q6(Pa), La = M5({}, $t, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), za = q6(La), Oa = [
        9,
        13,
        27,
        32
    ], Cl = me3 && "CompositionEvent" in window, Gn = null;
    me3 && "documentMode" in document && (Gn = document.documentMode);
    var Ma = me3 && "TextEvent" in window && !Gn, To = me3 && (!Cl || Gn && 8 < Gn && 11 >= Gn), Lo = String.fromCharCode(32), zo = !1;
    function Oo(e, n) {
        switch(e){
            case "keyup":
                return Oa.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Mo(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var dn = !1;
    function Ra(e, n) {
        switch(e){
            case "compositionend":
                return Mo(n);
            case "keypress":
                return n.which !== 32 ? null : (zo = !0, Lo);
            case "textInput":
                return e = n.data, e === Lo && zo ? null : e;
            default:
                return null;
        }
    }
    function Da(e, n) {
        if (dn) return e === "compositionend" || !Cl && Oo(e, n) ? (e = xo(), Ht = gl = Pe3 = null, dn = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
                }
                return null;
            case "compositionend":
                return To && n.locale !== "ko" ? null : n.data;
            default:
                return null;
        }
    }
    var Ia = {
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
    function Ro(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!Ia[e.type] : n === "textarea";
    }
    function Do(e, n, t, r) {
        eo(r), n = Gt(n, "onChange"), 0 < n.length && (t = new wl("onChange", "change", null, t, r), e.push({
            event: t,
            listeners: n
        }));
    }
    var Zn = null, Jn = null;
    function Fa(e) {
        Qo(e, 0);
    }
    function Qt(e) {
        var n = yn(e);
        if (Wi(n)) return e;
    }
    function ja(e, n) {
        if (e === "change") return n;
    }
    var Io = !1;
    me3 && (me3 ? (Xt = "oninput" in document, Xt || (_l = document.createElement("div"), _l.setAttribute("oninput", "return;"), Xt = typeof _l.oninput == "function"), Yt = Xt) : Yt = !1, Io = Yt && (!document.documentMode || 9 < document.documentMode));
    var Yt, Xt, _l;
    function Fo() {
        Zn && (Zn.detachEvent("onpropertychange", jo), Jn = Zn = null);
    }
    function jo(e) {
        if (e.propertyName === "value" && Qt(Jn)) {
            var n = [];
            if (Do(n, Jn, e, nl(e)), e = Fa, $e2) e(n);
            else {
                $e2 = !0;
                try {
                    rl(e, n);
                } finally{
                    $e2 = !1, ol();
                }
            }
        }
    }
    function Ua(e, n, t) {
        e === "focusin" ? (Fo(), Zn = n, Jn = t, Zn.attachEvent("onpropertychange", jo)) : e === "focusout" && Fo();
    }
    function Va(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qt(Jn);
    }
    function Ba(e, n) {
        if (e === "click") return Qt(n);
    }
    function Ha(e, n) {
        if (e === "input" || e === "change") return Qt(n);
    }
    function Wa(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var ee3 = typeof Object.is == "function" ? Object.is : Wa, Aa = Object.prototype.hasOwnProperty;
    function qn(e, n) {
        if (ee3(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var t = Object.keys(e), r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for(r = 0; r < t.length; r++)if (!Aa.call(n, t[r]) || !ee3(e[t[r]], n[t[r]])) return !1;
        return !0;
    }
    function Uo(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Vo(e, n) {
        var t = Uo(e);
        e = 0;
        for(var r; t;){
            if (t.nodeType === 3) {
                if (r = e + t.textContent.length, e <= n && r >= n) return {
                    node: t,
                    offset: n - e
                };
                e = r;
            }
            e: {
                for(; t;){
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e;
                    }
                    t = t.parentNode;
                }
                t = void 0;
            }
            t = Uo(t);
        }
    }
    function Bo(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bo(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
    }
    function Ho() {
        for(var e = window, n = Ot(); n instanceof e.HTMLIFrameElement;){
            try {
                var t = typeof n.contentWindow.location.href == "string";
            } catch  {
                t = !1;
            }
            if (t) e = n.contentWindow;
            else break;
            n = Ot(e.document);
        }
        return n;
    }
    function Nl(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    var $a = me3 && "documentMode" in document && 11 >= document.documentMode, pn = null, Pl = null, bn = null, Tl = !1;
    function Wo(e, n, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        Tl || pn == null || pn !== Ot(r) || (r = pn, "selectionStart" in r && Nl(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), bn && qn(bn, r) || (bn = r, r = Gt(Pl, "onSelect"), 0 < r.length && (n = new wl("onSelect", "select", null, n, t), e.push({
            event: n,
            listeners: r
        }), n.target = pn)));
    }
    ml("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    ml("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    ml(qs, 2);
    for(Ll = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Kt = 0; Kt < Ll.length; Kt++)pl.set(Ll[Kt], 0);
    var Ll, Kt;
    nn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    nn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    nn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    nn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    He("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    He("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    He("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    He("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    He("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    He("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ao = new Set("cancel close invalid load scroll toggle".split(" ").concat(et));
    function $o(e, n, t) {
        var r = e.type || "unknown-event";
        e.currentTarget = t, Xs(r, n, void 0, e), e.currentTarget = null;
    }
    function Qo(e, n) {
        n = (n & 4) !== 0;
        for(var t = 0; t < e.length; t++){
            var r = e[t], l29 = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (n) for(var o23 = r.length - 1; 0 <= o23; o23--){
                    var u11 = r[o23], s = u11.instance, d = u11.currentTarget;
                    if (u11 = u11.listener, s !== i && l29.isPropagationStopped()) break e;
                    $o(l29, u11, d), i = s;
                }
                else for(o23 = 0; o23 < r.length; o23++){
                    if (u11 = r[o23], s = u11.instance, d = u11.currentTarget, u11 = u11.listener, s !== i && l29.isPropagationStopped()) break e;
                    $o(l29, u11, d), i = s;
                }
            }
        }
        if (Dt) throw e = sl, Dt = !1, sl = null, e;
    }
    function z3(e, n) {
        var t = tu(n), r = e + "__bubble";
        t.has(r) || (Go(n, e, 2, !1), t.add(r));
    }
    var Yo = "_reactListening" + Math.random().toString(36).slice(2);
    function Xo(e) {
        e[Yo] || (e[Yo] = !0, Ii.forEach(function(n) {
            Ao.has(n) || Ko(n, !1, e, null), Ko(n, !0, e, null);
        }));
    }
    function Ko(e, n, t, r) {
        var l30 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = t;
        if (e === "selectionchange" && t.nodeType !== 9 && (i = t.ownerDocument), r !== null && !n && Ao.has(e)) {
            if (e !== "scroll") return;
            l30 |= 2, i = r;
        }
        var o24 = tu(i), u12 = e + "__" + (n ? "capture" : "bubble");
        o24.has(u12) || (n && (l30 |= 4), Go(i, e, l30, n), o24.add(u12));
    }
    function Go(e, n, t, r) {
        var l31 = pl.get(n);
        switch(l31 === void 0 ? 2 : l31){
            case 0:
                l31 = ua;
                break;
            case 1:
                l31 = sa;
                break;
            default:
                l31 = vl;
        }
        t = l31.bind(null, n, t, e), l31 = void 0, !ul || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l31 = !0), r ? l31 !== void 0 ? e.addEventListener(n, t, {
            capture: !0,
            passive: l31
        }) : e.addEventListener(n, t, !0) : l31 !== void 0 ? e.addEventListener(n, t, {
            passive: l31
        }) : e.addEventListener(n, t, !1);
    }
    function Zo(e, n, t, r, l32) {
        var i = r;
        if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for(;;){
            if (r === null) return;
            var o25 = r.tag;
            if (o25 === 3 || o25 === 4) {
                var u13 = r.stateNode.containerInfo;
                if (u13 === l32 || u13.nodeType === 8 && u13.parentNode === l32) break;
                if (o25 === 4) for(o25 = r.return; o25 !== null;){
                    var s = o25.tag;
                    if ((s === 3 || s === 4) && (s = o25.stateNode.containerInfo, s === l32 || s.nodeType === 8 && s.parentNode === l32)) return;
                    o25 = o25.return;
                }
                for(; u13 !== null;){
                    if (o25 = Ye(u13), o25 === null) return;
                    if (s = o25.tag, s === 5 || s === 6) {
                        r = i = o25;
                        continue e;
                    }
                    u13 = u13.parentNode;
                }
            }
            r = r.return;
        }
        As(function() {
            var d = i, y5 = nl(t), C3 = [];
            e: {
                var h4 = Eo.get(e);
                if (h4 !== void 0) {
                    var S4 = wl, k5 = e;
                    switch(e){
                        case "keypress":
                            if (Wt(t) === 0) break e;
                        case "keydown":
                        case "keyup":
                            S4 = xa;
                            break;
                        case "focusin":
                            k5 = "focus", S4 = kl;
                            break;
                        case "focusout":
                            k5 = "blur", S4 = kl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            S4 = kl;
                            break;
                        case "click":
                            if (t.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            S4 = _o;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            S4 = ca;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            S4 = Na;
                            break;
                        case yo:
                        case go:
                        case wo:
                            S4 = ma;
                            break;
                        case So:
                            S4 = Ta;
                            break;
                        case "scroll":
                            S4 = aa;
                            break;
                        case "wheel":
                            S4 = za;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            S4 = va;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            S4 = Po;
                    }
                    var E5 = (n & 4) !== 0, c6 = !E5 && e === "scroll", a6 = E5 ? h4 !== null ? h4 + "Capture" : null : h4;
                    E5 = [];
                    for(var f8 = d, p6; f8 !== null;){
                        p6 = f8;
                        var m5 = p6.stateNode;
                        if (p6.tag === 5 && m5 !== null && (p6 = m5, a6 !== null && (m5 = Vn(f8, a6), m5 != null && E5.push(nt(f8, m5, p6)))), c6) break;
                        f8 = f8.return;
                    }
                    0 < E5.length && (h4 = new S4(h4, k5, null, t, y5), C3.push({
                        event: h4,
                        listeners: E5
                    }));
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (h4 = e === "mouseover" || e === "pointerover", S4 = e === "mouseout" || e === "pointerout", h4 && (n & 16) === 0 && (k5 = t.relatedTarget || t.fromElement) && (Ye(k5) || k5[vn])) break e;
                    if ((S4 || h4) && (h4 = y5.window === y5 ? y5 : (h4 = y5.ownerDocument) ? h4.defaultView || h4.parentWindow : window, S4 ? (k5 = t.relatedTarget || t.toElement, S4 = d, k5 = k5 ? Ye(k5) : null, k5 !== null && (c6 = Qe(k5), k5 !== c6 || k5.tag !== 5 && k5.tag !== 6) && (k5 = null)) : (S4 = null, k5 = d), S4 !== k5)) {
                        if (E5 = _o, m5 = "onMouseLeave", a6 = "onMouseEnter", f8 = "mouse", (e === "pointerout" || e === "pointerover") && (E5 = Po, m5 = "onPointerLeave", a6 = "onPointerEnter", f8 = "pointer"), c6 = S4 == null ? h4 : yn(S4), p6 = k5 == null ? h4 : yn(k5), h4 = new E5(m5, f8 + "leave", S4, t, y5), h4.target = c6, h4.relatedTarget = p6, m5 = null, Ye(y5) === d && (E5 = new E5(a6, f8 + "enter", k5, t, y5), E5.target = p6, E5.relatedTarget = c6, m5 = E5), c6 = m5, S4 && k5) n: {
                            for(E5 = S4, a6 = k5, f8 = 0, p6 = E5; p6; p6 = mn(p6))f8++;
                            for(p6 = 0, m5 = a6; m5; m5 = mn(m5))p6++;
                            for(; 0 < f8 - p6;)E5 = mn(E5), f8--;
                            for(; 0 < p6 - f8;)a6 = mn(a6), p6--;
                            for(; f8--;){
                                if (E5 === a6 || a6 !== null && E5 === a6.alternate) break n;
                                E5 = mn(E5), a6 = mn(a6);
                            }
                            E5 = null;
                        }
                        else E5 = null;
                        S4 !== null && Jo(C3, h4, S4, E5, !1), k5 !== null && c6 !== null && Jo(C3, c6, k5, E5, !0);
                    }
                }
                e: {
                    if (h4 = d ? yn(d) : window, S4 = h4.nodeName && h4.nodeName.toLowerCase(), S4 === "select" || S4 === "input" && h4.type === "file") var _3 = ja;
                    else if (Ro(h4)) if (Io) _3 = Ha;
                    else {
                        _3 = Va;
                        var w = Ua;
                    }
                    else (S4 = h4.nodeName) && S4.toLowerCase() === "input" && (h4.type === "checkbox" || h4.type === "radio") && (_3 = Ba);
                    if (_3 && (_3 = _3(e, d))) {
                        Do(C3, _3, t, y5);
                        break e;
                    }
                    w && w(e, h4, d), e === "focusout" && (w = h4._wrapperState) && w.controlled && h4.type === "number" && Kr(h4, "number", h4.value);
                }
                switch(w = d ? yn(d) : window, e){
                    case "focusin":
                        (Ro(w) || w.contentEditable === "true") && (pn = w, Pl = d, bn = null);
                        break;
                    case "focusout":
                        bn = Pl = pn = null;
                        break;
                    case "mousedown":
                        Tl = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Tl = !1, Wo(C3, t, y5);
                        break;
                    case "selectionchange":
                        if ($a) break;
                    case "keydown":
                    case "keyup":
                        Wo(C3, t, y5);
                }
                var N3;
                if (Cl) e: {
                    switch(e){
                        case "compositionstart":
                            var T5 = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T5 = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T5 = "onCompositionUpdate";
                            break e;
                    }
                    T5 = void 0;
                }
                else dn ? Oo(e, t) && (T5 = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (T5 = "onCompositionStart");
                T5 && (To && t.locale !== "ko" && (dn || T5 !== "onCompositionStart" ? T5 === "onCompositionEnd" && dn && (N3 = xo()) : (Pe3 = y5, gl = "value" in Pe3 ? Pe3.value : Pe3.textContent, dn = !0)), w = Gt(d, T5), 0 < w.length && (T5 = new No(T5, e, null, t, y5), C3.push({
                    event: T5,
                    listeners: w
                }), N3 ? T5.data = N3 : (N3 = Mo(t), N3 !== null && (T5.data = N3)))), (N3 = Ma ? Ra(e, t) : Da(e, t)) && (d = Gt(d, "onBeforeInput"), 0 < d.length && (y5 = new No("onBeforeInput", "beforeinput", null, t, y5), C3.push({
                    event: y5,
                    listeners: d
                }), y5.data = N3));
            }
            Qo(C3, n);
        });
    }
    function nt(e, n, t) {
        return {
            instance: e,
            listener: n,
            currentTarget: t
        };
    }
    function Gt(e, n) {
        for(var t = n + "Capture", r = []; e !== null;){
            var l33 = e, i = l33.stateNode;
            l33.tag === 5 && i !== null && (l33 = i, i = Vn(e, t), i != null && r.unshift(nt(e, i, l33)), i = Vn(e, n), i != null && r.push(nt(e, i, l33))), e = e.return;
        }
        return r;
    }
    function mn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5)
        return e || null;
    }
    function Jo(e, n, t, r, l34) {
        for(var i = n._reactName, o26 = []; t !== null && t !== r;){
            var u14 = t, s = u14.alternate, d = u14.stateNode;
            if (s !== null && s === r) break;
            u14.tag === 5 && d !== null && (u14 = d, l34 ? (s = Vn(t, i), s != null && o26.unshift(nt(t, s, u14))) : l34 || (s = Vn(t, i), s != null && o26.push(nt(t, s, u14)))), t = t.return;
        }
        o26.length !== 0 && e.push({
            event: n,
            listeners: o26
        });
    }
    function Zt() {}
    var zl = null, Ol = null;
    function qo(e, n) {
        switch(e){
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!n.autoFocus;
        }
        return !1;
    }
    function Ml(e, n) {
        return e === "textarea" || e === "option" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var bo = typeof setTimeout == "function" ? setTimeout : void 0, Qa = typeof clearTimeout == "function" ? clearTimeout : void 0;
    function Rl(e) {
        e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
    }
    function hn(e) {
        for(; e != null; e = e.nextSibling){
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
        }
        return e;
    }
    function eu(e) {
        e = e.previousSibling;
        for(var n = 0; e;){
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "$" || t === "$!" || t === "$?") {
                    if (n === 0) return e;
                    n--;
                } else t === "/$" && n++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Dl = 0;
    function Ya(e) {
        return {
            $$typeof: Hr,
            toString: e,
            valueOf: e
        };
    }
    var Jt = Math.random().toString(36).slice(2), Te1 = "__reactFiber$" + Jt, qt = "__reactProps$" + Jt, vn = "__reactContainer$" + Jt, nu = "__reactEvents$" + Jt;
    function Ye(e) {
        var n = e[Te1];
        if (n) return n;
        for(var t = e.parentNode; t;){
            if (n = t[vn] || t[Te1]) {
                if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for(e = eu(e); e !== null;){
                    if (t = e[Te1]) return t;
                    e = eu(e);
                }
                return n;
            }
            e = t, t = e.parentNode;
        }
        return null;
    }
    function tt(e) {
        return e = e[Te1] || e[vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function yn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(v5(33));
    }
    function bt(e) {
        return e[qt] || null;
    }
    function tu(e) {
        var n = e[nu];
        return n === void 0 && (n = e[nu] = new Set), n;
    }
    var Il = [], gn = -1;
    function Le3(e) {
        return {
            current: e
        };
    }
    function O6(e) {
        0 > gn || (e.current = Il[gn], Il[gn] = null, gn--);
    }
    function R3(e, n) {
        gn++, Il[gn] = e.current, e.current = n;
    }
    var ze1 = {}, W3 = Le3(ze1), K4 = Le3(!1), Xe = ze1;
    function wn(e, n) {
        var t = e.type.contextTypes;
        if (!t) return ze1;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
        var l35 = {}, i;
        for(i in t)l35[i] = n[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l35), l35;
    }
    function G4(e) {
        return e = e.childContextTypes, e != null;
    }
    function er() {
        O6(K4), O6(W3);
    }
    function ru(e, n, t) {
        if (W3.current !== ze1) throw Error(v5(168));
        R3(W3, n), R3(K4, t);
    }
    function lu(e, n, t) {
        var r = e.stateNode;
        if (e = n.childContextTypes, typeof r.getChildContext != "function") return t;
        r = r.getChildContext();
        for(var l36 in r)if (!(l36 in e)) throw Error(v5(108, tn(n) || "Unknown", l36));
        return M5({}, t, r);
    }
    function nr(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ze1, Xe = W3.current, R3(W3, e), R3(K4, K4.current), !0;
    }
    function iu(e, n, t) {
        var r = e.stateNode;
        if (!r) throw Error(v5(169));
        t ? (e = lu(e, n, Xe), r.__reactInternalMemoizedMergedChildContext = e, O6(K4), O6(W3), R3(W3, e)) : O6(K4), R3(K4, t);
    }
    var Fl = null, Ke = null, Xa = U.unstable_runWithPriority, jl = U.unstable_scheduleCallback, Ul = U.unstable_cancelCallback, Ka = U.unstable_shouldYield, ou = U.unstable_requestPaint, Vl = U.unstable_now, Ga = U.unstable_getCurrentPriorityLevel, tr = U.unstable_ImmediatePriority, uu = U.unstable_UserBlockingPriority, su = U.unstable_NormalPriority, au = U.unstable_LowPriority, fu = U.unstable_IdlePriority, Bl = {}, Za = ou !== void 0 ? ou : function() {}, he3 = null, rr = null, Hl = !1, cu = Vl(), A4 = 10000 > cu ? Vl : function() {
        return Vl() - cu;
    };
    function Sn() {
        switch(Ga()){
            case tr:
                return 99;
            case uu:
                return 98;
            case su:
                return 97;
            case au:
                return 96;
            case fu:
                return 95;
            default:
                throw Error(v5(332));
        }
    }
    function du(e) {
        switch(e){
            case 99:
                return tr;
            case 98:
                return uu;
            case 97:
                return su;
            case 96:
                return au;
            case 95:
                return fu;
            default:
                throw Error(v5(332));
        }
    }
    function Ge(e, n) {
        return e = du(e), Xa(e, n);
    }
    function rt(e, n, t) {
        return e = du(e), jl(e, n, t);
    }
    function ae3() {
        if (rr !== null) {
            var e = rr;
            rr = null, Ul(e);
        }
        pu();
    }
    function pu() {
        if (!Hl && he3 !== null) {
            Hl = !0;
            var e = 0;
            try {
                var n = he3;
                Ge(99, function() {
                    for(; e < n.length; e++){
                        var t = n[e];
                        do t = t(!0);
                        while (t !== null)
                    }
                }), he3 = null;
            } catch (t) {
                throw he3 !== null && (he3 = he3.slice(e + 1)), jl(tr, ae3), t;
            } finally{
                Hl = !1;
            }
        }
    }
    var Ja = We1.ReactCurrentBatchConfig;
    function oe3(e, n) {
        if (e && e.defaultProps) {
            n = M5({}, n), e = e.defaultProps;
            for(var t in e)n[t] === void 0 && (n[t] = e[t]);
            return n;
        }
        return n;
    }
    var lr = Le3(null), ir = null, En = null, or = null;
    function Wl() {
        or = En = ir = null;
    }
    function Al(e) {
        var n = lr.current;
        O6(lr), e.type._context._currentValue = n;
    }
    function mu(e, n) {
        for(; e !== null;){
            var t = e.alternate;
            if ((e.childLanes & n) === n) {
                if (t === null || (t.childLanes & n) === n) break;
                t.childLanes |= n;
            } else e.childLanes |= n, t !== null && (t.childLanes |= n);
            e = e.return;
        }
    }
    function kn(e, n) {
        ir = e, or = En = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ue3 = !0), e.firstContext = null);
    }
    function ne3(e, n) {
        if (or !== e && n !== !1 && n !== 0) if ((typeof n != "number" || n === 1073741823) && (or = e, n = 1073741823), n = {
            context: e,
            observedBits: n,
            next: null
        }, En === null) {
            if (ir === null) throw Error(v5(308));
            En = n, ir.dependencies = {
                lanes: 0,
                firstContext: n,
                responders: null
            };
        } else En = En.next = n;
        return e._currentValue;
    }
    var Oe2 = !1;
    function $l(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null
            },
            effects: null
        };
    }
    function hu(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Me2(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Re3(e, n) {
        if (e = e.updateQueue, e !== null) {
            e = e.shared;
            var t = e.pending;
            t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
        }
    }
    function vu(e, n) {
        var t = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, t === r)) {
            var l37 = null, i = null;
            if (t = t.firstBaseUpdate, t !== null) {
                do {
                    var o27 = {
                        eventTime: t.eventTime,
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: t.callback,
                        next: null
                    };
                    i === null ? l37 = i = o27 : i = i.next = o27, t = t.next;
                }while (t !== null)
                i === null ? l37 = i = n : i = i.next = n;
            } else l37 = i = n;
            t = {
                baseState: r.baseState,
                firstBaseUpdate: l37,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = t;
            return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
    }
    function lt(e, n, t, r) {
        var l38 = e.updateQueue;
        Oe2 = !1;
        var i = l38.firstBaseUpdate, o28 = l38.lastBaseUpdate, u15 = l38.shared.pending;
        if (u15 !== null) {
            l38.shared.pending = null;
            var s = u15, d = s.next;
            s.next = null, o28 === null ? i = d : o28.next = d, o28 = s;
            var y6 = e.alternate;
            if (y6 !== null) {
                y6 = y6.updateQueue;
                var C4 = y6.lastBaseUpdate;
                C4 !== o28 && (C4 === null ? y6.firstBaseUpdate = d : C4.next = d, y6.lastBaseUpdate = s);
            }
        }
        if (i !== null) {
            C4 = l38.baseState, o28 = 0, y6 = d = s = null;
            do {
                u15 = i.lane;
                var h5 = i.eventTime;
                if ((r & u15) === u15) {
                    y6 !== null && (y6 = y6.next = {
                        eventTime: h5,
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    });
                    e: {
                        var S5 = e, k6 = i;
                        switch(u15 = n, h5 = t, k6.tag){
                            case 1:
                                if (S5 = k6.payload, typeof S5 == "function") {
                                    C4 = S5.call(h5, C4, u15);
                                    break e;
                                }
                                C4 = S5;
                                break e;
                            case 3:
                                S5.flags = S5.flags & -4097 | 64;
                            case 0:
                                if (S5 = k6.payload, u15 = typeof S5 == "function" ? S5.call(h5, C4, u15) : S5, u15 == null) break e;
                                C4 = M5({}, C4, u15);
                                break e;
                            case 2:
                                Oe2 = !0;
                        }
                    }
                    i.callback !== null && (e.flags |= 32, u15 = l38.effects, u15 === null ? l38.effects = [
                        i
                    ] : u15.push(i));
                } else h5 = {
                    eventTime: h5,
                    lane: u15,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, y6 === null ? (d = y6 = h5, s = C4) : y6 = y6.next = h5, o28 |= u15;
                if (i = i.next, i === null) {
                    if (u15 = l38.shared.pending, u15 === null) break;
                    i = u15.next, u15.next = null, l38.lastBaseUpdate = u15, l38.shared.pending = null;
                }
            }while (1)
            y6 === null && (s = C4), l38.baseState = s, l38.firstBaseUpdate = d, l38.lastBaseUpdate = y6, vt1 |= o28, e.lanes = o28, e.memoizedState = C4;
        }
    }
    function yu(e, n, t) {
        if (e = n.effects, n.effects = null, e !== null) for(n = 0; n < e.length; n++){
            var r = e[n], l39 = r.callback;
            if (l39 !== null) {
                if (r.callback = null, r = t, typeof l39 != "function") throw Error(v5(191, l39));
                l39.call(r);
            }
        }
    }
    var gu = new _t.Component().refs;
    function ur(e, n, t, r) {
        n = e.memoizedState, t = t(r, n), t = t == null ? n : M5({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var sr = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Qe(e) === e : !1;
        },
        enqueueSetState: function(e, n, t) {
            e = e._reactInternals;
            var r = b5(), l40 = Fe1(e), i = Me2(r, l40);
            i.payload = n, t != null && (i.callback = t), Re3(e, i), je2(e, l40, r);
        },
        enqueueReplaceState: function(e, n, t) {
            e = e._reactInternals;
            var r = b5(), l41 = Fe1(e), i = Me2(r, l41);
            i.tag = 1, i.payload = n, t != null && (i.callback = t), Re3(e, i), je2(e, l41, r);
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var t = b5(), r = Fe1(e), l42 = Me2(t, r);
            l42.tag = 2, n != null && (l42.callback = n), Re3(e, l42), je2(e, r, t);
        }
    };
    function wu(e, n, t, r, l43, i, o29) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o29) : n.prototype && n.prototype.isPureReactComponent ? !qn(t, r) || !qn(l43, i) : !0;
    }
    function Su(e, n, t) {
        var r = !1, l44 = ze1, i = n.contextType;
        return typeof i == "object" && i !== null ? i = ne3(i) : (l44 = G4(n) ? Xe : W3.current, r = n.contextTypes, i = (r = r != null) ? wn(e, l44) : ze1), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sr, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l44, e.__reactInternalMemoizedMaskedChildContext = i), n;
    }
    function Eu(e, n, t, r) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sr.enqueueReplaceState(n, n.state, null);
    }
    function Ql(e, n, t, r) {
        var l45 = e.stateNode;
        l45.props = t, l45.state = e.memoizedState, l45.refs = gu, $l(e);
        var i = n.contextType;
        typeof i == "object" && i !== null ? l45.context = ne3(i) : (i = G4(n) ? Xe : W3.current, l45.context = wn(e, i)), lt(e, t, l45, r), l45.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (ur(e, n, i, t), l45.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l45.getSnapshotBeforeUpdate == "function" || typeof l45.UNSAFE_componentWillMount != "function" && typeof l45.componentWillMount != "function" || (n = l45.state, typeof l45.componentWillMount == "function" && l45.componentWillMount(), typeof l45.UNSAFE_componentWillMount == "function" && l45.UNSAFE_componentWillMount(), n !== l45.state && sr.enqueueReplaceState(l45, l45.state, null), lt(e, t, l45, r), l45.state = e.memoizedState), typeof l45.componentDidMount == "function" && (e.flags |= 4);
    }
    var ar = Array.isArray;
    function it(e, n, t) {
        if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (t._owner) {
                if (t = t._owner, t) {
                    if (t.tag !== 1) throw Error(v5(309));
                    var r = t.stateNode;
                }
                if (!r) throw Error(v5(147, e));
                var l46 = "" + e;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l46 ? n.ref : (n = function(i) {
                    var o30 = r.refs;
                    o30 === gu && (o30 = r.refs = {}), i === null ? delete o30[l46] : o30[l46] = i;
                }, n._stringRef = l46, n);
            }
            if (typeof e != "string") throw Error(v5(284));
            if (!t._owner) throw Error(v5(290, e));
        }
        return e;
    }
    function fr(e, n) {
        if (e.type !== "textarea") throw Error(v5(31, Object.prototype.toString.call(n) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
    }
    function ku(e) {
        function n(c7, a7) {
            if (e) {
                var f9 = c7.lastEffect;
                f9 !== null ? (f9.nextEffect = a7, c7.lastEffect = a7) : c7.firstEffect = c7.lastEffect = a7, a7.nextEffect = null, a7.flags = 8;
            }
        }
        function t(c8, a8) {
            if (!e) return null;
            for(; a8 !== null;)n(c8, a8), a8 = a8.sibling;
            return null;
        }
        function r(c9, a9) {
            for(c9 = new Map; a9 !== null;)a9.key !== null ? c9.set(a9.key, a9) : c9.set(a9.index, a9), a9 = a9.sibling;
            return c9;
        }
        function l47(c10, a10) {
            return c10 = Be(c10, a10), c10.index = 0, c10.sibling = null, c10;
        }
        function i(c11, a11, f10) {
            return c11.index = f10, e ? (f10 = c11.alternate, f10 !== null ? (f10 = f10.index, f10 < a11 ? (c11.flags = 2, a11) : f10) : (c11.flags = 2, a11)) : a11;
        }
        function o31(c12) {
            return e && c12.alternate === null && (c12.flags = 2), c12;
        }
        function u16(c13, a12, f11, p7) {
            return a12 === null || a12.tag !== 6 ? (a12 = Pi(f11, c13.mode, p7), a12.return = c13, a12) : (a12 = l47(a12, f11), a12.return = c13, a12);
        }
        function s(c14, a13, f12, p8) {
            return a13 !== null && a13.elementType === f12.type ? (p8 = l47(a13, f12.props), p8.ref = it(c14, a13, f12), p8.return = c14, p8) : (p8 = Tr(f12.type, f12.key, f12.props, null, c14.mode, p8), p8.ref = it(c14, a13, f12), p8.return = c14, p8);
        }
        function d(c15, a14, f13, p9) {
            return a14 === null || a14.tag !== 4 || a14.stateNode.containerInfo !== f13.containerInfo || a14.stateNode.implementation !== f13.implementation ? (a14 = Ti(f13, c15.mode, p9), a14.return = c15, a14) : (a14 = l47(a14, f13.children || []), a14.return = c15, a14);
        }
        function y7(c16, a15, f14, p10, m6) {
            return a15 === null || a15.tag !== 7 ? (a15 = zn(f14, c16.mode, p10, m6), a15.return = c16, a15) : (a15 = l47(a15, f14), a15.return = c16, a15);
        }
        function C5(c17, a16, f15) {
            if (typeof a16 == "string" || typeof a16 == "number") return a16 = Pi("" + a16, c17.mode, f15), a16.return = c17, a16;
            if (typeof a16 == "object" && a16 !== null) {
                switch(a16.$$typeof){
                    case Mn:
                        return f15 = Tr(a16.type, a16.key, a16.props, null, c17.mode, f15), f15.ref = it(c17, null, a16), f15.return = c17, f15;
                    case Ae2:
                        return a16 = Ti(a16, c17.mode, f15), a16.return = c17, a16;
                }
                if (ar(a16) || In(a16)) return a16 = zn(a16, c17.mode, f15, null), a16.return = c17, a16;
                fr(c17, a16);
            }
            return null;
        }
        function h6(c18, a17, f16, p11) {
            var m7 = a17 !== null ? a17.key : null;
            if (typeof f16 == "string" || typeof f16 == "number") return m7 !== null ? null : u16(c18, a17, "" + f16, p11);
            if (typeof f16 == "object" && f16 !== null) {
                switch(f16.$$typeof){
                    case Mn:
                        return f16.key === m7 ? f16.type === Ee2 ? y7(c18, a17, f16.props.children, p11, m7) : s(c18, a17, f16, p11) : null;
                    case Ae2:
                        return f16.key === m7 ? d(c18, a17, f16, p11) : null;
                }
                if (ar(f16) || In(f16)) return m7 !== null ? null : y7(c18, a17, f16, p11, null);
                fr(c18, f16);
            }
            return null;
        }
        function S6(c19, a18, f17, p12, m8) {
            if (typeof p12 == "string" || typeof p12 == "number") return c19 = c19.get(f17) || null, u16(a18, c19, "" + p12, m8);
            if (typeof p12 == "object" && p12 !== null) {
                switch(p12.$$typeof){
                    case Mn:
                        return c19 = c19.get(p12.key === null ? f17 : p12.key) || null, p12.type === Ee2 ? y7(a18, c19, p12.props.children, m8, p12.key) : s(a18, c19, p12, m8);
                    case Ae2:
                        return c19 = c19.get(p12.key === null ? f17 : p12.key) || null, d(a18, c19, p12, m8);
                }
                if (ar(p12) || In(p12)) return c19 = c19.get(f17) || null, y7(a18, c19, p12, m8, null);
                fr(a18, p12);
            }
            return null;
        }
        function k7(c20, a19, f18, p13) {
            for(var m9 = null, _4 = null, w = a19, N4 = a19 = 0, T6 = null; w !== null && N4 < f18.length; N4++){
                w.index > N4 ? (T6 = w, w = null) : T6 = w.sibling;
                var P3 = h6(c20, w, f18[N4], p13);
                if (P3 === null) {
                    w === null && (w = T6);
                    break;
                }
                e && w && P3.alternate === null && n(c20, w), a19 = i(P3, a19, N4), _4 === null ? m9 = P3 : _4.sibling = P3, _4 = P3, w = T6;
            }
            if (N4 === f18.length) return t(c20, w), m9;
            if (w === null) {
                for(; N4 < f18.length; N4++)w = C5(c20, f18[N4], p13), w !== null && (a19 = i(w, a19, N4), _4 === null ? m9 = w : _4.sibling = w, _4 = w);
                return m9;
            }
            for(w = r(c20, w); N4 < f18.length; N4++)T6 = S6(w, c20, N4, f18[N4], p13), T6 !== null && (e && T6.alternate !== null && w.delete(T6.key === null ? N4 : T6.key), a19 = i(T6, a19, N4), _4 === null ? m9 = T6 : _4.sibling = T6, _4 = T6);
            return e && w.forEach(function(Se2) {
                return n(c20, Se2);
            }), m9;
        }
        function E6(c21, a20, f19, p14) {
            var m10 = In(f19);
            if (typeof m10 != "function") throw Error(v5(150));
            if (f19 = m10.call(f19), f19 == null) throw Error(v5(151));
            for(var _5 = m10 = null, w = a20, N5 = a20 = 0, T7 = null, P4 = f19.next(); w !== null && !P4.done; N5++, P4 = f19.next()){
                w.index > N5 ? (T7 = w, w = null) : T7 = w.sibling;
                var Se3 = h6(c21, w, P4.value, p14);
                if (Se3 === null) {
                    w === null && (w = T7);
                    break;
                }
                e && w && Se3.alternate === null && n(c21, w), a20 = i(Se3, a20, N5), _5 === null ? m10 = Se3 : _5.sibling = Se3, _5 = Se3, w = T7;
            }
            if (P4.done) return t(c21, w), m10;
            if (w === null) {
                for(; !P4.done; N5++, P4 = f19.next())P4 = C5(c21, P4.value, p14), P4 !== null && (a20 = i(P4, a20, N5), _5 === null ? m10 = P4 : _5.sibling = P4, _5 = P4);
                return m10;
            }
            for(w = r(c21, w); !P4.done; N5++, P4 = f19.next())P4 = S6(w, c21, N5, P4.value, p14), P4 !== null && (e && P4.alternate !== null && w.delete(P4.key === null ? N5 : P4.key), a20 = i(P4, a20, N5), _5 === null ? m10 = P4 : _5.sibling = P4, _5 = P4);
            return e && w.forEach(function(Ns) {
                return n(c21, Ns);
            }), m10;
        }
        return function(c22, a21, f20, p15) {
            var m11 = typeof f20 == "object" && f20 !== null && f20.type === Ee2 && f20.key === null;
            m11 && (f20 = f20.props.children);
            var _6 = typeof f20 == "object" && f20 !== null;
            if (_6) switch(f20.$$typeof){
                case Mn:
                    e: {
                        for(_6 = f20.key, m11 = a21; m11 !== null;){
                            if (m11.key === _6) {
                                switch(m11.tag){
                                    case 7:
                                        if (f20.type === Ee2) {
                                            t(c22, m11.sibling), a21 = l47(m11, f20.props.children), a21.return = c22, c22 = a21;
                                            break e;
                                        }
                                        break;
                                    default:
                                        if (m11.elementType === f20.type) {
                                            t(c22, m11.sibling), a21 = l47(m11, f20.props), a21.ref = it(c22, m11, f20), a21.return = c22, c22 = a21;
                                            break e;
                                        }
                                }
                                t(c22, m11);
                                break;
                            } else n(c22, m11);
                            m11 = m11.sibling;
                        }
                        f20.type === Ee2 ? (a21 = zn(f20.props.children, c22.mode, p15, f20.key), a21.return = c22, c22 = a21) : (p15 = Tr(f20.type, f20.key, f20.props, null, c22.mode, p15), p15.ref = it(c22, a21, f20), p15.return = c22, c22 = p15);
                    }
                    return o31(c22);
                case Ae2:
                    e: {
                        for(m11 = f20.key; a21 !== null;){
                            if (a21.key === m11) if (a21.tag === 4 && a21.stateNode.containerInfo === f20.containerInfo && a21.stateNode.implementation === f20.implementation) {
                                t(c22, a21.sibling), a21 = l47(a21, f20.children || []), a21.return = c22, c22 = a21;
                                break e;
                            } else {
                                t(c22, a21);
                                break;
                            }
                            else n(c22, a21);
                            a21 = a21.sibling;
                        }
                        a21 = Ti(f20, c22.mode, p15), a21.return = c22, c22 = a21;
                    }
                    return o31(c22);
            }
            if (typeof f20 == "string" || typeof f20 == "number") return f20 = "" + f20, a21 !== null && a21.tag === 6 ? (t(c22, a21.sibling), a21 = l47(a21, f20), a21.return = c22, c22 = a21) : (t(c22, a21), a21 = Pi(f20, c22.mode, p15), a21.return = c22, c22 = a21), o31(c22);
            if (ar(f20)) return k7(c22, a21, f20, p15);
            if (In(f20)) return E6(c22, a21, f20, p15);
            if (_6 && fr(c22, f20), typeof f20 == "undefined" && !m11) switch(c22.tag){
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(v5(152, tn(c22.type) || "Component"));
            }
            return t(c22, a21);
        };
    }
    var cr = ku(!0), xu = ku(!1), ot = {}, fe3 = Le3(ot), ut = Le3(ot), st = Le3(ot);
    function Ze(e) {
        if (e === ot) throw Error(v5(174));
        return e;
    }
    function Yl(e, n) {
        switch(R3(st, n), R3(ut, e), R3(fe3, ot), e = n.nodeType, e){
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : qr(null, "");
                break;
            default:
                e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = qr(n, e);
        }
        O6(fe3), R3(fe3, n);
    }
    function xn() {
        O6(fe3), O6(ut), O6(st);
    }
    function Cu(e) {
        Ze(st.current);
        var n = Ze(fe3.current), t = qr(n, e.type);
        n !== t && (R3(ut, e), R3(fe3, t));
    }
    function Xl(e) {
        ut.current === e && (O6(fe3), O6(ut));
    }
    var D3 = Le3(0);
    function dr(e) {
        for(var n = e; n !== null;){
            if (n.tag === 13) {
                var t = n.memoizedState;
                if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 64) !== 0) return n;
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === e) break;
            for(; n.sibling === null;){
                if (n.return === null || n.return === e) return null;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
        return null;
    }
    var ve3 = null, De1 = null, ce2 = !1;
    function _u(e, n) {
        var t = le2(5, null, null, 0);
        t.elementType = "DELETED", t.type = "DELETED", t.stateNode = n, t.return = e, t.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t;
    }
    function Nu(e, n) {
        switch(e.tag){
            case 5:
                var t = e.type;
                return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 6:
                return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 13:
                return !1;
            default:
                return !1;
        }
    }
    function Kl(e) {
        if (ce2) {
            var n = De1;
            if (n) {
                var t = n;
                if (!Nu(e, n)) {
                    if (n = hn(t.nextSibling), !n || !Nu(e, n)) {
                        e.flags = e.flags & -1025 | 2, ce2 = !1, ve3 = e;
                        return;
                    }
                    _u(ve3, t);
                }
                ve3 = e, De1 = hn(n.firstChild);
            } else e.flags = e.flags & -1025 | 2, ce2 = !1, ve3 = e;
        }
    }
    function Pu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        ve3 = e;
    }
    function pr(e) {
        if (e !== ve3) return !1;
        if (!ce2) return Pu(e), ce2 = !0, !1;
        var n = e.type;
        if (e.tag !== 5 || n !== "head" && n !== "body" && !Ml(n, e.memoizedProps)) for(n = De1; n;)_u(e, n), n = hn(n.nextSibling);
        if (Pu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v5(317));
            e: {
                for(e = e.nextSibling, n = 0; e;){
                    if (e.nodeType === 8) {
                        var t = e.data;
                        if (t === "/$") {
                            if (n === 0) {
                                De1 = hn(e.nextSibling);
                                break e;
                            }
                            n--;
                        } else t !== "$" && t !== "$!" && t !== "$?" || n++;
                    }
                    e = e.nextSibling;
                }
                De1 = null;
            }
        } else De1 = ve3 ? hn(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Gl() {
        De1 = ve3 = null, ce2 = !1;
    }
    var Cn = [];
    function Zl() {
        for(var e = 0; e < Cn.length; e++)Cn[e]._workInProgressVersionPrimary = null;
        Cn.length = 0;
    }
    var at = We1.ReactCurrentDispatcher, te3 = We1.ReactCurrentBatchConfig, ft = 0, I4 = null, $5 = null, B4 = null, mr = !1, ct = !1;
    function Z3() {
        throw Error(v5(321));
    }
    function Jl(e, n) {
        if (n === null) return !1;
        for(var t = 0; t < n.length && t < e.length; t++)if (!ee3(e[t], n[t])) return !1;
        return !0;
    }
    function ql(e, n, t, r, l48, i) {
        if (ft = i, I4 = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, at.current = e === null || e.memoizedState === null ? ba : ef, e = t(r, l48), ct) {
            i = 0;
            do {
                if (ct = !1, !(25 > i)) throw Error(v5(301));
                i += 1, B4 = $5 = null, n.updateQueue = null, at.current = nf, e = t(r, l48);
            }while (ct)
        }
        if (at.current = gr, n = $5 !== null && $5.next !== null, ft = 0, B4 = $5 = I4 = null, mr = !1, n) throw Error(v5(300));
        return e;
    }
    function Je() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return B4 === null ? I4.memoizedState = B4 = e : B4 = B4.next = e, B4;
    }
    function qe2() {
        if ($5 === null) {
            var e = I4.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = $5.next;
        var n = B4 === null ? I4.memoizedState : B4.next;
        if (n !== null) B4 = n, $5 = e;
        else {
            if (e === null) throw Error(v5(310));
            $5 = e, e = {
                memoizedState: $5.memoizedState,
                baseState: $5.baseState,
                baseQueue: $5.baseQueue,
                queue: $5.queue,
                next: null
            }, B4 === null ? I4.memoizedState = B4 = e : B4 = B4.next = e;
        }
        return B4;
    }
    function de3(e, n) {
        return typeof n == "function" ? n(e) : n;
    }
    function dt(e) {
        var n = qe2(), t = n.queue;
        if (t === null) throw Error(v5(311));
        t.lastRenderedReducer = e;
        var r = $5, l49 = r.baseQueue, i = t.pending;
        if (i !== null) {
            if (l49 !== null) {
                var o32 = l49.next;
                l49.next = i.next, i.next = o32;
            }
            r.baseQueue = l49 = i, t.pending = null;
        }
        if (l49 !== null) {
            l49 = l49.next, r = r.baseState;
            var u17 = o32 = i = null, s = l49;
            do {
                var d = s.lane;
                if ((ft & d) === d) u17 !== null && (u17 = u17.next = {
                    lane: 0,
                    action: s.action,
                    eagerReducer: s.eagerReducer,
                    eagerState: s.eagerState,
                    next: null
                }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                else {
                    var y8 = {
                        lane: d,
                        action: s.action,
                        eagerReducer: s.eagerReducer,
                        eagerState: s.eagerState,
                        next: null
                    };
                    u17 === null ? (o32 = u17 = y8, i = r) : u17 = u17.next = y8, I4.lanes |= d, vt1 |= d;
                }
                s = s.next;
            }while (s !== null && s !== l49)
            u17 === null ? i = r : u17.next = o32, ee3(r, n.memoizedState) || (ue3 = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = u17, t.lastRenderedState = r;
        }
        return [
            n.memoizedState,
            t.dispatch
        ];
    }
    function pt1(e) {
        var n = qe2(), t = n.queue;
        if (t === null) throw Error(v5(311));
        t.lastRenderedReducer = e;
        var r = t.dispatch, l50 = t.pending, i = n.memoizedState;
        if (l50 !== null) {
            t.pending = null;
            var o33 = l50 = l50.next;
            do i = e(i, o33.action), o33 = o33.next;
            while (o33 !== l50)
            ee3(i, n.memoizedState) || (ue3 = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
        }
        return [
            i,
            r
        ];
    }
    function Tu(e, n, t) {
        var r = n._getVersion;
        r = r(n._source);
        var l51 = n._workInProgressVersionPrimary;
        if (l51 !== null ? e = l51 === r : (e = e.mutableReadLanes, (e = (ft & e) === e) && (n._workInProgressVersionPrimary = r, Cn.push(n))), e) return t(n._source);
        throw Cn.push(n), Error(v5(350));
    }
    function Lu(e, n, t, r) {
        var l52 = X3;
        if (l52 === null) throw Error(v5(349));
        var i = n._getVersion, o34 = i(n._source), u18 = at.current, s = u18.useState(function() {
            return Tu(l52, n, t);
        }), d = s[1], y9 = s[0];
        s = B4;
        var C6 = e.memoizedState, h7 = C6.refs, S7 = h7.getSnapshot, k8 = C6.source;
        C6 = C6.subscribe;
        var E7 = I4;
        return e.memoizedState = {
            refs: h7,
            source: n,
            subscribe: r
        }, u18.useEffect(function() {
            h7.getSnapshot = t, h7.setSnapshot = d;
            var c23 = i(n._source);
            if (!ee3(o34, c23)) {
                c23 = t(n._source), ee3(y9, c23) || (d(c23), c23 = Fe1(E7), l52.mutableReadLanes |= c23 & l52.pendingLanes), c23 = l52.mutableReadLanes, l52.entangledLanes |= c23;
                for(var a22 = l52.entanglements, f21 = c23; 0 < f21;){
                    var p16 = 31 - Ne2(f21), m12 = 1 << p16;
                    a22[p16] |= c23, f21 &= ~m12;
                }
            }
        }, [
            t,
            n,
            r
        ]), u18.useEffect(function() {
            return r(n._source, function() {
                var c24 = h7.getSnapshot, a23 = h7.setSnapshot;
                try {
                    a23(c24(n._source));
                    var f22 = Fe1(E7);
                    l52.mutableReadLanes |= f22 & l52.pendingLanes;
                } catch (p17) {
                    a23(function() {
                        throw p17;
                    });
                }
            });
        }, [
            n,
            r
        ]), ee3(S7, t) && ee3(k8, n) && ee3(C6, r) || (e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: de3,
            lastRenderedState: y9
        }, e.dispatch = d = ti.bind(null, I4, e), s.queue = e, s.baseQueue = null, y9 = Tu(l52, n, t), s.memoizedState = s.baseState = y9), y9;
    }
    function zu(e, n, t) {
        var r = qe2();
        return Lu(r, e, n, t);
    }
    function mt(e) {
        var n = Je();
        return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = n.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: de3,
            lastRenderedState: e
        }, e = e.dispatch = ti.bind(null, I4, e), [
            n.memoizedState,
            e
        ];
    }
    function hr(e, n, t, r) {
        return e = {
            tag: e,
            create: n,
            destroy: t,
            deps: r,
            next: null
        }, n = I4.updateQueue, n === null ? (n = {
            lastEffect: null
        }, I4.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
    }
    function Ou(e) {
        var n = Je();
        return e = {
            current: e
        }, n.memoizedState = e;
    }
    function vr() {
        return qe2().memoizedState;
    }
    function bl(e, n, t, r) {
        var l53 = Je();
        I4.flags |= e, l53.memoizedState = hr(1 | n, t, void 0, r === void 0 ? null : r);
    }
    function ei(e, n, t, r) {
        var l54 = qe2();
        r = r === void 0 ? null : r;
        var i = void 0;
        if ($5 !== null) {
            var o35 = $5.memoizedState;
            if (i = o35.destroy, r !== null && Jl(r, o35.deps)) {
                hr(n, t, i, r);
                return;
            }
        }
        I4.flags |= e, l54.memoizedState = hr(1 | n, t, i, r);
    }
    function Mu(e, n) {
        return bl(516, 4, e, n);
    }
    function yr(e, n) {
        return ei(516, 4, e, n);
    }
    function Ru(e, n) {
        return ei(4, 2, e, n);
    }
    function Du(e, n) {
        if (typeof n == "function") return e = e(), n(e), function() {
            n(null);
        };
        if (n != null) return e = e(), n.current = e, function() {
            n.current = null;
        };
    }
    function Iu(e, n, t) {
        return t = t != null ? t.concat([
            e
        ]) : null, ei(4, 2, Du.bind(null, n, e), t);
    }
    function ni() {}
    function Fu(e, n) {
        var t = qe2();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (t.memoizedState = [
            e,
            n
        ], e);
    }
    function ju(e, n) {
        var t = qe2();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [
            e,
            n
        ], e);
    }
    function qa(e, n) {
        var t = Sn();
        Ge(98 > t ? 98 : t, function() {
            e(!0);
        }), Ge(97 < t ? 97 : t, function() {
            var r = te3.transition;
            te3.transition = 1;
            try {
                e(!1), n();
            } finally{
                te3.transition = r;
            }
        });
    }
    function ti(e, n, t) {
        var r = b5(), l55 = Fe1(e), i = {
            lane: l55,
            action: t,
            eagerReducer: null,
            eagerState: null,
            next: null
        }, o36 = n.pending;
        if (o36 === null ? i.next = i : (i.next = o36.next, o36.next = i), n.pending = i, o36 = e.alternate, e === I4 || o36 !== null && o36 === I4) ct = mr = !0;
        else {
            if (e.lanes === 0 && (o36 === null || o36.lanes === 0) && (o36 = n.lastRenderedReducer, o36 !== null)) try {
                var u19 = n.lastRenderedState, s = o36(u19, t);
                if (i.eagerReducer = o36, i.eagerState = s, ee3(s, u19)) return;
            } catch  {} finally{}
            je2(e, l55, r);
        }
    }
    var gr = {
        readContext: ne3,
        useCallback: Z3,
        useContext: Z3,
        useEffect: Z3,
        useImperativeHandle: Z3,
        useLayoutEffect: Z3,
        useMemo: Z3,
        useReducer: Z3,
        useRef: Z3,
        useState: Z3,
        useDebugValue: Z3,
        useDeferredValue: Z3,
        useTransition: Z3,
        useMutableSource: Z3,
        useOpaqueIdentifier: Z3,
        unstable_isNewReconciler: !1
    }, ba = {
        readContext: ne3,
        useCallback: function(e, n) {
            return Je().memoizedState = [
                e,
                n === void 0 ? null : n
            ], e;
        },
        useContext: ne3,
        useEffect: Mu,
        useImperativeHandle: function(e, n, t) {
            return t = t != null ? t.concat([
                e
            ]) : null, bl(4, 2, Du.bind(null, n, e), t);
        },
        useLayoutEffect: function(e, n) {
            return bl(4, 2, e, n);
        },
        useMemo: function(e, n) {
            var t = Je();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [
                e,
                n
            ], e;
        },
        useReducer: function(e, n, t) {
            var r = Je();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, e = e.dispatch = ti.bind(null, I4, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: Ou,
        useState: mt,
        useDebugValue: ni,
        useDeferredValue: function(e) {
            var n = mt(e), t = n[0], r = n[1];
            return Mu(function() {
                var l56 = te3.transition;
                te3.transition = 1;
                try {
                    r(e);
                } finally{
                    te3.transition = l56;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = mt(!1), n = e[0];
            return e = qa.bind(null, e[1]), Ou(e), [
                e,
                n
            ];
        },
        useMutableSource: function(e, n, t) {
            var r = Je();
            return r.memoizedState = {
                refs: {
                    getSnapshot: n,
                    setSnapshot: null
                },
                source: e,
                subscribe: t
            }, Lu(r, e, n, t);
        },
        useOpaqueIdentifier: function() {
            if (ce2) {
                var e = !1, n = Ya(function() {
                    throw e || (e = !0, t("r:" + (Dl++).toString(36))), Error(v5(355));
                }), t = mt(n)[1];
                return (I4.mode & 2) === 0 && (I4.flags |= 516, hr(5, function() {
                    t("r:" + (Dl++).toString(36));
                }, void 0, null)), n;
            }
            return n = "r:" + (Dl++).toString(36), mt(n), n;
        },
        unstable_isNewReconciler: !1
    }, ef = {
        readContext: ne3,
        useCallback: Fu,
        useContext: ne3,
        useEffect: yr,
        useImperativeHandle: Iu,
        useLayoutEffect: Ru,
        useMemo: ju,
        useReducer: dt,
        useRef: vr,
        useState: function() {
            return dt(de3);
        },
        useDebugValue: ni,
        useDeferredValue: function(e) {
            var n = dt(de3), t = n[0], r = n[1];
            return yr(function() {
                var l57 = te3.transition;
                te3.transition = 1;
                try {
                    r(e);
                } finally{
                    te3.transition = l57;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = dt(de3)[0];
            return [
                vr().current,
                e
            ];
        },
        useMutableSource: zu,
        useOpaqueIdentifier: function() {
            return dt(de3)[0];
        },
        unstable_isNewReconciler: !1
    }, nf = {
        readContext: ne3,
        useCallback: Fu,
        useContext: ne3,
        useEffect: yr,
        useImperativeHandle: Iu,
        useLayoutEffect: Ru,
        useMemo: ju,
        useReducer: pt1,
        useRef: vr,
        useState: function() {
            return pt1(de3);
        },
        useDebugValue: ni,
        useDeferredValue: function(e) {
            var n = pt1(de3), t = n[0], r = n[1];
            return yr(function() {
                var l58 = te3.transition;
                te3.transition = 1;
                try {
                    r(e);
                } finally{
                    te3.transition = l58;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = pt1(de3)[0];
            return [
                vr().current,
                e
            ];
        },
        useMutableSource: zu,
        useOpaqueIdentifier: function() {
            return pt1(de3)[0];
        },
        unstable_isNewReconciler: !1
    }, tf = We1.ReactCurrentOwner, ue3 = !1;
    function J4(e, n, t, r) {
        n.child = e === null ? xu(n, null, t, r) : cr(n, e.child, t, r);
    }
    function Uu(e, n, t, r, l59) {
        t = t.render;
        var i = n.ref;
        return kn(n, l59), r = ql(e, n, t, r, i, l59), e !== null && !ue3 ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l59, ye2(e, n, l59)) : (n.flags |= 1, J4(e, n, r, l59), n.child);
    }
    function Vu(e, n, t, r, l60, i) {
        if (e === null) {
            var o37 = t.type;
            return typeof o37 == "function" && !_i(o37) && o37.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o37, Bu(e, n, o37, r, l60, i)) : (e = Tr(t.type, null, r, n, n.mode, i), e.ref = n.ref, e.return = n, n.child = e);
        }
        return o37 = e.child, (l60 & i) === 0 && (l60 = o37.memoizedProps, t = t.compare, t = t !== null ? t : qn, t(l60, r) && e.ref === n.ref) ? ye2(e, n, i) : (n.flags |= 1, e = Be(o37, r), e.ref = n.ref, e.return = n, n.child = e);
    }
    function Bu(e, n, t, r, l61, i) {
        if (e !== null && qn(e.memoizedProps, r) && e.ref === n.ref) if (ue3 = !1, (i & l61) !== 0) (e.flags & 16384) !== 0 && (ue3 = !0);
        else return n.lanes = e.lanes, ye2(e, n, i);
        return li(e, n, t, r, i);
    }
    function ri(e, n, t) {
        var r = n.pendingProps, l62 = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if ((n.mode & 4) === 0) n.memoizedState = {
            baseLanes: 0
        }, Pr(n, t);
        else if ((t & 1073741824) !== 0) n.memoizedState = {
            baseLanes: 0
        }, Pr(n, i !== null ? i.baseLanes : t);
        else return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
            baseLanes: e
        }, Pr(n, e), null;
        else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, Pr(n, r);
        return J4(e, n, l62, t), n.child;
    }
    function Hu(e, n) {
        var t = n.ref;
        (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 128);
    }
    function li(e, n, t, r, l63) {
        var i = G4(t) ? Xe : W3.current;
        return i = wn(n, i), kn(n, l63), t = ql(e, n, t, r, i, l63), e !== null && !ue3 ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l63, ye2(e, n, l63)) : (n.flags |= 1, J4(e, n, t, l63), n.child);
    }
    function Wu(e, n, t, r, l64) {
        if (G4(t)) {
            var i = !0;
            nr(n);
        } else i = !1;
        if (kn(n, l64), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), Su(n, t, r), Ql(n, t, r, l64), r = !0;
        else if (e === null) {
            var o38 = n.stateNode, u20 = n.memoizedProps;
            o38.props = u20;
            var s = o38.context, d = t.contextType;
            typeof d == "object" && d !== null ? d = ne3(d) : (d = G4(t) ? Xe : W3.current, d = wn(n, d));
            var y10 = t.getDerivedStateFromProps, C7 = typeof y10 == "function" || typeof o38.getSnapshotBeforeUpdate == "function";
            C7 || typeof o38.UNSAFE_componentWillReceiveProps != "function" && typeof o38.componentWillReceiveProps != "function" || (u20 !== r || s !== d) && Eu(n, o38, r, d), Oe2 = !1;
            var h8 = n.memoizedState;
            o38.state = h8, lt(n, r, o38, l64), s = n.memoizedState, u20 !== r || h8 !== s || K4.current || Oe2 ? (typeof y10 == "function" && (ur(n, t, y10, r), s = n.memoizedState), (u20 = Oe2 || wu(n, t, u20, r, h8, s, d)) ? (C7 || typeof o38.UNSAFE_componentWillMount != "function" && typeof o38.componentWillMount != "function" || (typeof o38.componentWillMount == "function" && o38.componentWillMount(), typeof o38.UNSAFE_componentWillMount == "function" && o38.UNSAFE_componentWillMount()), typeof o38.componentDidMount == "function" && (n.flags |= 4)) : (typeof o38.componentDidMount == "function" && (n.flags |= 4), n.memoizedProps = r, n.memoizedState = s), o38.props = r, o38.state = s, o38.context = d, r = u20) : (typeof o38.componentDidMount == "function" && (n.flags |= 4), r = !1);
        } else {
            o38 = n.stateNode, hu(e, n), u20 = n.memoizedProps, d = n.type === n.elementType ? u20 : oe3(n.type, u20), o38.props = d, C7 = n.pendingProps, h8 = o38.context, s = t.contextType, typeof s == "object" && s !== null ? s = ne3(s) : (s = G4(t) ? Xe : W3.current, s = wn(n, s));
            var S8 = t.getDerivedStateFromProps;
            (y10 = typeof S8 == "function" || typeof o38.getSnapshotBeforeUpdate == "function") || typeof o38.UNSAFE_componentWillReceiveProps != "function" && typeof o38.componentWillReceiveProps != "function" || (u20 !== C7 || h8 !== s) && Eu(n, o38, r, s), Oe2 = !1, h8 = n.memoizedState, o38.state = h8, lt(n, r, o38, l64);
            var k9 = n.memoizedState;
            u20 !== C7 || h8 !== k9 || K4.current || Oe2 ? (typeof S8 == "function" && (ur(n, t, S8, r), k9 = n.memoizedState), (d = Oe2 || wu(n, t, d, r, h8, k9, s)) ? (y10 || typeof o38.UNSAFE_componentWillUpdate != "function" && typeof o38.componentWillUpdate != "function" || (typeof o38.componentWillUpdate == "function" && o38.componentWillUpdate(r, k9, s), typeof o38.UNSAFE_componentWillUpdate == "function" && o38.UNSAFE_componentWillUpdate(r, k9, s)), typeof o38.componentDidUpdate == "function" && (n.flags |= 4), typeof o38.getSnapshotBeforeUpdate == "function" && (n.flags |= 256)) : (typeof o38.componentDidUpdate != "function" || u20 === e.memoizedProps && h8 === e.memoizedState || (n.flags |= 4), typeof o38.getSnapshotBeforeUpdate != "function" || u20 === e.memoizedProps && h8 === e.memoizedState || (n.flags |= 256), n.memoizedProps = r, n.memoizedState = k9), o38.props = r, o38.state = k9, o38.context = s, r = d) : (typeof o38.componentDidUpdate != "function" || u20 === e.memoizedProps && h8 === e.memoizedState || (n.flags |= 4), typeof o38.getSnapshotBeforeUpdate != "function" || u20 === e.memoizedProps && h8 === e.memoizedState || (n.flags |= 256), r = !1);
        }
        return ii(e, n, t, r, i, l64);
    }
    function ii(e, n, t, r, l65, i) {
        Hu(e, n);
        var o39 = (n.flags & 64) !== 0;
        if (!r && !o39) return l65 && iu(n, t, !1), ye2(e, n, i);
        r = n.stateNode, tf.current = n;
        var u21 = o39 && typeof t.getDerivedStateFromError != "function" ? null : r.render();
        return n.flags |= 1, e !== null && o39 ? (n.child = cr(n, e.child, null, i), n.child = cr(n, null, u21, i)) : J4(e, n, u21, i), n.memoizedState = r.state, l65 && iu(n, t, !0), n.child;
    }
    function Au(e) {
        var n = e.stateNode;
        n.pendingContext ? ru(e, n.pendingContext, n.pendingContext !== n.context) : n.context && ru(e, n.context, !1), Yl(e, n.containerInfo);
    }
    var wr = {
        dehydrated: null,
        retryLane: 0
    };
    function $u(e, n, t) {
        var r = n.pendingProps, l66 = D3.current, i = !1, o40;
        return (o40 = (n.flags & 64) !== 0) || (o40 = e !== null && e.memoizedState === null ? !1 : (l66 & 2) !== 0), o40 ? (i = !0, n.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l66 |= 1), R3(D3, l66 & 1), e === null ? (r.fallback !== void 0 && Kl(n), e = r.children, l66 = r.fallback, i ? (e = Qu(n, e, l66, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = wr, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Qu(n, e, l66, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = wr, n.lanes = 33554432, e) : (t = Ni({
            mode: "visible",
            children: e
        }, n.mode, t, null), t.return = n, n.child = t)) : e.memoizedState !== null ? i ? (r = Xu(e, n, r.children, r.fallback, t), i = n.child, l66 = e.child.memoizedState, i.memoizedState = l66 === null ? {
            baseLanes: t
        } : {
            baseLanes: l66.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = wr, r) : (t = Yu(e, n, r.children, t), n.memoizedState = null, t) : i ? (r = Xu(e, n, r.children, r.fallback, t), i = n.child, l66 = e.child.memoizedState, i.memoizedState = l66 === null ? {
            baseLanes: t
        } : {
            baseLanes: l66.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = wr, r) : (t = Yu(e, n, r.children, t), n.memoizedState = null, t);
    }
    function Qu(e, n, t, r) {
        var l67 = e.mode, i = e.child;
        return n = {
            mode: "hidden",
            children: n
        }, (l67 & 2) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = n) : i = Ni(n, l67, 0, null), t = zn(t, l67, r, null), i.return = e, t.return = e, i.sibling = t, e.child = i, t;
    }
    function Yu(e, n, t, r) {
        var l68 = e.child;
        return e = l68.sibling, t = Be(l68, {
            mode: "visible",
            children: t
        }), (n.mode & 2) === 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, n.firstEffect = n.lastEffect = e), n.child = t;
    }
    function Xu(e, n, t, r, l69) {
        var i = n.mode, o41 = e.child;
        e = o41.sibling;
        var u22 = {
            mode: "hidden",
            children: t
        };
        return (i & 2) === 0 && n.child !== o41 ? (t = n.child, t.childLanes = 0, t.pendingProps = u22, o41 = t.lastEffect, o41 !== null ? (n.firstEffect = t.firstEffect, n.lastEffect = o41, o41.nextEffect = null) : n.firstEffect = n.lastEffect = null) : t = Be(o41, u22), e !== null ? r = Be(e, r) : (r = zn(r, i, l69, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r;
    }
    function Ku(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        t !== null && (t.lanes |= n), mu(e.return, n);
    }
    function oi(e, n, t, r, l70, i) {
        var o42 = e.memoizedState;
        o42 === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l70,
            lastEffect: i
        } : (o42.isBackwards = n, o42.rendering = null, o42.renderingStartTime = 0, o42.last = r, o42.tail = t, o42.tailMode = l70, o42.lastEffect = i);
    }
    function Gu(e, n, t) {
        var r = n.pendingProps, l71 = r.revealOrder, i = r.tail;
        if (J4(e, n, r.children, t), r = D3.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 64;
        else {
            if (e !== null && (e.flags & 64) !== 0) e: for(e = n.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Ku(e, t);
                else if (e.tag === 19) Ku(e, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === n) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (R3(D3, r), (n.mode & 2) === 0) n.memoizedState = null;
        else switch(l71){
            case "forwards":
                for(t = n.child, l71 = null; t !== null;)e = t.alternate, e !== null && dr(e) === null && (l71 = t), t = t.sibling;
                t = l71, t === null ? (l71 = n.child, n.child = null) : (l71 = t.sibling, t.sibling = null), oi(n, !1, l71, t, i, n.lastEffect);
                break;
            case "backwards":
                for(t = null, l71 = n.child, n.child = null; l71 !== null;){
                    if (e = l71.alternate, e !== null && dr(e) === null) {
                        n.child = l71;
                        break;
                    }
                    e = l71.sibling, l71.sibling = t, t = l71, l71 = e;
                }
                oi(n, !0, t, null, i, n.lastEffect);
                break;
            case "together":
                oi(n, !1, null, null, void 0, n.lastEffect);
                break;
            default:
                n.memoizedState = null;
        }
        return n.child;
    }
    function ye2(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), vt1 |= n.lanes, (t & n.childLanes) !== 0) {
            if (e !== null && n.child !== e.child) throw Error(v5(153));
            if (n.child !== null) {
                for(e = n.child, t = Be(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;)e = e.sibling, t = t.sibling = Be(e, e.pendingProps), t.return = n;
                t.sibling = null;
            }
            return n.child;
        }
        return null;
    }
    var Zu, ui, Ju, qu;
    Zu = function(e, n) {
        for(var t = n.child; t !== null;){
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    };
    ui = function() {};
    Ju = function(e, n, t, r) {
        var l72 = e.memoizedProps;
        if (l72 !== r) {
            e = n.stateNode, Ze(fe3.current);
            var i = null;
            switch(t){
                case "input":
                    l72 = Yr(e, l72), r = Yr(e, r), i = [];
                    break;
                case "option":
                    l72 = Gr(e, l72), r = Gr(e, r), i = [];
                    break;
                case "select":
                    l72 = M5({}, l72, {
                        value: void 0
                    }), r = M5({}, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l72 = Zr(e, l72), r = Zr(e, r), i = [];
                    break;
                default:
                    typeof l72.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zt);
            }
            br(t, r);
            var o43;
            t = null;
            for(d in l72)if (!r.hasOwnProperty(d) && l72.hasOwnProperty(d) && l72[d] != null) if (d === "style") {
                var u23 = l72[d];
                for(o43 in u23)u23.hasOwnProperty(o43) && (t || (t = {}), t[o43] = "");
            } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
            for(d in r){
                var s = r[d];
                if (u23 = l72 != null ? l72[d] : void 0, r.hasOwnProperty(d) && s !== u23 && (s != null || u23 != null)) if (d === "style") if (u23) {
                    for(o43 in u23)!u23.hasOwnProperty(o43) || s && s.hasOwnProperty(o43) || (t || (t = {}), t[o43] = "");
                    for(o43 in s)s.hasOwnProperty(o43) && u23[o43] !== s[o43] && (t || (t = {}), t[o43] = s[o43]);
                } else t || (i || (i = []), i.push(d, t)), t = s;
                else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u23 = u23 ? u23.__html : void 0, s != null && u23 !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (s != null && d === "onScroll" && z3("scroll", e), i || u23 === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Hr ? s.toString() : (i = i || []).push(d, s));
            }
            t && (i = i || []).push("style", t);
            var d = i;
            (n.updateQueue = d) && (n.flags |= 4);
        }
    };
    qu = function(e, n, t, r) {
        t !== r && (n.flags |= 4);
    };
    function ht1(e, n) {
        if (!ce2) switch(e.tailMode){
            case "hidden":
                n = e.tail;
                for(var t = null; n !== null;)n.alternate !== null && (t = n), n = n.sibling;
                t === null ? e.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = e.tail;
                for(var r = null; t !== null;)t.alternate !== null && (r = t), t = t.sibling;
                r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function rf(e, n, t) {
        var r = n.pendingProps;
        switch(n.tag){
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
                return null;
            case 1:
                return G4(n.type) && er(), null;
            case 3:
                return xn(), O6(K4), O6(W3), Zl(), r = n.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : r.hydrate || (n.flags |= 256)), ui(n), null;
            case 5:
                Xl(n);
                var l73 = Ze(st.current);
                if (t = n.type, e !== null && n.stateNode != null) Ju(e, n, t, r, l73), e.ref !== n.ref && (n.flags |= 128);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(v5(166));
                        return null;
                    }
                    if (e = Ze(fe3.current), pr(n)) {
                        r = n.stateNode, t = n.type;
                        var i = n.memoizedProps;
                        switch(r[Te1] = n, r[qt] = i, t){
                            case "dialog":
                                z3("cancel", r), z3("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z3("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < et.length; e++)z3(et[e], r);
                                break;
                            case "source":
                                z3("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z3("error", r), z3("load", r);
                                break;
                            case "details":
                                z3("toggle", r);
                                break;
                            case "input":
                                Ai(r, i), z3("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, z3("invalid", r);
                                break;
                            case "textarea":
                                Yi(r, i), z3("invalid", r);
                        }
                        br(t, i), e = null;
                        for(var o44 in i)i.hasOwnProperty(o44) && (l73 = i[o44], o44 === "children" ? typeof l73 == "string" ? r.textContent !== l73 && (e = [
                            "children",
                            l73
                        ]) : typeof l73 == "number" && r.textContent !== "" + l73 && (e = [
                            "children",
                            "" + l73
                        ]) : On.hasOwnProperty(o44) && l73 != null && o44 === "onScroll" && z3("scroll", r));
                        switch(t){
                            case "input":
                                zt(r), Qi(r, i, !0);
                                break;
                            case "textarea":
                                zt(r), Ki(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof i.onClick == "function" && (r.onclick = Zt);
                        }
                        r = e, n.updateQueue = r, r !== null && (n.flags |= 4);
                    } else {
                        switch(o44 = l73.nodeType === 9 ? l73 : l73.ownerDocument, e === Jr.html && (e = Gi(t)), e === Jr.html ? t === "script" ? (e = o44.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o44.createElement(t, {
                            is: r.is
                        }) : (e = o44.createElement(t), t === "select" && (o44 = e, r.multiple ? o44.multiple = !0 : r.size && (o44.size = r.size))) : e = o44.createElementNS(e, t), e[Te1] = n, e[qt] = r, Zu(e, n, !1, !1), n.stateNode = e, o44 = el(t, r), t){
                            case "dialog":
                                z3("cancel", e), z3("close", e), l73 = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z3("load", e), l73 = r;
                                break;
                            case "video":
                            case "audio":
                                for(l73 = 0; l73 < et.length; l73++)z3(et[l73], e);
                                l73 = r;
                                break;
                            case "source":
                                z3("error", e), l73 = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z3("error", e), z3("load", e), l73 = r;
                                break;
                            case "details":
                                z3("toggle", e), l73 = r;
                                break;
                            case "input":
                                Ai(e, r), l73 = Yr(e, r), z3("invalid", e);
                                break;
                            case "option":
                                l73 = Gr(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l73 = M5({}, r, {
                                    value: void 0
                                }), z3("invalid", e);
                                break;
                            case "textarea":
                                Yi(e, r), l73 = Zr(e, r), z3("invalid", e);
                                break;
                            default:
                                l73 = r;
                        }
                        br(t, l73);
                        var u24 = l73;
                        for(i in u24)if (u24.hasOwnProperty(i)) {
                            var s = u24[i];
                            i === "style" ? qi(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Zi(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jn(e, s) : typeof s == "number" && jn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? s != null && i === "onScroll" && z3("scroll", e) : s != null && Ir(e, i, s, o44));
                        }
                        switch(t){
                            case "input":
                                zt(e), Qi(e, r, !1);
                                break;
                            case "textarea":
                                zt(e), Ki(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ke2(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? rn(e, !!r.multiple, i, !1) : r.defaultValue != null && rn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l73.onClick == "function" && (e.onclick = Zt);
                        }
                        qo(t, r) && (n.flags |= 4);
                    }
                    n.ref !== null && (n.flags |= 128);
                }
                return null;
            case 6:
                if (e && n.stateNode != null) qu(e, n, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && n.stateNode === null) throw Error(v5(166));
                    t = Ze(st.current), Ze(fe3.current), pr(n) ? (r = n.stateNode, t = n.memoizedProps, r[Te1] = n, r.nodeValue !== t && (n.flags |= 4)) : (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Te1] = n, n.stateNode = r);
                }
                return null;
            case 13:
                return O6(D3), r = n.memoizedState, (n.flags & 64) !== 0 ? (n.lanes = t, n) : (r = r !== null, t = !1, e === null ? n.memoizedProps.fallback !== void 0 && pr(n) : t = e.memoizedState !== null, r && !t && (n.mode & 2) !== 0 && (e === null && n.memoizedProps.unstable_avoidThisFallback !== !0 || (D3.current & 1) !== 0 ? H3 === 0 && (H3 = 3) : ((H3 === 0 || H3 === 3) && (H3 = 4), X3 === null || (vt1 & 134217727) === 0 && (Nn & 134217727) === 0 || Tn(X3, Q3))), (r || t) && (n.flags |= 4), null);
            case 4:
                return xn(), ui(n), e === null && Xo(n.stateNode.containerInfo), null;
            case 10:
                return Al(n), null;
            case 17:
                return G4(n.type) && er(), null;
            case 19:
                if (O6(D3), r = n.memoizedState, r === null) return null;
                if (i = (n.flags & 64) !== 0, o44 = r.rendering, o44 === null) if (i) ht1(r, !1);
                else {
                    if (H3 !== 0 || e !== null && (e.flags & 64) !== 0) for(e = n.child; e !== null;){
                        if (o44 = dr(e), o44 !== null) {
                            for(n.flags |= 64, ht1(r, !1), i = o44.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), r.lastEffect === null && (n.firstEffect = null), n.lastEffect = r.lastEffect, r = t, t = n.child; t !== null;)i = t, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o44 = i.alternate, o44 === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o44.childLanes, i.lanes = o44.lanes, i.child = o44.child, i.memoizedProps = o44.memoizedProps, i.memoizedState = o44.memoizedState, i.updateQueue = o44.updateQueue, i.type = o44.type, e = o44.dependencies, i.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), t = t.sibling;
                            return R3(D3, D3.current & 1 | 2), n.child;
                        }
                        e = e.sibling;
                    }
                    r.tail !== null && A4() > gi && (n.flags |= 64, i = !0, ht1(r, !1), n.lanes = 33554432);
                }
                else {
                    if (!i) if (e = dr(o44), e !== null) {
                        if (n.flags |= 64, i = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ht1(r, !0), r.tail === null && r.tailMode === "hidden" && !o44.alternate && !ce2) return n = n.lastEffect = r.lastEffect, n !== null && (n.nextEffect = null), null;
                    } else 2 * A4() - r.renderingStartTime > gi && t !== 1073741824 && (n.flags |= 64, i = !0, ht1(r, !1), n.lanes = 33554432);
                    r.isBackwards ? (o44.sibling = n.child, n.child = o44) : (t = r.last, t !== null ? t.sibling = o44 : n.child = o44, r.last = o44);
                }
                return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = n.lastEffect, r.renderingStartTime = A4(), t.sibling = null, n = D3.current, R3(D3, i ? n & 1 | 2 : n & 1), t) : null;
            case 23:
            case 24:
                return Ci(), e !== null && e.memoizedState !== null != (n.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n.flags |= 4), null;
        }
        throw Error(v5(156, n.tag));
    }
    function lf(e) {
        switch(e.tag){
            case 1:
                G4(e.type) && er();
                var n = e.flags;
                return n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 3:
                if (xn(), O6(K4), O6(W3), Zl(), n = e.flags, (n & 64) !== 0) throw Error(v5(285));
                return e.flags = n & -4097 | 64, e;
            case 5:
                return Xl(e), null;
            case 13:
                return O6(D3), n = e.flags, n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 19:
                return O6(D3), null;
            case 4:
                return xn(), null;
            case 10:
                return Al(e), null;
            case 23:
            case 24:
                return Ci(), null;
            default:
                return null;
        }
    }
    function si(e, n) {
        try {
            var t = "", r = n;
            do t += Us(r), r = r.return;
            while (r)
            var l = t;
        } catch (i) {
            l = `
Error generating stack: ` + i.message + `
` + i.stack;
        }
        return {
            value: e,
            source: n,
            stack: l
        };
    }
    function ai(e, n) {
        try {
            console.error(n.value);
        } catch (t) {
            setTimeout(function() {
                throw t;
            });
        }
    }
    var of = typeof WeakMap == "function" ? WeakMap : Map;
    function bu(e, n, t) {
        t = Me2(-1, t), t.tag = 3, t.payload = {
            element: null
        };
        var r = n.value;
        return t.callback = function() {
            kr || (kr = !0, wi = r), ai(e, n);
        }, t;
    }
    function es(e, n, t) {
        t = Me2(-1, t), t.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = n.value;
            t.payload = function() {
                return ai(e, n), r(l);
            };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            typeof r != "function" && (pe3 === null ? pe3 = new Set([
                this
            ]) : pe3.add(this), ai(e, n));
            var o45 = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: o45 !== null ? o45 : ""
            });
        }), t;
    }
    var uf = typeof WeakSet == "function" ? WeakSet : Set;
    function ns(e) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (t) {
            Ve2(e, t);
        }
        else n.current = null;
    }
    function sf(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (n.flags & 256 && e !== null) {
                    var t = e.memoizedProps, r = e.memoizedState;
                    e = n.stateNode, n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : oe3(n.type, t), r), e.__reactInternalSnapshotBeforeUpdate = n;
                }
                return;
            case 3:
                n.flags & 256 && Rl(n.stateNode.containerInfo);
                return;
            case 5:
            case 6:
            case 4:
            case 17:
                return;
        }
        throw Error(v5(163));
    }
    function af(e, n, t) {
        switch(t.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        if ((e.tag & 3) === 3) {
                            var r = e.create;
                            e.destroy = r();
                        }
                        e = e.next;
                    }while (e !== n)
                }
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        var l = e;
                        r = l.next, l = l.tag, (l & 4) !== 0 && (l & 1) !== 0 && (vs(t, e), yf(t, e)), e = r;
                    }while (e !== n)
                }
                return;
            case 1:
                e = t.stateNode, t.flags & 4 && (n === null ? e.componentDidMount() : (r = t.elementType === t.type ? n.memoizedProps : oe3(t.type, n.memoizedProps), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), n = t.updateQueue, n !== null && yu(t, n, e);
                return;
            case 3:
                if (n = t.updateQueue, n !== null) {
                    if (e = null, t.child !== null) switch(t.child.tag){
                        case 5:
                            e = t.child.stateNode;
                            break;
                        case 1:
                            e = t.child.stateNode;
                    }
                    yu(t, n, e);
                }
                return;
            case 5:
                e = t.stateNode, n === null && t.flags & 4 && qo(t.type, t.memoizedProps) && e.focus();
                return;
            case 6:
                return;
            case 4:
                return;
            case 12:
                return;
            case 13:
                t.memoizedState === null && (t = t.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null && ho(t))));
                return;
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
                return;
        }
        throw Error(v5(163));
    }
    function ts(e, n) {
        for(var t = e;;){
            if (t.tag === 5) {
                var r = t.stateNode;
                if (n) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = t.stateNode;
                    var l = t.memoizedProps.style;
                    l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = Ji("display", l);
                }
            } else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
            else if ((t.tag !== 23 && t.tag !== 24 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function rs(e, n) {
        if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
            Ke.onCommitFiberUnmount(Fl, n);
        } catch  {}
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (e = n.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                    var t = e = e.next;
                    do {
                        var r = t, l = r.destroy;
                        if (r = r.tag, l !== void 0) if ((r & 4) !== 0) vs(n, t);
                        else {
                            r = n;
                            try {
                                l();
                            } catch (i) {
                                Ve2(r, i);
                            }
                        }
                        t = t.next;
                    }while (t !== e)
                }
                break;
            case 1:
                if (ns(n), e = n.stateNode, typeof e.componentWillUnmount == "function") try {
                    e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount();
                } catch (i) {
                    Ve2(n, i);
                }
                break;
            case 5:
                ns(n);
                break;
            case 4:
                us(e, n);
        }
    }
    function ls(e) {
        e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
    }
    function is(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function os(e) {
        e: {
            for(var n = e.return; n !== null;){
                if (is(n)) break e;
                n = n.return;
            }
            throw Error(v5(160));
        }
        var t = n;
        switch(n = t.stateNode, t.tag){
            case 5:
                var r = !1;
                break;
            case 3:
                n = n.containerInfo, r = !0;
                break;
            case 4:
                n = n.containerInfo, r = !0;
                break;
            default:
                throw Error(v5(161));
        }
        t.flags & 16 && (jn(n, ""), t.flags &= -17);
        e: n: for(t = e;;){
            for(; t.sibling === null;){
                if (t.return === null || is(t.return)) {
                    t = null;
                    break e;
                }
                t = t.return;
            }
            for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;){
                if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
                t.child.return = t, t = t.child;
            }
            if (!(t.flags & 2)) {
                t = t.stateNode;
                break e;
            }
        }
        r ? fi(e, t, n) : ci(e, t, n);
    }
    function fi(e, n, t) {
        var r = e.tag, l = r === 5 || r === 6;
        if (l) e = l ? e.stateNode : e.stateNode.instance, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Zt));
        else if (r !== 4 && (e = e.child, e !== null)) for(fi(e, n, t), e = e.sibling; e !== null;)fi(e, n, t), e = e.sibling;
    }
    function ci(e, n, t) {
        var r = e.tag, l = r === 5 || r === 6;
        if (l) e = l ? e.stateNode : e.stateNode.instance, n ? t.insertBefore(e, n) : t.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(ci(e, n, t), e = e.sibling; e !== null;)ci(e, n, t), e = e.sibling;
    }
    function us(e, n) {
        for(var t = n, r = !1, l, i;;){
            if (!r) {
                r = t.return;
                e: for(;;){
                    if (r === null) throw Error(v5(160));
                    switch(l = r.stateNode, r.tag){
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                            l = l.containerInfo, i = !0;
                            break e;
                        case 4:
                            l = l.containerInfo, i = !0;
                            break e;
                    }
                    r = r.return;
                }
                r = !0;
            }
            if (t.tag === 5 || t.tag === 6) {
                e: for(var o46 = e, u25 = t, s = u25;;)if (rs(o46, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
                else {
                    if (s === u25) break e;
                    for(; s.sibling === null;){
                        if (s.return === null || s.return === u25) break e;
                        s = s.return;
                    }
                    s.sibling.return = s.return, s = s.sibling;
                }
                i ? (o46 = l, u25 = t.stateNode, o46.nodeType === 8 ? o46.parentNode.removeChild(u25) : o46.removeChild(u25)) : l.removeChild(t.stateNode);
            } else if (t.tag === 4) {
                if (t.child !== null) {
                    l = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child;
                    continue;
                }
            } else if (rs(e, t), t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return, t.tag === 4 && (r = !1);
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function di(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var t = n.updateQueue;
                if (t = t !== null ? t.lastEffect : null, t !== null) {
                    var r = t = t.next;
                    do (r.tag & 3) === 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
                    while (r !== t)
                }
                return;
            case 1:
                return;
            case 5:
                if (t = n.stateNode, t != null) {
                    r = n.memoizedProps;
                    var l = e !== null ? e.memoizedProps : r;
                    e = n.type;
                    var i = n.updateQueue;
                    if (n.updateQueue = null, i !== null) {
                        for(t[qt] = r, e === "input" && r.type === "radio" && r.name != null && $i(t, r), el(e, l), n = el(e, r), l = 0; l < i.length; l += 2){
                            var o47 = i[l], u26 = i[l + 1];
                            o47 === "style" ? qi(t, u26) : o47 === "dangerouslySetInnerHTML" ? Zi(t, u26) : o47 === "children" ? jn(t, u26) : Ir(t, o47, u26, n);
                        }
                        switch(e){
                            case "input":
                                Xr(t, r);
                                break;
                            case "textarea":
                                Xi(t, r);
                                break;
                            case "select":
                                e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? rn(t, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? rn(t, !!r.multiple, r.defaultValue, !0) : rn(t, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (n.stateNode === null) throw Error(v5(162));
                n.stateNode.nodeValue = n.memoizedProps;
                return;
            case 3:
                t = n.stateNode, t.hydrate && (t.hydrate = !1, ho(t.containerInfo));
                return;
            case 12:
                return;
            case 13:
                n.memoizedState !== null && (yi = A4(), ts(n.child, !0)), ss(n);
                return;
            case 19:
                ss(n);
                return;
            case 17:
                return;
            case 23:
            case 24:
                ts(n, n.memoizedState !== null);
                return;
        }
        throw Error(v5(163));
    }
    function ss(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var t = e.stateNode;
            t === null && (t = e.stateNode = new uf), n.forEach(function(r) {
                var l = Sf.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
        }
    }
    function ff(e, n) {
        return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (n = n.memoizedState, n !== null && n.dehydrated === null) : !1;
    }
    var cf = Math.ceil, Sr = We1.ReactCurrentDispatcher, pi = We1.ReactCurrentOwner, x5 = 0, X3 = null, j3 = null, Q3 = 0, be2 = 0, mi = Le3(0), H3 = 0, Er = null, _n = 0, vt1 = 0, Nn = 0, hi = 0, vi = null, yi = 0, gi = 1 / 0;
    function Pn() {
        gi = A4() + 500;
    }
    var g5 = null, kr = !1, wi = null, pe3 = null, Ie2 = !1, yt = null, gt1 = 90, Si = [], Ei = [], ge3 = null, wt1 = 0, ki = null, xr = -1, we3 = 0, Cr = 0, St1 = null, _r = !1;
    function b5() {
        return (x5 & 48) !== 0 ? A4() : xr !== -1 ? xr : xr = A4();
    }
    function Fe1(e) {
        if (e = e.mode, (e & 2) === 0) return 1;
        if ((e & 4) === 0) return Sn() === 99 ? 1 : 2;
        if (we3 === 0 && (we3 = _n), Ja.transition !== 0) {
            Cr !== 0 && (Cr = vi !== null ? vi.pendingLanes : 0), e = we3;
            var n = 4186112 & ~Cr;
            return n &= -n, n === 0 && (e = 4186112 & ~e, n = e & -e, n === 0 && (n = 8192)), n;
        }
        return e = Sn(), (x5 & 4) !== 0 && e === 98 ? e = Ut(12, we3) : (e = ea(e), e = Ut(e, we3)), e;
    }
    function je2(e, n, t) {
        if (50 < wt1) throw wt1 = 0, ki = null, Error(v5(185));
        if (e = Nr(e, n), e === null) return null;
        Vt(e, n, t), e === X3 && (Nn |= n, H3 === 4 && Tn(e, Q3));
        var r = Sn();
        n === 1 ? (x5 & 8) !== 0 && (x5 & 48) === 0 ? xi(e) : (re3(e, t), x5 === 0 && (Pn(), ae3())) : ((x5 & 4) === 0 || r !== 98 && r !== 99 || (ge3 === null ? ge3 = new Set([
            e
        ]) : ge3.add(e)), re3(e, t)), vi = e;
    }
    function Nr(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        for(t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
        return t.tag === 3 ? t.stateNode : null;
    }
    function re3(e, n) {
        for(var t = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o48 = e.pendingLanes; 0 < o48;){
            var u27 = 31 - Ne2(o48), s = 1 << u27, d = i[u27];
            if (d === -1) {
                if ((s & r) === 0 || (s & l) !== 0) {
                    d = n, an(s);
                    var y11 = L3;
                    i[u27] = 10 <= y11 ? d + 250 : 6 <= y11 ? d + 5000 : -1;
                }
            } else d <= n && (e.expiredLanes |= s);
            o48 &= ~s;
        }
        if (r = Yn(e, e === X3 ? Q3 : 0), n = L3, r === 0) t !== null && (t !== Bl && Ul(t), e.callbackNode = null, e.callbackPriority = 0);
        else {
            if (t !== null) {
                if (e.callbackPriority === n) return;
                t !== Bl && Ul(t);
            }
            n === 15 ? (t = xi.bind(null, e), he3 === null ? (he3 = [
                t
            ], rr = jl(tr, pu)) : he3.push(t), t = Bl) : n === 14 ? t = rt(99, xi.bind(null, e)) : (t = na(n), t = rt(t, as.bind(null, e))), e.callbackPriority = n, e.callbackNode = t;
        }
    }
    function as(e) {
        if (xr = -1, Cr = we3 = 0, (x5 & 48) !== 0) throw Error(v5(327));
        var n = e.callbackNode;
        if (Ue2() && e.callbackNode !== n) return null;
        var t = Yn(e, e === X3 ? Q3 : 0);
        if (t === 0) return null;
        var r = t, l = x5;
        x5 |= 16;
        var i = ps();
        (X3 !== e || Q3 !== r) && (Pn(), Ln(e, r));
        do try {
            mf();
            break;
        } catch (u28) {
            ds(e, u28);
        }
        while (1)
        if (Wl(), Sr.current = i, x5 = l, j3 !== null ? r = 0 : (X3 = null, Q3 = 0, r = H3), (_n & Nn) !== 0) Ln(e, 0);
        else if (r !== 0) {
            if (r === 2 && (x5 |= 64, e.hydrate && (e.hydrate = !1, Rl(e.containerInfo)), t = ko(e), t !== 0 && (r = Et(e, t))), r === 1) throw n = Er, Ln(e, 0), Tn(e, t), re3(e, A4()), n;
            switch(e.finishedWork = e.current.alternate, e.finishedLanes = t, r){
                case 0:
                case 1:
                    throw Error(v5(345));
                case 2:
                    en(e);
                    break;
                case 3:
                    if (Tn(e, t), (t & 62914560) === t && (r = yi + 500 - A4(), 10 < r)) {
                        if (Yn(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & t) !== t) {
                            b5(), e.pingedLanes |= e.suspendedLanes & l;
                            break;
                        }
                        e.timeoutHandle = bo(en.bind(null, e), r);
                        break;
                    }
                    en(e);
                    break;
                case 4:
                    if (Tn(e, t), (t & 4186112) === t) break;
                    for(r = e.eventTimes, l = -1; 0 < t;){
                        var o49 = 31 - Ne2(t);
                        i = 1 << o49, o49 = r[o49], o49 > l && (l = o49), t &= ~i;
                    }
                    if (t = l, t = A4() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3000 > t ? 3000 : 4320 > t ? 4320 : 1960 * cf(t / 1960)) - t, 10 < t) {
                        e.timeoutHandle = bo(en.bind(null, e), t);
                        break;
                    }
                    en(e);
                    break;
                case 5:
                    en(e);
                    break;
                default:
                    throw Error(v5(329));
            }
        }
        return re3(e, A4()), e.callbackNode === n ? as.bind(null, e) : null;
    }
    function Tn(e, n) {
        for(n &= ~hi, n &= ~Nn, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;){
            var t = 31 - Ne2(n), r = 1 << t;
            e[t] = -1, n &= ~r;
        }
    }
    function xi(e) {
        if ((x5 & 48) !== 0) throw Error(v5(327));
        if (Ue2(), e === X3 && (e.expiredLanes & Q3) !== 0) {
            var n = Q3, t = Et(e, n);
            (_n & Nn) !== 0 && (n = Yn(e, n), t = Et(e, n));
        } else n = Yn(e, 0), t = Et(e, n);
        if (e.tag !== 0 && t === 2 && (x5 |= 64, e.hydrate && (e.hydrate = !1, Rl(e.containerInfo)), n = ko(e), n !== 0 && (t = Et(e, n))), t === 1) throw t = Er, Ln(e, 0), Tn(e, n), re3(e, A4()), t;
        return e.finishedWork = e.current.alternate, e.finishedLanes = n, en(e), re3(e, A4()), null;
    }
    function df() {
        if (ge3 !== null) {
            var e = ge3;
            ge3 = null, e.forEach(function(n) {
                n.expiredLanes |= 24 & n.pendingLanes, re3(n, A4());
            });
        }
        ae3();
    }
    function fs(e, n) {
        var t = x5;
        x5 |= 1;
        try {
            return e(n);
        } finally{
            x5 = t, x5 === 0 && (Pn(), ae3());
        }
    }
    function cs(e, n) {
        var t = x5;
        x5 &= -2, x5 |= 8;
        try {
            return e(n);
        } finally{
            x5 = t, x5 === 0 && (Pn(), ae3());
        }
    }
    function Pr(e, n) {
        R3(mi, be2), be2 |= n, _n |= n;
    }
    function Ci() {
        be2 = mi.current, O6(mi);
    }
    function Ln(e, n) {
        e.finishedWork = null, e.finishedLanes = 0;
        var t = e.timeoutHandle;
        if (t !== -1 && (e.timeoutHandle = -1, Qa(t)), j3 !== null) for(t = j3.return; t !== null;){
            var r = t;
            switch(r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && er();
                    break;
                case 3:
                    xn(), O6(K4), O6(W3), Zl();
                    break;
                case 5:
                    Xl(r);
                    break;
                case 4:
                    xn();
                    break;
                case 13:
                    O6(D3);
                    break;
                case 19:
                    O6(D3);
                    break;
                case 10:
                    Al(r);
                    break;
                case 23:
                case 24:
                    Ci();
            }
            t = t.return;
        }
        X3 = e, j3 = Be(e.current, null), Q3 = be2 = _n = n, H3 = 0, Er = null, hi = Nn = vt1 = 0;
    }
    function ds(e, n) {
        do {
            var t = j3;
            try {
                if (Wl(), at.current = gr, mr) {
                    for(var r = I4.memoizedState; r !== null;){
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next;
                    }
                    mr = !1;
                }
                if (ft = 0, B4 = $5 = I4 = null, ct = !1, pi.current = null, t === null || t.return === null) {
                    H3 = 1, Er = n, j3 = null;
                    break;
                }
                e: {
                    var i = e, o50 = t.return, u29 = t, s = n;
                    if (n = Q3, u29.flags |= 2048, u29.firstEffect = u29.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var d = s;
                        if ((u29.mode & 2) === 0) {
                            var y12 = u29.alternate;
                            y12 ? (u29.updateQueue = y12.updateQueue, u29.memoizedState = y12.memoizedState, u29.lanes = y12.lanes) : (u29.updateQueue = null, u29.memoizedState = null);
                        }
                        var C8 = (D3.current & 1) !== 0, h9 = o50;
                        do {
                            var S9;
                            if (S9 = h9.tag === 13) {
                                var k10 = h9.memoizedState;
                                if (k10 !== null) S9 = k10.dehydrated !== null;
                                else {
                                    var E8 = h9.memoizedProps;
                                    S9 = E8.fallback === void 0 ? !1 : E8.unstable_avoidThisFallback !== !0 ? !0 : !C8;
                                }
                            }
                            if (S9) {
                                var c25 = h9.updateQueue;
                                if (c25 === null) {
                                    var a24 = new Set;
                                    a24.add(d), h9.updateQueue = a24;
                                } else c25.add(d);
                                if ((h9.mode & 2) === 0) {
                                    if (h9.flags |= 64, u29.flags |= 16384, u29.flags &= -2981, u29.tag === 1) if (u29.alternate === null) u29.tag = 17;
                                    else {
                                        var f23 = Me2(-1, 1);
                                        f23.tag = 2, Re3(u29, f23);
                                    }
                                    u29.lanes |= 1;
                                    break e;
                                }
                                s = void 0, u29 = n;
                                var p18 = i.pingCache;
                                if (p18 === null ? (p18 = i.pingCache = new of, s = new Set, p18.set(d, s)) : (s = p18.get(d), s === void 0 && (s = new Set, p18.set(d, s))), !s.has(u29)) {
                                    s.add(u29);
                                    var m13 = wf.bind(null, i, d, u29);
                                    d.then(m13, m13);
                                }
                                h9.flags |= 4096, h9.lanes = n;
                                break e;
                            }
                            h9 = h9.return;
                        }while (h9 !== null)
                        s = Error((tn(u29.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
                    }
                    H3 !== 5 && (H3 = 2), s = si(s, u29), h9 = o50;
                    do {
                        switch(h9.tag){
                            case 3:
                                i = s, h9.flags |= 4096, n &= -n, h9.lanes |= n;
                                var _7 = bu(h9, i, n);
                                vu(h9, _7);
                                break e;
                            case 1:
                                i = s;
                                var w = h9.type, N6 = h9.stateNode;
                                if ((h9.flags & 64) === 0 && (typeof w.getDerivedStateFromError == "function" || N6 !== null && typeof N6.componentDidCatch == "function" && (pe3 === null || !pe3.has(N6)))) {
                                    h9.flags |= 4096, n &= -n, h9.lanes |= n;
                                    var T8 = es(h9, i, n);
                                    vu(h9, T8);
                                    break e;
                                }
                        }
                        h9 = h9.return;
                    }while (h9 !== null)
                }
                hs(t);
            } catch (P5) {
                n = P5, j3 === t && t !== null && (j3 = t = t.return);
                continue;
            }
            break;
        }while (1)
    }
    function ps() {
        var e = Sr.current;
        return Sr.current = gr, e === null ? gr : e;
    }
    function Et(e, n) {
        var t = x5;
        x5 |= 16;
        var r = ps();
        X3 === e && Q3 === n || Ln(e, n);
        do try {
            pf();
            break;
        } catch (l) {
            ds(e, l);
        }
        while (1)
        if (Wl(), x5 = t, Sr.current = r, j3 !== null) throw Error(v5(261));
        return X3 = null, Q3 = 0, H3;
    }
    function pf() {
        for(; j3 !== null;)ms(j3);
    }
    function mf() {
        for(; j3 !== null && !Ka();)ms(j3);
    }
    function ms(e) {
        var n = gs(e.alternate, e, be2);
        e.memoizedProps = e.pendingProps, n === null ? hs(e) : j3 = n, pi.current = null;
    }
    function hs(e) {
        var n = e;
        do {
            var t = n.alternate;
            if (e = n.return, (n.flags & 2048) === 0) {
                if (t = rf(t, n, be2), t !== null) {
                    j3 = t;
                    return;
                }
                if (t = n, t.tag !== 24 && t.tag !== 23 || t.memoizedState === null || (be2 & 1073741824) !== 0 || (t.mode & 4) === 0) {
                    for(var r = 0, l = t.child; l !== null;)r |= l.lanes | l.childLanes, l = l.sibling;
                    t.childLanes = r;
                }
                e !== null && (e.flags & 2048) === 0 && (e.firstEffect === null && (e.firstEffect = n.firstEffect), n.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), e.lastEffect = n.lastEffect), 1 < n.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = n : e.firstEffect = n, e.lastEffect = n));
            } else {
                if (t = lf(n), t !== null) {
                    t.flags &= 2047, j3 = t;
                    return;
                }
                e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
            }
            if (n = n.sibling, n !== null) {
                j3 = n;
                return;
            }
            j3 = n = e;
        }while (n !== null)
        H3 === 0 && (H3 = 5);
    }
    function en(e) {
        var n = Sn();
        return Ge(99, hf.bind(null, e, n)), null;
    }
    function hf(e, n) {
        do Ue2();
        while (yt !== null)
        if ((x5 & 48) !== 0) throw Error(v5(327));
        var t = e.finishedWork;
        if (t === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v5(177));
        e.callbackNode = null;
        var r = t.lanes | t.childLanes, l = r, i = e.pendingLanes & ~l;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l, e.mutableReadLanes &= l, e.entangledLanes &= l, l = e.entanglements;
        for(var o51 = e.eventTimes, u30 = e.expirationTimes; 0 < i;){
            var s = 31 - Ne2(i), d = 1 << s;
            l[s] = 0, o51[s] = -1, u30[s] = -1, i &= ~d;
        }
        if (ge3 !== null && (r & 24) === 0 && ge3.has(e) && ge3.delete(e), e === X3 && (j3 = X3 = null, Q3 = 0), 1 < t.flags ? t.lastEffect !== null ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, r !== null) {
            if (l = x5, x5 |= 32, pi.current = null, zl = Bt, o51 = Ho(), Nl(o51)) {
                if ("selectionStart" in o51) u30 = {
                    start: o51.selectionStart,
                    end: o51.selectionEnd
                };
                else e: if (u30 = (u30 = o51.ownerDocument) && u30.defaultView || window, (d = u30.getSelection && u30.getSelection()) && d.rangeCount !== 0) {
                    u30 = d.anchorNode, i = d.anchorOffset, s = d.focusNode, d = d.focusOffset;
                    try {
                        u30.nodeType, s.nodeType;
                    } catch  {
                        u30 = null;
                        break e;
                    }
                    var y13 = 0, C9 = -1, h10 = -1, S10 = 0, k11 = 0, E9 = o51, c26 = null;
                    n: for(;;){
                        for(var a25; E9 !== u30 || i !== 0 && E9.nodeType !== 3 || (C9 = y13 + i), E9 !== s || d !== 0 && E9.nodeType !== 3 || (h10 = y13 + d), E9.nodeType === 3 && (y13 += E9.nodeValue.length), (a25 = E9.firstChild) !== null;)c26 = E9, E9 = a25;
                        for(;;){
                            if (E9 === o51) break n;
                            if (c26 === u30 && ++S10 === i && (C9 = y13), c26 === s && ++k11 === d && (h10 = y13), (a25 = E9.nextSibling) !== null) break;
                            E9 = c26, c26 = E9.parentNode;
                        }
                        E9 = a25;
                    }
                    u30 = C9 === -1 || h10 === -1 ? null : {
                        start: C9,
                        end: h10
                    };
                } else u30 = null;
                u30 = u30 || {
                    start: 0,
                    end: 0
                };
            } else u30 = null;
            Ol = {
                focusedElem: o51,
                selectionRange: u30
            }, Bt = !1, St1 = null, _r = !1, g5 = r;
            do try {
                vf();
            } catch (P6) {
                if (g5 === null) throw Error(v5(330));
                Ve2(g5, P6), g5 = g5.nextEffect;
            }
            while (g5 !== null)
            St1 = null, g5 = r;
            do try {
                for(o51 = e; g5 !== null;){
                    var f24 = g5.flags;
                    if (f24 & 16 && jn(g5.stateNode, ""), f24 & 128) {
                        var p19 = g5.alternate;
                        if (p19 !== null) {
                            var m14 = p19.ref;
                            m14 !== null && (typeof m14 == "function" ? m14(null) : m14.current = null);
                        }
                    }
                    switch(f24 & 1038){
                        case 2:
                            os(g5), g5.flags &= -3;
                            break;
                        case 6:
                            os(g5), g5.flags &= -3, di(g5.alternate, g5);
                            break;
                        case 1024:
                            g5.flags &= -1025;
                            break;
                        case 1028:
                            g5.flags &= -1025, di(g5.alternate, g5);
                            break;
                        case 4:
                            di(g5.alternate, g5);
                            break;
                        case 8:
                            u30 = g5, us(o51, u30);
                            var _8 = u30.alternate;
                            ls(u30), _8 !== null && ls(_8);
                    }
                    g5 = g5.nextEffect;
                }
            } catch (P1) {
                if (g5 === null) throw Error(v5(330));
                Ve2(g5, P1), g5 = g5.nextEffect;
            }
            while (g5 !== null)
            if (m14 = Ol, p19 = Ho(), f24 = m14.focusedElem, o51 = m14.selectionRange, p19 !== f24 && f24 && f24.ownerDocument && Bo(f24.ownerDocument.documentElement, f24)) {
                for(o51 !== null && Nl(f24) && (p19 = o51.start, m14 = o51.end, m14 === void 0 && (m14 = p19), ("selectionStart" in f24) ? (f24.selectionStart = p19, f24.selectionEnd = Math.min(m14, f24.value.length)) : (m14 = (p19 = f24.ownerDocument || document) && p19.defaultView || window, m14.getSelection && (m14 = m14.getSelection(), u30 = f24.textContent.length, _8 = Math.min(o51.start, u30), o51 = o51.end === void 0 ? _8 : Math.min(o51.end, u30), !m14.extend && _8 > o51 && (u30 = o51, o51 = _8, _8 = u30), u30 = Vo(f24, _8), i = Vo(f24, o51), u30 && i && (m14.rangeCount !== 1 || m14.anchorNode !== u30.node || m14.anchorOffset !== u30.offset || m14.focusNode !== i.node || m14.focusOffset !== i.offset) && (p19 = p19.createRange(), p19.setStart(u30.node, u30.offset), m14.removeAllRanges(), _8 > o51 ? (m14.addRange(p19), m14.extend(i.node, i.offset)) : (p19.setEnd(i.node, i.offset), m14.addRange(p19)))))), p19 = [], m14 = f24; m14 = m14.parentNode;)m14.nodeType === 1 && p19.push({
                    element: m14,
                    left: m14.scrollLeft,
                    top: m14.scrollTop
                });
                for(typeof f24.focus == "function" && f24.focus(), f24 = 0; f24 < p19.length; f24++)m14 = p19[f24], m14.element.scrollLeft = m14.left, m14.element.scrollTop = m14.top;
            }
            Bt = !!zl, Ol = zl = null, e.current = t, g5 = r;
            do try {
                for(f24 = e; g5 !== null;){
                    var w = g5.flags;
                    if (w & 36 && af(f24, g5.alternate, g5), w & 128) {
                        p19 = void 0;
                        var N7 = g5.ref;
                        if (N7 !== null) {
                            var T9 = g5.stateNode;
                            switch(g5.tag){
                                case 5:
                                    p19 = T9;
                                    break;
                                default:
                                    p19 = T9;
                            }
                            typeof N7 == "function" ? N7(p19) : N7.current = p19;
                        }
                    }
                    g5 = g5.nextEffect;
                }
            } catch (P2) {
                if (g5 === null) throw Error(v5(330));
                Ve2(g5, P2), g5 = g5.nextEffect;
            }
            while (g5 !== null)
            g5 = null, Za(), x5 = l;
        } else e.current = t;
        if (Ie2) Ie2 = !1, yt = e, gt1 = n;
        else for(g5 = r; g5 !== null;)n = g5.nextEffect, g5.nextEffect = null, g5.flags & 8 && (w = g5, w.sibling = null, w.stateNode = null), g5 = n;
        if (r = e.pendingLanes, r === 0 && (pe3 = null), r === 1 ? e === ki ? wt1++ : (wt1 = 0, ki = e) : wt1 = 0, t = t.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function") try {
            Ke.onCommitFiberRoot(Fl, t, void 0, (t.current.flags & 64) === 64);
        } catch  {}
        if (re3(e, A4()), kr) throw kr = !1, e = wi, wi = null, e;
        return (x5 & 8) !== 0 || ae3(), null;
    }
    function vf() {
        for(; g5 !== null;){
            var e = g5.alternate;
            _r || St1 === null || ((g5.flags & 8) !== 0 ? uo(g5, St1) && (_r = !0) : g5.tag === 13 && ff(e, g5) && uo(g5, St1) && (_r = !0));
            var n = g5.flags;
            (n & 256) !== 0 && sf(e, g5), (n & 512) === 0 || Ie2 || (Ie2 = !0, rt(97, function() {
                return Ue2(), null;
            })), g5 = g5.nextEffect;
        }
    }
    function Ue2() {
        if (gt1 !== 90) {
            var e = 97 < gt1 ? 97 : gt1;
            return gt1 = 90, Ge(e, gf);
        }
        return !1;
    }
    function yf(e, n) {
        Si.push(n, e), Ie2 || (Ie2 = !0, rt(97, function() {
            return Ue2(), null;
        }));
    }
    function vs(e, n) {
        Ei.push(n, e), Ie2 || (Ie2 = !0, rt(97, function() {
            return Ue2(), null;
        }));
    }
    function gf() {
        if (yt === null) return !1;
        var e = yt;
        if (yt = null, (x5 & 48) !== 0) throw Error(v5(331));
        var n = x5;
        x5 |= 32;
        var t = Ei;
        Ei = [];
        for(var r = 0; r < t.length; r += 2){
            var l = t[r], i = t[r + 1], o52 = l.destroy;
            if (l.destroy = void 0, typeof o52 == "function") try {
                o52();
            } catch (s) {
                if (i === null) throw Error(v5(330));
                Ve2(i, s);
            }
        }
        for(t = Si, Si = [], r = 0; r < t.length; r += 2){
            l = t[r], i = t[r + 1];
            try {
                var u31 = l.create;
                l.destroy = u31();
            } catch (s) {
                if (i === null) throw Error(v5(330));
                Ve2(i, s);
            }
        }
        for(u31 = e.current.firstEffect; u31 !== null;)e = u31.nextEffect, u31.nextEffect = null, u31.flags & 8 && (u31.sibling = null, u31.stateNode = null), u31 = e;
        return x5 = n, ae3(), !0;
    }
    function ys(e, n, t) {
        n = si(t, n), n = bu(e, n, 1), Re3(e, n), n = b5(), e = Nr(e, 1), e !== null && (Vt(e, 1, n), re3(e, n));
    }
    function Ve2(e, n) {
        if (e.tag === 3) ys(e, e, n);
        else for(var t = e.return; t !== null;){
            if (t.tag === 3) {
                ys(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pe3 === null || !pe3.has(r))) {
                    e = si(n, e);
                    var l = es(t, e, 1);
                    if (Re3(t, l), l = b5(), t = Nr(t, 1), t !== null) Vt(t, 1, l), re3(t, l);
                    else if (typeof r.componentDidCatch == "function" && (pe3 === null || !pe3.has(r))) try {
                        r.componentDidCatch(n, e);
                    } catch  {}
                    break;
                }
            }
            t = t.return;
        }
    }
    function wf(e, n, t) {
        var r = e.pingCache;
        r !== null && r.delete(n), n = b5(), e.pingedLanes |= e.suspendedLanes & t, X3 === e && (Q3 & t) === t && (H3 === 4 || H3 === 3 && (Q3 & 62914560) === Q3 && 500 > A4() - yi ? Ln(e, 0) : hi |= t), re3(e, n);
    }
    function Sf(e, n) {
        var t = e.stateNode;
        t !== null && t.delete(n), n = 0, n === 0 && (n = e.mode, (n & 2) === 0 ? n = 1 : (n & 4) === 0 ? n = Sn() === 99 ? 1 : 2 : (we3 === 0 && (we3 = _n), n = fn(62914560 & ~we3), n === 0 && (n = 4194304))), t = b5(), e = Nr(e, n), e !== null && (Vt(e, n, t), re3(e, t));
    }
    var gs;
    gs = function(e, n, t) {
        var r = n.lanes;
        if (e !== null) if (e.memoizedProps !== n.pendingProps || K4.current) ue3 = !0;
        else if ((t & r) !== 0) ue3 = (e.flags & 16384) !== 0;
        else {
            switch(ue3 = !1, n.tag){
                case 3:
                    Au(n), Gl();
                    break;
                case 5:
                    Cu(n);
                    break;
                case 1:
                    G4(n.type) && nr(n);
                    break;
                case 4:
                    Yl(n, n.stateNode.containerInfo);
                    break;
                case 10:
                    r = n.memoizedProps.value;
                    var l = n.type._context;
                    R3(lr, l._currentValue), l._currentValue = r;
                    break;
                case 13:
                    if (n.memoizedState !== null) return (t & n.child.childLanes) !== 0 ? $u(e, n, t) : (R3(D3, D3.current & 1), n = ye2(e, n, t), n !== null ? n.sibling : null);
                    R3(D3, D3.current & 1);
                    break;
                case 19:
                    if (r = (t & n.childLanes) !== 0, (e.flags & 64) !== 0) {
                        if (r) return Gu(e, n, t);
                        n.flags |= 64;
                    }
                    if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), R3(D3, D3.current), r) break;
                    return null;
                case 23:
                case 24:
                    return n.lanes = 0, ri(e, n, t);
            }
            return ye2(e, n, t);
        }
        else ue3 = !1;
        switch(n.lanes = 0, n.tag){
            case 2:
                if (r = n.type, e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l = wn(n, W3.current), kn(n, t), l = ql(null, n, r, e, l, t), n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
                    if (n.tag = 1, n.memoizedState = null, n.updateQueue = null, G4(r)) {
                        var i = !0;
                        nr(n);
                    } else i = !1;
                    n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $l(n);
                    var o53 = r.getDerivedStateFromProps;
                    typeof o53 == "function" && ur(n, r, o53, e), l.updater = sr, n.stateNode = l, l._reactInternals = n, Ql(n, r, e, t), n = ii(null, n, r, !0, i, t);
                } else n.tag = 0, J4(null, n, l, t), n = n.child;
                return n;
            case 16:
                l = n.elementType;
                e: {
                    switch(e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, i = l._init, l = i(l._payload), n.type = l, i = n.tag = kf(l), e = oe3(l, e), i){
                        case 0:
                            n = li(null, n, l, e, t);
                            break e;
                        case 1:
                            n = Wu(null, n, l, e, t);
                            break e;
                        case 11:
                            n = Uu(null, n, l, e, t);
                            break e;
                        case 14:
                            n = Vu(null, n, l, oe3(l.type, e), r, t);
                            break e;
                    }
                    throw Error(v5(306, l, ""));
                }
                return n;
            case 0:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), li(e, n, r, l, t);
            case 1:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), Wu(e, n, r, l, t);
            case 3:
                if (Au(n), r = n.updateQueue, e === null || r === null) throw Error(v5(282));
                if (r = n.pendingProps, l = n.memoizedState, l = l !== null ? l.element : null, hu(e, n), lt(n, r, null, t), r = n.memoizedState.element, r === l) Gl(), n = ye2(e, n, t);
                else {
                    if (l = n.stateNode, (i = l.hydrate) && (De1 = hn(n.stateNode.containerInfo.firstChild), ve3 = n, i = ce2 = !0), i) {
                        if (e = l.mutableSourceEagerHydrationData, e != null) for(l = 0; l < e.length; l += 2)i = e[l], i._workInProgressVersionPrimary = e[l + 1], Cn.push(i);
                        for(t = xu(n, null, r, t), n.child = t; t;)t.flags = t.flags & -3 | 1024, t = t.sibling;
                    } else J4(e, n, r, t), Gl();
                    n = n.child;
                }
                return n;
            case 5:
                return Cu(n), e === null && Kl(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o53 = l.children, Ml(r, l) ? o53 = null : i !== null && Ml(r, i) && (n.flags |= 16), Hu(e, n), J4(e, n, o53, t), n.child;
            case 6:
                return e === null && Kl(n), null;
            case 13:
                return $u(e, n, t);
            case 4:
                return Yl(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = cr(n, null, r, t) : J4(e, n, r, t), n.child;
            case 11:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), Uu(e, n, r, l, t);
            case 7:
                return J4(e, n, n.pendingProps, t), n.child;
            case 8:
                return J4(e, n, n.pendingProps.children, t), n.child;
            case 12:
                return J4(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    r = n.type._context, l = n.pendingProps, o53 = n.memoizedProps, i = l.value;
                    var u32 = n.type._context;
                    if (R3(lr, u32._currentValue), u32._currentValue = i, o53 !== null) if (u32 = o53.value, i = ee3(u32, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u32, i) : 1073741823) | 0, i === 0) {
                        if (o53.children === l.children && !K4.current) {
                            n = ye2(e, n, t);
                            break e;
                        }
                    } else for(u32 = n.child, u32 !== null && (u32.return = n); u32 !== null;){
                        var s = u32.dependencies;
                        if (s !== null) {
                            o53 = u32.child;
                            for(var d = s.firstContext; d !== null;){
                                if (d.context === r && (d.observedBits & i) !== 0) {
                                    u32.tag === 1 && (d = Me2(-1, t & -t), d.tag = 2, Re3(u32, d)), u32.lanes |= t, d = u32.alternate, d !== null && (d.lanes |= t), mu(u32.return, t), s.lanes |= t;
                                    break;
                                }
                                d = d.next;
                            }
                        } else o53 = u32.tag === 10 && u32.type === n.type ? null : u32.child;
                        if (o53 !== null) o53.return = u32;
                        else for(o53 = u32; o53 !== null;){
                            if (o53 === n) {
                                o53 = null;
                                break;
                            }
                            if (u32 = o53.sibling, u32 !== null) {
                                u32.return = o53.return, o53 = u32;
                                break;
                            }
                            o53 = o53.return;
                        }
                        u32 = o53;
                    }
                    J4(e, n, l.children, t), n = n.child;
                }
                return n;
            case 9:
                return l = n.type, i = n.pendingProps, r = i.children, kn(n, t), l = ne3(l, i.unstable_observedBits), r = r(l), n.flags |= 1, J4(e, n, r, t), n.child;
            case 14:
                return l = n.type, i = oe3(l, n.pendingProps), i = oe3(l.type, i), Vu(e, n, l, i, r, t);
            case 15:
                return Bu(e, n, n.type, n.pendingProps, r, t);
            case 17:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, G4(r) ? (e = !0, nr(n)) : e = !1, kn(n, t), Su(n, r, l), Ql(n, r, l, t), ii(null, n, r, !0, e, t);
            case 19:
                return Gu(e, n, t);
            case 23:
                return ri(e, n, t);
            case 24:
                return ri(e, n, t);
        }
        throw Error(v5(156, n.tag));
    };
    function Ef(e, n, t, r) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function le2(e, n, t, r) {
        return new Ef(e, n, t, r);
    }
    function _i(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function kf(e) {
        if (typeof e == "function") return _i(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Nt) return 11;
            if (e === Tt) return 14;
        }
        return 2;
    }
    function Be(e, n) {
        var t = e.alternate;
        return t === null ? (t = le2(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
    }
    function Tr(e, n, t, r, l, i) {
        var o54 = 2;
        if (r = e, typeof e == "function") _i(e) && (o54 = 1);
        else if (typeof e == "string") o54 = 5;
        else e: switch(e){
            case Ee2:
                return zn(t.children, l, i, n);
            case Vi:
                o54 = 8, l |= 16;
                break;
            case Fr:
                o54 = 8, l |= 1;
                break;
            case Rn:
                return e = le2(12, t, n, l | 8), e.elementType = Rn, e.type = Rn, e.lanes = i, e;
            case Dn:
                return e = le2(13, t, n, l), e.type = Dn, e.elementType = Dn, e.lanes = i, e;
            case Pt:
                return e = le2(19, t, n, l), e.elementType = Pt, e.lanes = i, e;
            case Wr:
                return Ni(t, l, i, n);
            case Ar:
                return e = le2(24, t, n, l), e.elementType = Ar, e.lanes = i, e;
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case jr:
                        o54 = 10;
                        break e;
                    case Ur:
                        o54 = 9;
                        break e;
                    case Nt:
                        o54 = 11;
                        break e;
                    case Tt:
                        o54 = 14;
                        break e;
                    case Vr:
                        o54 = 16, r = null;
                        break e;
                    case Br:
                        o54 = 22;
                        break e;
                }
                throw Error(v5(130, e == null ? e : typeof e, ""));
        }
        return n = le2(o54, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
    }
    function zn(e, n, t, r) {
        return e = le2(7, e, r, n), e.lanes = t, e;
    }
    function Ni(e, n, t, r) {
        return e = le2(23, e, r, n), e.elementType = Wr, e.lanes = t, e;
    }
    function Pi(e, n, t) {
        return e = le2(6, e, null, n), e.lanes = t, e;
    }
    function Ti(e, n, t) {
        return n = le2(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n;
    }
    function xf(e, n, t) {
        this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.mutableSourceEagerHydrationData = null;
    }
    function Cf(e, n, t) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Ae2,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t
        };
    }
    function Lr(e, n, t, r) {
        var l = n.current, i = b5(), o55 = Fe1(l);
        e: if (t) {
            t = t._reactInternals;
            n: {
                if (Qe(t) !== t || t.tag !== 1) throw Error(v5(170));
                var u33 = t;
                do {
                    switch(u33.tag){
                        case 3:
                            u33 = u33.stateNode.context;
                            break n;
                        case 1:
                            if (G4(u33.type)) {
                                u33 = u33.stateNode.__reactInternalMemoizedMergedChildContext;
                                break n;
                            }
                    }
                    u33 = u33.return;
                }while (u33 !== null)
                throw Error(v5(171));
            }
            if (t.tag === 1) {
                var s = t.type;
                if (G4(s)) {
                    t = lu(t, s, u33);
                    break e;
                }
            }
            t = u33;
        } else t = ze1;
        return n.context === null ? n.context = t : n.pendingContext = t, n = Me2(i, o55), n.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (n.callback = r), Re3(l, n), je2(l, o55, i), o55;
    }
    function Li(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function ws(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < n ? t : n;
        }
    }
    function zi(e, n) {
        ws(e, n), (e = e.alternate) && ws(e, n);
    }
    function _f() {
        return null;
    }
    function Oi(e, n, t) {
        var r = t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources || null;
        if (t = new xf(e, n, t != null && t.hydrate === !0), n = le2(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0), t.current = n, n.stateNode = t, $l(n), e[vn] = t.current, Xo(e.nodeType === 8 ? e.parentNode : e), r) for(e = 0; e < r.length; e++){
            n = r[e];
            var l = n._getVersion;
            l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
                n,
                l
            ] : t.mutableSourceEagerHydrationData.push(n, l);
        }
        this._internalRoot = t;
    }
    Oi.prototype.render = function(e) {
        Lr(e, this._internalRoot, null, null);
    };
    Oi.prototype.unmount = function() {
        var e = this._internalRoot, n = e.containerInfo;
        Lr(null, e, null, function() {
            n[vn] = null;
        });
    };
    function kt1(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Nf(e, n) {
        if (n || (n = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot"))), !n) for(var t; t = e.lastChild;)e.removeChild(t);
        return new Oi(e, 0, n ? {
            hydrate: !0
        } : void 0);
    }
    function zr(e, n, t, r, l) {
        var i = t._reactRootContainer;
        if (i) {
            var o56 = i._internalRoot;
            if (typeof l == "function") {
                var u34 = l;
                l = function() {
                    var d = Li(o56);
                    u34.call(d);
                };
            }
            Lr(n, o56, e, l);
        } else {
            if (i = t._reactRootContainer = Nf(t, r), o56 = i._internalRoot, typeof l == "function") {
                var s = l;
                l = function() {
                    var d = Li(o56);
                    s.call(d);
                };
            }
            cs(function() {
                Lr(n, o56, e, l);
            });
        }
        return Li(o56);
    }
    so = function(e) {
        if (e.tag === 13) {
            var n = b5();
            je2(e, 4, n), zi(e, 4);
        }
    };
    al = function(e) {
        if (e.tag === 13) {
            var n = b5();
            je2(e, 67108864, n), zi(e, 67108864);
        }
    };
    ao = function(e) {
        if (e.tag === 13) {
            var n = b5(), t = Fe1(e);
            je2(e, t, n), zi(e, t);
        }
    };
    fo = function(e, n) {
        return n();
    };
    tl = function(e, n, t) {
        switch(n){
            case "input":
                if (Xr(e, t), n = t.name, t.type === "radio" && n != null) {
                    for(t = e; t.parentNode;)t = t.parentNode;
                    for(t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++){
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var l = bt(r);
                            if (!l) throw Error(v5(90));
                            Wi(r), Xr(r, l);
                        }
                    }
                }
                break;
            case "textarea":
                Xi(e, t);
                break;
            case "select":
                n = t.value, n != null && rn(e, !!t.multiple, n, !1);
        }
    };
    rl = fs;
    to = function(e, n, t, r, l) {
        var i = x5;
        x5 |= 4;
        try {
            return Ge(98, e.bind(null, n, t, r, l));
        } finally{
            x5 = i, x5 === 0 && (Pn(), ae3());
        }
    };
    ll = function() {
        (x5 & 49) === 0 && (df(), Ue2());
    };
    ro = function(e, n) {
        var t = x5;
        x5 |= 2;
        try {
            return e(n);
        } finally{
            x5 = t, x5 === 0 && (Pn(), ae3());
        }
    };
    function Ss(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!kt1(n)) throw Error(v5(200));
        return Cf(e, n, null, t);
    }
    var Pf = {
        Events: [
            tt,
            yn,
            bt,
            eo,
            no,
            Ue2,
            {
                current: !1
            }
        ]
    }, xt1 = {
        findFiberByHostInstance: Ye,
        bundleType: 0,
        version: "17.0.2",
        rendererPackageName: "react-dom"
    }, Tf = {
        bundleType: xt1.bundleType,
        version: xt1.version,
        rendererPackageName: xt1.rendererPackageName,
        rendererConfig: xt1.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: We1.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = oo(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: xt1.findFiberByHostInstance || _f,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && (Ct = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Ct.isDisabled && Ct.supportsFiber)) try {
        Fl = Ct.inject(Tf), Ke = Ct;
    } catch  {}
    var Ct;
    ie3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf;
    ie3.createPortal = Ss;
    ie3.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(v5(188)) : Error(v5(268, Object.keys(e)));
        return e = oo(n), e = e === null ? null : e.stateNode, e;
    };
    ie3.flushSync = function(e, n) {
        var t = x5;
        if ((t & 48) !== 0) return e(n);
        x5 |= 1;
        try {
            if (e) return Ge(99, e.bind(null, n));
        } finally{
            x5 = t, ae3();
        }
    };
    ie3.hydrate = function(e, n, t) {
        if (!kt1(n)) throw Error(v5(200));
        return zr(null, e, n, !0, t);
    };
    ie3.render = function(e, n, t) {
        if (!kt1(n)) throw Error(v5(200));
        return zr(null, e, n, !1, t);
    };
    ie3.unmountComponentAtNode = function(e) {
        if (!kt1(e)) throw Error(v5(40));
        return e._reactRootContainer ? (cs(function() {
            zr(null, null, e, !1, function() {
                e._reactRootContainer = null, e[vn] = null;
            });
        }), !0) : !1;
    };
    ie3.unstable_batchedUpdates = fs;
    ie3.unstable_createPortal = function(e, n) {
        return Ss(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    ie3.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
        if (!kt1(t)) throw Error(v5(200));
        if (e == null || e._reactInternals === void 0) throw Error(v5(38));
        return zr(e, n, t, !1, r);
    };
    ie3.version = "17.0.2";
});
var Mi = Ri((Rf, xs)=>{
    "use strict";
    function ks() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ks);
        } catch (e) {
            console.error(e);
        }
    }
    ks(), xs.exports = Es();
});
var Cs = Di(Mi()), _s = Di(Mi()), { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Df , createPortal: If , findDOMNode: Ff , flushSync: jf , hydrate: Uf , render: Vf , unmountComponentAtNode: Bf , unstable_batchedUpdates: Hf , unstable_createPortal: Wf , unstable_renderSubtreeIntoContainer: Af , version: $f  } = _s, { default: Lf , ...zf } = _s, Qf = (Cs.default ?? Lf) ?? zf;
var Le2 = Object.create;
var B1 = Object.defineProperty;
var We = Object.getOwnPropertyDescriptor;
var qe1 = Object.getOwnPropertyNames;
var $e1 = Object.getPrototypeOf, je1 = Object.prototype.hasOwnProperty;
var Ue1 = (e)=>B1(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (t, r)=>(typeof require != "undefined" ? require : t)[r]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var ce = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports)
;
var Ae1 = (e, t, r, n)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let u35 of qe1(t))!je1.call(e, u35) && (r || u35 !== "default") && B1(e, u35, {
        get: ()=>t[u35]
        ,
        enumerable: !(n = We(t, u35)) || n.enumerable
    });
    return e;
}, fe1 = (e, t)=>Ae1(Ue1(B1(e != null ? Le2($e1(e)) : {}, "default", !t && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var ze = ce((z4)=>{
    "use strict";
    var E10 = I, C10 = Ue;
    function p20(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var X4 = 60106, q7 = 60107, Y4 = 60108, Q4 = 60114, $6 = 60109, G5 = 60110, K5 = 60112, j4 = 60113, J5 = 60120, ee4 = 60115, te4 = 60116, pe4 = 60121, he4 = 60117, de4 = 60119, me4 = 60129, ye3 = 60131;
    typeof Symbol == "function" && Symbol.for && (d = Symbol.for, X4 = d("react.portal"), q7 = d("react.fragment"), Y4 = d("react.strict_mode"), Q4 = d("react.profiler"), $6 = d("react.provider"), G5 = d("react.context"), K5 = d("react.forward_ref"), j4 = d("react.suspense"), J5 = d("react.suspense_list"), ee4 = d("react.memo"), te4 = d("react.lazy"), pe4 = d("react.block"), he4 = d("react.fundamental"), de4 = d("react.scope"), me4 = d("react.debug_trace_mode"), ye3 = d("react.legacy_hidden"));
    var d;
    function T10(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case q7:
                return "Fragment";
            case X4:
                return "Portal";
            case Q4:
                return "Profiler";
            case Y4:
                return "StrictMode";
            case j4:
                return "Suspense";
            case J5:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case G5:
                return (e.displayName || "Context") + ".Consumer";
            case $6:
                return (e._context.displayName || "Context") + ".Provider";
            case K5:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
            case ee4:
                return T10(e.type);
            case pe4:
                return T10(e._render);
            case te4:
                t = e._payload, e = e._init;
                try {
                    return T10(e(t));
                } catch  {}
        }
        return null;
    }
    var He = C10.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve4 = {};
    function R4(e, t) {
        for(var r = e._threadCount | 0; r <= t; r++)e[r] = e._currentValue2, e._threadCount = r + 1;
    }
    function Ze(e, t, r, n) {
        if (n && (n = e.contextType, typeof n == "object" && n !== null)) return R4(n, r), n[r];
        if (e = e.contextTypes) {
            r = {};
            for(var u36 in e)r[u36] = t[u36];
            t = r;
        } else t = ve4;
        return t;
    }
    for(m15 = new Uint16Array(16), V4 = 0; 15 > V4; V4++)m15[V4] = V4 + 1;
    var m15, V4;
    m15[15] = 0;
    var Be = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, we4 = Object.prototype.hasOwnProperty, xe4 = {}, ge4 = {};
    function Se4(e) {
        return we4.call(ge4, e) ? !0 : we4.call(xe4, e) ? !1 : Be.test(e) ? ge4[e] = !0 : (xe4[e] = !0, !1);
    }
    function Xe(e, t, r, n) {
        if (r !== null && r.type === 0) return !1;
        switch(typeof t){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function Ye(e, t, r, n) {
        if (t === null || typeof t == "undefined" || Xe(e, t, r, n)) return !0;
        if (n) return !1;
        if (r !== null) switch(r.type){
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
    function x6(e, t, r, n, u37, i, l) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = u37, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
    }
    var y14 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        y14[e] = new x6(e, 0, !1, e, null, !1, !1);
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
        y14[t] = new x6(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        y14[e] = new x6(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        y14[e] = new x6(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        y14[e] = new x6(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        y14[e] = new x6(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        y14[e] = new x6(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        y14[e] = new x6(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        y14[e] = new x6(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var re4 = /[\-:]([a-z])/g;
    function ne4(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(re4, ne4);
        y14[t] = new x6(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(re4, ne4);
        y14[t] = new x6(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(re4, ne4);
        y14[t] = new x6(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        y14[e] = new x6(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    y14.xlinkHref = new x6("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        y14[e] = new x6(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    var Qe = /["'&<>]/;
    function O7(e) {
        if (typeof e == "boolean" || typeof e == "number") return "" + e;
        e = "" + e;
        var t = Qe.exec(e);
        if (t) {
            var r = "", n, u38 = 0;
            for(n = t.index; n < e.length; n++){
                switch(e.charCodeAt(n)){
                    case 34:
                        t = "&quot;";
                        break;
                    case 38:
                        t = "&amp;";
                        break;
                    case 39:
                        t = "&#x27;";
                        break;
                    case 60:
                        t = "&lt;";
                        break;
                    case 62:
                        t = "&gt;";
                        break;
                    default:
                        continue;
                }
                u38 !== n && (r += e.substring(u38, n)), u38 = n + 1, r += t;
            }
            e = u38 !== n ? r + e.substring(u38, n) : r;
        }
        return e;
    }
    function Ge(e, t) {
        var r = y14.hasOwnProperty(e) ? y14[e] : null, n;
        return (n = e !== "style") && (n = r !== null ? r.type === 0 : !(!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")), n || Ye(e, t, r, !1) ? "" : r !== null ? (e = r.attributeName, n = r.type, n === 3 || n === 4 && t === !0 ? e + '=""' : (r.sanitizeURL && (t = "" + t), e + '="' + (O7(t) + '"'))) : Se4(e) ? e + '="' + (O7(t) + '"') : "";
    }
    function Ke(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Je = typeof Object.is == "function" ? Object.is : Ke, D4 = null, U = null, c27 = null, L4 = !1, A5 = !1, _9 = null, H4 = 0;
    function P7() {
        if (D4 === null) throw Error(p20(321));
        return D4;
    }
    function ke3() {
        if (0 < H4) throw Error(p20(312));
        return {
            memoizedState: null,
            queue: null,
            next: null
        };
    }
    function oe4() {
        return c27 === null ? U === null ? (L4 = !1, U = c27 = ke3()) : (L4 = !0, c27 = U) : c27.next === null ? (L4 = !1, c27 = c27.next = ke3()) : (L4 = !0, c27 = c27.next), c27;
    }
    function Fe2(e, t, r, n) {
        for(; A5;)A5 = !1, H4 += 1, c27 = null, r = e(t, n);
        return Ie3(), r;
    }
    function Ie3() {
        D4 = null, A5 = !1, U = null, H4 = 0, c27 = _9 = null;
    }
    function Ee3(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function De2(e, t, r) {
        if (D4 = P7(), c27 = oe4(), L4) {
            var n = c27.queue;
            if (t = n.dispatch, _9 !== null && (r = _9.get(n), r !== void 0)) {
                _9.delete(n), n = c27.memoizedState;
                do n = e(n, r.action), r = r.next;
                while (r !== null)
                return c27.memoizedState = n, [
                    n,
                    t
                ];
            }
            return [
                c27.memoizedState,
                t
            ];
        }
        return e = e === Ee3 ? typeof t == "function" ? t() : t : r !== void 0 ? r(t) : t, c27.memoizedState = e, e = c27.queue = {
            last: null,
            dispatch: null
        }, e = e.dispatch = et.bind(null, D4, e), [
            c27.memoizedState,
            e
        ];
    }
    function Ce3(e, t) {
        if (D4 = P7(), c27 = oe4(), t = t === void 0 ? null : t, c27 !== null) {
            var r = c27.memoizedState;
            if (r !== null && t !== null) {
                var n = r[1];
                e: if (n === null) n = !1;
                else {
                    for(var u39 = 0; u39 < n.length && u39 < t.length; u39++)if (!Je(t[u39], n[u39])) {
                        n = !1;
                        break e;
                    }
                    n = !0;
                }
                if (n) return r[0];
            }
        }
        return e = e(), c27.memoizedState = [
            e,
            t
        ], e;
    }
    function et(e, t, r) {
        if (!(25 > H4)) throw Error(p20(301));
        if (e === D4) if (A5 = !0, e = {
            action: r,
            next: null
        }, _9 === null && (_9 = new Map), r = _9.get(t), r === void 0) _9.set(t, e);
        else {
            for(t = r; t.next !== null;)t = t.next;
            t.next = e;
        }
    }
    function ie4() {}
    var b6 = null, tt = {
        readContext: function(e) {
            var t = b6.threadID;
            return R4(e, t), e[t];
        },
        useContext: function(e) {
            P7();
            var t = b6.threadID;
            return R4(e, t), e[t];
        },
        useMemo: Ce3,
        useReducer: De2,
        useRef: function(e) {
            D4 = P7(), c27 = oe4();
            var t = c27.memoizedState;
            return t === null ? (e = {
                current: e
            }, c27.memoizedState = e) : t;
        },
        useState: function(e) {
            return De2(Ee3, e);
        },
        useLayoutEffect: function() {},
        useCallback: function(e, t) {
            return Ce3(function() {
                return e;
            }, t);
        },
        useImperativeHandle: ie4,
        useEffect: ie4,
        useDebugValue: ie4,
        useDeferredValue: function(e) {
            return P7(), e;
        },
        useTransition: function() {
            return P7(), [
                function(e) {
                    e();
                },
                !1
            ];
        },
        useOpaqueIdentifier: function() {
            return (b6.identifierPrefix || "") + "R:" + (b6.uniqueID++).toString(36);
        },
        useMutableSource: function(e, t) {
            return P7(), t(e._source);
        }
    }, Ne3 = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    function _e4(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    var Me3 = {
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
    }, rt = E10({
        menuitem: !0
    }, Me3), W4 = {
        animationIterationCount: !0,
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
    }, nt = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(W4).forEach(function(e) {
        nt.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), W4[t] = W4[e];
        });
    });
    var ot = /([A-Z])/g, it = /^ms-/, M6 = C10.Children.toArray, le3 = He.ReactCurrentDispatcher, lt = {
        listing: !0,
        pre: !0,
        textarea: !0
    }, ut = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Oe3 = {}, ue4 = {};
    function st(e) {
        if (e == null) return e;
        var t = "";
        return C10.Children.forEach(e, function(r) {
            r != null && (t += r);
        }), t;
    }
    var at = Object.prototype.hasOwnProperty, ct = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null
    };
    function Pe4(e, t) {
        if (e === void 0) throw Error(p20(152, T10(t) || "Component"));
    }
    function ft(e, t, r) {
        function n(l, s) {
            var o57 = s.prototype && s.prototype.isReactComponent, S11 = Ze(s, t, r, o57), h11 = [], g6 = !1, f25 = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {
                    if (h11 === null) return null;
                },
                enqueueReplaceState: function(Z, v6) {
                    g6 = !0, h11 = [
                        v6
                    ];
                },
                enqueueSetState: function(Z, v7) {
                    if (h11 === null) return null;
                    h11.push(v7);
                }
            };
            if (o57) {
                if (o57 = new s(l.props, S11, f25), typeof s.getDerivedStateFromProps == "function") {
                    var a26 = s.getDerivedStateFromProps.call(null, l.props, o57.state);
                    a26 != null && (o57.state = E10({}, o57.state, a26));
                }
            } else if (D4 = {}, o57 = s(l.props, S11, f25), o57 = Fe2(s, l.props, o57, S11), o57 == null || o57.render == null) {
                e = o57, Pe4(e, s);
                return;
            }
            if (o57.props = l.props, o57.context = S11, o57.updater = f25, f25 = o57.state, f25 === void 0 && (o57.state = f25 = null), typeof o57.UNSAFE_componentWillMount == "function" || typeof o57.componentWillMount == "function") if (typeof o57.componentWillMount == "function" && typeof s.getDerivedStateFromProps != "function" && o57.componentWillMount(), typeof o57.UNSAFE_componentWillMount == "function" && typeof s.getDerivedStateFromProps != "function" && o57.UNSAFE_componentWillMount(), h11.length) {
                f25 = h11;
                var w = g6;
                if (h11 = null, g6 = !1, w && f25.length === 1) o57.state = f25[0];
                else {
                    a26 = w ? f25[0] : o57.state;
                    var N8 = !0;
                    for(w = w ? 1 : 0; w < f25.length; w++){
                        var k12 = f25[w];
                        k12 = typeof k12 == "function" ? k12.call(o57, a26, l.props, S11) : k12, k12 != null && (N8 ? (N8 = !1, a26 = E10({}, a26, k12)) : E10(a26, k12));
                    }
                    o57.state = a26;
                }
            } else h11 = null;
            if (e = o57.render(), Pe4(e, s), typeof o57.getChildContext == "function" && (l = s.childContextTypes, typeof l == "object")) {
                var F4 = o57.getChildContext();
                for(var I5 in F4)if (!(I5 in l)) throw Error(p20(108, T10(s) || "Unknown", I5));
            }
            F4 && (t = E10({}, t, F4));
        }
        for(; C10.isValidElement(e);){
            var u40 = e, i = u40.type;
            if (typeof i != "function") break;
            n(u40, i);
        }
        return {
            child: e,
            context: t
        };
    }
    var be3 = function() {
        function e(r, n, u41) {
            C10.isValidElement(r) ? r.type !== q7 ? r = [
                r
            ] : (r = r.props.children, r = C10.isValidElement(r) ? [
                r
            ] : M6(r)) : r = M6(r), r = {
                type: null,
                domNamespace: Ne3.html,
                children: r,
                childIndex: 0,
                context: ve4,
                footer: ""
            };
            var i = m15[0];
            if (i === 0) {
                var l = m15;
                i = l.length;
                var s = 2 * i;
                if (!(65536 >= s)) throw Error(p20(304));
                var o58 = new Uint16Array(s);
                for(o58.set(l), m15 = o58, m15[0] = i + 1, l = i; l < s - 1; l++)m15[l] = l + 1;
                m15[s - 1] = 0;
            } else m15[0] = m15[i];
            this.threadID = i, this.stack = [
                r
            ], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = n, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = u41 && u41.identifierPrefix || "";
        }
        var t = e.prototype;
        return t.destroy = function() {
            if (!this.exhausted) {
                this.exhausted = !0, this.clearProviders();
                var r = this.threadID;
                m15[r] = m15[0], m15[0] = r;
            }
        }, t.pushProvider = function(r) {
            var n = ++this.contextIndex, u42 = r.type._context, i = this.threadID;
            R4(u42, i);
            var l = u42[i];
            this.contextStack[n] = u42, this.contextValueStack[n] = l, u42[i] = r.props.value;
        }, t.popProvider = function() {
            var r = this.contextIndex, n = this.contextStack[r], u43 = this.contextValueStack[r];
            this.contextStack[r] = null, this.contextValueStack[r] = null, this.contextIndex--, n[this.threadID] = u43;
        }, t.clearProviders = function() {
            for(var r = this.contextIndex; 0 <= r; r--)this.contextStack[r][this.threadID] = this.contextValueStack[r];
        }, t.read = function(r) {
            if (this.exhausted) return null;
            var n = b6;
            b6 = this;
            var u44 = le3.current;
            le3.current = tt;
            try {
                for(var i = [
                    ""
                ], l = !1; i[0].length < r;){
                    if (this.stack.length === 0) {
                        this.exhausted = !0;
                        var s = this.threadID;
                        m15[s] = m15[0], m15[0] = s;
                        break;
                    }
                    var o59 = this.stack[this.stack.length - 1];
                    if (l || o59.childIndex >= o59.children.length) {
                        var S12 = o59.footer;
                        if (S12 !== "" && (this.previousWasTextNode = !1), this.stack.pop(), o59.type === "select") this.currentSelectValue = null;
                        else if (o59.type != null && o59.type.type != null && o59.type.type.$$typeof === $6) this.popProvider(o59.type);
                        else if (o59.type === j4) {
                            this.suspenseDepth--;
                            var h12 = i.pop();
                            if (l) {
                                l = !1;
                                var g7 = o59.fallbackFrame;
                                if (!g7) throw Error(p20(303));
                                this.stack.push(g7), i[this.suspenseDepth] += "<!--$!-->";
                                continue;
                            } else i[this.suspenseDepth] += h12;
                        }
                        i[this.suspenseDepth] += S12;
                    } else {
                        var f26 = o59.children[o59.childIndex++], a27 = "";
                        try {
                            a27 += this.render(f26, o59.context, o59.domNamespace);
                        } catch (w) {
                            throw w != null && typeof w.then == "function" ? Error(p20(294)) : w;
                        } finally{}
                        i.length <= this.suspenseDepth && i.push(""), i[this.suspenseDepth] += a27;
                    }
                }
                return i[0];
            } finally{
                le3.current = u44, b6 = n, Ie3();
            }
        }, t.render = function(r, n, u45) {
            if (typeof r == "string" || typeof r == "number") return u45 = "" + r, u45 === "" ? "" : this.makeStaticMarkup ? O7(u45) : this.previousWasTextNode ? "<!-- -->" + O7(u45) : (this.previousWasTextNode = !0, O7(u45));
            if (n = ft(r, n, this.threadID), r = n.child, n = n.context, r === null || r === !1) return "";
            if (!C10.isValidElement(r)) {
                if (r != null && r.$$typeof != null) throw u45 = r.$$typeof, Error(u45 === X4 ? p20(257) : p20(258, u45.toString()));
                return r = M6(r), this.stack.push({
                    type: null,
                    domNamespace: u45,
                    children: r,
                    childIndex: 0,
                    context: n,
                    footer: ""
                }), "";
            }
            var i = r.type;
            if (typeof i == "string") return this.renderDOM(r, n, u45);
            switch(i){
                case ye3:
                case me4:
                case Y4:
                case Q4:
                case J5:
                case q7:
                    return r = M6(r.props.children), this.stack.push({
                        type: null,
                        domNamespace: u45,
                        children: r,
                        childIndex: 0,
                        context: n,
                        footer: ""
                    }), "";
                case j4:
                    throw Error(p20(294));
                case de4:
                    throw Error(p20(343));
            }
            if (typeof i == "object" && i !== null) switch(i.$$typeof){
                case K5:
                    D4 = {};
                    var l = i.render(r.props, r.ref);
                    return l = Fe2(i.render, r.props, l, r.ref), l = M6(l), this.stack.push({
                        type: null,
                        domNamespace: u45,
                        children: l,
                        childIndex: 0,
                        context: n,
                        footer: ""
                    }), "";
                case ee4:
                    return r = [
                        C10.createElement(i.type, E10({
                            ref: r.ref
                        }, r.props))
                    ], this.stack.push({
                        type: null,
                        domNamespace: u45,
                        children: r,
                        childIndex: 0,
                        context: n,
                        footer: ""
                    }), "";
                case $6:
                    return i = M6(r.props.children), u45 = {
                        type: r,
                        domNamespace: u45,
                        children: i,
                        childIndex: 0,
                        context: n,
                        footer: ""
                    }, this.pushProvider(r), this.stack.push(u45), "";
                case G5:
                    i = r.type, l = r.props;
                    var s = this.threadID;
                    return R4(i, s), i = M6(l.children(i[s])), this.stack.push({
                        type: r,
                        domNamespace: u45,
                        children: i,
                        childIndex: 0,
                        context: n,
                        footer: ""
                    }), "";
                case he4:
                    throw Error(p20(338));
                case te4:
                    return i = r.type, l = i._init, i = l(i._payload), r = [
                        C10.createElement(i, E10({
                            ref: r.ref
                        }, r.props))
                    ], this.stack.push({
                        type: null,
                        domNamespace: u45,
                        children: r,
                        childIndex: 0,
                        context: n,
                        footer: ""
                    }), "";
            }
            throw Error(p20(130, i == null ? i : typeof i, ""));
        }, t.renderDOM = function(r, n, u46) {
            var i = r.type.toLowerCase();
            if (u46 === Ne3.html && _e4(i), !Oe3.hasOwnProperty(i)) {
                if (!ut.test(i)) throw Error(p20(65, i));
                Oe3[i] = !0;
            }
            var l = r.props;
            if (i === "input") l = E10({
                type: void 0
            }, l, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: l.value != null ? l.value : l.defaultValue,
                checked: l.checked != null ? l.checked : l.defaultChecked
            });
            else if (i === "textarea") {
                var s = l.value;
                if (s == null) {
                    s = l.defaultValue;
                    var o60 = l.children;
                    if (o60 != null) {
                        if (s != null) throw Error(p20(92));
                        if (Array.isArray(o60)) {
                            if (!(1 >= o60.length)) throw Error(p20(93));
                            o60 = o60[0];
                        }
                        s = "" + o60;
                    }
                    s == null && (s = "");
                }
                l = E10({}, l, {
                    value: void 0,
                    children: "" + s
                });
            } else if (i === "select") this.currentSelectValue = l.value != null ? l.value : l.defaultValue, l = E10({}, l, {
                value: void 0
            });
            else if (i === "option") {
                o60 = this.currentSelectValue;
                var S13 = st(l.children);
                if (o60 != null) {
                    var h13 = l.value != null ? l.value + "" : S13;
                    if (s = !1, Array.isArray(o60)) {
                        for(var g8 = 0; g8 < o60.length; g8++)if ("" + o60[g8] === h13) {
                            s = !0;
                            break;
                        }
                    } else s = "" + o60 === h13;
                    l = E10({
                        selected: void 0,
                        children: void 0
                    }, l, {
                        selected: s,
                        children: S13
                    });
                }
            }
            if (s = l) {
                if (rt[i] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(p20(137, i));
                if (s.dangerouslySetInnerHTML != null) {
                    if (s.children != null) throw Error(p20(60));
                    if (!(typeof s.dangerouslySetInnerHTML == "object" && "__html" in s.dangerouslySetInnerHTML)) throw Error(p20(61));
                }
                if (s.style != null && typeof s.style != "object") throw Error(p20(62));
            }
            s = l, o60 = this.makeStaticMarkup, S13 = this.stack.length === 1, h13 = "<" + r.type;
            e: if (i.indexOf("-") === -1) g8 = typeof s.is == "string";
            else switch(i){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    g8 = !1;
                    break e;
                default:
                    g8 = !0;
            }
            for(v8 in s)if (at.call(s, v8)) {
                var f27 = s[v8];
                if (f27 != null) {
                    if (v8 === "style") {
                        var a28 = void 0, w = "", N9 = "";
                        for(a28 in f27)if (f27.hasOwnProperty(a28)) {
                            var k13 = a28.indexOf("--") === 0, F5 = f27[a28];
                            if (F5 != null) {
                                if (k13) var I6 = a28;
                                else if (I6 = a28, ue4.hasOwnProperty(I6)) I6 = ue4[I6];
                                else {
                                    var Z4 = I6.replace(ot, "-$1").toLowerCase().replace(it, "-ms-");
                                    I6 = ue4[I6] = Z4;
                                }
                                w += N9 + I6 + ":", N9 = a28, k13 = F5 == null || typeof F5 == "boolean" || F5 === "" ? "" : k13 || typeof F5 != "number" || F5 === 0 || W4.hasOwnProperty(N9) && W4[N9] ? ("" + F5).trim() : F5 + "px", w += k13, N9 = ";";
                            }
                        }
                        f27 = w || null;
                    }
                    a28 = null, g8 ? ct.hasOwnProperty(v8) || (a28 = v8, a28 = Se4(a28) && f27 != null ? a28 + '="' + (O7(f27) + '"') : "") : a28 = Ge(v8, f27), a28 && (h13 += " " + a28);
                }
            }
            o60 || S13 && (h13 += ' data-reactroot=""');
            var v8 = h13;
            s = "", Me3.hasOwnProperty(i) ? v8 += "/>" : (v8 += ">", s = "</" + r.type + ">");
            e: {
                if (o60 = l.dangerouslySetInnerHTML, o60 != null) {
                    if (o60.__html != null) {
                        o60 = o60.__html;
                        break e;
                    }
                } else if (o60 = l.children, typeof o60 == "string" || typeof o60 == "number") {
                    o60 = O7(o60);
                    break e;
                }
                o60 = null;
            }
            return o60 != null ? (l = [], lt.hasOwnProperty(i) && o60.charAt(0) === `
` && (v8 += `
`), v8 += o60) : l = M6(l.children), r = r.type, u46 = u46 == null || u46 === "http://www.w3.org/1999/xhtml" ? _e4(r) : u46 === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : u46, this.stack.push({
                domNamespace: u46,
                type: i,
                children: l,
                childIndex: 0,
                context: n,
                footer: s
            }), this.previousWasTextNode = !1, v8;
        }, e;
    }();
    z4.renderToNodeStream = function() {
        throw Error(p20(207));
    };
    z4.renderToStaticMarkup = function(e, t) {
        e = new be3(e, !0, t);
        try {
            return e.read(1 / 0);
        } finally{
            e.destroy();
        }
    };
    z4.renderToStaticNodeStream = function() {
        throw Error(p20(208));
    };
    z4.renderToString = function(e, t) {
        e = new be3(e, !1, t);
        try {
            return e.read(1 / 0);
        } finally{
            e.destroy();
        }
    };
    z4.version = "17.0.2";
});
var se = ce((yt, Te2)=>{
    "use strict";
    Te2.exports = ze();
});
var Re1 = fe1(se()), Ve = fe1(se()), { renderToNodeStream: vt , renderToStaticMarkup: wt , renderToStaticNodeStream: xt , renderToString: gt , version: St  } = Ve, { default: pt , ...ht } = Ve, kt = (Re1.default ?? pt) ?? ht;
function a() {
    return a = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, a.apply(this, arguments);
}
var g2, R = g2 || (g2 = {});
R.Pop = "POP";
R.Push = "PUSH";
R.Replace = "REPLACE";
var O3 = function(n) {
    return n;
};
function V1(n) {
    n.preventDefault(), n.returnValue = "";
}
function D1() {
    var n = [];
    return {
        get length () {
            return n.length;
        },
        push: function(u47) {
            return n.push(u47), function() {
                n = n.filter(function(o61) {
                    return o61 !== u47;
                });
            };
        },
        call: function(u48) {
            n.forEach(function(o62) {
                return o62 && o62(u48);
            });
        }
    };
}
function H1() {
    return Math.random().toString(36).substr(2, 8);
}
function S(n) {
    var u49 = n.pathname;
    u49 = u49 === void 0 ? "/" : u49;
    var o63 = n.search;
    return o63 = o63 === void 0 ? "" : o63, n = n.hash, n = n === void 0 ? "" : n, o63 && o63 !== "?" && (u49 += o63.charAt(0) === "?" ? o63 : "?" + o63), n && n !== "#" && (u49 += n.charAt(0) === "#" ? n : "#" + n), u49;
}
function A(n) {
    var u50 = {};
    if (n) {
        var o64 = n.indexOf("#");
        0 <= o64 && (u50.hash = n.substr(o64), n = n.substr(0, o64)), o64 = n.indexOf("?"), 0 <= o64 && (u50.search = n.substr(o64), n = n.substr(0, o64)), n && (u50.pathname = n);
    }
    return u50;
}
function M(n) {
    function u51() {
        var e = h14.location, t = l.state || {};
        return [
            t.idx,
            O3({
                pathname: e.pathname,
                search: e.search,
                hash: e.hash,
                state: t.usr || null,
                key: t.key || "default"
            })
        ];
    }
    function o65(e) {
        return typeof e == "string" ? e : S(e);
    }
    function E11(e, t) {
        return t === void 0 && (t = null), O3(a({
            pathname: p21.pathname,
            hash: "",
            search: ""
        }, typeof e == "string" ? A(e) : e, {
            state: t,
            key: H1()
        }));
    }
    function w(e) {
        m16 = e, e = u51(), y15 = e[0], p21 = e[1], r.call({
            action: m16,
            location: p21
        });
    }
    function N10(e, t) {
        function a29() {
            N10(e, t);
        }
        var s = g2.Push, c28 = E11(e, t);
        if (!i.length || (i.call({
            action: s,
            location: c28,
            retry: a29
        }), !1)) {
            var f28 = [
                {
                    usr: c28.state,
                    key: c28.key,
                    idx: y15 + 1
                },
                o65(c28)
            ];
            c28 = f28[0], f28 = f28[1];
            try {
                l.pushState(c28, "", f28);
            } catch  {
                h14.location.assign(f28);
            }
            w(s);
        }
    }
    function k14(e, t) {
        function a30() {
            k14(e, t);
        }
        var s = g2.Replace, c29 = E11(e, t);
        i.length && (i.call({
            action: s,
            location: c29,
            retry: a30
        }), 1) || (c29 = [
            {
                usr: c29.state,
                key: c29.key,
                idx: y15
            },
            o65(c29)
        ], l.replaceState(c29[0], "", c29[1]), w(s));
    }
    function v9(e) {
        l.go(e);
    }
    n === void 0 && (n = {}), n = n.window;
    var h14 = n === void 0 ? document.defaultView : n, l = h14.history, d = null;
    h14.addEventListener("popstate", function() {
        if (d) i.call(d), d = null;
        else {
            var e = g2.Pop, t = u51(), a31 = t[0];
            if (t = t[1], i.length) {
                if (a31 != null) {
                    var s = y15 - a31;
                    s && (d = {
                        action: e,
                        location: t,
                        retry: function() {
                            v9(-1 * s);
                        }
                    }, v9(s));
                }
            } else w(e);
        }
    });
    var m16 = g2.Pop;
    n = u51();
    var y15 = n[0], p21 = n[1], r = D1(), i = D1();
    return y15 == null && (y15 = 0, l.replaceState(a({}, l.state, {
        idx: y15
    }), "")), {
        get action () {
            return m16;
        },
        get location () {
            return p21;
        },
        createHref: o65,
        push: N10,
        replace: k14,
        go: v9,
        back: function() {
            v9(-1);
        },
        forward: function() {
            v9(1);
        },
        listen: function(e) {
            return r.push(e);
        },
        block: function(e) {
            var t = i.push(e);
            return i.length === 1 && h14.addEventListener("beforeunload", V1), function() {
                t(), i.length || h14.removeEventListener("beforeunload", V1);
            };
        }
    };
}
function J1(n) {
    function u52() {
        var t = A(l.location.hash.substr(1)), a32 = t.pathname, s = t.search;
        t = t.hash;
        var c30 = d.state || {};
        return [
            c30.idx,
            O3({
                pathname: a32 === void 0 ? "/" : a32,
                search: s === void 0 ? "" : s,
                hash: t === void 0 ? "" : t,
                state: c30.usr || null,
                key: c30.key || "default"
            })
        ];
    }
    function o66() {
        if (m17) e.call(m17), m17 = null;
        else {
            var t = g2.Pop, a33 = u52(), s = a33[0];
            if (a33 = a33[1], e.length) {
                if (s != null) {
                    var c31 = p22 - s;
                    c31 && (m17 = {
                        action: t,
                        location: a33,
                        retry: function() {
                            h15(-1 * c31);
                        }
                    }, h15(c31));
                }
            } else N11(t);
        }
    }
    function E12(t) {
        var a34 = document.querySelector("base"), s = "";
        return a34 && a34.getAttribute("href") && (a34 = l.location.href, s = a34.indexOf("#"), s = s === -1 ? a34 : a34.slice(0, s)), s + "#" + (typeof t == "string" ? t : S(t));
    }
    function w(t, a35) {
        return a35 === void 0 && (a35 = null), O3(a({
            pathname: r.pathname,
            hash: "",
            search: ""
        }, typeof t == "string" ? A(t) : t, {
            state: a35,
            key: H1()
        }));
    }
    function N11(t) {
        y16 = t, t = u52(), p22 = t[0], r = t[1], i.call({
            action: y16,
            location: r
        });
    }
    function k15(t, a36) {
        function s() {
            k15(t, a36);
        }
        var c32 = g2.Push, f29 = w(t, a36);
        if (!e.length || (e.call({
            action: c32,
            location: f29,
            retry: s
        }), !1)) {
            var P8 = [
                {
                    usr: f29.state,
                    key: f29.key,
                    idx: p22 + 1
                },
                E12(f29)
            ];
            f29 = P8[0], P8 = P8[1];
            try {
                d.pushState(f29, "", P8);
            } catch  {
                l.location.assign(P8);
            }
            N11(c32);
        }
    }
    function v10(t, a37) {
        function s() {
            v10(t, a37);
        }
        var c33 = g2.Replace, f30 = w(t, a37);
        e.length && (e.call({
            action: c33,
            location: f30,
            retry: s
        }), 1) || (f30 = [
            {
                usr: f30.state,
                key: f30.key,
                idx: p22
            },
            E12(f30)
        ], d.replaceState(f30[0], "", f30[1]), N11(c33));
    }
    function h15(t) {
        d.go(t);
    }
    n === void 0 && (n = {}), n = n.window;
    var l = n === void 0 ? document.defaultView : n, d = l.history, m17 = null;
    l.addEventListener("popstate", o66), l.addEventListener("hashchange", function() {
        var t = u52()[1];
        S(t) !== S(r) && o66();
    });
    var y16 = g2.Pop;
    n = u52();
    var p22 = n[0], r = n[1], i = D1(), e = D1();
    return p22 == null && (p22 = 0, d.replaceState(a({}, d.state, {
        idx: p22
    }), "")), {
        get action () {
            return y16;
        },
        get location () {
            return r;
        },
        createHref: E12,
        push: k15,
        replace: v10,
        go: h15,
        back: function() {
            h15(-1);
        },
        forward: function() {
            h15(1);
        },
        listen: function(t) {
            return i.push(t);
        },
        block: function(t) {
            var a38 = e.push(t);
            return e.length === 1 && l.addEventListener("beforeunload", V1), function() {
                a38(), e.length || l.removeEventListener("beforeunload", V1);
            };
        }
    };
}
function q1(n) {
    function u53(r, i) {
        return i === void 0 && (i = null), O3(a({
            pathname: m18.pathname,
            search: "",
            hash: ""
        }, typeof r == "string" ? A(r) : r, {
            state: i,
            key: H1()
        }));
    }
    function o67(r, i, e) {
        return !p23.length || (p23.call({
            action: r,
            location: i,
            retry: e
        }), !1);
    }
    function E13(r, i) {
        d = r, m18 = i, y17.call({
            action: d,
            location: m18
        });
    }
    function w(r, i) {
        var e = g2.Push, t = u53(r, i);
        o67(e, t, function() {
            w(r, i);
        }) && (l += 1, h16.splice(l, h16.length, t), E13(e, t));
    }
    function N12(r, i) {
        var e = g2.Replace, t = u53(r, i);
        o67(e, t, function() {
            N12(r, i);
        }) && (h16[l] = t, E13(e, t));
    }
    function k16(r) {
        var i = Math.min(Math.max(l + r, 0), h16.length - 1), e = g2.Pop, t = h16[i];
        o67(e, t, function() {
            k16(r);
        }) && (l = i, E13(e, t));
    }
    n === void 0 && (n = {});
    var v11 = n;
    n = v11.initialEntries, v11 = v11.initialIndex;
    var h16 = (n === void 0 ? [
        "/"
    ] : n).map(function(r) {
        var i = O3(a({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: H1()
        }, typeof r == "string" ? A(r) : r));
        return i;
    }), l = Math.min(Math.max(v11 ?? h16.length - 1, 0), h16.length - 1), d = g2.Pop, m18 = h16[l], y17 = D1(), p23 = D1();
    return {
        get index () {
            return l;
        },
        get action () {
            return d;
        },
        get location () {
            return m18;
        },
        createHref: function(r) {
            return typeof r == "string" ? r : S(r);
        },
        push: w,
        replace: N12,
        go: k16,
        back: function() {
            k16(-1);
        },
        forward: function() {
            k16(1);
        },
        listen: function(r) {
            return y17.push(r);
        },
        block: function(r) {
            return p23.push(r);
        }
    };
}
const mod = {
    Action: g2,
    createBrowserHistory: M,
    createHashHistory: J1,
    createMemoryHistory: q1,
    createPath: S,
    parsePath: A
};
function h2(e, t) {
    if (!e) throw new Error(t);
}
var b1 = Se(null), x = Se(null), E = Se({
    outlet: null,
    matches: []
});
function Ee1(e) {
    let { basename: t , children: n , initialEntries: a39 , initialIndex: o68  } = e, s = De();
    s.current == null && (s.current = q1({
        initialEntries: a39,
        initialIndex: o68
    }));
    let r = s.current, [i, l] = Me({
        action: r.action,
        location: r.location
    });
    return Fe(()=>r.listen(l)
    , [
        r
    ]), Ce(G2, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: r
    });
}
function Re2(e) {
    let { to: t , replace: n , state: a40  } = e;
    v1() || h2(!1);
    let o69 = q2();
    return we(()=>{
        o69(t, {
            replace: n,
            state: a40
        });
    }), null;
}
function k(e) {
    return K1(e.context);
}
function A1(e) {
    h2(!1);
}
function G2(e) {
    let { basename: t = "/" , children: n = null , location: a41 , navigationType: o70 = g2.Pop , navigator: s , static: r = !1  } = e;
    v1() && h2(!1);
    let i = me2(t), l = Le(()=>({
            basename: i,
            navigator: s,
            static: r
        })
    , [
        i,
        s,
        r
    ]);
    typeof a41 == "string" && (a41 = A(a41));
    let { pathname: c34 = "/" , search: u54 = "" , hash: f31 = "" , state: g9 = null , key: R5 = "default"  } = a41, p24 = Le(()=>{
        let V5 = M1(c34, i);
        return V5 == null ? null : {
            pathname: V5,
            search: u54,
            hash: f31,
            state: g9,
            key: R5
        };
    }, [
        i,
        c34,
        u54,
        f31,
        g9,
        R5
    ]);
    return p24 == null ? null : Ce(b1.Provider, {
        value: l
    }, Ce(x.Provider, {
        children: n,
        value: {
            location: p24,
            navigationType: o70
        }
    }));
}
function Pe2(e) {
    let { children: t , location: n  } = e;
    return X1(_(t), n);
}
function we2(e) {
    v1() || h2(!1);
    let { basename: t , navigator: n  } = xe(b1), { hash: a42 , pathname: o71 , search: s  } = Q1(e), r = o71;
    if (t !== "/") {
        let i = fe2(e), l = i != null && i.endsWith("/");
        r = o71 === "/" ? t + (l ? "/" : "") : m1([
            t,
            o71
        ]);
    }
    return n.createHref({
        pathname: r,
        search: s,
        hash: a42
    });
}
function v1() {
    return xe(x) != null;
}
function O4() {
    return v1() || h2(!1), xe(x).location;
}
function xe2() {
    return xe(x).navigationType;
}
function Oe1(e) {
    v1() || h2(!1);
    let { pathname: t  } = O4();
    return Le(()=>L(e, t)
    , [
        t,
        e
    ]);
}
function q2() {
    v1() || h2(!1);
    let { basename: e , navigator: t  } = xe(b1), { matches: n  } = xe(E), { pathname: a43  } = O4(), o72 = JSON.stringify(n.map((i)=>i.pathnameBase
    )), s = De(!1);
    return we(()=>{
        s.current = !0;
    }), je(function(i, l) {
        if (l === void 0 && (l = {}), !s.current) return;
        if (typeof i == "number") {
            t.go(i);
            return;
        }
        let c35 = T(i, JSON.parse(o72), a43);
        e !== "/" && (c35.pathname = m1([
            e,
            c35.pathname
        ])), (l.replace ? t.replace : t.push)(c35, l.state);
    }, [
        e,
        t,
        o72,
        a43
    ]);
}
var C1 = Se(null);
function be1() {
    return xe(C1);
}
function K1(e) {
    let t = xe(E).outlet;
    return t && Ce(C1.Provider, {
        value: e
    }, t);
}
function _e2() {
    let { matches: e  } = xe(E), t = e[e.length - 1];
    return t ? t.params : {};
}
function Q1(e) {
    let { matches: t  } = xe(E), { pathname: n  } = O4(), a44 = JSON.stringify(t.map((o73)=>o73.pathnameBase
    ));
    return Le(()=>T(e, JSON.parse(a44), n)
    , [
        e,
        a44,
        n
    ]);
}
function X1(e, t) {
    v1() || h2(!1);
    let { matches: n  } = xe(E), a45 = n[n.length - 1], o74 = a45 ? a45.params : {}, s = a45 ? a45.pathname : "/", r = a45 ? a45.pathnameBase : "/", i = a45 && a45.route, l = O4(), c36;
    if (t) {
        var u55;
        let p25 = typeof t == "string" ? A(t) : t;
        r === "/" || ((u55 = p25.pathname) == null ? void 0 : u55.startsWith(r)) || h2(!1), c36 = p25;
    } else c36 = l;
    let f32 = c36.pathname || "/", g10 = r === "/" ? f32 : f32.slice(r.length) || "/", R6 = Z2(e, {
        pathname: g10
    });
    return $1(R6 && R6.map((p26)=>Object.assign({}, p26, {
            params: Object.assign({}, o74, p26.params),
            pathname: m1([
                r,
                p26.pathname
            ]),
            pathnameBase: p26.pathnameBase === "/" ? r : m1([
                r,
                p26.pathnameBase
            ])
        })
    ), n);
}
function _(e) {
    let t = [];
    return _e.forEach(e, (n)=>{
        if (!ge(n)) return;
        if (n.type === pe) {
            t.push.apply(t, _(n.props.children));
            return;
        }
        n.type !== A1 && h2(!1);
        let a46 = {
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            index: n.props.index,
            path: n.props.path
        };
        n.props.children && (a46.children = _(n.props.children)), t.push(a46);
    }), t;
}
function Ve1(e, t) {
    return t === void 0 && (t = {}), e.replace(/:(\w+)/g, (n, a47)=>(t[a47] == null && h2(!1), t[a47])
    ).replace(/\/*\*$/, (n)=>t["*"] == null ? "" : t["*"].replace(/^\/*/, "/")
    );
}
function Z2(e, t, n) {
    n === void 0 && (n = "/");
    let a48 = typeof t == "string" ? A(t) : t, o75 = M1(a48.pathname || "/", n);
    if (o75 == null) return null;
    let s = W1(e);
    ee2(s);
    let r = null;
    for(let i = 0; r == null && i < s.length; ++i)r = ue1(s[i], o75);
    return r;
}
function W1(e, t, n, a49) {
    return t === void 0 && (t = []), n === void 0 && (n = []), a49 === void 0 && (a49 = ""), e.forEach((o76, s)=>{
        let r = {
            relativePath: o76.path || "",
            caseSensitive: o76.caseSensitive === !0,
            childrenIndex: s,
            route: o76
        };
        r.relativePath.startsWith("/") && (r.relativePath.startsWith(a49) || h2(!1), r.relativePath = r.relativePath.slice(a49.length));
        let i = m1([
            a49,
            r.relativePath
        ]), l = n.concat(r);
        o76.children && o76.children.length > 0 && (o76.index === !0 && h2(!1), W1(o76.children, t, l, i)), !(o76.path == null && !o76.index) && t.push({
            path: i,
            score: se1(i, o76.index),
            routesMeta: l
        });
    }), t;
}
function ee2(e) {
    e.sort((t, n)=>t.score !== n.score ? n.score - t.score : le1(t.routesMeta.map((a50)=>a50.childrenIndex
        ), n.routesMeta.map((a51)=>a51.childrenIndex
        ))
    );
}
var te1 = /^:\w+$/, ne1 = 3, ae2 = 2, oe = 1, re1 = 10, ie1 = -2, B2 = (e)=>e === "*"
;
function se1(e, t) {
    let n = e.split("/"), a52 = n.length;
    return n.some(B2) && (a52 += ie1), t && (a52 += ae2), n.filter((o77)=>!B2(o77)
    ).reduce((o78, s)=>o78 + (te1.test(s) ? ne1 : s === "" ? oe : re1)
    , a52);
}
function le1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((a53, o79)=>a53 === t[o79]
    ) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ue1(e, t) {
    let { routesMeta: n  } = e, a54 = {}, o80 = "/", s = [];
    for(let r = 0; r < n.length; ++r){
        let i = n[r], l = r === n.length - 1, c37 = o80 === "/" ? t : t.slice(o80.length) || "/", u56 = L({
            path: i.relativePath,
            caseSensitive: i.caseSensitive,
            end: l
        }, c37);
        if (!u56) return null;
        Object.assign(a54, u56.params);
        let f33 = i.route;
        s.push({
            params: a54,
            pathname: m1([
                o80,
                u56.pathname
            ]),
            pathnameBase: m1([
                o80,
                u56.pathnameBase
            ]),
            route: f33
        }), u56.pathnameBase !== "/" && (o80 = m1([
            o80,
            u56.pathnameBase
        ]));
    }
    return s;
}
function Se1(e) {
    return $1(e);
}
function $1(e, t) {
    return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, a55, o81)=>Ce(E.Provider, {
            children: a55.route.element !== void 0 ? a55.route.element : Ce(k, null),
            value: {
                outlet: n,
                matches: t.concat(e.slice(0, o81 + 1))
            }
        })
    , null);
}
function L(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, a56] = ce1(e.path, e.caseSensitive, e.end), o82 = t.match(n);
    if (!o82) return null;
    let s = o82[0], r = s.replace(/(.)\/+$/, "$1"), i = o82.slice(1);
    return {
        params: a56.reduce((c38, u57, f34)=>{
            if (u57 === "*") {
                let g11 = i[f34] || "";
                r = s.slice(0, s.length - g11.length).replace(/(.)\/+$/, "$1");
            }
            return c38[u57] = he2(i[f34] || "", u57), c38;
        }, {}),
        pathname: s,
        pathnameBase: r,
        pattern: e
    };
}
function ce1(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0);
    let a57 = [], o83 = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (r, i)=>(a57.push(i), "([^\\/]+)")
    );
    return e.endsWith("*") ? (a57.push("*"), o83 += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o83 += n ? "\\/*$" : "(?:\\b|\\/|$)", [
        new RegExp(o83, t ? void 0 : "i"),
        a57
    ];
}
function he2(e, t) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e;
    }
}
function pe2(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n , search: a58 = "" , hash: o84 = ""  } = typeof e == "string" ? A(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : de2(n, t) : t,
        search: ve2(a58),
        hash: ge2(o84)
    };
}
function de2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((o85)=>{
        o85 === ".." ? n.length > 1 && n.pop() : o85 !== "." && n.push(o85);
    }), n.length > 1 ? n.join("/") : "/";
}
function T(e, t, n) {
    let a59 = typeof e == "string" ? A(e) : e, o86 = e === "" || a59.pathname === "" ? "/" : a59.pathname, s;
    if (o86 == null) s = n;
    else {
        let i = t.length - 1;
        if (o86.startsWith("..")) {
            let l = o86.split("/");
            for(; l[0] === "..";)l.shift(), i -= 1;
            a59.pathname = l.join("/");
        }
        s = i >= 0 ? t[i] : "/";
    }
    let r = pe2(a59, s);
    return o86 && o86 !== "/" && o86.endsWith("/") && !r.pathname.endsWith("/") && (r.pathname += "/"), r;
}
function fe2(e) {
    return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? A(e).pathname : e.pathname;
}
function M1(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = e.charAt(t.length);
    return n && n !== "/" ? null : e.slice(t.length) || "/";
}
var m1 = (e)=>e.join("/").replace(/\/\/+/g, "/")
, me2 = (e)=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
, ve2 = (e)=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
, ge2 = (e)=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e
;
function d1() {
    return d1 = Object.assign || function(e) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n];
            for(var t in r)Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        }
        return e;
    }, d1.apply(this, arguments);
}
function x1(e, n) {
    if (e == null) return {};
    var r = {}, t = Object.keys(e), o87, a60;
    for(a60 = 0; a60 < t.length; a60++)o87 = t[a60], !(n.indexOf(o87) >= 0) && (r[o87] = e[o87]);
    return r;
}
var I1 = [
    "onClick",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to"
], K2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
];
function Y1(e) {
    let { basename: n , children: r , window: t  } = e, o88 = De();
    o88.current == null && (o88.current = M({
        window: t
    }));
    let a61 = o88.current, [i, s] = Me({
        action: a61.action,
        location: a61.location
    });
    return Fe(()=>a61.listen(s)
    , [
        a61
    ]), Ce(G2, {
        basename: n,
        children: r,
        location: i.location,
        navigationType: i.action,
        navigator: a61
    });
}
function q3(e) {
    let { basename: n , children: r , window: t  } = e, o89 = De();
    o89.current == null && (o89.current = J1({
        window: t
    }));
    let a62 = o89.current, [i, s] = Me({
        action: a62.action,
        location: a62.location
    });
    return Fe(()=>a62.listen(s)
    , [
        a62
    ]), Ce(G2, {
        basename: n,
        children: r,
        location: i.location,
        navigationType: i.action,
        navigator: a62
    });
}
function z2(e) {
    let { basename: n , children: r , history: t  } = e, [o90, a63] = Me({
        action: t.action,
        location: t.location
    });
    return Fe(()=>t.listen(a63)
    , [
        t
    ]), Ce(G2, {
        basename: n,
        children: r,
        location: o90.location,
        navigationType: o90.action,
        navigator: t
    });
}
function M2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var F = ke(function(n, r) {
    let { onClick: t , reloadDocument: o91 , replace: a64 = !1 , state: i , target: s , to: l  } = n, u58 = x1(n, I1), m19 = we2(l), y18 = T1(l, {
        replace: a64,
        state: i,
        target: s
    });
    function v12(c39) {
        t && t(c39), !c39.defaultPrevented && !o91 && y18(c39);
    }
    return Ce("a", d1({}, u58, {
        href: m19,
        onClick: v12,
        ref: r,
        target: s
    }));
}), G3 = ke(function(n, r) {
    let { "aria-current": t = "page" , caseSensitive: o92 = !1 , className: a65 = "" , end: i = !1 , style: s , to: l , children: u59  } = n, m20 = x1(n, K2), y19 = O4(), v13 = Q1(l), c40 = y19.pathname, f35 = v13.pathname;
    o92 || (c40 = c40.toLowerCase(), f35 = f35.toLowerCase());
    let h17 = c40 === f35 || !i && c40.startsWith(f35) && c40.charAt(f35.length) === "/", A6 = h17 ? t : void 0, g12;
    typeof a65 == "function" ? g12 = a65({
        isActive: h17
    }) : g12 = [
        a65,
        h17 ? "active" : null
    ].filter(Boolean).join(" ");
    let H5 = typeof s == "function" ? s({
        isActive: h17
    }) : s;
    return Ce(F, d1({}, m20, {
        "aria-current": A6,
        className: g12,
        ref: r,
        style: H5,
        to: l
    }), typeof u59 == "function" ? u59({
        isActive: h17
    }) : u59);
});
function T1(e, n) {
    let { target: r , replace: t , state: o93  } = n === void 0 ? {} : n, a66 = q2(), i = O4(), s = Q1(e);
    return je((l)=>{
        if (l.button === 0 && (!r || r === "_self") && !M2(l)) {
            l.preventDefault();
            let u60 = !!t || S(i) === S(s);
            a66(e, {
                replace: u60,
                state: o93
            });
        }
    }, [
        i,
        a66,
        s,
        t,
        o93,
        r,
        e
    ]);
}
function J2(e) {
    let n = De(k1(e)), r = O4(), t = Le(()=>{
        let i = k1(r.search);
        for (let s of n.current.keys())i.has(s) || n.current.getAll(s).forEach((l)=>{
            i.append(s, l);
        });
        return i;
    }, [
        r.search
    ]), o94 = q2(), a67 = je((i, s)=>{
        o94("?" + k1(i), s);
    }, [
        o94
    ]);
    return [
        t,
        a67
    ];
}
function k1(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((n, r)=>{
        let t = e[r];
        return n.concat(Array.isArray(t) ? t.map((o95)=>[
                r,
                o95
            ]
        ) : [
            [
                r,
                t
            ]
        ]);
    }, []));
}
const mod1 = {
    BrowserRouter: Y1,
    HashRouter: q3,
    Link: F,
    MemoryRouter: Ee1,
    NavLink: G3,
    Navigate: Re2,
    Outlet: k,
    Route: A1,
    Router: G2,
    Routes: Pe2,
    UNSAFE_LocationContext: x,
    UNSAFE_NavigationContext: b1,
    UNSAFE_RouteContext: E,
    createRoutesFromChildren: _,
    createSearchParams: k1,
    generatePath: Ve1,
    matchPath: L,
    matchRoutes: Z2,
    renderMatches: Se1,
    resolvePath: pe2,
    unstable_HistoryRouter: z2,
    useHref: we2,
    useInRouterContext: v1,
    useLinkClickHandler: T1,
    useLocation: O4,
    useMatch: Oe1,
    useNavigate: q2,
    useNavigationType: xe2,
    useOutlet: K1,
    useOutletContext: be1,
    useParams: _e2,
    useResolvedPath: Q1,
    useRoutes: X1,
    useSearchParams: J2
};
var d2 = Object.create;
var o = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var m2 = Object.getOwnPropertyNames;
var y1 = Object.getPrototypeOf, f = Object.prototype.hasOwnProperty;
var b2 = (e)=>o(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (r, t)=>(typeof require != "undefined" ? require : r)[t]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var $2 = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports)
;
var E1 = (e, r, t, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let s of m2(r))!f.call(e, s) && (t || s !== "default") && o(e, s, {
        get: ()=>r[s]
        ,
        enumerable: !(n = p(r, s)) || n.enumerable
    });
    return e;
}, v2 = (e, r)=>E1(b2(o(e != null ? d2(y1(e)) : {}, "default", !r && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var c1 = $2((h18)=>{
    "use strict";
    Object.defineProperty(h18, "__esModule", {
        value: !0
    });
    var R7 = Ue, u61 = mod, S14 = mod1;
    function Y5({ basename: e , children: r , location: t = "/"  }) {
        typeof t == "string" && (t = u61.parsePath(t));
        let n = u61.Action.Pop, s = {
            pathname: t.pathname || "/",
            search: t.search || "",
            hash: t.hash || "",
            state: t.state || null,
            key: t.key || "default"
        }, w = {
            createHref (a68) {
                return typeof a68 == "string" ? a68 : u61.createPath(a68);
            },
            push (a69) {
                throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(a69)})\` somewhere in your app.`);
            },
            replace (a70) {
                throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(a70)}, { replace: true })\` somewhere in your app.`);
            },
            go (a71) {
                throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${a71})\` somewhere in your app.`);
            },
            back () {
                throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
            },
            forward () {
                throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
            }
        };
        return R7.createElement(S14.Router, {
            basename: e,
            children: r,
            location: s,
            navigationType: n,
            navigator: w,
            static: !0
        });
    }
    h18.StaticRouter = Y5;
});
var g3 = v2(c1()), l1 = v2(c1()), { StaticRouter: O5  } = l1, { default: k2 , ...T2 } = l1, x2 = (g3.default ?? k2) ?? T2;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
        }
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") {
            return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function(path, base) {
            return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var react_production_min = createCommonjsModule(function(module, exports) {
    var n = 60103, p27 = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var q8 = 60109, r = 60110, t = 60112;
    exports.Suspense = 60113;
    var u62 = 60115, v14 = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
        var w = Symbol.for;
        n = w("react.element");
        p27 = w("react.portal");
        exports.Fragment = w("react.fragment");
        exports.StrictMode = w("react.strict_mode");
        exports.Profiler = w("react.profiler");
        q8 = w("react.provider");
        r = w("react.context");
        t = w("react.forward_ref");
        exports.Suspense = w("react.suspense");
        u62 = w("react.memo");
        v14 = w("react.lazy");
    }
    var x7 = typeof Symbol === "function" && Symbol.iterator;
    function y20(a72) {
        if (a72 === null || typeof a72 !== "object") return null;
        a72 = x7 && a72[x7] || a72["@@iterator"];
        return typeof a72 === "function" ? a72 : null;
    }
    function z5(a73) {
        for(var b7 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a73, c41 = 1; c41 < arguments.length; c41++)b7 += "&args[]=" + encodeURIComponent(arguments[c41]);
        return "Minified React error #" + a73 + "; visit " + b7 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A7 = {
        isMounted: function() {
            return false;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, B5 = {};
    function C11(a74, b8, c42) {
        this.props = a74;
        this.context = b8;
        this.refs = B5;
        this.updater = c42 || A7;
    }
    C11.prototype.isReactComponent = {};
    C11.prototype.setState = function(a75, b9) {
        if (typeof a75 !== "object" && typeof a75 !== "function" && a75 != null) throw Error(z5(85));
        this.updater.enqueueSetState(this, a75, b9, "setState");
    };
    C11.prototype.forceUpdate = function(a76) {
        this.updater.enqueueForceUpdate(this, a76, "forceUpdate");
    };
    function D5() {}
    D5.prototype = C11.prototype;
    function E14(a77, b10, c43) {
        this.props = a77;
        this.context = b10;
        this.refs = B5;
        this.updater = c43 || A7;
    }
    var F6 = E14.prototype = new D5();
    F6.constructor = E14;
    objectAssign(F6, C11.prototype);
    F6.isPureReactComponent = true;
    var G6 = {
        current: null
    }, H6 = Object.prototype.hasOwnProperty, I7 = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    function J6(a78, b11, c44) {
        var e, d = {}, k17 = null, h19 = null;
        if (b11 != null) for(e in b11.ref !== void 0 && (h19 = b11.ref), b11.key !== void 0 && (k17 = "" + b11.key), b11)H6.call(b11, e) && !I7.hasOwnProperty(e) && (d[e] = b11[e]);
        var g13 = arguments.length - 2;
        if (g13 === 1) d.children = c44;
        else if (1 < g13) {
            for(var f36 = Array(g13), m21 = 0; m21 < g13; m21++)f36[m21] = arguments[m21 + 2];
            d.children = f36;
        }
        if (a78 && a78.defaultProps) for(e in g13 = a78.defaultProps, g13)d[e] === void 0 && (d[e] = g13[e]);
        return {
            $$typeof: n,
            type: a78,
            key: k17,
            ref: h19,
            props: d,
            _owner: G6.current
        };
    }
    function K6(a79, b12) {
        return {
            $$typeof: n,
            type: a79.type,
            key: b12,
            ref: a79.ref,
            props: a79.props,
            _owner: a79._owner
        };
    }
    function L5(a80) {
        return typeof a80 === "object" && a80 !== null && a80.$$typeof === n;
    }
    function escape(a81) {
        var b13 = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + a81.replace(/[=:]/g, function(a2) {
            return b13[a2];
        });
    }
    var M7 = /\/+/g;
    function N13(a82, b14) {
        return typeof a82 === "object" && a82 !== null && a82.key != null ? escape("" + a82.key) : b14.toString(36);
    }
    function O8(a83, b15, c45, e, d) {
        var k18 = typeof a83;
        if (k18 === "undefined" || k18 === "boolean") a83 = null;
        var h20 = false;
        if (a83 === null) h20 = true;
        else switch(k18){
            case "string":
            case "number":
                h20 = true;
                break;
            case "object":
                switch(a83.$$typeof){
                    case n:
                    case p27:
                        h20 = true;
                }
        }
        if (h20) return h20 = a83, d = d(h20), a83 = e === "" ? "." + N13(h20, 0) : e, Array.isArray(d) ? (c45 = "", a83 != null && (c45 = a83.replace(M7, "$&/") + "/"), O8(d, b15, c45, "", function(a2) {
            return a2;
        })) : d != null && (L5(d) && (d = K6(d, c45 + (!d.key || h20 && h20.key === d.key ? "" : ("" + d.key).replace(M7, "$&/") + "/") + a83)), b15.push(d)), 1;
        h20 = 0;
        e = e === "" ? "." : e + ":";
        if (Array.isArray(a83)) for(var g14 = 0; g14 < a83.length; g14++){
            k18 = a83[g14];
            var f37 = e + N13(k18, g14);
            h20 += O8(k18, b15, c45, f37, d);
        }
        else if (f37 = y20(a83), typeof f37 === "function") for(a83 = f37.call(a83), g14 = 0; !(k18 = a83.next()).done;)k18 = k18.value, f37 = e + N13(k18, g14++), h20 += O8(k18, b15, c45, f37, d);
        else if (k18 === "object") throw b15 = "" + a83, Error(z5(31, b15 === "[object Object]" ? "object with keys {" + Object.keys(a83).join(", ") + "}" : b15));
        return h20;
    }
    function P9(a84, b16, c46) {
        if (a84 == null) return a84;
        var e = [], d = 0;
        O8(a84, e, "", "", function(a2) {
            return b16.call(c46, a2, d++);
        });
        return e;
    }
    function Q5(a85) {
        if (a85._status === -1) {
            var b17 = a85._result;
            b17 = b17();
            a85._status = 0;
            a85._result = b17;
            b17.then(function(b21) {
                a85._status === 0 && (b21 = b21.default, a85._status = 1, a85._result = b21);
            }, function(b22) {
                a85._status === 0 && (a85._status = 2, a85._result = b22);
            });
        }
        if (a85._status === 1) return a85._result;
        throw a85._result;
    }
    var R8 = {
        current: null
    };
    function S15() {
        var a86 = R8.current;
        if (a86 === null) throw Error(z5(321));
        return a86;
    }
    var T11 = {
        ReactCurrentDispatcher: R8,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: G6,
        IsSomeRendererActing: {
            current: false
        },
        assign: objectAssign
    };
    exports.Children = {
        map: P9,
        forEach: function(a87, b18, c47) {
            P9(a87, function() {
                b18.apply(this, arguments);
            }, c47);
        },
        count: function(a88) {
            var b19 = 0;
            P9(a88, function() {
                b19++;
            });
            return b19;
        },
        toArray: function(a89) {
            return P9(a89, function(a2) {
                return a2;
            }) || [];
        },
        only: function(a90) {
            if (!L5(a90)) throw Error(z5(143));
            return a90;
        }
    };
    exports.Component = C11;
    exports.PureComponent = E14;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T11;
    exports.cloneElement = function(a91, b20, c48) {
        if (a91 === null || a91 === void 0) throw Error(z5(267, a91));
        var e = objectAssign({}, a91.props), d = a91.key, k19 = a91.ref, h21 = a91._owner;
        if (b20 != null) {
            b20.ref !== void 0 && (k19 = b20.ref, h21 = G6.current);
            b20.key !== void 0 && (d = "" + b20.key);
            if (a91.type && a91.type.defaultProps) var g15 = a91.type.defaultProps;
            for(f38 in b20)H6.call(b20, f38) && !I7.hasOwnProperty(f38) && (e[f38] = b20[f38] === void 0 && g15 !== void 0 ? g15[f38] : b20[f38]);
        }
        var f38 = arguments.length - 2;
        if (f38 === 1) e.children = c48;
        else if (1 < f38) {
            g15 = Array(f38);
            for(var m22 = 0; m22 < f38; m22++)g15[m22] = arguments[m22 + 2];
            e.children = g15;
        }
        return {
            $$typeof: n,
            type: a91.type,
            key: d,
            ref: k19,
            props: e,
            _owner: h21
        };
    };
    exports.createContext = function(a92, b23) {
        b23 === void 0 && (b23 = null);
        a92 = {
            $$typeof: r,
            _calculateChangedBits: b23,
            _currentValue: a92,
            _currentValue2: a92,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        a92.Provider = {
            $$typeof: q8,
            _context: a92
        };
        return a92.Consumer = a92;
    };
    exports.createElement = J6;
    exports.createFactory = function(a93) {
        var b24 = J6.bind(null, a93);
        b24.type = a93;
        return b24;
    };
    exports.createRef = function() {
        return {
            current: null
        };
    };
    exports.forwardRef = function(a94) {
        return {
            $$typeof: t,
            render: a94
        };
    };
    exports.isValidElement = L5;
    exports.lazy = function(a95) {
        return {
            $$typeof: v14,
            _payload: {
                _status: -1,
                _result: a95
            },
            _init: Q5
        };
    };
    exports.memo = function(a96, b25) {
        return {
            $$typeof: u62,
            type: a96,
            compare: b25 === void 0 ? null : b25
        };
    };
    exports.useCallback = function(a97, b26) {
        return S15().useCallback(a97, b26);
    };
    exports.useContext = function(a98, b27) {
        return S15().useContext(a98, b27);
    };
    exports.useDebugValue = function() {};
    exports.useEffect = function(a99, b28) {
        return S15().useEffect(a99, b28);
    };
    exports.useImperativeHandle = function(a100, b29, c49) {
        return S15().useImperativeHandle(a100, b29, c49);
    };
    exports.useLayoutEffect = function(a101, b30) {
        return S15().useLayoutEffect(a101, b30);
    };
    exports.useMemo = function(a102, b31) {
        return S15().useMemo(a102, b31);
    };
    exports.useReducer = function(a103, b32, c50) {
        return S15().useReducer(a103, b32, c50);
    };
    exports.useRef = function(a104) {
        return S15().useRef(a104);
    };
    exports.useState = function(a105) {
        return S15().useState(a105);
    };
    exports.version = "17.0.1";
});
var react = createCommonjsModule(function(module) {
    {
        module.exports = react_production_min;
    }
});
react.Children;
react.Component;
react.Fragment;
react.Profiler;
react.PureComponent;
react.StrictMode;
react.Suspense;
react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
react.cloneElement;
react.createContext;
react.createElement;
react.createFactory;
react.createRef;
react.forwardRef;
react.isValidElement;
react.lazy;
react.memo;
react.useCallback;
react.useContext;
react.useDebugValue;
react.useEffect;
react.useImperativeHandle;
react.useLayoutEffect;
react.useMemo;
react.useReducer;
react.useRef;
react.useState;
react.version;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule1(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function(path, base) {
            return commonjsRequire1(path, base === void 0 || base === null ? module.path : base);
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire1() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var prism = createCommonjsModule1(function(module) {
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    var Prism = function(_self2) {
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _10 = {
            manual: _self2.Prism && _self2.Prism.manual,
            disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
            util: {
                encode: function encode(tokens) {
                    if (tokens instanceof Token2) {
                        return new Token2(tokens.type, encode(tokens.content), tokens.alias);
                    } else if (Array.isArray(tokens)) {
                        return tokens.map(encode);
                    } else {
                        return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                    }
                },
                type: function(o96) {
                    return Object.prototype.toString.call(o96).slice(8, -1);
                },
                objId: function(obj) {
                    if (!obj["__id"]) {
                        Object.defineProperty(obj, "__id", {
                            value: ++uniqueId
                        });
                    }
                    return obj["__id"];
                },
                clone: function deepClone(o97, visited) {
                    visited = visited || {};
                    var clone;
                    var id;
                    switch(_10.util.type(o97)){
                        case "Object":
                            id = _10.util.objId(o97);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = {};
                            visited[id] = clone;
                            for(var key in o97){
                                if (o97.hasOwnProperty(key)) {
                                    clone[key] = deepClone(o97[key], visited);
                                }
                            }
                            return clone;
                        case "Array":
                            id = _10.util.objId(o97);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = [];
                            visited[id] = clone;
                            o97.forEach(function(v15, i) {
                                clone[i] = deepClone(v15, visited);
                            });
                            return clone;
                        default:
                            return o97;
                    }
                },
                getLanguage: function(element) {
                    while(element && !lang.test(element.className)){
                        element = element.parentElement;
                    }
                    if (element) {
                        return (element.className.match(lang) || [
                            ,
                            "none"
                        ])[1].toLowerCase();
                    }
                    return "none";
                },
                currentScript: function() {
                    if (typeof document === "undefined") {
                        return null;
                    }
                    if ("currentScript" in document && 1 < 2) {
                        return document.currentScript;
                    }
                    try {
                        throw new Error();
                    } catch (err) {
                        var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
                        if (src) {
                            var scripts = document.getElementsByTagName("script");
                            for(var i in scripts){
                                if (scripts[i].src == src) {
                                    return scripts[i];
                                }
                            }
                        }
                        return null;
                    }
                },
                isActive: function(element, className, defaultActivation) {
                    var no = "no-" + className;
                    while(element){
                        var classList = element.classList;
                        if (classList.contains(className)) {
                            return true;
                        }
                        if (classList.contains(no)) {
                            return false;
                        }
                        element = element.parentElement;
                    }
                    return !!defaultActivation;
                }
            },
            languages: {
                plain: plainTextGrammar,
                plaintext: plainTextGrammar,
                text: plainTextGrammar,
                txt: plainTextGrammar,
                extend: function(id, redef) {
                    var lang2 = _10.util.clone(_10.languages[id]);
                    for(var key in redef){
                        lang2[key] = redef[key];
                    }
                    return lang2;
                },
                insertBefore: function(inside, before, insert, root) {
                    root = root || _10.languages;
                    var grammar = root[inside];
                    var ret = {};
                    for(var token in grammar){
                        if (grammar.hasOwnProperty(token)) {
                            if (token == before) {
                                for(var newToken in insert){
                                    if (insert.hasOwnProperty(newToken)) {
                                        ret[newToken] = insert[newToken];
                                    }
                                }
                            }
                            if (!insert.hasOwnProperty(token)) {
                                ret[token] = grammar[token];
                            }
                        }
                    }
                    var old = root[inside];
                    root[inside] = ret;
                    _10.languages.DFS(_10.languages, function(key, value) {
                        if (value === old && key != inside) {
                            this[key] = ret;
                        }
                    });
                    return ret;
                },
                DFS: function DFS(o98, callback, type, visited) {
                    visited = visited || {};
                    var objId = _10.util.objId;
                    for(var i in o98){
                        if (o98.hasOwnProperty(i)) {
                            callback.call(o98, i, o98[i], type || i);
                            var property = o98[i];
                            var propertyType = _10.util.type(property);
                            if (propertyType === "Object" && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, null, visited);
                            } else if (propertyType === "Array" && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, i, visited);
                            }
                        }
                    }
                }
            },
            plugins: {},
            highlightAll: function(async, callback) {
                _10.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder: function(container, async, callback) {
                var env = {
                    callback,
                    container,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                _10.hooks.run("before-highlightall", env);
                env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
                _10.hooks.run("before-all-elements-highlight", env);
                for(var i = 0, element; element = env.elements[i++];){
                    _10.highlightElement(element, async === true, env.callback);
                }
            },
            highlightElement: function(element, async, callback) {
                var language = _10.util.getLanguage(element);
                var grammar = _10.languages[language];
                element.className = element.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
                var parent = element.parentElement;
                if (parent && parent.nodeName.toLowerCase() === "pre") {
                    parent.className = parent.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
                }
                var code = element.textContent;
                var env = {
                    element,
                    language,
                    grammar,
                    code
                };
                function insertHighlightedCode(highlightedCode) {
                    env.highlightedCode = highlightedCode;
                    _10.hooks.run("before-insert", env);
                    env.element.innerHTML = env.highlightedCode;
                    _10.hooks.run("after-highlight", env);
                    _10.hooks.run("complete", env);
                    callback && callback.call(env.element);
                }
                _10.hooks.run("before-sanity-check", env);
                parent = env.element.parentElement;
                if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
                    parent.setAttribute("tabindex", "0");
                }
                if (!env.code) {
                    _10.hooks.run("complete", env);
                    callback && callback.call(env.element);
                    return;
                }
                _10.hooks.run("before-highlight", env);
                if (!env.grammar) {
                    insertHighlightedCode(_10.util.encode(env.code));
                    return;
                }
                if (async && _self2.Worker) {
                    var worker = new Worker(_10.filename);
                    worker.onmessage = function(evt) {
                        insertHighlightedCode(evt.data);
                    };
                    worker.postMessage(JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: true
                    }));
                } else {
                    insertHighlightedCode(_10.highlight(env.code, env.grammar, env.language));
                }
            },
            highlight: function(text, grammar, language) {
                var env = {
                    code: text,
                    grammar,
                    language
                };
                _10.hooks.run("before-tokenize", env);
                env.tokens = _10.tokenize(env.code, env.grammar);
                _10.hooks.run("after-tokenize", env);
                return Token2.stringify(_10.util.encode(env.tokens), env.language);
            },
            tokenize: function(text, grammar) {
                var rest = grammar.rest;
                if (rest) {
                    for(var token in rest){
                        grammar[token] = rest[token];
                    }
                    delete grammar.rest;
                }
                var tokenList = new LinkedList();
                addAfter(tokenList, tokenList.head, text);
                matchGrammar(text, tokenList, grammar, tokenList.head, 0);
                return toArray(tokenList);
            },
            hooks: {
                all: {},
                add: function(name, callback) {
                    var hooks2 = _10.hooks.all;
                    hooks2[name] = hooks2[name] || [];
                    hooks2[name].push(callback);
                },
                run: function(name, env) {
                    var callbacks = _10.hooks.all[name];
                    if (!callbacks || !callbacks.length) {
                        return;
                    }
                    for(var i = 0, callback; callback = callbacks[i++];){
                        callback(env);
                    }
                }
            },
            Token: Token2
        };
        _self2.Prism = _10;
        function Token2(type, content, alias, matchedStr) {
            this.type = type;
            this.content = content;
            this.alias = alias;
            this.length = (matchedStr || "").length | 0;
        }
        Token2.stringify = function stringify(o99, language) {
            if (typeof o99 == "string") {
                return o99;
            }
            if (Array.isArray(o99)) {
                var s = "";
                o99.forEach(function(e) {
                    s += stringify(e, language);
                });
                return s;
            }
            var env = {
                type: o99.type,
                content: stringify(o99.content, language),
                tag: "span",
                classes: [
                    "token",
                    o99.type
                ],
                attributes: {},
                language
            };
            var aliases = o99.alias;
            if (aliases) {
                if (Array.isArray(aliases)) {
                    Array.prototype.push.apply(env.classes, aliases);
                } else {
                    env.classes.push(aliases);
                }
            }
            _10.hooks.run("wrap", env);
            var attributes = "";
            for(var name in env.attributes){
                attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
            }
            return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);
            if (match && lookbehind && match[1]) {
                var lookbehindLength = match[1].length;
                match.index += lookbehindLength;
                match[0] = match[0].slice(lookbehindLength);
            }
            return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
            for(var token in grammar){
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }
                var patterns = grammar[token];
                patterns = Array.isArray(patterns) ? patterns : [
                    patterns
                ];
                for(var j5 = 0; j5 < patterns.length; ++j5){
                    if (rematch && rematch.cause == token + "," + j5) {
                        return;
                    }
                    var patternObj = patterns[j5];
                    var inside = patternObj.inside;
                    var lookbehind = !!patternObj.lookbehind;
                    var greedy = !!patternObj.greedy;
                    var alias = patternObj.alias;
                    if (greedy && !patternObj.pattern.global) {
                        var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                        patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
                    }
                    var pattern = patternObj.pattern || patternObj;
                    for(var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next){
                        if (rematch && pos >= rematch.reach) {
                            break;
                        }
                        var str = currentNode.value;
                        if (tokenList.length > text.length) {
                            return;
                        }
                        if (str instanceof Token2) {
                            continue;
                        }
                        var removeCount = 1;
                        var match;
                        if (greedy) {
                            match = matchPattern(pattern, pos, text, lookbehind);
                            if (!match) {
                                break;
                            }
                            var from = match.index;
                            var to = match.index + match[0].length;
                            var p28 = pos;
                            p28 += currentNode.value.length;
                            while(from >= p28){
                                currentNode = currentNode.next;
                                p28 += currentNode.value.length;
                            }
                            p28 -= currentNode.value.length;
                            pos = p28;
                            if (currentNode.value instanceof Token2) {
                                continue;
                            }
                            for(var k20 = currentNode; k20 !== tokenList.tail && (p28 < to || typeof k20.value === "string"); k20 = k20.next){
                                removeCount++;
                                p28 += k20.value.length;
                            }
                            removeCount--;
                            str = text.slice(pos, p28);
                            match.index -= pos;
                        } else {
                            match = matchPattern(pattern, 0, str, lookbehind);
                            if (!match) {
                                continue;
                            }
                        }
                        var from = match.index;
                        var matchStr = match[0];
                        var before = str.slice(0, from);
                        var after = str.slice(from + matchStr.length);
                        var reach = pos + str.length;
                        if (rematch && reach > rematch.reach) {
                            rematch.reach = reach;
                        }
                        var removeFrom = currentNode.prev;
                        if (before) {
                            removeFrom = addAfter(tokenList, removeFrom, before);
                            pos += before.length;
                        }
                        removeRange(tokenList, removeFrom, removeCount);
                        var wrapped = new Token2(token, inside ? _10.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                        currentNode = addAfter(tokenList, removeFrom, wrapped);
                        if (after) {
                            addAfter(tokenList, currentNode, after);
                        }
                        if (removeCount > 1) {
                            var nestedRematch = {
                                cause: token + "," + j5,
                                reach
                            };
                            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                            if (rematch && nestedRematch.reach > rematch.reach) {
                                rematch.reach = nestedRematch.reach;
                            }
                        }
                    }
                }
            }
        }
        function LinkedList() {
            var head = {
                value: null,
                prev: null,
                next: null
            };
            var tail = {
                value: null,
                prev: head,
                next: null
            };
            head.next = tail;
            this.head = head;
            this.tail = tail;
            this.length = 0;
        }
        function addAfter(list, node, value) {
            var next = node.next;
            var newNode = {
                value,
                prev: node,
                next
            };
            node.next = newNode;
            next.prev = newNode;
            list.length++;
            return newNode;
        }
        function removeRange(list, node, count) {
            var next = node.next;
            for(var i = 0; i < count && next !== list.tail; i++){
                next = next.next;
            }
            node.next = next;
            next.prev = node;
            list.length -= i;
        }
        function toArray(list) {
            var array = [];
            var node = list.head.next;
            while(node !== list.tail){
                array.push(node.value);
                node = node.next;
            }
            return array;
        }
        if (!_self2.document) {
            if (!_self2.addEventListener) {
                return _10;
            }
            if (!_10.disableWorkerMessageHandler) {
                _self2.addEventListener("message", function(evt) {
                    var message = JSON.parse(evt.data);
                    var lang2 = message.language;
                    var code = message.code;
                    var immediateClose = message.immediateClose;
                    _self2.postMessage(_10.highlight(code, _10.languages[lang2], lang2));
                    if (immediateClose) {
                        _self2.close();
                    }
                }, false);
            }
            return _10;
        }
        var script = _10.util.currentScript();
        if (script) {
            _10.filename = script.src;
            if (script.hasAttribute("data-manual")) {
                _10.manual = true;
            }
        }
        function highlightAutomaticallyCallback() {
            if (!_10.manual) {
                _10.highlightAll();
            }
        }
        if (!_10.manual) {
            var readyState = document.readyState;
            if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
                document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
            } else {
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(highlightAutomaticallyCallback);
                } else {
                    window.setTimeout(highlightAutomaticallyCallback, 16);
                }
            }
        }
        return _10;
    }(_self);
    if (module.exports) {
        module.exports = Prism;
    }
    if (typeof commonjsGlobal !== "undefined") {
        commonjsGlobal.Prism = Prism;
    }
    Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: true,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: true,
                    greedy: true,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: true
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/,
                name: /[^\s<>'"]+/
            }
        },
        cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: true,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [
                            {
                                pattern: /^=/,
                                alias: "attr-equals"
                            },
                            /"|'/
                        ]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [
            {
                pattern: /&[\da-z]{1,8};/i,
                alias: "named-entity"
            },
            /&#x?[\da-f]{1,8};/i
        ]
    };
    Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
    Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
    Prism.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
            env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
    });
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function addInlined(tagName, lang) {
            var includedCdataInside = {};
            includedCdataInside["language-" + lang] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: true,
                inside: Prism.languages[lang]
            };
            includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
            var inside = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: includedCdataInside
                }
            };
            inside["language-" + lang] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[lang]
            };
            var def = {};
            def[tagName] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                    return tagName;
                }), "i"),
                lookbehind: true,
                greedy: true,
                inside
            };
            Prism.languages.insertBefore("markup", "cdata", def);
        }
    });
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function(attrName, lang) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                lookbehind: true,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: true,
                                alias: [
                                    lang,
                                    "language-" + lang
                                ],
                                inside: Prism.languages[lang]
                            },
                            punctuation: [
                                {
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                },
                                /"|'/
                            ]
                        }
                    }
                }
            });
        }
    });
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    Prism.languages.xml = Prism.languages.extend("markup", {});
    Prism.languages.ssml = Prism.languages.xml;
    Prism.languages.atom = Prism.languages.xml;
    Prism.languages.rss = Prism.languages.xml;
    (function(Prism2) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism2.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: true,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: true
                    }
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: true,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + string.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
                lookbehind: true
            },
            string: {
                pattern: string,
                greedy: true
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: true
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: true
            },
            punctuation: /[(){};:,]/
        };
        Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
        var markup = Prism2.languages.markup;
        if (markup) {
            markup.tag.addInlined("style", "css");
            markup.tag.addAttribute("style", "css");
        }
    })(Prism);
    Prism.languages.clike = {
        comment: [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true,
                greedy: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        "class-name": {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: true,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [
            Prism.languages.clike["class-name"],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                lookbehind: true
            }
        ],
        keyword: [
            {
                pattern: /((?:^|\})\s*)catch\b/,
                lookbehind: true
            },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: true
            }
        ],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: true,
            greedy: true,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: true,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [
            {
                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: true,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: true,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: true,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    });
    if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined("script", "javascript");
        Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
    }
    Prism.languages.js = Prism.languages.javascript;
    (function() {
        if (typeof Prism === "undefined" || typeof document === "undefined") {
            return;
        }
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
            return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        function setLanguageClass(element, language) {
            var className = element.className;
            className = className.replace(lang, " ") + " language-" + language;
            element.className = className.replace(/\s+/g, " ").trim();
        }
        Prism.hooks.add("before-highlightall", function(env) {
            env.selector += ", " + SELECTOR;
        });
        Prism.hooks.add("before-sanity-check", function(env) {
            var pre = env.element;
            if (pre.matches(SELECTOR)) {
                env.code = "";
                pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
                var code = pre.appendChild(document.createElement("CODE"));
                code.textContent = LOADING_MESSAGE;
                var src = pre.getAttribute("data-src");
                var language = env.language;
                if (language === "none") {
                    var extension = (/\.(\w+)$/.exec(src) || [
                        ,
                        "none"
                    ])[1];
                    language = EXTENSIONS[extension] || extension;
                }
                setLanguageClass(code, language);
                setLanguageClass(pre, language);
                var autoloader = Prism.plugins.autoloader;
                if (autoloader) {
                    autoloader.loadLanguages(language);
                }
                var xhr = new XMLHttpRequest();
                xhr.open("GET", src, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status < 400 && xhr.responseText) {
                            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                            code.textContent = xhr.responseText;
                            Prism.highlightElement(code);
                        } else {
                            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                            if (xhr.status >= 400) {
                                code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
                            } else {
                                code.textContent = FAILURE_EMPTY_MESSAGE;
                            }
                        }
                    }
                };
                xhr.send(null);
            }
        });
        Prism.plugins.fileHighlight = {
            highlight: function highlight2(container) {
                var elements = (container || document).querySelectorAll(SELECTOR);
                for(var i = 0, element; element = elements[i++];){
                    Prism.highlightElement(element);
                }
            }
        };
        var logged = false;
        Prism.fileHighlight = function() {
            if (!logged) {
                console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
                logged = true;
            }
            Prism.plugins.fileHighlight.highlight.apply(this, arguments);
        };
    })();
});
prism.Token;
prism.disableWorkerMessageHandler;
prism.highlight;
prism.highlightAll;
prism.highlightAllUnder;
prism.highlightElement;
prism.hooks;
prism.languages;
prism.manual;
prism.plugins;
prism.tokenize;
prism.util;
(function(Prism2) {
    var javascript = Prism2.util.clone(Prism2.languages.javascript);
    var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function re5(source, flags) {
        source = source.replace(/<S>/g, function() {
            return space;
        }).replace(/<BRACES>/g, function() {
            return braces;
        }).replace(/<SPREAD>/g, function() {
            return spread;
        });
        return RegExp(source, flags);
    }
    spread = re5(spread).source;
    Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
    Prism2.languages.jsx.tag.pattern = re5(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
    Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/i;
    Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i;
    Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
    Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
    Prism2.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: re5(/<SPREAD>/.source),
            inside: Prism2.languages.jsx
        }
    }, Prism2.languages.jsx.tag);
    Prism2.languages.insertBefore("inside", "special-attr", {
        script: {
            pattern: re5(/=<BRACES>/.source),
            inside: {
                "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation"
                },
                rest: Prism2.languages.jsx
            },
            alias: "language-javascript"
        }
    }, Prism2.languages.jsx.tag);
    var stringifyToken = function(token) {
        if (!token) {
            return "";
        }
        if (typeof token === "string") {
            return token;
        }
        if (typeof token.content === "string") {
            return token.content;
        }
        return token.content.map(stringifyToken).join("");
    };
    var walkTokens = function(tokens) {
        var openedTags = [];
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            var notTagNorBrace = false;
            if (typeof token !== "string") {
                if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
                    if (token.content[0].content[0].content === "</") {
                        if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                            openedTags.pop();
                        }
                    } else {
                        if (token.content[token.content.length - 1].content === "/>") {} else {
                            openedTags.push({
                                tagName: stringifyToken(token.content[0].content[1]),
                                openedBraces: 0
                            });
                        }
                    }
                } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
                    openedTags[openedTags.length - 1].openedBraces++;
                } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
                    openedTags[openedTags.length - 1].openedBraces--;
                } else {
                    notTagNorBrace = true;
                }
            }
            if (notTagNorBrace || typeof token === "string") {
                if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
                    var plainText = stringifyToken(token);
                    if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
                        plainText += stringifyToken(tokens[i + 1]);
                        tokens.splice(i + 1, 1);
                    }
                    if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
                        plainText = stringifyToken(tokens[i - 1]) + plainText;
                        tokens.splice(i - 1, 1);
                        i--;
                    }
                    tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
                }
            }
            if (token.content && typeof token.content !== "string") {
                walkTokens(token.content);
            }
        }
    };
    Prism2.hooks.add("after-tokenize", function(env) {
        if (env.language !== "jsx" && env.language !== "tsx") {
            return;
        }
        walkTokens(env.tokens);
    });
})(Prism);
const { createElement  } = react;
const { Fragment  } = react;
const { languages  } = prism;
const { highlight  } = prism;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var types = [
    "video",
    "image",
    "embed",
    "figma"
];
var Asset = function Asset2(_ref) {
    var block = _ref.block, mapImageUrl = _ref.mapImageUrl;
    var value = block.value;
    var type = block.value.type;
    if (!types.includes(type)) {
        return null;
    }
    var format = value.format;
    var _ref2 = format !== null && format !== void 0 ? format : {}, _ref2$display_source = _ref2.display_source, display_source = _ref2$display_source === void 0 ? void 0 : _ref2$display_source, _ref2$block_aspect_ra = _ref2.block_aspect_ratio, block_aspect_ratio = _ref2$block_aspect_ra === void 0 ? void 0 : _ref2$block_aspect_ra, _ref2$block_height = _ref2.block_height, block_height = _ref2$block_height === void 0 ? 1 : _ref2$block_height, _ref2$block_width = _ref2.block_width, block_width = _ref2$block_width === void 0 ? 1 : _ref2$block_width;
    var aspectRatio = block_aspect_ratio || block_height / block_width;
    if (type === "embed" || type === "video" || type === "figma") {
        return createElement("div", {
            style: {
                paddingBottom: aspectRatio * 100 + "%",
                position: "relative"
            }
        }, createElement("iframe", {
            className: "notion-image-inset",
            src: type === "figma" ? value.properties.source[0][0] : display_source
        }));
    }
    if (block.value.type === "image") {
        var _value$properties$cap;
        var src = mapImageUrl(value.properties.source[0][0], block);
        var caption = (_value$properties$cap = value.properties.caption) === null || _value$properties$cap === void 0 ? void 0 : _value$properties$cap[0][0];
        if (block_aspect_ratio) {
            return createElement("div", {
                style: {
                    paddingBottom: aspectRatio * 100 + "%",
                    position: "relative"
                }
            }, createElement("img", {
                className: "notion-image-inset",
                alt: caption || "notion image",
                src
            }));
        } else {
            return createElement("img", {
                alt: caption,
                src
            });
        }
    }
    return null;
};
var Code = function Code2(_ref) {
    var code = _ref.code, _ref$language = _ref.language, language = _ref$language === void 0 ? "javascript" : _ref$language;
    var languageL = language.toLowerCase();
    var prismLanguage = languages[languageL] || languages.javascript;
    var langClass = "language-" + language.toLowerCase();
    return createElement("pre", {
        className: "notion-code " + langClass
    }, createElement("code", {
        className: langClass,
        dangerouslySetInnerHTML: {
            __html: highlight(code, prismLanguage, language)
        }
    }));
};
var classNames = function classNames2() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(function(a106) {
        return !!a106;
    }).join(" ");
};
var getTextContent = function getTextContent2(text) {
    return text.reduce(function(prev, current) {
        return prev + current[0];
    }, "");
};
var groupBlockContent = function groupBlockContent2(blockMap) {
    var output = [];
    var lastType = void 0;
    var index = -1;
    Object.keys(blockMap).forEach(function(id) {
        var _blockMap$id$value$co;
        (_blockMap$id$value$co = blockMap[id].value.content) === null || _blockMap$id$value$co === void 0 ? void 0 : _blockMap$id$value$co.forEach(function(blockId) {
            var _blockMap$blockId, _blockMap$blockId$val;
            var blockType = (_blockMap$blockId = blockMap[blockId]) === null || _blockMap$blockId === void 0 ? void 0 : (_blockMap$blockId$val = _blockMap$blockId.value) === null || _blockMap$blockId$val === void 0 ? void 0 : _blockMap$blockId$val.type;
            if (blockType && blockType !== lastType) {
                index++;
                lastType = blockType;
                output[index] = [];
            }
            output[index].push(blockId);
        });
        lastType = void 0;
    });
    return output;
};
var getListNumber = function getListNumber2(blockId, blockMap) {
    var groups = groupBlockContent(blockMap);
    var group = groups.find(function(g16) {
        return g16.includes(blockId);
    });
    if (!group) {
        return;
    }
    return group.indexOf(blockId) + 1;
};
var defaultMapImageUrl = function defaultMapImageUrl2(image, block) {
    if (image === void 0) {
        image = "";
    }
    var url = new URL("https://www.notion.so" + (image.startsWith("/image") ? image : "/image/" + encodeURIComponent(image)));
    if (block && !image.includes("/images/page-cover/")) {
        var table = block.value.parent_table === "space" ? "block" : block.value.parent_table;
        url.searchParams.set("table", table);
        url.searchParams.set("id", block.value.id);
        url.searchParams.set("cache", "v2");
    }
    return url.toString();
};
var defaultMapPageUrl = function defaultMapPageUrl2(pageId) {
    if (pageId === void 0) {
        pageId = "";
    }
    pageId = pageId.replace(/-/g, "");
    return "/" + pageId;
};
var isIconBlock = function isIconBlock2(value) {
    return value.type === "page" || value.type === "callout";
};
var PageIcon = function PageIcon2(_ref) {
    var _block$value$format, _block$value$properti;
    var block = _ref.block, className = _ref.className, big = _ref.big, mapImageUrl = _ref.mapImageUrl;
    if (!isIconBlock(block.value)) {
        return null;
    }
    var icon = (_block$value$format = block.value.format) === null || _block$value$format === void 0 ? void 0 : _block$value$format.page_icon;
    var title = (_block$value$properti = block.value.properties) === null || _block$value$properti === void 0 ? void 0 : _block$value$properti.title;
    if (icon === null || icon === void 0 ? void 0 : icon.includes("http")) {
        var url = mapImageUrl(icon, block);
        return createElement("img", {
            className: classNames(className, big ? "notion-page-icon-cover" : "notion-page-icon"),
            src: url,
            alt: title ? getTextContent(title) : "Icon"
        });
    } else {
        return createElement("span", {
            className: classNames(className, "notion-emoji", big ? "notion-page-icon-cover" : "notion-page-icon"),
            role: "img",
            "aria-label": icon
        }, icon);
    }
};
var PageHeader = function PageHeader2(_ref) {
    var blockMap = _ref.blockMap, mapPageUrl = _ref.mapPageUrl, mapImageUrl = _ref.mapImageUrl;
    var blockIds = Object.keys(blockMap);
    var activePageId = blockIds[0];
    if (!activePageId) {
        return null;
    }
    var breadcrumbs = [];
    var currentPageId = activePageId;
    do {
        var _block$value$properti, _block$value$format;
        var block = blockMap[currentPageId];
        if (!block || !block.value) {
            break;
        }
        var title = (_block$value$properti = block.value.properties) === null || _block$value$properti === void 0 ? void 0 : _block$value$properti.title[0][0];
        var icon = (_block$value$format = block.value.format) === null || _block$value$format === void 0 ? void 0 : _block$value$format.page_icon;
        if (!(title || icon)) {
            break;
        }
        breadcrumbs.push({
            block,
            active: currentPageId === activePageId,
            pageId: currentPageId,
            title,
            icon
        });
        var parentId = block.value.parent_id;
        if (!parentId) {
            break;
        }
        currentPageId = parentId;
    }while (true)
    breadcrumbs.reverse();
    return createElement("header", {
        className: "notion-page-header"
    }, createElement("div", {
        className: "notion-nav-breadcrumbs"
    }, breadcrumbs.map(function(breadcrumb, index) {
        return createElement(Fragment, {
            key: breadcrumb.pageId
        }, createElement("a", {
            className: "notion-nav-breadcrumb " + (breadcrumb.active ? "notion-nav-breadcrumb-active" : ""),
            href: breadcrumb.active ? void 0 : mapPageUrl(breadcrumb.pageId)
        }, breadcrumb.icon && createElement(PageIcon, {
            className: "notion-nav-icon",
            block: breadcrumb.block,
            mapImageUrl
        }), breadcrumb.title && createElement("span", {
            className: "notion-nav-title"
        }, breadcrumb.title)), index < breadcrumbs.length - 1 && createElement("span", {
            className: "notion-nav-spacer"
        }, "/"));
    })));
};
var createRenderChildText = function createRenderChildText2(customDecoratorComponents) {
    return function(properties) {
        return properties === null || properties === void 0 ? void 0 : properties.map(function(_ref, i) {
            var text = _ref[0], decorations = _ref[1];
            if (!decorations) {
                return createElement(Fragment, {
                    key: i
                }, text);
            }
            return decorations.reduceRight(function(element, decorator) {
                var renderText = function renderText2() {
                    switch(decorator[0]){
                        case "h":
                            return createElement("span", {
                                key: i,
                                className: "notion-" + decorator[1]
                            }, element);
                        case "c":
                            return createElement("code", {
                                key: i,
                                className: "notion-inline-code"
                            }, element);
                        case "b":
                            return createElement("b", {
                                key: i
                            }, element);
                        case "i":
                            return createElement("em", {
                                key: i
                            }, element);
                        case "s":
                            return createElement("s", {
                                key: i
                            }, element);
                        case "a":
                            return createElement("a", {
                                className: "notion-link",
                                href: decorator[1],
                                key: i
                            }, element);
                        default:
                            return createElement(Fragment, {
                                key: i
                            }, element);
                    }
                };
                var CustomComponent = customDecoratorComponents === null || customDecoratorComponents === void 0 ? void 0 : customDecoratorComponents[decorator[0]];
                if (CustomComponent) {
                    var props = decorator[1] ? {
                        decoratorValue: decorator[1]
                    } : {};
                    return createElement(CustomComponent, Object.assign({
                        key: i
                    }, props, {
                        renderComponent: renderText
                    }), text);
                }
                return renderText();
            }, createElement(Fragment, null, text));
        });
    };
};
var Block = function Block2(props) {
    var block = props.block, children = props.children, level = props.level, fullPage = props.fullPage, hideHeader = props.hideHeader, blockMap = props.blockMap, mapPageUrl = props.mapPageUrl, mapImageUrl = props.mapImageUrl, customBlockComponents = props.customBlockComponents, customDecoratorComponents = props.customDecoratorComponents;
    var blockValue = block === null || block === void 0 ? void 0 : block.value;
    var renderComponent = function renderComponent2() {
        var _blockValue$format, _block$collection, _block$collection2, _collectionView$forma, _collectionView$forma2, _block$collection4, _block$collection6, _blockValue$propertie, _blockValue$format2, _blockValue$format3, _blockValue$format4;
        var renderChildText = createRenderChildText(customDecoratorComponents);
        switch(blockValue === null || blockValue === void 0 ? void 0 : blockValue.type){
            case "page":
                if (level === 0) {
                    if (fullPage) {
                        if (!blockValue.properties) {
                            return null;
                        }
                        var _ref2 = blockValue.format || {}, page_icon = _ref2.page_icon, page_cover = _ref2.page_cover, page_cover_position = _ref2.page_cover_position, page_full_width = _ref2.page_full_width, page_small_text = _ref2.page_small_text;
                        var coverPosition = (1 - (page_cover_position || 0.5)) * 100;
                        return createElement("div", {
                            className: "notion"
                        }, !hideHeader && createElement(PageHeader, {
                            blockMap,
                            mapPageUrl,
                            mapImageUrl
                        }), page_cover && createElement("img", {
                            src: mapImageUrl(page_cover, block),
                            alt: getTextContent(blockValue.properties.title),
                            className: "notion-page-cover",
                            style: {
                                objectPosition: "center " + coverPosition + "%"
                            }
                        }), createElement("main", {
                            className: classNames("notion-page", !page_cover && "notion-page-offset", page_full_width && "notion-full-width", page_small_text && "notion-small-text")
                        }, page_icon && createElement(PageIcon, {
                            className: page_cover ? "notion-page-icon-offset" : void 0,
                            block,
                            big: true,
                            mapImageUrl
                        }), createElement("div", {
                            className: "notion-title"
                        }, renderChildText(blockValue.properties.title)), children));
                    } else {
                        return createElement("main", {
                            className: "notion"
                        }, children);
                    }
                } else {
                    if (!blockValue.properties) return null;
                    return createElement("a", {
                        className: "notion-page-link",
                        href: mapPageUrl(blockValue.id)
                    }, blockValue.format && createElement("div", {
                        className: "notion-page-icon"
                    }, createElement(PageIcon, {
                        block,
                        mapImageUrl
                    })), createElement("div", {
                        className: "notion-page-text"
                    }, renderChildText(blockValue.properties.title)));
                }
            case "header":
                if (!blockValue.properties) return null;
                return createElement("h1", {
                    className: "notion-h1"
                }, renderChildText(blockValue.properties.title));
            case "sub_header":
                if (!blockValue.properties) return null;
                return createElement("h2", {
                    className: "notion-h2"
                }, renderChildText(blockValue.properties.title));
            case "sub_sub_header":
                if (!blockValue.properties) return null;
                return createElement("h3", {
                    className: "notion-h3"
                }, renderChildText(blockValue.properties.title));
            case "divider":
                return createElement("hr", {
                    className: "notion-hr"
                });
            case "text":
                if (!blockValue.properties) {
                    return createElement("div", {
                        className: "notion-blank"
                    }, "\xA0");
                }
                var blockColor = (_blockValue$format = blockValue.format) === null || _blockValue$format === void 0 ? void 0 : _blockValue$format.block_color;
                return createElement("p", {
                    className: classNames("notion-text", blockColor && "notion-" + blockColor)
                }, renderChildText(blockValue.properties.title));
            case "bulleted_list":
            case "numbered_list":
                var wrapList = function wrapList2(content2, start2) {
                    return blockValue.type === "bulleted_list" ? createElement("ul", {
                        className: "notion-list notion-list-disc"
                    }, content2) : createElement("ol", {
                        start: start2,
                        className: "notion-list notion-list-numbered"
                    }, content2);
                };
                var output = null;
                if (blockValue.content) {
                    output = createElement(Fragment, null, blockValue.properties && createElement("li", null, renderChildText(blockValue.properties.title)), wrapList(children));
                } else {
                    output = blockValue.properties ? createElement("li", null, renderChildText(blockValue.properties.title)) : null;
                }
                var isTopLevel = block.value.type !== blockMap[block.value.parent_id].value.type;
                var start = getListNumber(blockValue.id, blockMap);
                return isTopLevel ? wrapList(output, start) : output;
            case "image":
            case "embed":
            case "figma":
            case "video":
                var value = block.value;
                return createElement("figure", {
                    className: "notion-asset-wrapper",
                    style: value.format !== void 0 ? {
                        width: value.format.block_width
                    } : void 0
                }, createElement(Asset, {
                    block,
                    mapImageUrl
                }), value.properties.caption && createElement("figcaption", {
                    className: "notion-image-caption"
                }, renderChildText(value.properties.caption)));
            case "code":
                {
                    if (blockValue.properties.title) {
                        var content = blockValue.properties.title[0][0];
                        var language = blockValue.properties.language[0][0];
                        return createElement(Code, {
                            key: blockValue.id,
                            language: language || "",
                            code: content
                        });
                    }
                    break;
                }
            case "column_list":
                return createElement("div", {
                    className: "notion-row"
                }, children);
            case "column":
                var spacerWith = 46;
                var ratio = blockValue.format.column_ratio;
                var columns = Number((1 / ratio).toFixed(0));
                var spacerTotalWith = (columns - 1) * spacerWith;
                var width = "calc((100% - " + spacerTotalWith + "px) * " + ratio + ")";
                return createElement(Fragment, null, createElement("div", {
                    className: "notion-column",
                    style: {
                        width
                    }
                }, children), createElement("div", {
                    className: "notion-spacer",
                    style: {
                        width: spacerWith
                    }
                }));
            case "quote":
                if (!blockValue.properties) return null;
                return createElement("blockquote", {
                    className: "notion-quote"
                }, renderChildText(blockValue.properties.title));
            case "collection_view":
                if (!block) return null;
                var collectionView = block === null || block === void 0 ? void 0 : (_block$collection = block.collection) === null || _block$collection === void 0 ? void 0 : _block$collection.types[0];
                return createElement("div", null, createElement("h3", {
                    className: "notion-h3"
                }, renderChildText((_block$collection2 = block.collection) === null || _block$collection2 === void 0 ? void 0 : _block$collection2.title)), (collectionView === null || collectionView === void 0 ? void 0 : collectionView.type) === "table" && createElement("div", {
                    style: {
                        maxWidth: "100%",
                        marginTop: 5
                    }
                }, createElement("table", {
                    className: "notion-table"
                }, createElement("thead", null, createElement("tr", {
                    className: "notion-tr"
                }, (_collectionView$forma = collectionView.format) === null || _collectionView$forma === void 0 ? void 0 : (_collectionView$forma2 = _collectionView$forma.table_properties) === null || _collectionView$forma2 === void 0 ? void 0 : _collectionView$forma2.filter(function(p29) {
                    return p29.visible;
                }).map(function(gp, index) {
                    var _block$collection3, _block$collection3$sc;
                    return createElement("th", {
                        className: "notion-th",
                        key: index,
                        style: {
                            minWidth: gp.width
                        }
                    }, (_block$collection3 = block.collection) === null || _block$collection3 === void 0 ? void 0 : (_block$collection3$sc = _block$collection3.schema[gp.property]) === null || _block$collection3$sc === void 0 ? void 0 : _block$collection3$sc.name);
                }))), createElement("tbody", null, block === null || block === void 0 ? void 0 : (_block$collection4 = block.collection) === null || _block$collection4 === void 0 ? void 0 : _block$collection4.data.map(function(row, index) {
                    var _collectionView$forma3, _collectionView$forma4;
                    return createElement("tr", {
                        className: "notion-tr",
                        key: index
                    }, (_collectionView$forma3 = collectionView.format) === null || _collectionView$forma3 === void 0 ? void 0 : (_collectionView$forma4 = _collectionView$forma3.table_properties) === null || _collectionView$forma4 === void 0 ? void 0 : _collectionView$forma4.filter(function(p30) {
                        return p30.visible;
                    }).map(function(gp, index2) {
                        var _block$collection5, _block$collection5$sc;
                        return createElement("td", {
                            key: index2,
                            className: "notion-td " + (gp.property === "title" ? "notion-bold" : "")
                        }, renderChildText(row[(_block$collection5 = block.collection) === null || _block$collection5 === void 0 ? void 0 : (_block$collection5$sc = _block$collection5.schema[gp.property]) === null || _block$collection5$sc === void 0 ? void 0 : _block$collection5$sc.name]));
                    }));
                })))), (collectionView === null || collectionView === void 0 ? void 0 : collectionView.type) === "gallery" && createElement("div", {
                    className: "notion-gallery"
                }, (_block$collection6 = block.collection) === null || _block$collection6 === void 0 ? void 0 : _block$collection6.data.map(function(row, i) {
                    var _collectionView$forma5, _collectionView$forma6;
                    return createElement("div", {
                        key: "col-" + i,
                        className: "notion-gallery-card"
                    }, createElement("div", {
                        className: "notion-gallery-content"
                    }, (_collectionView$forma5 = collectionView.format) === null || _collectionView$forma5 === void 0 ? void 0 : (_collectionView$forma6 = _collectionView$forma5.gallery_properties) === null || _collectionView$forma6 === void 0 ? void 0 : _collectionView$forma6.filter(function(p31) {
                        return p31.visible;
                    }).map(function(gp, idx) {
                        var _block$collection7;
                        return createElement("p", {
                            key: idx + "item",
                            className: "notion-gallery-data " + (idx === 0 ? "is-first" : "")
                        }, getTextContent(row[(_block$collection7 = block.collection) === null || _block$collection7 === void 0 ? void 0 : _block$collection7.schema[gp.property].name]));
                    })));
                })));
            case "callout":
                return createElement("div", {
                    className: classNames("notion-callout", blockValue.format.block_color && "notion-" + blockValue.format.block_color, blockValue.format.block_color && "notion-" + blockValue.format.block_color + "_co")
                }, createElement("div", null, createElement(PageIcon, {
                    block,
                    mapImageUrl
                })), createElement("div", {
                    className: "notion-callout-text"
                }, renderChildText(blockValue.properties.title)));
            case "bookmark":
                var link = blockValue.properties.link;
                var title = (_blockValue$propertie = blockValue.properties.title) !== null && _blockValue$propertie !== void 0 ? _blockValue$propertie : link;
                var description = blockValue.properties.description;
                var block_color = (_blockValue$format2 = blockValue.format) === null || _blockValue$format2 === void 0 ? void 0 : _blockValue$format2.block_color;
                var bookmark_icon = (_blockValue$format3 = blockValue.format) === null || _blockValue$format3 === void 0 ? void 0 : _blockValue$format3.bookmark_icon;
                var bookmark_cover = (_blockValue$format4 = blockValue.format) === null || _blockValue$format4 === void 0 ? void 0 : _blockValue$format4.bookmark_cover;
                return createElement("div", {
                    className: "notion-row"
                }, createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: classNames("notion-bookmark", block_color && "notion-" + block_color),
                    href: link[0][0]
                }, createElement("div", null, createElement("div", {
                    className: "notion-bookmark-title"
                }, renderChildText(title)), description && createElement("div", {
                    className: "notion-bookmark-description"
                }, renderChildText(description)), createElement("div", {
                    className: "notion-bookmark-link"
                }, bookmark_icon && createElement("img", {
                    src: bookmark_icon,
                    alt: getTextContent(title)
                }), createElement("div", null, renderChildText(link)))), bookmark_cover && createElement("div", {
                    className: "notion-bookmark-image"
                }, createElement("img", {
                    src: bookmark_cover,
                    alt: getTextContent(title)
                }))));
            case "toggle":
                return createElement("details", {
                    className: "notion-toggle"
                }, createElement("summary", null, renderChildText(blockValue.properties.title)), createElement("div", null, children));
            default:
                return createElement("div", null);
        }
        return null;
    };
    if (customBlockComponents && customBlockComponents[blockValue === null || blockValue === void 0 ? void 0 : blockValue.type] && level !== 0) {
        var CustomComponent = customBlockComponents[blockValue === null || blockValue === void 0 ? void 0 : blockValue.type];
        return createElement(CustomComponent, {
            renderComponent,
            blockMap,
            blockValue,
            level
        }, children);
    }
    return renderComponent();
};
var NotionRenderer = function NotionRenderer2(_ref) {
    var _currentBlock$value, _currentBlock$value$c;
    var _ref$level = _ref.level, level = _ref$level === void 0 ? 0 : _ref$level, currentId = _ref.currentId, _ref$mapPageUrl = _ref.mapPageUrl, mapPageUrl = _ref$mapPageUrl === void 0 ? defaultMapPageUrl : _ref$mapPageUrl, _ref$mapImageUrl = _ref.mapImageUrl, mapImageUrl = _ref$mapImageUrl === void 0 ? defaultMapImageUrl : _ref$mapImageUrl, props = _objectWithoutPropertiesLoose(_ref, [
        "level",
        "currentId",
        "mapPageUrl",
        "mapImageUrl"
    ]);
    var blockMap = props.blockMap;
    var id = currentId || Object.keys(blockMap)[0];
    var currentBlock = blockMap[id];
    if (!currentBlock) {
        return null;
    }
    return react.createElement(Block, Object.assign({
        key: id,
        level,
        block: currentBlock,
        mapPageUrl,
        mapImageUrl
    }, props), currentBlock === null || currentBlock === void 0 ? void 0 : (_currentBlock$value = currentBlock.value) === null || _currentBlock$value === void 0 ? void 0 : (_currentBlock$value$c = _currentBlock$value.content) === null || _currentBlock$value$c === void 0 ? void 0 : _currentBlock$value$c.map(function(contentId) {
        return react.createElement(NotionRenderer2, Object.assign({
            key: contentId,
            currentId: contentId,
            level: level + 1,
            mapPageUrl,
            mapImageUrl
        }, props));
    }));
};
function Navigation() {
    const [open, setOpen] = Ue.useState(false);
    return Ue.createElement(Ue.Fragment, null, Ue.createElement("nav", {
        className: "nav"
    }, Ue.createElement("div", {
        className: "nav--content"
    }, Ue.createElement(G3, {
        to: "/"
    }, "😎 Ayo Reis."), Ue.createElement(G3, {
        to: "/about"
    }, "❤️ About."), Ue.createElement("address", null, Ue.createElement("a", {
        href: "//github.com/ayoreis"
    }, "🐈‍⬛ GitHub.")))));
}
const Footer = ()=>{
    return Ue.createElement("footer", {
        className: "main"
    }, Ue.createElement("p", null, "Made with ❤️ by ", Ue.createElement(F, {
        to: "/"
    }, "Ayo"), "."));
};
function Article({ props , blocks  }) {
    return Ue.createElement("article", {
        className: `post post--article post--${blocks ? 'full' : 'mini'}`
    }, Ue.createElement("header", {
        className: "post__header"
    }, blocks && Ue.createElement("img", {
        className: "post__media",
        src: props.media,
        alt: props.mediaAlt
    }), Ue.createElement("time", {
        className: "post__date",
        dateTime: props.date
    }, props.date), Ue.createElement("h3", {
        className: "post__name"
    }, blocks ? props.name : Ue.createElement(F, {
        to: `/${props.slug}`
    }, props.name))), blocks && Ue.createElement(Ue.Fragment, null, Ue.createElement("div", {
        className: "post__content"
    }, Ue.createElement(NotionRenderer, {
        blockMap: blocks
    })), Ue.createElement("footer", {
        className: "post__footer"
    }, Ue.createElement(F, {
        to: "/"
    }, "⬅️ Home."))));
}
function Media({ props , blocks  }) {
    const navigate = q2();
    return Ue.createElement("article", {
        className: `post post--media post--${blocks ? 'full' : 'mini'}`
    }, Ue.createElement("header", {
        className: "post__header"
    }, Ue.createElement("img", {
        alt: props.mediaAlt,
        onClick: ()=>navigate(`/${props.slug}`)
        ,
        className: "post__media",
        src: props.media
    })), blocks && Ue.createElement(Ue.Fragment, null, Ue.createElement("div", {
        className: "post__content"
    }, Ue.createElement("time", {
        className: "post__date",
        dateTime: props.date
    }, props.date), Ue.createElement("h3", {
        className: "post__name"
    }, props.name), Ue.createElement(NotionRenderer, {
        blockMap: blocks
    })), Ue.createElement("footer", {
        className: "post__footer"
    }, Ue.createElement(F, {
        to: "/"
    }, "⬅️ Home."))));
}
function Home() {
    const [posts, setPosts] = Ue.useState();
    Ue.useEffect(()=>{
        fetch('/api').then((response)=>response.json()
        ).then((props)=>{
            setPosts(props);
        });
    }, []);
    return Ue.createElement(Ue.Fragment, null, Ue.createElement("header", {
        className: "main"
    }, Ue.createElement("h1", null, "Hello, world!", Ue.createElement("br", null), "I am Ayo,", Ue.createElement("br", null), "I make stuff.")), Ue.createElement("section", {
        className: "posts"
    }, Ue.createElement("div", {
        className: "posts--content"
    }, !posts ? Ue.createElement("p", null, "Loading...") : posts.map((post)=>{
        return post.type === 'Article' ? Ue.createElement(Article, {
            props: post
        }) : Ue.createElement(Media, {
            props: post
        });
    }))));
}
function NotFound() {
    return Ue.createElement("h1", {
        className: "not-found"
    }, "🤯 404...");
}
function Post() {
    const { slug  } = _e2();
    const [post, setPost] = Ue.useState();
    Ue.useEffect(()=>{
        fetch(`/api/${slug}`).then(async (response)=>{
            if (response.ok) {
                setPost(await response.json());
            } else {
                setPost(404);
            }
        });
    }, []);
    return !post ? Ue.createElement("p", null, "Loading...") : post === 404 ? Ue.createElement(NotFound, null) : post.props.type === 'Article' ? Ue.createElement(Article, Object.assign({}, post)) : Ue.createElement(Media, Object.assign({}, post));
}
function Document() {
    return Ue.createElement("html", {
        lang: "en"
    }, Ue.createElement("head", null, Ue.createElement("meta", {
        charSet: "UTF-8"
    }), Ue.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
    }), Ue.createElement("title", null, "Document"), Ue.createElement("script", {
        defer: true,
        type: "module",
        src: "script.js"
    }), Ue.createElement("link", {
        rel: "stylesheet",
        href: "/styles.css"
    }), Ue.createElement("script", {
        "data-no-cookie": true,
        async: true,
        src: "https://cdn.splitbee.io/sb.js"
    })), Ue.createElement("body", null, Ue.createElement(Navigation, null), Ue.createElement("main", null, Ue.createElement(Pe2, null, Ue.createElement(A1, {
        index: true,
        element: Ue.createElement(Home, null)
    }), Ue.createElement(A1, {
        path: "/:slug",
        element: Ue.createElement(Post, null)
    }))), Ue.createElement(Footer, null)));
}
Qf.hydrate(Ue.createElement(Y1, null, Ue.createElement(Document, null)), document.documentElement);
