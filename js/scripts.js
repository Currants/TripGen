/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
    var n, r, i = typeof t,
        o = e.document,
        a = e.location,
        s = e.jQuery,
        u = e.$,
        l = {}, c = [],
        p = "1.9.1",
        f = c.concat,
        d = c.push,
        h = c.slice,
        g = c.indexOf,
        m = l.toString,
        y = l.hasOwnProperty,
        v = p.trim,
        b = function (e, t) {
            return new b.fn.init(e, t, r)
        }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,

        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        j = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function (e, t) {
            return t.toUpperCase()
        }, H = function (e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
        }, q = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function (e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                        for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return h.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return b.each(this, e, t)
        },
        ready: function (e) {
            return b.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, b.extend({
        noConflict: function (t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === b.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || y.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && b.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: v && !v.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : v.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return f.apply([], s)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(b(e), n)
            })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n)
            if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
        else {
            o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var r = !1;
            try {
                r = null == e.frameElement && o.documentElement
            } catch (i) {}
            r && r.doScroll && function a() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    q(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    b.Callbacks = function (e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [],
            l = !e.once && [],
            c = function (t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
            }, p = {
                add: function () {
                    if (u) {
                        var t = u.length;
                        (function i(t) {
                            b.each(t, function (t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = u.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function () {
                    return u && b.each(arguments, function (e, t) {
                        var r;
                        while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], this
                },
                disable: function () {
                    return u = l = r = t, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return l = t, r || p.disable(), this
                },
                locked: function () {
                    return !l
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    }, b.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                ["notify", "progress", b.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, o) {
                                var a = o[0],
                                    s = b.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, b.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = h.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : b.Deferred(),
                a = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, s, u, l;
            if (r > 1)
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), b.support = function () {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !! d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: !! a.value,
            optSelected: l.selected,
            enctype: !! o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }), n = s = u = l = r = a = null, t
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? b.cache : e,
                u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return
                }(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !! e && !$(e)
        },
        data: function (e, t, n) {
            return P(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0],
                a = 0,
                s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    b.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t),
                a = function () {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = b.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g,
        U = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i,
        Q = b.support.getSetAttribute,
        K = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = b.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var o, a = 0,
                        s = b(this),
                        u = t,
                        l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(w);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), z = {
        get: function (e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, K && Q || (b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }), Q || (I = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: I.get,
        set: function (e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }
    b.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && b.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""], l = t.length;
                while (l--)
                    if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o],
                g = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u], f && (i[u] = null), b.event.triggered = g;
                    try {
                        i[g]()
                    } catch (v) {}
                    b.event.triggered = t, f && (i[u] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [],
                u = h.call(arguments),
                l = (b._data(this, "events") || {})[e.type] || [],
                c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type,
                a = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
            while (t--) n = r[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, a, s = n.button,
                    u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function () {
                    if (this !== o.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function (e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    }, b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
        b.event.special[t] = {
            setup: function () {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return b().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                b.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }),
    function (e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
            w = e.document,
            T = {}, N = 0,
            C = 0,
            k = it(),
            E = it(),
            S = it(),
            A = typeof t,
            j = 1 << 31,
            D = [],
            L = D.pop,
            H = D.push,
            q = D.slice,
            M = D.indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, _ = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = F.replace("w", "w#"),
            B = "([*^$|!~]?=)",
            P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
            R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
            W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            $ = RegExp("^" + _ + "*," + _ + "*"),
            I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
            z = RegExp(R),
            X = RegExp("^" + O + "$"),
            U = {
                ID: RegExp("^#(" + F + ")"),
                CLASS: RegExp("^\\.(" + F + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + P),
                PSEUDO: RegExp("^" + R),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            }, V = /[\x20\t\r\n\f]*[+~]/,
            Y = /^[^{]+\{\s*\[native code/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /'|\\/g,
            Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            tt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            q = function (e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n
            }
        }

        function rt(e) {
            return Y.test(e + "")
        }

        function it() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function ot(e) {
            return e[x] = !0, e
        }

        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!d && !r) {
                if (i = J.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                        if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                    }
                if (T.qsa && !h.test(e)) {
                    if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                        while (u--) l[u] = g + dt(l[u]);
                        m = V.test(e) && t.parentNode || t, v = l.join(",")
                    }
                    if (v) try {
                        return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                    } catch (b) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r)
        }
        a = st.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, c = st.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), T.attributes = at(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), T.getByClassName = at(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), T.getByName = at(function (e) {
                e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
            }), i.attrHandle = at(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            }, T.getIdNotName ? (i.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function (e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = T.tagNameNoComments ? function (e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, i.find.NAME = T.getByName && function (e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
            }, i.find.CLASS = T.getByClassName && function (e, n) {
                return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
            }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
            }), at(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
                T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
            }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, v = f.compareDocumentPosition ? function (e, t) {
                var r;
                return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (e === t) return u = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return ut(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
        }, st.matches = function (e, t) {
            return st(e, null, null, t)
        }, st.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                var n = m.call(e, t);
                if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return st(t, p, null, [e]).length > 0
        }, st.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t)
        }, st.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, st.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, st.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            if (u = !T.detectDuplicates, e.sort(v), u) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        };

        function ut(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function lt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function ct(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pt(e) {
            return ot(function (t) {
                return t = +t, ot(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        o = st.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += o(t);
            return n
        }, i = st.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: U,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = st.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [N, d, f];
                                        break
                                    }
                            } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
                        var i, o = r(e, t),
                            a = o.length;
                        while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ot(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: ot(function (e) {
                    return function (t) {
                        return st(e, t).length > 0
                    }
                }),
                contains: ot(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: ot(function (e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                    function (t) {
                        var n;
                        do
                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === f
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                header: function (e) {
                    return Q.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: pt(function () {
                    return [0]
                }),
                last: pt(function (e, t) {
                    return [t - 1]
                }),
                eq: pt(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: pt(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: pt(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: pt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: pt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = lt(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = ct(n);

        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = i.preFilter;
            while (s) {
                (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), s = s.slice(n.length));
                for (a in i.filter)!(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
        }

        function dt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function ht(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                a = C++;
            return t.first ? function (t, n, r) {
                while (t = t[i])
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i])
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    while (t = t[i])
                        if (1 === t.nodeType || o)
                            if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                if ((u = l[1]) === !0 || u === r) return u === !0
                            } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
            }
        }

        function gt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function mt(e, t, n, r, i) {
            var o, a = [],
                s = 0,
                u = e.length,
                l = null != t;
            for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
                var l, c, p, f = [],
                    d = [],
                    h = a.length,
                    g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : mt(g, f, e, s, u),
                    y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u), r) {
                    l = mt(y, d), r(l, [], s, u), c = l.length;
                    while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--)(p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                    }
                } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
            })
        }

        function vt(e) {
            var t, n, r, o = e.length,
                a = i.relative[e[0].type],
                s = a || i.relative[" "],
                u = a ? 1 : 0,
                c = ht(function (e) {
                    return e === t
                }, s, !0),
                p = ht(function (e) {
                    return M.call(t, e) > -1
                }, s, !0),
                f = [

                    function (e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }
                ];
            for (; o > u; u++)
                if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                else {
                    if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                        for (r = ++u; o > r; r++)
                            if (i.relative[e[r].type]) break;
                        return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                    }
                    f.push(n)
                }
            return gt(f)
        }

        function bt(e, t) {
            var n = 0,
                o = t.length > 0,
                a = e.length > 0,
                s = function (s, u, c, f, d) {
                    var h, g, m, y = [],
                        v = 0,
                        b = "0",
                        x = s && [],
                        w = null != d,
                        T = l,
                        C = s || a && i.find.TAG("*", d && u.parentNode || u),
                        k = N += null == T ? 1 : Math.random() || .1;
                    for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                        if (a && h) {
                            g = 0;
                            while (m = e[g++])
                                if (m(h, u, c)) {
                                    f.push(h);
                                    break
                                }
                            w && (N = k, r = ++n)
                        }
                        o && ((h = !m && h) && v--, s && x.push(h))
                    }
                    if (v += b, o && b !== v) {
                        g = 0;
                        while (m = t[g++]) m(x, y, u, c);
                        if (s) {
                            if (v > 0)
                                while (b--) x[b] || y[b] || (y[b] = L.call(f));
                            y = mt(y)
                        }
                        H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                    }
                    return w && (N = k, l = T), x
                };
            return o ? ot(s) : s
        }
        s = st.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = ft(e)), n = t.length;
                while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                o = S(e, bt(i, r))
            }
            return o
        };

        function xt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; i > r; r++) st(e, t[r], n);
            return n
        }

        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(a.shift().value.length)
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], i.relative[l = u.type]) break;
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                        break
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)), n
        }
        i.pseudos.nth = i.pseudos.eq;

        function Tt() {}
        i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
    }(e);
    var at = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        lt = b.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function (e) {
            return pt(e, "nextSibling")
        },
        prev: function (e) {
            return pt(e, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, jt = dt(o),
        Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0,
                p = this.length,
                d = this,
                h = p - 1,
                g = e[0],
                m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
                a = b._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                o = b(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
                else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                b.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function (e, t) {
            var n, r, o, a, s = 0,
                u = b.expando,
                l = b.cache,
                p = b.support.deleteExpando,
                f = b.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Kt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n),
                    l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : o.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o,
            n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }
    b.each(["height", "width"], function (e, n) {
        b.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
            b.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), b.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = b.fn.load,
        An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    b.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                h = b.Deferred(),
                g = b.Callbacks("once memory"),
                m = p.statusCode || {}, y = {}, v = {}, x = 0,
                T = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else N.always(e[N.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        }
    });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {}, s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + l + " to " + r
                            }
                        }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || b.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !! Rn && "withCredentials" in Rn, Rn = b.support.ajax = !! Rn, Rn && b.ajaxTransport(function (n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [

                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = Yn.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = b.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function (t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = b.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                for (; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }
    b.Animation = b.extend(er, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
            d = e.style,
            h = {}, g = [],
            m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
            c.unqueued || p()
        }), c.unqueued++, f.always(function () {
            f.always(function () {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
                b(e).hide()
            }), f.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e),
                o = b.speed(t, n, r),
                a = function () {
                    var t = er(this, b.extend({}, e), o);
                    a.finish = function () {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = b.timers,
                    a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval(Un), Un = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            }, a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                o = i.offset(),
                a = b.css(e, "top"),
                s = b.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                l = {}, c = {}, p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function (i) {
            return b.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            b.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window);
/*! jQuery Mobile 1.3.1 | Git HEAD hash: 74b4bec <> 2013-04-10T21:57:23Z | (c) 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */
(function (e, t, i) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return i(n, e, t), n.mobile
    }) : i(e.jQuery, e, t)
})(this, document, function (e, t, i, n) {
    (function (e) {
        e.mobile = {}
    })(e),
    function (e, t, n) {
        var a = {};
        e.mobile = e.extend(e.mobile, {
            version: "1.3.1",
            ns: "",
            subPageUrlKey: "ui-page",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 250,
            touchOverflowEnabled: !1,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "e",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            orientationChangeEnabled: !0,
            buttonMarkup: {
                hoverDelay: 200
            },
            window: e(t),
            document: e(i),
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            behaviors: {},
            silentScroll: function (i) {
                "number" !== e.type(i) && (i = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function () {
                    t.scrollTo(0, i), e.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: i
                    })
                }, 20), setTimeout(function () {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            nsNormalizeDict: a,
            nsNormalize: function (t) {
                return t ? a[t] || (a[t] = e.camelCase(e.mobile.ns + t)) : n
            },
            getInheritedTheme: function (e, t) {
                for (var i, n, a = e[0], o = "", s = /ui-(bar|body|overlay)-([a-z])\b/; a && (i = a.className || "", !(i && (n = s.exec(i)) && (o = n[2])));) a = a.parentNode;
                return o || t || "a"
            },
            closestPageData: function (e) {
                return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")
            },
            enhanceable: function (e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function (e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function (t, i) {
                if (!e.mobile.ignoreContentEnabled) return t;
                for (var n, a, o, s = t.length, r = e(), l = 0; s > l; l++) {
                    for (a = t.eq(l), o = !1, n = t[l]; n;) {
                        var d = n.getAttribute ? n.getAttribute("data-" + e.mobile.ns + i) : "";
                        if ("false" === d) {
                            o = !0;
                            break
                        }
                        n = n.parentNode
                    }
                    o || (r = r.add(a))
                }
                return r
            },
            getScreenHeight: function () {
                return t.innerHeight || e.mobile.window.height()
            }
        }, e.mobile), e.fn.jqmData = function (t, i) {
            var a;
            return t !== n && (t && (t = e.mobile.nsNormalize(t)), a = 2 > arguments.length || i === n ? this.data(t) : this.data(t, i)), a
        }, e.jqmData = function (t, i, a) {
            var o;
            return i !== n && (o = e.data(t, i ? e.mobile.nsNormalize(i) : i, a)), o
        }, e.fn.jqmRemoveData = function (t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }, e.jqmRemoveData = function (t, i) {
            return e.removeData(t, e.mobile.nsNormalize(i))
        }, e.fn.removeWithDependents = function () {
            e.removeWithDependents(this)
        }, e.removeWithDependents = function (t) {
            var i = e(t);
            (i.jqmData("dependents") || e()).remove(), i.remove()
        }, e.fn.addDependents = function (t) {
            e.addDependents(e(this), t)
        }, e.addDependents = function (t, i) {
            var n = e(t).jqmData("dependents") || e();
            e(t).jqmData("dependents", e.merge(n, i))
        }, e.fn.getEncodedText = function () {
            return e("<div/>").text(e(this).text()).html()
        }, e.fn.jqmEnhanceable = function () {
            return e.mobile.enhanceable(this)
        }, e.fn.jqmHijackable = function () {
            return e.mobile.hijackable(this)
        };
        var o = e.find,
            s = /:jqmData\(([^)]*)\)/g;
        e.find = function (t, i, n, a) {
            return t = t.replace(s, "[data-" + (e.mobile.ns || "") + "$1]"), o.call(this, t, i, n, a)
        }, e.extend(e.find, o), e.find.matches = function (t, i) {
            return e.find(t, null, null, i)
        }, e.find.matchesSelector = function (t, i) {
            return e.find(i, null, null, [t]).length > 0
        }
    }(e, this),
    function (e, t) {
        var i = 0,
            n = Array.prototype.slice,
            a = e.cleanData;
        e.cleanData = function (t) {
            for (var i, n = 0; null != (i = t[n]); n++) try {
                e(i).triggerHandler("remove")
            } catch (o) {}
            a(t)
        }, e.widget = function (i, n, a) {
            var o, s, r, l, d = i.split(".")[0];
            i = i.split(".")[1], o = d + "-" + i, a || (a = n, n = e.Widget), e.expr[":"][o.toLowerCase()] = function (t) {
                return !!e.data(t, o)
            }, e[d] = e[d] || {}, s = e[d][i], r = e[d][i] = function (e, i) {
                return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new r(e, i)
            }, e.extend(r, s, {
                version: a.version,
                _proto: e.extend({}, a),
                _childConstructors: []
            }), l = new n, l.options = e.widget.extend({}, l.options), e.each(a, function (t, i) {
                e.isFunction(i) && (a[t] = function () {
                    var e = function () {
                        return n.prototype[t].apply(this, arguments)
                    }, a = function (e) {
                            return n.prototype[t].apply(this, e)
                        };
                    return function () {
                        var t, n = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = a, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                    }
                }())
            }), r.prototype = e.widget.extend(l, {
                widgetEventPrefix: s ? l.widgetEventPrefix : i
            }, a, {
                constructor: r,
                namespace: d,
                widgetName: i,
                widgetFullName: o
            }), s ? (e.each(s._childConstructors, function (t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, r, i._proto)
            }), delete s._childConstructors) : n._childConstructors.push(r), e.widget.bridge(i, r)
        }, e.widget.extend = function (i) {
            for (var a, o, s = n.call(arguments, 1), r = 0, l = s.length; l > r; r++)
                for (a in s[r]) o = s[r][a], s[r].hasOwnProperty(a) && o !== t && (i[a] = e.isPlainObject(o) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], o) : e.widget.extend({}, o) : o);
            return i
        }, e.widget.bridge = function (i, a) {
            var o = a.prototype.widgetFullName || i;
            e.fn[i] = function (s) {
                var r = "string" == typeof s,
                    l = n.call(arguments, 1),
                    d = this;
                return s = !r && l.length ? e.widget.extend.apply(null, [s].concat(l)) : s, r ? this.each(function () {
                    var n, a = e.data(this, o);
                    return a ? e.isFunction(a[s]) && "_" !== s.charAt(0) ? (n = a[s].apply(a, l), n !== a && n !== t ? (d = n && n.jquery ? d.pushStack(n.get()) : n, !1) : t) : e.error("no such method '" + s + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + s + "'")
                }) : this.each(function () {
                    var t = e.data(this, o);
                    t ? t.option(s || {})._init() : e.data(this, o, new a(s, this))
                }), d
            }
        }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (t, n) {
                n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === n && this.destroy()
                    }
                }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (i, n) {
                var a, o, s, r = i;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof i)
                    if (r = {}, a = i.split("."), i = a.shift(), a.length) {
                        for (o = r[i] = e.widget.extend({}, this.options[i]), s = 0; a.length - 1 > s; s++) o[a[s]] = o[a[s]] || {}, o = o[a[s]];
                        if (i = a.pop(), n === t) return o[i] === t ? null : o[i];
                        o[i] = n
                    } else {
                        if (n === t) return this.options[i] === t ? null : this.options[i];
                        r[i] = n
                    }
                return this._setOptions(r), this
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (i, n, a) {
                var o, s = this;
                "boolean" != typeof i && (a = n, n = i, i = !1), a ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (a = n, n = this.element, o = this.widget()), e.each(a, function (a, r) {
                    function l() {
                        return i || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : t
                    }
                    "string" != typeof r && (l.guid = r.guid = r.guid || l.guid || e.guid++);
                    var d = a.match(/^(\w+)\s*(.*)$/),
                        c = d[1] + s.eventNamespace,
                        h = d[2];
                    h ? o.delegate(h, c, l) : n.bind(c, l)
                })
            },
            _off: function (e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (t, i, n) {
                var a, o, s = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (a in o) a in i || (i[a] = o[a]);
                return this.element.trigger(i, n), !(e.isFunction(s) && s.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (t, i) {
            e.Widget.prototype["_" + t] = function (n, a, o) {
                "string" == typeof a && (a = {
                    effect: a
                });
                var s, r = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
                a = a || {}, "number" == typeof a && (a = {
                    duration: a
                }), s = !e.isEmptyObject(a), a.complete = o, a.delay && n.delay(a.delay), s && e.effects && e.effects.effect[r] ? n[t](a) : r !== t && n[r] ? n[r](a.duration, a.easing, o) : n.queue(function (i) {
                    e(this)[t](), o && o.call(n[0]), i()
                })
            }
        })
    }(e),
    function (e, t) {
        e.widget("mobile.widget", {
            _createWidget: function () {
                e.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            },
            _getCreateOptions: function () {
                var i = this.element,
                    n = {};
                return e.each(this.options, function (e) {
                    var a = i.jqmData(e.replace(/[A-Z]/g, function (e) {
                        return "-" + e.toLowerCase()
                    }));
                    a !== t && (n[e] = a)
                }), n
            },
            enhanceWithin: function (t, i) {
                this.enhance(e(this.options.initSelector, e(t)), i)
            },
            enhance: function (t, i) {
                var n, a, o = e(t);
                o = e.mobile.enhanceable(o), i && o.length && (n = e.mobile.closestPageData(o), a = n && n.keepNativeSelector() || "", o = o.not(a)), o[this.widgetName]()
            },
            raise: function (e) {
                throw "Widget [" + this.widgetName + "]: " + e
            }
        })
    }(e),
    function (e) {
        e.extend(e.mobile, {
            loadingMessageTextVisible: n,
            loadingMessageTheme: n,
            loadingMessage: n,
            showPageLoadingMsg: function (t, i, n) {
                e.mobile.loading("show", t, i, n)
            },
            hidePageLoadingMsg: function () {
                e.mobile.loading("hide")
            },
            loading: function () {
                this.loaderWidget.loader.apply(this.loaderWidget, arguments)
            }
        });
        var t = "ui-loader",
            i = e("html"),
            a = e.mobile.window;
        e.widget("mobile.loader", {
            options: {
                theme: "a",
                textVisible: !1,
                html: "",
                text: "loading"
            },
            defaultHtml: "<div class='" + t + "'>" + "<span class='ui-icon ui-icon-loading'></span>" + "<h1></h1>" + "</div>",
            fakeFixLoader: function () {
                var t = e("." + e.mobile.activeBtnClass).first();
                this.element.css({
                    top: e.support.scrollTop && a.scrollTop() + a.height() / 2 || t.length && t.offset().top || 100
                })
            },
            checkLoaderPosition: function () {
                var t = this.element.offset(),
                    i = a.scrollTop(),
                    n = e.mobile.getScreenHeight();
                (i > t.top || t.top - i > n) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), a.unbind("scroll", this.checkLoaderPosition).bind("scroll", e.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function () {
                this.element.html(e(this.defaultHtml).html())
            },
            show: function (o, s, r) {
                var l, d, c;
                this.resetHtml(), "object" === e.type(o) ? (c = e.extend({}, this.options, o), o = c.theme || e.mobile.loadingMessageTheme) : (c = this.options, o = o || e.mobile.loadingMessageTheme || c.theme), d = s || e.mobile.loadingMessage || c.text, i.addClass("ui-loading"), (e.mobile.loadingMessage !== !1 || c.html) && (l = e.mobile.loadingMessageTextVisible !== n ? e.mobile.loadingMessageTextVisible : c.textVisible, this.element.attr("class", t + " ui-corner-all ui-body-" + o + " ui-loader-" + (l || s || o.text ? "verbose" : "default") + (c.textonly || r ? " ui-loader-textonly" : "")), c.html ? this.element.html(c.html) : this.element.find("h1").text(d), this.element.appendTo(e.mobile.pageContainer), this.checkLoaderPosition(), a.bind("scroll", e.proxy(this.checkLoaderPosition, this)))
            },
            hide: function () {
                i.removeClass("ui-loading"), e.mobile.loadingMessage && this.element.removeClass("ui-loader-fakefix"), e.mobile.window.unbind("scroll", this.fakeFixLoader), e.mobile.window.unbind("scroll", this.checkLoaderPosition)
            }
        }), a.bind("pagecontainercreate", function () {
            e.mobile.loaderWidget = e.mobile.loaderWidget || e(e.mobile.loader.prototype.defaultHtml).loader()
        })
    }(e, this),
    function (e, t, n) {
        function a(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var o, s = "hashchange",
            r = i,
            l = e.event.special,
            d = r.documentMode,
            c = "on" + s in t && (d === n || d > 7);
        e.fn[s] = function (e) {
            return e ? this.bind(s, e) : this.trigger(s)
        }, e.fn[s].delay = 50, l[s] = e.extend(l[s], {
            setup: function () {
                return c ? !1 : (e(o.start), n)
            },
            teardown: function () {
                return c ? !1 : (e(o.stop), n)
            }
        }), o = function () {
            function i() {
                var n = a(),
                    r = p(d);
                n !== d ? (u(d = n, r), e(t).trigger(s)) : r !== d && (location.href = location.href.replace(/#.*/, "") + r), o = setTimeout(i, e.fn[s].delay)
            }
            var o, l = {}, d = a(),
                h = function (e) {
                    return e
                }, u = h,
                p = h;
            return l.start = function () {
                o || i()
            }, l.stop = function () {
                o && clearTimeout(o), o = n
            }, t.attachEvent && !t.addEventListener && !c && function () {
                var t, n;
                l.start = function () {
                    t || (n = e.fn[s].src, n = n && n + a(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        n || u(a()), i()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow, r.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (t.document.title = r.title)
                        } catch (e) {}
                    })
                }, l.stop = h, p = function () {
                    return a(t.location.href)
                }, u = function (i, n) {
                    var a = t.document,
                        o = e.fn[s].domain;
                    i !== n && (a.title = r.title, a.open(), o && a.write('<script>document.domain="' + o + '"</script>'), a.close(), t.location.hash = i)
                }
            }(), l
        }()
    }(e, this),
    function (e) {
        t.matchMedia = t.matchMedia || function (e) {
            var t, i = e.documentElement,
                n = i.firstElementChild || i.firstChild,
                a = e.createElement("body"),
                o = e.createElement("div");
            return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(o),
            function (e) {
                return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(a, n), t = 42 === o.offsetWidth, i.removeChild(a), {
                    matches: t,
                    media: e
                }
            }
        }(i), e.mobile.media = function (e) {
            return t.matchMedia(e).matches
        }
    }(e),
    function (e) {
        var t = {
            touch: "ontouchend" in i
        };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, t), e.extend(e.mobile.support, t)
    }(e),
    function (e) {
        e.extend(e.support, {
            orientation: "orientation" in t && "onorientationchange" in t
        })
    }(e),
    function (e, n) {
        function a(e) {
            var t = e.charAt(0).toUpperCase() + e.substr(1),
                i = (e + " " + p.join(t + " ") + t).split(" ");
            for (var a in i)
                if (u[i[a]] !== n) return !0
        }

        function o(e, t, n) {
            for (var a, o = i.createElement("div"), s = function (e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                }, r = function (e) {
                    return "" === e ? "" : "-" + e.charAt(0).toLowerCase() + e.substr(1) + "-"
                }, l = function (i) {
                    var n = r(i) + e + ": " + t + ";",
                        l = s(i),
                        d = l + ("" === l ? e : s(e));
                    o.setAttribute("style", n), o.style[d] && (a = !0)
                }, d = n ? n : p, c = 0; d.length > c; c++) l(d[c]);
            return !!a
        }

        function s() {
            var a = "transform-3d",
                o = e.mobile.media("(-" + p.join("-" + a + "),(-") + "-" + a + "),(" + a + ")");
            if (o) return !!o;
            var s = i.createElement("div"),
                r = {
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            h.append(s);
            for (var l in r) s.style[l] !== n && (s.style[l] = "translate3d( 100px, 1px, 1px )", o = t.getComputedStyle(s).getPropertyValue(r[l]));
            return !!o && "none" !== o
        }

        function r() {
            var t, i, n = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
                a = e("head base"),
                o = null,
                s = "";
            return a.length ? s = a.attr("href") : a = o = e("<base>", {
                href: n
            }).appendTo("head"), t = e("<a href='testurl' />").prependTo(h), i = t[0].href, a[0].href = s || location.pathname, o && o.remove(), 0 === i.indexOf(n)
        }

        function l() {
            var e, n = i.createElement("x"),
                a = i.documentElement,
                o = t.getComputedStyle;
            return "pointerEvents" in n.style ? (n.style.pointerEvents = "auto", n.style.pointerEvents = "x", a.appendChild(n), e = o && "auto" === o(n, "").pointerEvents, a.removeChild(n), !! e) : !1
        }

        function d() {
            var e = i.createElement("div");
            return e.getBoundingClientRect !== n
        }

        function c() {
            var e = t,
                i = navigator.userAgent,
                n = navigator.platform,
                a = i.match(/AppleWebKit\/([0-9]+)/),
                o = !! a && a[1],
                s = i.match(/Fennec\/([0-9]+)/),
                r = !! s && s[1],
                l = i.match(/Opera Mobi\/([0-9]+)/),
                d = !! l && l[1];
            return (n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && o && 534 > o || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || l && 7458 > d || i.indexOf("Android") > -1 && o && 533 > o || r && 6 > r || "palmGetResource" in t && o && 534 > o || i.indexOf("MeeGo") > -1 && i.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }
        var h = e("<body>").prependTo("html"),
            u = h[0].style,
            p = ["Webkit", "Moz", "O"],
            m = "palmGetResource" in t,
            f = t.opera,
            g = t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini),
            b = t.blackberry && !a("-webkit-transform");
        e.extend(e.mobile, {
            browser: {}
        }), e.mobile.browser.oldIE = function () {
            var e = 3,
                t = i.createElement("div"),
                n = t.all || [];
            do t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->"; while (n[0]);
            return e > 4 ? e : !e
        }(), e.extend(e.support, {
            cssTransitions: "WebKitTransitionEvent" in t || o("transition", "height 100ms linear", ["Webkit", "Moz", ""]) && !e.mobile.browser.oldIE && !f,
            pushState: "pushState" in history && "replaceState" in history && !(t.navigator.userAgent.indexOf("Firefox") >= 0 && t.top !== t) && -1 === t.navigator.userAgent.search(/CriOS/),
            mediaquery: e.mobile.media("only all"),
            cssPseudoElement: !! a("content"),
            touchOverflow: !! a("overflowScrolling"),
            cssTransform3d: s(),
            boxShadow: !! a("boxShadow") && !b,
            fixedPosition: c(),
            scrollTop: ("pageXOffset" in t || "scrollTop" in i.documentElement || "scrollTop" in h[0]) && !m && !g,
            dynamicBaseTag: r(),
            cssPointerEvents: l(),
            boundingRect: d()
        }), h.remove();
        var v = function () {
            var e = t.navigator.userAgent;
            return e.indexOf("Nokia") > -1 && (e.indexOf("Symbian/3") > -1 || e.indexOf("Series60/5") > -1) && e.indexOf("AppleWebKit") > -1 && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }();
        e.mobile.gradeA = function () {
            return (e.support.mediaquery || e.mobile.browser.oldIE && e.mobile.browser.oldIE >= 7) && (e.support.boundingRect || null !== e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || g || v, v && e(function () {
            e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), e.support.boxShadow || e("html").addClass("ui-mobile-nosupport-boxshadow")
    }(e),
    function (e, t) {
        var i, n = e.mobile.window;
        e.event.special.navigate = i = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: t,
            isPushStateEnabled: function () {
                return e.support.pushState && e.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function () {
                return e.mobile.hashListeningEnabled === !0
            },
            popstate: function (t) {
                var i = new e.Event("navigate"),
                    a = new e.Event("beforenavigate"),
                    o = t.originalEvent.state || {};
                location.href, n.trigger(a), a.isDefaultPrevented() || (t.historyState && e.extend(o, t.historyState), i.originalEvent = t, setTimeout(function () {
                    n.trigger(i, {
                        state: o
                    })
                }, 0))
            },
            hashchange: function (t) {
                var i = new e.Event("navigate"),
                    a = new e.Event("beforenavigate");
                n.trigger(a), a.isDefaultPrevented() || (i.originalEvent = t, n.trigger(i, {
                    state: t.hashchangeState || {}
                }))
            },
            setup: function () {
                i.bound || (i.bound = !0, i.isPushStateEnabled() ? (i.originalEventName = "popstate", n.bind("popstate.navigate", i.popstate)) : i.isHashChangeEnabled() && (i.originalEventName = "hashchange", n.bind("hashchange.navigate", i.hashchange)))
            }
        }
    }(e),
    function (e, i) {
        var n, a, o = "&ui-state=dialog";
        e.mobile.path = n = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function (e) {
                var t = e ? this.parseUrl(e) : location,
                    i = this.parseUrl(e || location.href).hash;
                return i = "#" === i ? "" : i, t.protocol + "//" + t.host + t.pathname + t.search + i
            },
            parseLocation: function () {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function (t) {
                if ("object" === e.type(t)) return t;
                var i = n.urlParseRE.exec(t || "") || [];
                return {
                    href: i[0] || "",
                    hrefNoHash: i[1] || "",
                    hrefNoSearch: i[2] || "",
                    domain: i[3] || "",
                    protocol: i[4] || "",
                    doubleSlash: i[5] || "",
                    authority: i[6] || "",
                    username: i[8] || "",
                    password: i[9] || "",
                    host: i[10] || "",
                    hostname: i[11] || "",
                    port: i[12] || "",
                    pathname: i[13] || "",
                    directory: i[14] || "",
                    filename: i[15] || "",
                    search: i[16] || "",
                    hash: i[17] || ""
                }
            },
            makePathAbsolute: function (e, t) {
                if (e && "/" === e.charAt(0)) return e;
                e = e || "", t = t ? t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "";
                for (var i = t ? t.split("/") : [], n = e.split("/"), a = 0; n.length > a; a++) {
                    var o = n[a];
                    switch (o) {
                    case ".":
                        break;
                    case "..":
                        i.length && i.pop();
                        break;
                    default:
                        i.push(o)
                    }
                }
                return "/" + i.join("/")
            },
            isSameDomain: function (e, t) {
                return n.parseUrl(e).domain === n.parseUrl(t).domain
            },
            isRelativeUrl: function (e) {
                return "" === n.parseUrl(e).protocol
            },
            isAbsoluteUrl: function (e) {
                return "" !== n.parseUrl(e).protocol
            },
            makeUrlAbsolute: function (e, t) {
                if (!n.isRelativeUrl(e)) return e;
                t === i && (t = this.documentBase);
                var a = n.parseUrl(e),
                    o = n.parseUrl(t),
                    s = a.protocol || o.protocol,
                    r = a.protocol ? a.doubleSlash : a.doubleSlash || o.doubleSlash,
                    l = a.authority || o.authority,
                    d = "" !== a.pathname,
                    c = n.makePathAbsolute(a.pathname || o.filename, o.pathname),
                    h = a.search || !d && o.search || "",
                    u = a.hash;
                return s + r + l + c + h + u
            },
            addSearchParams: function (t, i) {
                var a = n.parseUrl(t),
                    o = "object" == typeof i ? e.param(i) : i,
                    s = a.search || "?";
                return a.hrefNoSearch + s + ("?" !== s.charAt(s.length - 1) ? "&" : "") + o + (a.hash || "")
            },
            convertUrlToDataUrl: function (e) {
                var i = n.parseUrl(e);
                return n.isEmbeddedPage(i) ? i.hash.split(o)[0].replace(/^#/, "").replace(/\?.*$/, "") : n.isSameDomain(i, this.documentBase) ? i.hrefNoHash.replace(this.documentBase.domain, "").split(o)[0] : t.decodeURIComponent(e)
            },
            get: function (e) {
                return e === i && (e = n.parseLocation().hash), n.stripHash(e).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function (e) {
                location.hash = e
            },
            isPath: function (e) {
                return /\//.test(e)
            },
            clean: function (e) {
                return e.replace(this.documentBase.domain, "")
            },
            stripHash: function (e) {
                return e.replace(/^#/, "")
            },
            stripQueryParams: function (e) {
                return e.replace(/\?.*$/, "")
            },
            cleanHash: function (e) {
                return n.stripHash(e.replace(/\?.*$/, "").replace(o, ""))
            },
            isHashValid: function (e) {
                return /^#[^#]+$/.test(e)
            },
            isExternal: function (e) {
                var t = n.parseUrl(e);
                return t.protocol && t.domain !== this.documentUrl.domain ? !0 : !1
            },
            hasProtocol: function (e) {
                return /^(:?\w+:)/.test(e)
            },
            isEmbeddedPage: function (e) {
                var t = n.parseUrl(e);
                return "" !== t.protocol ? !this.isPath(t.hash) && t.hash && (t.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && t.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(t.href)
            },
            squash: function (e, t) {
                var i, a, o, s, r = this.isPath(e),
                    l = this.parseUrl(e),
                    d = l.hash,
                    c = "";
                return t = t || (n.isPath(e) ? n.getLocation() : n.getDocumentUrl()), a = r ? n.stripHash(e) : e, a = n.isPath(l.hash) ? n.stripHash(l.hash) : a, s = a.indexOf(this.uiStateKey), s > -1 && (c = a.slice(s), a = a.slice(0, s)), i = n.makeUrlAbsolute(a, t), o = this.parseUrl(i).search, r ? ((n.isPath(d) || 0 === d.replace("#", "").indexOf(this.uiStateKey)) && (d = ""), c && -1 === d.indexOf(this.uiStateKey) && (d += c), -1 === d.indexOf("#") && "" !== d && (d = "#" + d), i = n.parseUrl(i), i = i.protocol + "//" + i.host + i.pathname + o + d) : i += i.indexOf("#") > -1 ? c : "#" + c, i
            },
            isPreservableHash: function (e) {
                return 0 === e.replace("#", "").indexOf(this.uiStateKey)
            }
        }, n.documentUrl = n.parseLocation(), a = e("head").find("base"), n.documentBase = a.length ? n.parseUrl(n.makeUrlAbsolute(a.attr("href"), n.documentUrl.href)) : n.documentUrl, n.documentBaseDiffers = n.documentUrl.hrefNoHash !== n.documentBase.hrefNoHash, n.getDocumentUrl = function (t) {
            return t ? e.extend({}, n.documentUrl) : n.documentUrl.href
        }, n.getDocumentBase = function (t) {
            return t ? e.extend({}, n.documentBase) : n.documentBase.href
        }
    }(e),
    function (e, t) {
        e.mobile.path, e.mobile.History = function (e, t) {
            this.stack = e || [], this.activeIndex = t || 0
        }, e.extend(e.mobile.History.prototype, {
            getActive: function () {
                return this.stack[this.activeIndex]
            },
            getLast: function () {
                return this.stack[this.previousIndex]
            },
            getNext: function () {
                return this.stack[this.activeIndex + 1]
            },
            getPrev: function () {
                return this.stack[this.activeIndex - 1]
            },
            add: function (e, t) {
                t = t || {}, this.getNext() && this.clearForward(), t.hash && -1 === t.hash.indexOf("#") && (t.hash = "#" + t.hash), t.url = e, this.stack.push(t), this.activeIndex = this.stack.length - 1
            },
            clearForward: function () {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            },
            find: function (e, t, i) {
                t = t || this.stack;
                var n, a, o, s = t.length;
                for (a = 0; s > a; a++)
                    if (n = t[a], (decodeURIComponent(e) === decodeURIComponent(n.url) || decodeURIComponent(e) === decodeURIComponent(n.hash)) && (o = a, i)) return o;
                return o
            },
            closest: function (e) {
                var i, n = this.activeIndex;
                return i = this.find(e, this.stack.slice(0, n)), i === t && (i = this.find(e, this.stack.slice(n), !0), i = i === t ? i : i + n), i
            },
            direct: function (i) {
                var n = this.closest(i.url),
                    a = this.activeIndex;
                n !== t && (this.activeIndex = n, this.previousIndex = a), a > n ? (i.present || i.back || e.noop)(this.getActive(), "back") : n > a ? (i.present || i.forward || e.noop)(this.getActive(), "forward") : n === t && i.missing && i.missing(this.getActive())
            }
        })
    }(e),
    function (e) {
        var a = e.mobile.path,
            o = location.href;
        e.mobile.Navigator = function (t) {
            this.history = t, this.ignoreInitialHashChange = !0, e.mobile.window.bind({
                "popstate.history": e.proxy(this.popstate, this),
                "hashchange.history": e.proxy(this.hashchange, this)
            })
        }, e.extend(e.mobile.Navigator.prototype, {
            squash: function (n, o) {
                var s, r, l = a.isPath(n) ? a.stripHash(n) : n;
                return r = a.squash(n), s = e.extend({
                    hash: l,
                    url: r
                }, o), t.history.replaceState(s, s.title || i.title, r), s
            },
            hash: function (e, t) {
                var i, n, o;
                if (i = a.parseUrl(e), n = a.parseLocation(), n.pathname + n.search === i.pathname + i.search) o = i.hash ? i.hash : i.pathname + i.search;
                else if (a.isPath(e)) {
                    var s = a.parseUrl(t);
                    o = s.pathname + s.search + (a.isPreservableHash(s.hash) ? s.hash.replace("#", "") : "")
                } else o = e;
                return o
            },
            go: function (n, o, s) {
                var r, l, d, c, h = e.event.special.navigate.isPushStateEnabled();
                l = a.squash(n), d = this.hash(n, l), s && d !== a.stripHash(a.parseLocation().hash) && (this.preventNextHashChange = s), this.preventHashAssignPopState = !0, t.location.hash = d, this.preventHashAssignPopState = !1, r = e.extend({
                    url: l,
                    hash: d,
                    title: i.title
                }, o), h && (c = new e.Event("popstate"), c.originalEvent = {
                    type: "popstate",
                    state: null
                }, this.squash(n, r), s || (this.ignorePopState = !0, e.mobile.window.trigger(c))), this.history.add(r.url, r)
            },
            popstate: function (t) {
                var i, s;
                if (e.event.special.navigate.isPushStateEnabled()) return this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, t.stopImmediatePropagation(), n) : this.ignorePopState ? (this.ignorePopState = !1, n) : !t.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === o) ? (t.preventDefault(), n) : (i = a.parseLocation().hash, !t.originalEvent.state && i ? (s = this.squash(i), this.history.add(s.url, s), t.historyState = s, n) : (this.history.direct({
                    url: (t.originalEvent.state || {}).url || i,
                    present: function (i, n) {
                        t.historyState = e.extend({}, i), t.historyState.direction = n
                    }
                }), n))
            },
            hashchange: function (t) {
                var o, s;
                if (e.event.special.navigate.isHashChangeEnabled() && !e.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange) return this.preventNextHashChange = !1, t.stopImmediatePropagation(), n;
                    o = this.history, s = a.parseLocation().hash, this.history.direct({
                        url: s,
                        present: function (i, n) {
                            t.hashchangeState = e.extend({}, i), t.hashchangeState.direction = n
                        },
                        missing: function () {
                            o.add(s, {
                                hash: s,
                                title: i.title
                            })
                        }
                    })
                }
            }
        })
    }(e),
    function (e) {
        e.mobile.navigate = function (t, i, n) {
            e.mobile.navigate.navigator.go(t, i, n)
        }, e.mobile.navigate.history = new e.mobile.History, e.mobile.navigate.navigator = new e.mobile.Navigator(e.mobile.navigate.history);
        var t = e.mobile.path.parseLocation();
        e.mobile.navigate.history.add(t.href, {
            hash: t.hash
        })
    }(e),
    function (e, t, i, n) {
        function a(e) {
            for (; e && e.originalEvent !== n;) e = e.originalEvent;
            return e
        }

        function o(t, i) {
            var o, s, r, l, d, c, h, u, p, m = t.type;
            if (t = e.Event(t), t.type = i, o = t.originalEvent, s = e.event.props, m.search(/^(mouse|click)/) > -1 && (s = q), o)
                for (h = s.length, l; h;) l = s[--h], t[l] = o[l];
            if (m.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== m.search(/^touch/) && (r = a(o), m = r.touches, d = r.changedTouches, c = m && m.length ? m[0] : d && d.length ? d[0] : n))
                for (u = 0, p = k.length; p > u; u++) l = k[u], t[l] = c[l];
            return t
        }

        function s(t) {
            for (var i, n, a = {}; t;) {
                i = e.data(t, T);
                for (n in i) i[n] && (a[n] = a.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return a
        }

        function r(t, i) {
            for (var n; t;) {
                if (n = e.data(t, T), n && (!i || n[i])) return t;
                t = t.parentNode
            }
            return null
        }

        function l() {
            M = !1
        }

        function d() {
            M = !0
        }

        function c() {
            U = 0, O.length = 0, H = !1, d()
        }

        function h() {
            l()
        }

        function u() {
            p(), S = setTimeout(function () {
                S = 0, c()
            }, e.vmouse.resetTimerDuration)
        }

        function p() {
            S && (clearTimeout(S), S = 0)
        }

        function m(t, i, n) {
            var a;
            return (n && n[t] || !n && r(i.target, t)) && (a = o(i, t), e(i.target).trigger(a)), a
        }

        function f(t) {
            var i = e.data(t.target, D);
            if (!(H || U && U === i)) {
                var n = m("v" + t.type, t);
                n && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation())
            }
        }

        function g(t) {
            var i, n, o = a(t).touches;
            if (o && 1 === o.length && (i = t.target, n = s(i), n.hasVirtualBinding)) {
                U = L++, e.data(i, D, U), p(), h(), I = !1;
                var r = a(t).touches[0];
                A = r.pageX, N = r.pageY, m("vmouseover", t, n), m("vmousedown", t, n)
            }
        }

        function b(e) {
            M || (I || m("vmousecancel", e, s(e.target)), I = !0, u())
        }

        function v(t) {
            if (!M) {
                var i = a(t).touches[0],
                    n = I,
                    o = e.vmouse.moveDistanceThreshold,
                    r = s(t.target);
                I = I || Math.abs(i.pageX - A) > o || Math.abs(i.pageY - N) > o, I && !n && m("vmousecancel", t, r), m("vmousemove", t, r), u()
            }
        }

        function _(e) {
            if (!M) {
                d();
                var t, i = s(e.target);
                if (m("vmouseup", e, i), !I) {
                    var n = m("vclick", e, i);
                    n && n.isDefaultPrevented() && (t = a(e).changedTouches[0], O.push({
                        touchID: U,
                        x: t.clientX,
                        y: t.clientY
                    }), H = !0)
                }
                m("vmouseout", e, i), I = !1, u()
            }
        }

        function C(t) {
            var i, n = e.data(t, T);
            if (n)
                for (i in n)
                    if (n[i]) return !0;
            return !1
        }

        function x() {}

        function y(t) {
            var i = t.substr(1);
            return {
                setup: function () {
                    C(this) || e.data(this, T, {});
                    var n = e.data(this, T);
                    n[t] = !0, j[t] = (j[t] || 0) + 1, 1 === j[t] && B.bind(i, f), e(this).bind(i, x), F && (j.touchstart = (j.touchstart || 0) + 1, 1 === j.touchstart && B.bind("touchstart", g).bind("touchend", _).bind("touchmove", v).bind("scroll", b))
                },
                teardown: function () {
                    --j[t], j[t] || B.unbind(i, f), F && (--j.touchstart, j.touchstart || B.unbind("touchstart", g).unbind("touchmove", v).unbind("touchend", _).unbind("scroll", b));
                    var n = e(this),
                        a = e.data(this, T);
                    a && (a[t] = !1), n.unbind(i, x), C(this) || n.removeData(T)
                }
            }
        }
        var w, T = "virtualMouseBindings",
            D = "virtualTouchID",
            P = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            k = "clientX clientY pageX pageY screenX screenY".split(" "),
            E = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            q = e.event.props.concat(E),
            j = {}, S = 0,
            A = 0,
            N = 0,
            I = !1,
            O = [],
            H = !1,
            M = !1,
            F = "addEventListener" in i,
            B = e(i),
            L = 1,
            U = 0;
        e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (var z = 0; P.length > z; z++) e.event.special[P[z]] = y(P[z]);
        F && i.addEventListener("click", function (t) {
            var i, a, o, s, r, l, d = O.length,
                c = t.target;
            if (d)
                for (i = t.clientX, a = t.clientY, w = e.vmouse.clickDistanceThreshold, o = c; o;) {
                    for (s = 0; d > s; s++)
                        if (r = O[s], l = 0, o === c && w > Math.abs(r.x - i) && w > Math.abs(r.y - a) || e.data(o, D) === r.touchID) return t.preventDefault(), t.stopPropagation(), n;
                    o = o.parentNode
                }
        }, !0)
    }(e, t, i),
    function (e, t, n) {
        function a(t, i, n) {
            var a = n.type;
            n.type = i, e.event.dispatch.call(t, n), n.type = a
        }
        var o = e(i);
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, i) {
            e.fn[i] = function (e) {
                return e ? this.bind(i, e) : this.trigger(i)
            }, e.attrFn && (e.attrFn[i] = !0)
        });
        var s = e.mobile.support.touch,
            r = "touchmove scroll",
            l = s ? "touchstart" : "mousedown",
            d = s ? "touchend" : "mouseup",
            c = s ? "touchmove" : "mousemove";
        e.event.special.scrollstart = {
            enabled: !0,
            setup: function () {
                function t(e, t) {
                    i = t, a(o, i ? "scrollstart" : "scrollstop", e)
                }
                var i, n, o = this,
                    s = e(o);
                s.bind(r, function (a) {
                    e.event.special.scrollstart.enabled && (i || t(a, !0), clearTimeout(n), n = setTimeout(function () {
                        t(a, !1)
                    }, 50))
                })
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750,
            setup: function () {
                var t = this,
                    i = e(t);
                i.bind("vmousedown", function (n) {
                    function s() {
                        clearTimeout(d)
                    }

                    function r() {
                        s(), i.unbind("vclick", l).unbind("vmouseup", s), o.unbind("vmousecancel", r)
                    }

                    function l(e) {
                        r(), c === e.target && a(t, "tap", e)
                    }
                    if (n.which && 1 !== n.which) return !1;
                    var d, c = n.target;
                    n.originalEvent, i.bind("vmouseup", s).bind("vclick", l), o.bind("vmousecancel", r), d = setTimeout(function () {
                        a(t, "taphold", e.Event("taphold", {
                            target: c
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            start: function (t) {
                var i = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                return {
                    time: (new Date).getTime(),
                    coords: [i.pageX, i.pageY],
                    origin: e(t.target)
                }
            },
            stop: function (e) {
                var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                return {
                    time: (new Date).getTime(),
                    coords: [t.pageX, t.pageY]
                }
            },
            handleSwipe: function (t, i) {
                i.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - i.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - i.coords[1]) < e.event.special.swipe.verticalDistanceThreshold && t.origin.trigger("swipe").trigger(t.coords[0] > i.coords[0] ? "swipeleft" : "swiperight")
            },
            setup: function () {
                var t = this,
                    i = e(t);
                i.bind(l, function (t) {
                    function a(t) {
                        s && (o = e.event.special.swipe.stop(t), Math.abs(s.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                    }
                    var o, s = e.event.special.swipe.start(t);
                    i.bind(c, a).one(d, function () {
                        i.unbind(c, a), s && o && e.event.special.swipe.handleSwipe(s, o), s = o = n
                    })
                })
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function (t, i) {
            e.event.special[t] = {
                setup: function () {
                    e(this).bind(i, e.noop)
                }
            }
        })
    }(e, this),
    function (e) {
        e.event.special.throttledresize = {
            setup: function () {
                e(this).bind("resize", o)
            },
            teardown: function () {
                e(this).unbind("resize", o)
            }
        };
        var t, i, n, a = 250,
            o = function () {
                i = (new Date).getTime(), n = i - s, n >= a ? (s = i, e(this).trigger("throttledresize")) : (t && clearTimeout(t), t = setTimeout(o, a - n))
            }, s = 0
    }(e),
    function (e, t) {
        function a() {
            var e = o();
            e !== s && (s = e, d.trigger(c))
        }
        var o, s, r, l, d = e(t),
            c = "orientationchange",
            h = {
                0: !0,
                180: !0
            };
        if (e.support.orientation) {
            var u = t.innerWidth || d.width(),
                p = t.innerHeight || d.height(),
                m = 50;
            r = u > p && u - p > m, l = h[t.orientation], (r && l || !r && !l) && (h = {
                "-90": !0,
                90: !0
            })
        }
        e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function () {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (s = o(), d.bind("throttledresize", a), n)
            },
            teardown: function () {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (d.unbind("throttledresize", a), n)
            },
            add: function (e) {
                var t = e.handler;
                e.handler = function (e) {
                    return e.orientation = o(), t.apply(this, arguments)
                }
            }
        }), e.event.special.orientationchange.orientation = o = function () {
            var n = !0,
                a = i.documentElement;
            return n = e.support.orientation ? h[t.orientation] : a && 1.1 > a.clientWidth / a.clientHeight, n ? "portrait" : "landscape"
        }, e.fn[c] = function (e) {
            return e ? this.bind(c, e) : this.trigger(c)
        }, e.attrFn && (e.attrFn[c] = !0)
    }(e, this),
    function (e) {
        e.widget("mobile.page", e.mobile.widget, {
            options: {
                theme: "c",
                domCache: !1,
                keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')"
            },
            _create: function () {
                return this._trigger("beforecreate") === !1 ? !1 : (this.element.attr("tabindex", "0").addClass("ui-page ui-body-" + this.options.theme), this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }), n)
            },
            _handlePageBeforeShow: function () {
                this.setContainerBackground()
            },
            removeContainerBackground: function () {
                e.mobile.pageContainer.removeClass("ui-overlay-" + e.mobile.getInheritedTheme(this.element.parent()))
            },
            setContainerBackground: function (t) {
                this.options.theme && e.mobile.pageContainer.addClass("ui-overlay-" + (t || this.options.theme))
            },
            keepNativeSelector: function () {
                var t = this.options,
                    i = t.keepNative && e.trim(t.keepNative);
                return i && t.keepNative !== t.keepNativeDefault ? [t.keepNative, t.keepNativeDefault].join(", ") : t.keepNativeDefault
            }
        })
    }(e),
    function (e, t, i) {
        var n = function (n) {
            return n === i && (n = !0),
            function (i, a, o, s) {
                var r = new e.Deferred,
                    l = a ? " reverse" : "",
                    d = e.mobile.urlHistory.getActive(),
                    c = d.lastScroll || e.mobile.defaultHomeScroll,
                    h = e.mobile.getScreenHeight(),
                    u = e.mobile.maxTransitionWidth !== !1 && e.mobile.window.width() > e.mobile.maxTransitionWidth,
                    p = !e.support.cssTransitions || u || !i || "none" === i || Math.max(e.mobile.window.scrollTop(), c) > e.mobile.getMaxScrollForTransition(),
                    m = " ui-page-pre-in",
                    f = function () {
                        e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + i)
                    }, g = function () {
                        e.event.special.scrollstart.enabled = !1, t.scrollTo(0, c), setTimeout(function () {
                            e.event.special.scrollstart.enabled = !0
                        }, 150)
                    }, b = function () {
                        s.removeClass(e.mobile.activePageClass + " out in reverse " + i).height("")
                    }, v = function () {
                        n ? s.animationComplete(_) : _(), s.height(h + e.mobile.window.scrollTop()).addClass(i + " out" + l)
                    }, _ = function () {
                        s && n && b(), C()
                    }, C = function () {
                        o.css("z-index", -10), o.addClass(e.mobile.activePageClass + m), e.mobile.focusPage(o), o.height(h + c), g(), o.css("z-index", ""), p || o.animationComplete(x), o.removeClass(m).addClass(i + " in" + l), p && x()
                    }, x = function () {
                        n || s && b(), o.removeClass("out in reverse " + i).height(""), f(), e.mobile.window.scrollTop() !== c && g(), r.resolve(i, a, o, s, !0)
                    };
                return f(), s && !p ? v() : _(), r.promise()
            }
        }, a = n(),
            o = n(!1),
            s = function () {
                return 3 * e.mobile.getScreenHeight()
            };
        e.mobile.defaultTransitionHandler = a, e.mobile.transitionHandlers = {
            "default": e.mobile.defaultTransitionHandler,
            sequential: a,
            simultaneous: o
        }, e.mobile.transitionFallbacks = {}, e.mobile._maybeDegradeTransition = function (t) {
            return t && !e.support.cssTransform3d && e.mobile.transitionFallbacks[t] && (t = e.mobile.transitionFallbacks[t]), t
        }, e.mobile.getMaxScrollForTransition = e.mobile.getMaxScrollForTransition || s
    }(e, this),
    function (e, n) {
        function a(t) {
            !f || f.closest("." + e.mobile.activePageClass).length && !t || f.removeClass(e.mobile.activeBtnClass), f = null
        }

        function o() {
            _ = !1, v.length > 0 && e.mobile.changePage.apply(null, v.pop())
        }

        function s(t, i, n, a) {
            i && i.data("mobile-page")._trigger("beforehide", null, {
                nextPage: t
            }), t.data("mobile-page")._trigger("beforeshow", null, {
                prevPage: i || e("")
            }), e.mobile.hidePageLoadingMsg(), n = e.mobile._maybeDegradeTransition(n);
            var o = e.mobile.transitionHandlers[n || "default"] || e.mobile.defaultTransitionHandler,
                s = o(n, a, t, i);
            return s.done(function () {
                i && i.data("mobile-page")._trigger("hide", null, {
                    nextPage: t
                }), t.data("mobile-page")._trigger("show", null, {
                    prevPage: i || e("")
                })
            }), s
        }

        function r(t, i) {
            i && t.attr("data-" + e.mobile.ns + "role", i), t.page()
        }

        function l() {
            var t = e.mobile.activePage && c(e.mobile.activePage);
            return t || w.hrefNoHash
        }

        function d(e) {
            for (; e && ("string" != typeof e.nodeName || "a" !== e.nodeName.toLowerCase());) e = e.parentNode;
            return e
        }

        function c(t) {
            var i = e(t).closest(".ui-page").jqmData("url"),
                n = w.hrefNoHash;
            return i && p.isPath(i) || (i = n), p.makeUrlAbsolute(i, n)
        }
        var h = e.mobile.window,
            u = (e("html"), e("head")),
            p = e.extend(e.mobile.path, {
                getFilePath: function (t) {
                    var i = "&" + e.mobile.subPageUrlKey;
                    return t && t.split(i)[0].split(C)[0]
                },
                isFirstPageUrl: function (t) {
                    var i = p.parseUrl(p.makeUrlAbsolute(t, this.documentBase)),
                        a = i.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && i.hrefNoHash === this.documentBase.hrefNoHash,
                        o = e.mobile.firstPage,
                        s = o && o[0] ? o[0].id : n;
                    return a && (!i.hash || "#" === i.hash || s && i.hash.replace(/^#/, "") === s)
                },
                isPermittedCrossDomainRequest: function (t, i) {
                    return e.mobile.allowCrossDomainPages && "file:" === t.protocol && -1 !== i.search(/^https?:/)
                }
            }),
            m = null,
            f = null,
            g = e.Deferred(),
            b = e.mobile.navigate.history,
            v = [],
            _ = !1,
            C = "&ui-state=dialog",
            x = u.children("base"),
            y = p.documentUrl,
            w = p.documentBase,
            T = (p.documentBaseDiffers, e.mobile.getScreenHeight),
            D = e.support.dynamicBaseTag ? {
                element: x.length ? x : e("<base>", {
                    href: w.hrefNoHash
                }).prependTo(u),
                set: function (e) {
                    e = p.parseUrl(e).hrefNoHash, D.element.attr("href", p.makeUrlAbsolute(e, w))
                },
                reset: function () {
                    D.element.attr("href", w.hrefNoSearch)
                }
            } : n;
        e.mobile.getDocumentUrl = p.getDocumentUrl, e.mobile.getDocumentBase = p.getDocumentBase, e.mobile.back = function () {
            var e = t.navigator;
            this.phonegapNavigationEnabled && e && e.app && e.app.backHistory ? e.app.backHistory() : t.history.back()
        }, e.mobile.focusPage = function (e) {
            var t = e.find("[autofocus]"),
                i = e.find(".ui-title:eq(0)");
            return t.length ? (t.focus(), n) : (i.length ? i.focus() : e.focus(), n)
        };
        var P, k, E = !0;
        P = function () {
            if (E) {
                var t = e.mobile.urlHistory.getActive();
                if (t) {
                    var i = h.scrollTop();
                    t.lastScroll = e.mobile.minScrollBack > i ? e.mobile.defaultHomeScroll : i
                }
            }
        }, k = function () {
            setTimeout(P, 100)
        }, h.bind(e.support.pushState ? "popstate" : "hashchange", function () {
            E = !1
        }), h.one(e.support.pushState ? "popstate" : "hashchange", function () {
            E = !0
        }), h.one("pagecontainercreate", function () {
            e.mobile.pageContainer.bind("pagechange", function () {
                E = !0, h.unbind("scrollstop", k), h.bind("scrollstop", k)
            })
        }), h.bind("scrollstop", k), e.mobile._maybeDegradeTransition = e.mobile._maybeDegradeTransition || function (e) {
            return e
        }, e.mobile.resetActivePageHeight = function (t) {
            var i = e("." + e.mobile.activePageClass),
                n = parseFloat(i.css("padding-top")),
                a = parseFloat(i.css("padding-bottom")),
                o = parseFloat(i.css("border-top-width")),
                s = parseFloat(i.css("border-bottom-width"));
            t = "number" == typeof t ? t : T(), i.css("min-height", t - n - a - o - s)
        }, e.fn.animationComplete = function (t) {
            return e.support.cssTransitions ? e(this).one("webkitAnimationEnd animationend", t) : (setTimeout(t, 0), e(this))
        }, e.mobile.path = p, e.mobile.base = D, e.mobile.urlHistory = b, e.mobile.dialogHashKey = C, e.mobile.allowCrossDomainPages = !1, e.mobile._bindPageRemove = function () {
            var t = e(this);
            !t.data("mobile-page").options.domCache && t.is(":jqmData(external-page='true')") && t.bind("pagehide.remove", function () {
                var t = e(this),
                    i = new e.Event("pageremove");
                t.trigger(i), i.isDefaultPrevented() || t.removeWithDependents()
            })
        }, e.mobile.loadPage = function (t, i) {
            var a = e.Deferred(),
                o = e.extend({}, e.mobile.loadPage.defaults, i),
                s = null,
                d = null,
                c = p.makeUrlAbsolute(t, l());
            o.data && "get" === o.type && (c = p.addSearchParams(c, o.data), o.data = n), o.data && "post" === o.type && (o.reloadPage = !0);
            var h = p.getFilePath(c),
                u = p.convertUrlToDataUrl(c);
            if (o.pageContainer = o.pageContainer || e.mobile.pageContainer, s = o.pageContainer.children("[data-" + e.mobile.ns + "url='" + u + "']"), 0 === s.length && u && !p.isPath(u) && (s = o.pageContainer.children("#" + u).attr("data-" + e.mobile.ns + "url", u).jqmData("url", u)), 0 === s.length)
                if (e.mobile.firstPage && p.isFirstPageUrl(h)) e.mobile.firstPage.parent().length && (s = e(e.mobile.firstPage));
                else if (p.isEmbeddedPage(h)) return a.reject(c, i), a.promise();
            if (s.length) {
                if (!o.reloadPage) return r(s, o.role), a.resolve(c, i, s), D && !i.prefetch && D.set(t), a.promise();
                d = s
            }
            var m = o.pageContainer,
                f = new e.Event("pagebeforeload"),
                g = {
                    url: t,
                    absUrl: c,
                    dataUrl: u,
                    deferred: a,
                    options: o
                };
            if (m.trigger(f, g), f.isDefaultPrevented()) return a.promise();
            if (o.showLoadMsg) var b = setTimeout(function () {
                e.mobile.showPageLoadingMsg()
            }, o.loadMsgDelay),
            v = function () {
                clearTimeout(b), e.mobile.hidePageLoadingMsg()
            };
            return D && i.prefetch === n && D.reset(), e.mobile.allowCrossDomainPages || p.isSameDomain(y, c) ? e.ajax({
                url: h,
                type: o.type,
                data: o.data,
                contentType: o.contentType,
                dataType: "html",
                success: function (l, m, f) {
                    var b = e("<div></div>"),
                        _ = l.match(/<title[^>]*>([^<]*)/) && RegExp.$1,
                        C = RegExp("(<[^>]+\\bdata-" + e.mobile.ns + "role=[\"']?page[\"']?[^>]*>)"),
                        x = RegExp("\\bdata-" + e.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?");
                    if (C.test(l) && RegExp.$1 && x.test(RegExp.$1) && RegExp.$1 && (t = h = p.getFilePath(e("<div>" + RegExp.$1 + "</div>").text())), D && i.prefetch === n && D.set(h), b.get(0).innerHTML = l, s = b.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), s.length || (s = e("<div data-" + e.mobile.ns + "role='page'>" + (l.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), _ && !s.jqmData("title") && (~_.indexOf("&") && (_ = e("<div>" + _ + "</div>").text()), s.jqmData("title", _)), !e.support.dynamicBaseTag) {
                        var y = p.get(h);
                        s.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () {
                            var t = e(this).is("[href]") ? "href" : e(this).is("[src]") ? "src" : "action",
                                i = e(this).attr(t);
                            i = i.replace(location.protocol + "//" + location.host + location.pathname, ""), /^(\w+:|#|\/)/.test(i) || e(this).attr(t, y + i)
                        })
                    }
                    s.attr("data-" + e.mobile.ns + "url", p.convertUrlToDataUrl(h)).attr("data-" + e.mobile.ns + "external-page", !0).appendTo(o.pageContainer), s.one("pagecreate", e.mobile._bindPageRemove), r(s, o.role), c.indexOf("&" + e.mobile.subPageUrlKey) > -1 && (s = o.pageContainer.children("[data-" + e.mobile.ns + "url='" + u + "']")), o.showLoadMsg && v(), g.xhr = f, g.textStatus = m, g.page = s, o.pageContainer.trigger("pageload", g), a.resolve(c, i, s, d)
                },
                error: function (t, n, s) {
                    D && D.set(p.get()), g.xhr = t, g.textStatus = n, g.errorThrown = s;
                    var r = new e.Event("pageloadfailed");
                    o.pageContainer.trigger(r, g), r.isDefaultPrevented() || (o.showLoadMsg && (v(), e.mobile.showPageLoadingMsg(e.mobile.pageLoadErrorMessageTheme, e.mobile.pageLoadErrorMessage, !0), setTimeout(e.mobile.hidePageLoadingMsg, 1500)), a.reject(c, i))
                }
            }) : a.reject(c, i), a.promise()
        }, e.mobile.loadPage.defaults = {
            type: "get",
            data: n,
            reloadPage: !1,
            role: n,
            showLoadMsg: !1,
            pageContainer: n,
            loadMsgDelay: 50
        }, e.mobile.changePage = function (t, d) {
            if (_) return v.unshift(arguments), n;
            var c, h = e.extend({}, e.mobile.changePage.defaults, d);
            h.pageContainer = h.pageContainer || e.mobile.pageContainer, h.fromPage = h.fromPage || e.mobile.activePage, c = "string" == typeof t;
            var u = h.pageContainer,
                m = new e.Event("pagebeforechange"),
                f = {
                    toPage: t,
                    options: h
                };
            if (f.absUrl = c ? p.makeUrlAbsolute(t, l()) : t.data("absUrl"), u.trigger(m, f), !m.isDefaultPrevented()) {
                if (t = f.toPage, c = "string" == typeof t, _ = !0, c) return h.target = t, e.mobile.loadPage(t, h).done(function (t, i, n, a) {
                    _ = !1, i.duplicateCachedPage = a, n.data("absUrl", f.absUrl), e.mobile.changePage(n, i)
                }).fail(function () {
                    a(!0), o(), h.pageContainer.trigger("pagechangefailed", f)
                }), n;
                t[0] !== e.mobile.firstPage[0] || h.dataUrl || (h.dataUrl = y.hrefNoHash);
                var g = h.fromPage,
                    x = h.dataUrl && p.convertUrlToDataUrl(h.dataUrl) || t.jqmData("url"),
                    w = x,
                    T = (p.getFilePath(x), b.getActive()),
                    D = 0 === b.activeIndex,
                    P = 0,
                    k = i.title,
                    E = "dialog" === h.role || "dialog" === t.jqmData("role");
                if (g && g[0] === t[0] && !h.allowSamePageTransition) return _ = !1, u.trigger("pagechange", f), h.fromHashChange && b.direct({
                    url: x
                }), n;
                r(t, h.role), h.fromHashChange && (P = "back" === d.direction ? -1 : 1);
                try {
                    i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() ? e(i.activeElement).blur() : e("input:focus, textarea:focus, select:focus").blur()
                } catch (q) {}
                var j = !1;
                E && T && (T.url && T.url.indexOf(C) > -1 && e.mobile.activePage && !e.mobile.activePage.is(".ui-dialog") && b.activeIndex > 0 && (h.changeHash = !1, j = !0), x = T.url || "", x += !j && x.indexOf("#") > -1 ? C : "#" + C, 0 === b.activeIndex && x === b.initialDst && (x += C));
                var S = T ? t.jqmData("title") || t.children(":jqmData(role='header')").find(".ui-title").text() : k;
                if (S && k === i.title && (k = S), t.jqmData("title") || t.jqmData("title", k), h.transition = h.transition || (P && !D ? T.transition : n) || (E ? e.mobile.defaultDialogTransition : e.mobile.defaultPageTransition), !P && j && (b.getActive().pageUrl = w), x && !h.fromHashChange) {
                    var A;
                    !p.isPath(x) && 0 > x.indexOf("#") && (x = "#" + x), A = {
                        transition: h.transition,
                        title: k,
                        pageUrl: w,
                        role: h.role
                    }, h.changeHash !== !1 && e.mobile.hashListeningEnabled ? e.mobile.navigate(x, A, !0) : t[0] !== e.mobile.firstPage[0] && e.mobile.navigate.history.add(x, A)
                }
                i.title = k, e.mobile.activePage = t, h.reverse = h.reverse || 0 > P, s(t, g, h.transition, h.reverse).done(function (i, n, s, r, l) {
                    a(), h.duplicateCachedPage && h.duplicateCachedPage.remove(), l || e.mobile.focusPage(t), o(), u.trigger("pagechange", f)
                })
            }
        }, e.mobile.changePage.defaults = {
            transition: n,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: n,
            duplicateCachedPage: n,
            pageContainer: n,
            showLoadMsg: !0,
            dataUrl: n,
            fromPage: n,
            allowSamePageTransition: !1
        }, e.mobile.navreadyDeferred = e.Deferred(), e.mobile._registerInternalEvents = function () {
            var i = function (t, i) {
                var a, o, s, r, l = !0;
                return !e.mobile.ajaxEnabled || t.is(":jqmData(ajax='false')") || !t.jqmHijackable().length || t.attr("target") ? !1 : (a = t.attr("action"), r = (t.attr("method") || "get").toLowerCase(), a || (a = c(t), "get" === r && (a = p.parseUrl(a).hrefNoSearch), a === w.hrefNoHash && (a = y.hrefNoSearch)), a = p.makeUrlAbsolute(a, c(t)), p.isExternal(a) && !p.isPermittedCrossDomainRequest(y, a) ? !1 : (i || (o = t.serializeArray(), m && m[0].form === t[0] && (s = m.attr("name"), s && (e.each(o, function (e, t) {
                    return t.name === s ? (s = "", !1) : n
                }), s && o.push({
                    name: s,
                    value: m.attr("value")
                }))), l = {
                    url: a,
                    options: {
                        type: r,
                        data: e.param(o),
                        transition: t.jqmData("transition"),
                        reverse: "reverse" === t.jqmData("direction"),
                        reloadPage: !0
                    }
                }), l))
            };
            e.mobile.document.delegate("form", "submit", function (t) {
                var n = i(e(this));
                n && (e.mobile.changePage(n.url, n.options), t.preventDefault())
            }), e.mobile.document.bind("vclick", function (t) {
                var n, o, s = t.target,
                    r = !1;
                if (!(t.which > 1) && e.mobile.linkBindingEnabled) {
                    if (m = e(s), e.data(s, "mobile-button")) {
                        if (!i(e(s).closest("form"), !0)) return;
                        s.parentNode && (s = s.parentNode)
                    } else {
                        if (s = d(s), !s || "#" === p.parseUrl(s.getAttribute("href") || "#").hash) return;
                        if (!e(s).jqmHijackable().length) return
                    }~
                    s.className.indexOf("ui-link-inherit") ? s.parentNode && (o = e.data(s.parentNode, "buttonElements")) : o = e.data(s, "buttonElements"), o ? s = o.outer : r = !0, n = e(s), r && (n = n.closest(".ui-btn")), n.length > 0 && !n.hasClass("ui-disabled") && (a(!0), f = n, f.addClass(e.mobile.activeBtnClass))
                }
            }), e.mobile.document.bind("click", function (i) {
                if (e.mobile.linkBindingEnabled && !i.isDefaultPrevented()) {
                    var o, s = d(i.target),
                        r = e(s);
                    if (s && !(i.which > 1) && r.jqmHijackable().length) {
                        if (o = function () {
                            t.setTimeout(function () {
                                a(!0)
                            }, 200)
                        }, r.is(":jqmData(rel='back')")) return e.mobile.back(), !1;
                        var l = c(r),
                            h = p.makeUrlAbsolute(r.attr("href") || "#", l);
                        if (!e.mobile.ajaxEnabled && !p.isEmbeddedPage(h)) return o(), n;
                        if (-1 !== h.search("#")) {
                            if (h = h.replace(/[^#]*#/, ""), !h) return i.preventDefault(), n;
                            h = p.isPath(h) ? p.makeUrlAbsolute(h, l) : p.makeUrlAbsolute("#" + h, y.hrefNoHash)
                        }
                        var u = r.is("[rel='external']") || r.is(":jqmData(ajax='false')") || r.is("[target]"),
                            m = u || p.isExternal(h) && !p.isPermittedCrossDomainRequest(y, h);
                        if (m) return o(), n;
                        var f = r.jqmData("transition"),
                            g = "reverse" === r.jqmData("direction") || r.jqmData("back"),
                            b = r.attr("data-" + e.mobile.ns + "rel") || n;
                        e.mobile.changePage(h, {
                            transition: f,
                            reverse: g,
                            role: b,
                            link: r
                        }), i.preventDefault()
                    }
                }
            }), e.mobile.document.delegate(".ui-page", "pageshow.prefetch", function () {
                var t = [];
                e(this).find("a:jqmData(prefetch)").each(function () {
                    var i = e(this),
                        n = i.attr("href");
                    n && -1 === e.inArray(n, t) && (t.push(n), e.mobile.loadPage(n, {
                        role: i.attr("data-" + e.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                })
            }), e.mobile._handleHashChange = function (i, a) {
                var o = p.stripHash(i),
                    s = 0 === e.mobile.urlHistory.stack.length ? "none" : n,
                    r = {
                        changeHash: !1,
                        fromHashChange: !0,
                        reverse: "back" === a.direction
                    };
                if (e.extend(r, a, {
                    transition: (b.getLast() || {}).transition || s
                }), b.activeIndex > 0 && o.indexOf(C) > -1 && b.initialDst !== o) {
                    if (e.mobile.activePage && !e.mobile.activePage.is(".ui-dialog")) return "back" === a.direction ? e.mobile.back() : t.history.forward(), n;
                    o = a.pageUrl;
                    var l = e.mobile.urlHistory.getActive();
                    e.extend(r, {
                        role: l.role,
                        transition: l.transition,
                        reverse: "back" === a.direction
                    })
                }
                o ? (o = p.isPath(o) ? o : p.makeUrlAbsolute("#" + o, w), o === p.makeUrlAbsolute("#" + b.initialDst, w) && b.stack.length && b.stack[0].url !== b.initialDst.replace(C, "") && (o = e.mobile.firstPage), e.mobile.changePage(o, r)) : e.mobile.changePage(e.mobile.firstPage, r)
            }, h.bind("navigate", function (t, i) {
                var n;
                t.originalEvent && t.originalEvent.isDefaultPrevented() || (n = e.event.special.navigate.originalEventName.indexOf("hashchange") > -1 ? i.state.hash : i.state.url, n || (n = e.mobile.path.parseLocation().hash), n && "#" !== n && 0 !== n.indexOf("#" + e.mobile.path.uiStateKey) || (n = location.href), e.mobile._handleHashChange(n, i.state))
            }), e.mobile.document.bind("pageshow", e.mobile.resetActivePageHeight), e.mobile.window.bind("throttledresize", e.mobile.resetActivePageHeight)
        }, e(function () {
            g.resolve()
        }), e.when(g, e.mobile.navreadyDeferred).done(function () {
            e.mobile._registerInternalEvents()
        })
    }(e),
    function (e) {
        e.mobile.transitionFallbacks.flip = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.flow = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.pop = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionHandlers.slide = e.mobile.transitionHandlers.simultaneous, e.mobile.transitionFallbacks.slide = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.slidedown = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.slidefade = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.slideup = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.turn = "fade"
    }(e, this),
    function (e) {
        e.mobile.page.prototype.options.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        }, e.mobile.document.bind("pagecreate create", function (t) {
            var i, n = e.mobile.closestPageData(e(t.target));
            n && (i = n.options, e(t.target).find("input").not(n.keepNativeSelector()).each(function () {
                var t = e(this),
                    n = this.getAttribute("type"),
                    a = i.degradeInputs[n] || "text";
                if (i.degradeInputs[n]) {
                    var o = e("<div>").html(t.clone()).html(),
                        s = o.indexOf(" type=") > -1,
                        r = s ? /\s+type=["']?\w+['"]?/ : /\/?>/,
                        l = ' type="' + a + '" data-' + e.mobile.ns + 'type="' + n + '"' + (s ? "" : ">");
                    t.replaceWith(o.replace(r, l))
                }
            }))
        })
    }(e),
    function (e) {
        e.widget("mobile.dialog", e.mobile.widget, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                initSelector: ":jqmData(role='dialog')"
            },
            _handlePageBeforeShow: function () {
                this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            },
            _create: function () {
                var t = this.element,
                    i = this.options.corners ? " ui-corner-all" : "",
                    n = e("<div/>", {
                        role: "dialog",
                        "class": "ui-dialog-contain ui-overlay-shadow" + i
                    });
                t.addClass("ui-dialog ui-overlay-" + this.options.overlayTheme), t.wrapInner(n), t.bind("vclick submit", function (t) {
                    var i, n = e(t.target).closest("vclick" === t.type ? "a" : "form");
                    n.length && !n.jqmData("transition") && (i = e.mobile.urlHistory.getActive() || {}, n.attr("data-" + e.mobile.ns + "transition", i.transition || e.mobile.defaultDialogTransition).attr("data-" + e.mobile.ns + "direction", "reverse"))
                }), this._on(t, {
                    pagebeforeshow: "_handlePageBeforeShow"
                }), e.extend(this, {
                    _createComplete: !1
                }), this._setCloseBtn(this.options.closeBtn)
            },
            _setCloseBtn: function (t) {
                var i, n, a = this;
                this._headerCloseButton && (this._headerCloseButton.remove(), this._headerCloseButton = null), "none" !== t && (n = "left" === t ? "left" : "right", i = e("<a href='#' class='ui-btn-" + n + "' data-" + e.mobile.ns + "icon='delete' data-" + e.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), this.element.children().find(":jqmData(role='header')").first().prepend(i), this._createComplete && e.fn.buttonMarkup && i.buttonMarkup(), this._createComplete = !0, i.bind("click", function () {
                    a.close()
                }), this._headerCloseButton = i)
            },
            _setOption: function (e, t) {
                "closeBtn" === e && this._setCloseBtn(t), this._super(e, t)
            },
            close: function () {
                var t, i, n = e.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1, e.mobile.hashListeningEnabled && n.activeIndex > 0 ? e.mobile.back() : (t = Math.max(0, n.activeIndex - 1), i = n.stack[t].pageUrl || n.stack[t].url, n.previousIndex = n.activeIndex, n.activeIndex = t, e.mobile.path.isPath(i) || (i = e.mobile.path.makeUrlAbsolute("#" + i)), e.mobile.changePage(i, {
                    direction: "back",
                    changeHash: !1,
                    fromHashChange: !0
                })))
            }
        }), e.mobile.document.delegate(e.mobile.dialog.prototype.options.initSelector, "pagecreate", function () {
            e.mobile.dialog.prototype.enhance(this)
        })
    }(e, this),
    function (e) {
        e.mobile.page.prototype.options.backBtnText = "Back", e.mobile.page.prototype.options.addBackBtn = !1, e.mobile.page.prototype.options.backBtnTheme = null, e.mobile.page.prototype.options.headerTheme = "a", e.mobile.page.prototype.options.footerTheme = "a", e.mobile.page.prototype.options.contentTheme = null, e.mobile.document.bind("pagecreate", function (t) {
            var i = e(t.target),
                n = i.data("mobile-page").options,
                a = i.jqmData("role"),
                o = n.theme;
            e(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", i).jqmEnhanceable().each(function () {
                var t, s, r, l, d = e(this),
                    c = d.jqmData("role"),
                    h = d.jqmData("theme"),
                    u = h || n.contentTheme || "dialog" === a && o;
                if (d.addClass("ui-" + c), "header" === c || "footer" === c) {
                    var p = h || ("header" === c ? n.headerTheme : n.footerTheme) || o;
                    d.addClass("ui-bar-" + p).attr("role", "header" === c ? "banner" : "contentinfo"), "header" === c && (t = d.children("a, button"), s = t.hasClass("ui-btn-left"), r = t.hasClass("ui-btn-right"), s = s || t.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, r = r || t.eq(1).addClass("ui-btn-right").length), n.addBackBtn && "header" === c && e(".ui-page").length > 1 && i.jqmData("url") !== e.mobile.path.stripHash(location.hash) && !s && (l = e("<a href='javascript:void(0);' class='ui-btn-left' data-" + e.mobile.ns + "rel='back' data-" + e.mobile.ns + "icon='arrow-l'>" + n.backBtnText + "</a>").attr("data-" + e.mobile.ns + "theme", n.backBtnTheme || p).prependTo(d)), d.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                        role: "heading",
                        "aria-level": "1"
                    })
                } else "content" === c && (u && d.addClass("ui-body-" + u), d.attr("role", "main"))
            })
        })
    }(e),
    function (e, t) {
        function n(e) {
            for (var t; e && (t = "string" == typeof e.className && e.className + " ", !(t && t.indexOf("ui-btn ") > -1 && 0 > t.indexOf("ui-disabled ")));) e = e.parentNode;
            return e
        }

        function a(n, a, o, s, r) {
            var l = e.data(n[0], "buttonElements");
            n.removeClass(a).addClass(o), l && (l.bcls = e(i.createElement("div")).addClass(l.bcls + " " + o).removeClass(a).attr("class"), s !== t && (l.hover = s), l.state = r)
        }
        var o = function (e, i) {
            var n = e.getAttribute(i);
            return "true" === n ? !0 : "false" === n ? !1 : null === n ? t : n
        };
        e.fn.buttonMarkup = function (n) {
            var a, r = this,
                l = "data-" + e.mobile.ns;
            n = n && "object" === e.type(n) ? n : {};
            for (var d = 0; r.length > d; d++) {
                var c, h, u, p, m, f, g = r.eq(d),
                    b = g[0],
                    v = e.extend({}, e.fn.buttonMarkup.defaults, {
                        icon: n.icon !== t ? n.icon : o(b, l + "icon"),
                        iconpos: n.iconpos !== t ? n.iconpos : o(b, l + "iconpos"),
                        theme: n.theme !== t ? n.theme : o(b, l + "theme") || e.mobile.getInheritedTheme(g, "c"),
                        inline: n.inline !== t ? n.inline : o(b, l + "inline"),
                        shadow: n.shadow !== t ? n.shadow : o(b, l + "shadow"),
                        corners: n.corners !== t ? n.corners : o(b, l + "corners"),
                        iconshadow: n.iconshadow !== t ? n.iconshadow : o(b, l + "iconshadow"),
                        mini: n.mini !== t ? n.mini : o(b, l + "mini")
                    }, n),
                    _ = "ui-btn-inner",
                    C = "ui-btn-text",
                    x = !1,
                    y = "up";
                for (a in v) v[a] === t || null === v[a] ? g.removeAttr(l + a) : b.setAttribute(l + a, v[a]);
                for ("popup" === o(b, l + "rel") && g.attr("href") && (b.setAttribute("aria-haspopup", !0), b.setAttribute("aria-owns", g.attr("href"))), f = e.data("INPUT" === b.tagName || "BUTTON" === b.tagName ? b.parentNode : b, "buttonElements"), f ? (b = f.outer, g = e(b), u = f.inner, p = f.text, e(f.icon).remove(), f.icon = null, x = f.hover, y = f.state) : (u = i.createElement(v.wrapperEls), p = i.createElement(v.wrapperEls)), m = v.icon ? i.createElement("span") : null, s && !f && s(), v.theme || (v.theme = e.mobile.getInheritedTheme(g, "c")), c = "ui-btn ", c += x ? "ui-btn-hover-" + v.theme : "", c += y ? " ui-btn-" + y + "-" + v.theme : "", c += v.shadow ? " ui-shadow" : "", c += v.corners ? " ui-btn-corner-all" : "", v.mini !== t && (c += v.mini === !0 ? " ui-mini" : " ui-fullsize"), v.inline !== t && (c += v.inline === !0 ? " ui-btn-inline" : " ui-btn-block"), v.icon && (v.icon = "ui-icon-" + v.icon, v.iconpos = v.iconpos || "left", h = "ui-icon " + v.icon, v.iconshadow && (h += " ui-icon-shadow")), v.iconpos && (c += " ui-btn-icon-" + v.iconpos, "notext" !== v.iconpos || g.attr("title") || g.attr("title", g.getEncodedText())), f && g.removeClass(f.bcls || ""), g.removeClass("ui-link").addClass(c), u.className = _, p.className = C, f || u.appendChild(p), m && (m.className = h, f && f.icon || (m.innerHTML = "&#160;", u.appendChild(m))); b.firstChild && !f;) p.appendChild(b.firstChild);
                f || b.appendChild(u), f = {
                    hover: x,
                    state: y,
                    bcls: c,
                    outer: b,
                    inner: u,
                    text: p,
                    icon: m
                }, e.data(b, "buttonElements", f), e.data(u, "buttonElements", f), e.data(p, "buttonElements", f), m && e.data(m, "buttonElements", f)
            }
            return this
        }, e.fn.buttonMarkup.defaults = {
            corners: !0,
            shadow: !0,
            iconshadow: !0,
            wrapperEls: "span"
        };
        var s = function () {
            var i, o, r = e.mobile.buttonMarkup.hoverDelay;
            e.mobile.document.bind({
                "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function (s) {
                    var l, d = e(n(s.target)),
                        c = s.originalEvent && /^touch/.test(s.originalEvent.type),
                        h = s.type;
                    d.length && (l = d.attr("data-" + e.mobile.ns + "theme"), "vmousedown" === h ? c ? i = setTimeout(function () {
                        a(d, "ui-btn-up-" + l, "ui-btn-down-" + l, t, "down")
                    }, r) : a(d, "ui-btn-up-" + l, "ui-btn-down-" + l, t, "down") : "vmousecancel" === h || "vmouseup" === h ? a(d, "ui-btn-down-" + l, "ui-btn-up-" + l, t, "up") : "vmouseover" === h || "focus" === h ? c ? o = setTimeout(function () {
                        a(d, "ui-btn-up-" + l, "ui-btn-hover-" + l, !0, "")
                    }, r) : a(d, "ui-btn-up-" + l, "ui-btn-hover-" + l, !0, "") : ("vmouseout" === h || "blur" === h || "scrollstart" === h) && (a(d, "ui-btn-hover-" + l + " ui-btn-down-" + l, "ui-btn-up-" + l, !1, "up"), i && clearTimeout(i), o && clearTimeout(o)))
                },
                "focusin focus": function (t) {
                    e(n(t.target)).addClass(e.mobile.focusClass)
                },
                "focusout blur": function (t) {
                    e(n(t.target)).removeClass(e.mobile.focusClass)
                }
            }), s = null
        };
        e.mobile.document.bind("pagecreate create", function (t) {
            e(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", t.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
        })
    }(e),
    function (e, t) {
        e.widget("mobile.collapsible", e.mobile.widget, {
            options: {
                expandCueText: " click to expand contents",
                collapseCueText: " click to collapse contents",
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: "plus",
                expandedIcon: "minus",
                iconpos: "left",
                theme: null,
                contentTheme: null,
                inset: !0,
                corners: !0,
                mini: !1,
                initSelector: ":jqmData(role='collapsible')"
            },
            _create: function () {
                var i = this.element,
                    n = this.options,
                    a = i.addClass("ui-collapsible"),
                    o = i.children(n.heading).first(),
                    s = a.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"),
                    r = i.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"),
                    l = "";
                o.is("legend") && (o = e("<div role='heading'>" + o.html() + "</div>").insertBefore(o), o.next().remove()), r.length ? (n.theme || (n.theme = r.jqmData("theme") || e.mobile.getInheritedTheme(r, "c")), n.contentTheme || (n.contentTheme = r.jqmData("content-theme")), n.collapsedIcon = i.jqmData("collapsed-icon") || r.jqmData("collapsed-icon") || n.collapsedIcon, n.expandedIcon = i.jqmData("expanded-icon") || r.jqmData("expanded-icon") || n.expandedIcon, n.iconpos = i.jqmData("iconpos") || r.jqmData("iconpos") || n.iconpos, n.inset = r.jqmData("inset") !== t ? r.jqmData("inset") : !0, n.corners = !1, n.mini || (n.mini = r.jqmData("mini"))) : n.theme || (n.theme = e.mobile.getInheritedTheme(i, "c")), n.inset && (l += " ui-collapsible-inset", n.corners && (l += " ui-corner-all")), n.contentTheme && (l += " ui-collapsible-themed-content", s.addClass("ui-body-" + n.contentTheme)), "" !== l && a.addClass(l), o.insertBefore(s).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({
                    shadow: !1,
                    corners: !1,
                    iconpos: n.iconpos,
                    icon: n.collapsedIcon,
                    mini: n.mini,
                    theme: n.theme
                }), a.bind("expand collapse", function (t) {
                    if (!t.isDefaultPrevented()) {
                        var i = e(this),
                            a = "collapse" === t.type;
                        t.preventDefault(), o.toggleClass("ui-collapsible-heading-collapsed", a).find(".ui-collapsible-heading-status").text(a ? n.expandCueText : n.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-" + n.expandedIcon, !a).toggleClass("ui-icon-" + n.collapsedIcon, a || n.expandedIcon === n.collapsedIcon).end().find("a").first().removeClass(e.mobile.activeBtnClass), i.toggleClass("ui-collapsible-collapsed", a), s.toggleClass("ui-collapsible-content-collapsed", a).attr("aria-hidden", a), s.trigger("updatelayout")
                    }
                }).trigger(n.collapsed ? "collapse" : "expand"), o.bind("tap", function () {
                    o.find("a").first().addClass(e.mobile.activeBtnClass)
                }).bind("click", function (e) {
                    var t = o.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse";
                    a.trigger(t), e.preventDefault(), e.stopPropagation()
                })
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.collapsible.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        e.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function (e, t) {
                var i;
                return t ? i = e.not(".ui-screen-hidden") : (i = e.filter(":visible"), 0 === i.length && (i = e.not(".ui-screen-hidden"))), i
            },
            _addFirstLastClasses: function (e, t, i) {
                e.removeClass("ui-first-child ui-last-child"), t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), i || this.element.trigger("updatelayout")
            }
        }
    }(e),
    function (e, t) {
        e.widget("mobile.collapsibleset", e.mobile.widget, e.extend({
            options: {
                initSelector: ":jqmData(role='collapsible-set')"
            },
            _create: function () {
                var i = this.element.addClass("ui-collapsible-set"),
                    n = this.options;
                n.theme || (n.theme = e.mobile.getInheritedTheme(i, "c")), n.contentTheme || (n.contentTheme = i.jqmData("content-theme")), n.corners || (n.corners = i.jqmData("corners")), i.jqmData("inset") !== t && (n.inset = i.jqmData("inset")), n.inset = n.inset !== t ? n.inset : !0, n.corners = n.corners !== t ? n.corners : !0, n.corners && n.inset && i.addClass("ui-corner-all"), i.jqmData("collapsiblebound") || i.jqmData("collapsiblebound", !0).bind("expand", function (t) {
                    var i = e(t.target).closest(".ui-collapsible");
                    i.parent().is(":jqmData(role='collapsible-set')") && i.siblings(".ui-collapsible").trigger("collapse")
                })
            },
            _init: function () {
                var e = this.element,
                    t = e.children(":jqmData(role='collapsible')"),
                    i = t.filter(":jqmData(collapsed='false')");
                this._refresh("true"), i.trigger("expand")
            },
            _refresh: function (t) {
                var i = this.element.children(":jqmData(role='collapsible')");
                e.mobile.collapsible.prototype.enhance(i.not(".ui-collapsible")), this._addFirstLastClasses(i, this._getVisibles(i, t), t)
            },
            refresh: function () {
                this._refresh(!1)
            }
        }, e.mobile.behaviors.addFirstLastClasses)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.collapsibleset.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        e.fn.fieldcontain = function () {
            return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function () {
                return 3 === this.nodeType && !/\S/.test(this.nodeValue)
            }).remove()
        }, e(i).bind("pagecreate create", function (t) {
            e(":jqmData(role='fieldcontain')", t.target).jqmEnhanceable().fieldcontain()
        })
    }(e),
    function (e) {
        e.fn.grid = function (t) {
            return this.each(function () {
                var i, n = e(this),
                    a = e.extend({
                        grid: null
                    }, t),
                    o = n.children(),
                    s = {
                        solo: 1,
                        a: 2,
                        b: 3,
                        c: 4,
                        d: 5
                    }, r = a.grid;
                if (!r)
                    if (5 >= o.length)
                        for (var l in s) s[l] === o.length && (r = l);
                    else r = "a", n.addClass("ui-grid-duo");
                i = s[r], n.addClass("ui-grid-" + r), o.filter(":nth-child(" + i + "n+1)").addClass("ui-block-a"), i > 1 && o.filter(":nth-child(" + i + "n+2)").addClass("ui-block-b"), i > 2 && o.filter(":nth-child(" + i + "n+3)").addClass("ui-block-c"), i > 3 && o.filter(":nth-child(" + i + "n+4)").addClass("ui-block-d"), i > 4 && o.filter(":nth-child(" + i + "n+5)").addClass("ui-block-e")
            })
        }
    }(e),
    function (e, t) {
        e.widget("mobile.navbar", e.mobile.widget, {
            options: {
                iconpos: "top",
                grid: null,
                initSelector: ":jqmData(role='navbar')"
            },
            _create: function () {
                var n = this.element,
                    a = n.find("a"),
                    o = a.filter(":jqmData(icon)").length ? this.options.iconpos : t;
                n.addClass("ui-navbar ui-mini").attr("role", "navigation").find("ul").jqmEnhanceable().grid({
                    grid: this.options.grid
                }), a.buttonMarkup({
                    corners: !1,
                    shadow: !1,
                    inline: !0,
                    iconpos: o
                }), n.delegate("a", "vclick", function (t) {
                    var n = e(t.target).is("a") ? e(this) : e(this).parent("a");
                    if (!n.is(".ui-disabled, .ui-btn-active")) {
                        a.removeClass(e.mobile.activeBtnClass), e(this).addClass(e.mobile.activeBtnClass);
                        var o = e(this);
                        e(i).one("pagehide", function () {
                            o.removeClass(e.mobile.activeBtnClass)
                        })
                    }
                }), n.closest(".ui-page").bind("pagebeforeshow", function () {
                    a.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)
                })
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.navbar.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        var t = {};
        e.widget("mobile.listview", e.mobile.widget, e.extend({
            options: {
                theme: null,
                countTheme: "c",
                headerTheme: "b",
                dividerTheme: "b",
                icon: "arrow-r",
                splitIcon: "arrow-r",
                splitTheme: "b",
                corners: !0,
                shadow: !0,
                inset: !1,
                initSelector: ":jqmData(role='listview')"
            },
            _create: function () {
                var e = this,
                    t = "";
                t += e.options.inset ? " ui-listview-inset" : "", e.options.inset && (t += e.options.corners ? " ui-corner-all" : "", t += e.options.shadow ? " ui-shadow" : ""), e.element.addClass(function (e, i) {
                    return i + " ui-listview" + t
                }), e.refresh(!0)
            },
            _findFirstElementByTagName: function (e, t, i, n) {
                var a = {};
                for (a[i] = a[n] = !0; e;) {
                    if (a[e.nodeName]) return e;
                    e = e[t]
                }
                return null
            },
            _getChildrenByTagName: function (t, i, n) {
                var a = [],
                    o = {};
                for (o[i] = o[n] = !0, t = t.firstChild; t;) o[t.nodeName] && a.push(t), t = t.nextSibling;
                return e(a)
            },
            _addThumbClasses: function (t) {
                var i, n, a = t.length;
                for (i = 0; a > i; i++) n = e(this._findFirstElementByTagName(t[i].firstChild, "nextSibling", "img", "IMG")), n.length && (n.addClass("ui-li-thumb"), e(this._findFirstElementByTagName(n[0].parentNode, "parentNode", "li", "LI")).addClass(n.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
            },
            refresh: function (t) {
                this.parentPage = this.element.closest(".ui-page"), this._createSubPages();
                var n, a, o, s, r, l, d, c, h, u, p, m, f = this.options,
                    g = this.element,
                    b = g.jqmData("dividertheme") || f.dividerTheme,
                    v = g.jqmData("splittheme"),
                    _ = g.jqmData("spliticon"),
                    C = g.jqmData("icon"),
                    x = this._getChildrenByTagName(g[0], "li", "LI"),
                    y = !! e.nodeName(g[0], "ol"),
                    w = !e.support.cssPseudoElement,
                    T = g.attr("start"),
                    D = {};
                y && w && g.find(".ui-li-dec").remove(), y && (T || 0 === T ? w ? d = parseInt(T, 10) : (c = parseInt(T, 10) - 1, g.css("counter-reset", "listnumbering " + c)) : w && (d = 1)), f.theme || (f.theme = e.mobile.getInheritedTheme(this.element, "c"));
                for (var P = 0, k = x.length; k > P; P++) {
                    if (n = x.eq(P), a = "ui-li", t || !n.hasClass("ui-li")) {
                        o = n.jqmData("theme") || f.theme, s = this._getChildrenByTagName(n[0], "a", "A");
                        var E = "list-divider" === n.jqmData("role");
                        s.length && !E ? (p = n.jqmData("icon"), n.buttonMarkup({
                            wrapperEls: "div",
                            shadow: !1,
                            corners: !1,
                            iconpos: "right",
                            icon: s.length > 1 || p === !1 ? !1 : p || C || f.icon,
                            theme: o
                        }), p !== !1 && 1 === s.length && n.addClass("ui-li-has-arrow"), s.first().removeClass("ui-link").addClass("ui-link-inherit"), s.length > 1 && (a += " ui-li-has-alt", r = s.last(), l = v || r.jqmData("theme") || f.splitTheme, m = r.jqmData("icon"), r.appendTo(n).attr("title", e.trim(r.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({
                            shadow: !1,
                            corners: !1,
                            theme: o,
                            icon: !1,
                            iconpos: "notext"
                        }).find(".ui-btn-inner").append(e(i.createElement("span")).buttonMarkup({
                            shadow: !0,
                            corners: !0,
                            theme: l,
                            iconpos: "notext",
                            icon: m || p || _ || f.splitIcon
                        })))) : E ? (a += " ui-li-divider ui-bar-" + (n.jqmData("theme") || b), n.attr("role", "heading"), y && (T || 0 === T ? w ? d = parseInt(T, 10) : (h = parseInt(T, 10) - 1, n.css("counter-reset", "listnumbering " + h)) : w && (d = 1))) : a += " ui-li-static ui-btn-up-" + o
                    }
                    y && w && 0 > a.indexOf("ui-li-divider") && (u = a.indexOf("ui-li-static") > 0 ? n : n.find(".ui-link-inherit"), u.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + d+++". </span>")), D[a] || (D[a] = []), D[a].push(n[0])
                }
                for (a in D) e(D[a]).addClass(a).children(".ui-btn-inner").addClass(a);
                g.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function () {
                    var t = e(this);
                    t.prependTo(t.parent())
                }).end().find(".ui-li-count").each(function () {
                    e(this).closest("li").addClass("ui-li-has-count")
                }).addClass("ui-btn-up-" + (g.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"), this._addThumbClasses(x), this._addThumbClasses(g.find(".ui-link-inherit")), this._addFirstLastClasses(x, this._getVisibles(x, t), t), this._trigger("afterrefresh")
            },
            _idStringEscape: function (e) {
                return e.replace(/[^a-zA-Z0-9]/g, "-")
            },
            _createSubPages: function () {
                var i, a = this.element,
                    o = a.closest(".ui-page"),
                    s = o.jqmData("url"),
                    r = s || o[0][e.expando],
                    l = a.attr("id"),
                    d = this.options,
                    c = "data-" + e.mobile.ns,
                    h = this,
                    u = o.find(":jqmData(role='footer')").jqmData("id");
                if (t[r] === n && (t[r] = -1), l = l || ++t[r], e(a.find("li>ul, li>ol").toArray().reverse()).each(function (t) {
                    var n, o, r = e(this),
                        h = r.attr("id") || l + "-" + t,
                        p = r.parent(),
                        m = e(r.prevAll().toArray().reverse()),
                        f = m.length ? m : e("<span>" + e.trim(p.contents()[0].nodeValue) + "</span>"),
                        g = f.first().getEncodedText(),
                        b = (s || "") + "&" + e.mobile.subPageUrlKey + "=" + h,
                        v = r.jqmData("theme") || d.theme,
                        _ = r.jqmData("counttheme") || a.jqmData("counttheme") || d.countTheme;
                    i = !0, n = r.detach().wrap("<div " + c + "role='page' " + c + "url='" + b + "' " + c + "theme='" + v + "' " + c + "count-theme='" + _ + "'><div " + c + "role='content'></div></div>").parent().before("<div " + c + "role='header' " + c + "theme='" + d.headerTheme + "'><div class='ui-title'>" + g + "</div></div>").after(u ? e("<div " + c + "role='footer' " + c + "id='" + u + "'>") : "").parent().appendTo(e.mobile.pageContainer), n.page(), o = p.find("a:first"), o.length || (o = e("<a/>").html(f || g).prependTo(p.empty())), o.attr("href", "#" + b)
                }).listview(), i && o.is(":jqmData(external-page='true')") && o.data("mobile-page").options.domCache === !1) {
                    var p = function (t, i) {
                        var n, a = i.nextPage,
                            r = new e.Event("pageremove");
                        i.nextPage && (n = a.jqmData("url"), 0 !== n.indexOf(s + "&" + e.mobile.subPageUrlKey) && (h.childPages().remove(), o.trigger(r), r.isDefaultPrevented() || o.removeWithDependents()))
                    };
                    o.unbind("pagehide.remove").bind("pagehide.remove", p)
                }
            },
            childPages: function () {
                var t = this.parentPage.jqmData("url");
                return e(":jqmData(url^='" + t + "&" + e.mobile.subPageUrlKey + "')")
            }
        }, e.mobile.behaviors.addFirstLastClasses)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.listview.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        var t = e("meta[name=viewport]"),
            i = t.attr("content"),
            n = i + ",maximum-scale=1, user-scalable=no",
            a = i + ",maximum-scale=10, user-scalable=yes",
            o = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(i);
        e.mobile.zoom = e.extend({}, {
            enabled: !o,
            locked: !1,
            disable: function (i) {
                o || e.mobile.zoom.locked || (t.attr("content", n), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = i || !1)
            },
            enable: function (i) {
                o || e.mobile.zoom.locked && i !== !0 || (t.attr("content", a), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1)
            },
            restore: function () {
                o || (t.attr("content", i), e.mobile.zoom.enabled = !0)
            }
        })
    }(e),
    function (e) {
        e.widget("mobile.textinput", e.mobile.widget, {
            options: {
                theme: null,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",
                clearBtn: !1,
                clearSearchButtonText: null,
                clearBtnText: "clear text",
                disabled: !1
            },
            _create: function () {
                function t() {
                    setTimeout(function () {
                        a.toggleClass("ui-input-clear-hidden", !s.val())
                    }, 0)
                }
                var i, a, o = this,
                    s = this.element,
                    r = this.options,
                    l = r.theme || e.mobile.getInheritedTheme(this.element, "c"),
                    d = " ui-body-" + l,
                    c = r.mini ? " ui-mini" : "",
                    h = s.is("[type='search'], :jqmData(type='search')"),
                    u = r.clearSearchButtonText || r.clearBtnText,
                    p = s.is("textarea, :jqmData(type='range')"),
                    m = !! r.clearBtn && !p,
                    f = s.is("input") && !s.is(":jqmData(type='range')");
                if (e("label[for='" + s.attr("id") + "']").addClass("ui-input-text"), i = s.addClass("ui-input-text ui-body-" + l), s[0].autocorrect === n || e.support.touchOverflow || (s[0].setAttribute("autocorrect", "off"), s[0].setAttribute("autocomplete", "off")), h ? i = s.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + d + c + "'></div>").parent() : f && (i = s.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow" + d + c + "'></div>").parent()), m || h ? (a = e("<a href='#' class='ui-input-clear' title='" + u + "'>" + u + "</a>").bind("click", function (e) {
                    s.val("").focus().trigger("change"), a.addClass("ui-input-clear-hidden"), e.preventDefault()
                }).appendTo(i).buttonMarkup({
                    icon: "delete",
                    iconpos: "notext",
                    corners: !0,
                    shadow: !0,
                    mini: r.mini
                }), h || i.addClass("ui-input-has-clear"), t(), s.bind("paste cut keyup input focus change blur", t)) : f || h || s.addClass("ui-corner-all ui-shadow-inset" + d + c), s.focus(function () {
                    r.preventFocusZoom && e.mobile.zoom.disable(!0), i.addClass(e.mobile.focusClass)
                }).blur(function () {
                    i.removeClass(e.mobile.focusClass), r.preventFocusZoom && e.mobile.zoom.enable(!0)
                }), s.is("textarea")) {
                    var g, b = 15,
                        v = 100;
                    this._keyup = function () {
                        var e = s[0].scrollHeight,
                            t = s[0].clientHeight;
                        if (e > t) {
                            var i = parseFloat(s.css("padding-top")),
                                n = parseFloat(s.css("padding-bottom")),
                                a = i + n;
                            s.height(e - a + b)
                        }
                    }, s.on("keyup change input paste", function () {
                        clearTimeout(g), g = setTimeout(o._keyup, v)
                    }), this._on(!0, e.mobile.document, {
                        pagechange: "_keyup"
                    }), e.trim(s.val()) && this._on(!0, e.mobile.window, {
                        load: "_keyup"
                    })
                }
                s.attr("disabled") && this.disable()
            },
            disable: function () {
                var e, t = this.element.is("[type='search'], :jqmData(type='search')"),
                    i = this.element.is("input") && !this.element.is(":jqmData(type='range')"),
                    n = this.element.attr("disabled", !0) && (i || t);
                return e = n ? this.element.parent() : this.element, e.addClass("ui-disabled"), this._setOption("disabled", !0)
            },
            enable: function () {
                var e, t = this.element.is("[type='search'], :jqmData(type='search')"),
                    i = this.element.is("input") && !this.element.is(":jqmData(type='range')"),
                    n = this.element.attr("disabled", !1) && (i || t);
                return e = n ? this.element.parent() : this.element, e.removeClass("ui-disabled"), this._setOption("disabled", !1)
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.textinput.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.mobile.listview.prototype.options.filter = !1, e.mobile.listview.prototype.options.filterPlaceholder = "Filter items...", e.mobile.listview.prototype.options.filterTheme = "c", e.mobile.listview.prototype.options.filterReveal = !1;
        var t = function (e, t) {
            return -1 === ("" + e).toLowerCase().indexOf(t)
        };
        e.mobile.listview.prototype.options.filterCallback = t, e.mobile.document.delegate("ul, ol", "listviewcreate", function () {
            var i = e(this),
                n = i.data("mobile-listview");
            if (n && n.options.filter) {
                n.options.filterReveal && i.children().addClass("ui-screen-hidden");
                var a = e("<form>", {
                    "class": "ui-listview-filter ui-bar-" + n.options.filterTheme,
                    role: "search"
                }).submit(function (e) {
                    e.preventDefault(), s.blur()
                }),
                    o = function () {
                        var a, o = e(this),
                            s = this.value.toLowerCase(),
                            r = null,
                            l = i.children(),
                            d = o.jqmData("lastval") + "",
                            c = !1,
                            h = "",
                            u = n.options.filterCallback !== t;
                        if (!d || d !== s) {
                            if (n._trigger("beforefilter", "beforefilter", {
                                input: this
                            }), o.jqmData("lastval", s), u || s.length < d.length || 0 !== s.indexOf(d) ? r = i.children() : (r = i.children(":not(.ui-screen-hidden)"), !r.length && n.options.filterReveal && (r = i.children(".ui-screen-hidden"))), s) {
                                for (var p = r.length - 1; p >= 0; p--) a = e(r[p]), h = a.jqmData("filtertext") || a.text(), a.is("li:jqmData(role=list-divider)") ? (a.toggleClass("ui-filter-hidequeue", !c), c = !1) : n.options.filterCallback(h, s, a) ? a.toggleClass("ui-filter-hidequeue", !0) : c = !0;
                                r.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", !1), r.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", !0).toggleClass("ui-filter-hidequeue", !1)
                            } else r.toggleClass("ui-screen-hidden", !! n.options.filterReveal);
                            n._addFirstLastClasses(l, n._getVisibles(l, !1), !1)
                        }
                    }, s = e("<input>", {
                        placeholder: n.options.filterPlaceholder
                    }).attr("data-" + e.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change input", o).appendTo(a).textinput();
                n.options.inset && a.addClass("ui-listview-filter-inset"), a.bind("submit", function () {
                    return !1
                }).insertBefore(i)
            }
        })
    }(e),
    function (e) {
        e.mobile.listview.prototype.options.autodividers = !1, e.mobile.listview.prototype.options.autodividersSelector = function (t) {
            var i = e.trim(t.text()) || null;
            return i ? i = i.slice(0, 1).toUpperCase() : null
        }, e.mobile.document.delegate("ul,ol", "listviewcreate", function () {
            var t = e(this),
                n = t.data("mobile-listview");
            if (n && n.options.autodividers) {
                var a = function () {
                    t.find("li:jqmData(role='list-divider')").remove();
                    for (var a, o, s = t.find("li"), r = null, l = 0; s.length > l; l++) {
                        if (a = s[l], o = n.options.autodividersSelector(e(a)), o && r !== o) {
                            var d = i.createElement("li");
                            d.appendChild(i.createTextNode(o)), d.setAttribute("data-" + e.mobile.ns + "role", "list-divider"), a.parentNode.insertBefore(d, a)
                        }
                        r = o
                    }
                }, o = function () {
                        t.unbind("listviewafterrefresh", o), a(), n.refresh(), t.bind("listviewafterrefresh", o)
                    };
                o()
            }
        })
    }(e),
    function (e) {
        e(i).bind("pagecreate create", function (t) {
            e(":jqmData(role='nojs')", t.target).addClass("ui-nojs")
        })
    }(e),
    function (e) {
        e.mobile.behaviors.formReset = {
            _handleFormReset: function () {
                this._on(this.element.closest("form"), {
                    reset: function () {
                        this._delay("_reset")
                    }
                })
            }
        }
    }(e),
    function (e) {
        e.widget("mobile.checkboxradio", e.mobile.widget, e.extend({
            options: {
                theme: null,
                mini: !1,
                initSelector: "input[type='checkbox'],input[type='radio']"
            },
            _create: function () {
                var t = this,
                    a = this.element,
                    o = this.options,
                    s = function (e, t) {
                        return e.jqmData(t) || e.closest("form, fieldset").jqmData(t)
                    }, r = e(a).closest("label"),
                    l = r.length ? r : e(a).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='" + a[0].id + "']").first(),
                    d = a[0].type,
                    c = s(a, "mini") || o.mini,
                    h = d + "-on",
                    u = d + "-off",
                    p = s(a, "iconpos"),
                    m = "ui-" + h,
                    f = "ui-" + u;
                if ("checkbox" === d || "radio" === d) {
                    e.extend(this, {
                        label: l,
                        inputtype: d,
                        checkedClass: m,
                        uncheckedClass: f,
                        checkedicon: h,
                        uncheckedicon: u
                    }), o.theme || (o.theme = e.mobile.getInheritedTheme(this.element, "c")), l.buttonMarkup({
                        theme: o.theme,
                        icon: u,
                        shadow: !1,
                        mini: c,
                        iconpos: p
                    });
                    var g = i.createElement("div");
                    g.className = "ui-" + d, a.add(l).wrapAll(g), l.bind({
                        vmouseover: function (t) {
                            e(this).parent().is(".ui-disabled") && t.stopPropagation()
                        },
                        vclick: function (e) {
                            return a.is(":disabled") ? (e.preventDefault(), n) : (t._cacheVals(), a.prop("checked", "radio" === d && !0 || !a.prop("checked")), a.triggerHandler("click"), t._getInputSet().not(a).prop("checked", !1), t._updateAll(), !1)
                        }
                    }), a.bind({
                        vmousedown: function () {
                            t._cacheVals()
                        },
                        vclick: function () {
                            var i = e(this);
                            i.is(":checked") ? (i.prop("checked", !0), t._getInputSet().not(i).prop("checked", !1)) : i.prop("checked", !1), t._updateAll()
                        },
                        focus: function () {
                            l.addClass(e.mobile.focusClass)
                        },
                        blur: function () {
                            l.removeClass(e.mobile.focusClass)
                        }
                    }), this._handleFormReset(), this.refresh()
                }
            },
            _cacheVals: function () {
                this._getInputSet().each(function () {
                    e(this).jqmData("cacheVal", this.checked)
                })
            },
            _getInputSet: function () {
                return "checkbox" === this.inputtype ? this.element : this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']")
            },
            _updateAll: function () {
                var t = this;
                this._getInputSet().each(function () {
                    var i = e(this);
                    (this.checked || "checkbox" === t.inputtype) && i.trigger("change")
                }).checkboxradio("refresh")
            },
            _reset: function () {
                this.refresh()
            },
            refresh: function () {
                var t = this.element[0],
                    i = " " + e.mobile.activeBtnClass,
                    n = this.checkedClass + (this.element.parents(".ui-controlgroup-horizontal").length ? i : ""),
                    a = this.label;
                t.checked ? a.removeClass(this.uncheckedClass + i).addClass(n).buttonMarkup({
                    icon: this.checkedicon
                }) : a.removeClass(n).addClass(this.uncheckedClass).buttonMarkup({
                    icon: this.uncheckedicon
                }), t.disabled ? this.disable() : this.enable()
            },
            disable: function () {
                this.element.prop("disabled", !0).parent().addClass("ui-disabled")
            },
            enable: function () {
                this.element.prop("disabled", !1).parent().removeClass("ui-disabled")
            }
        }, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.checkboxradio.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.widget("mobile.button", e.mobile.widget, {
            options: {
                theme: null,
                icon: null,
                iconpos: null,
                corners: !0,
                shadow: !0,
                iconshadow: !0,
                inline: null,
                mini: null,
                initSelector: "button, [type='button'], [type='submit'], [type='reset']"
            },
            _create: function () {
                var t, i = this.element,
                    a = function (e) {
                        var t, i = {};
                        for (t in e) null !== e[t] && "initSelector" !== t && (i[t] = e[t]);
                        return i
                    }(this.options),
                    o = "";
                return "A" === i[0].tagName ? (i.hasClass("ui-btn") || i.buttonMarkup(), n) : (this.options.theme || (this.options.theme = e.mobile.getInheritedTheme(this.element, "c")), ~i[0].className.indexOf("ui-btn-left") && (o = "ui-btn-left"), ~i[0].className.indexOf("ui-btn-right") && (o = "ui-btn-right"), ("submit" === i.attr("type") || "reset" === i.attr("type")) && (o ? o += " ui-submit" : o = "ui-submit"), e("label[for='" + i.attr("id") + "']").addClass("ui-submit"), this.button = e("<div></div>")[i.html() ? "html" : "text"](i.html() || i.val()).insertBefore(i).buttonMarkup(a).addClass(o).append(i.addClass("ui-btn-hidden")), t = this.button, i.bind({
                    focus: function () {
                        t.addClass(e.mobile.focusClass)
                    },
                    blur: function () {
                        t.removeClass(e.mobile.focusClass)
                    }
                }), this.refresh(), n)
            },
            _setOption: function (t, i) {
                var n = {};
                n[t] = i, "initSelector" !== t && (this.button.buttonMarkup(n), this.element.attr("data-" + (e.mobile.ns || "") + t.replace(/([A-Z])/, "-$1").toLowerCase(), i)), this._super("_setOption", t, i)
            },
            enable: function () {
                return this.element.attr("disabled", !1), this.button.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
            },
            disable: function () {
                return this.element.attr("disabled", !0), this.button.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
            },
            refresh: function () {
                var t = this.element;
                t.prop("disabled") ? this.disable() : this.enable(), e(this.button.data("buttonElements").text)[t.html() ? "html" : "text"](t.html() || t.val())
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.button.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e, n) {
        e.widget("mobile.slider", e.mobile.widget, e.extend({
            widgetEventPrefix: "slide",
            options: {
                theme: null,
                trackTheme: null,
                disabled: !1,
                initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
                mini: !1,
                highlight: !1
            },
            _create: function () {
                var a, o, s = this,
                    r = this.element,
                    l = e.mobile.getInheritedTheme(r, "c"),
                    d = this.options.theme || l,
                    c = this.options.trackTheme || l,
                    h = r[0].nodeName.toLowerCase(),
                    u = (this.isToggleSwitch = "select" === h, r.parent().is(":jqmData(role='rangeslider')")),
                    p = this.isToggleSwitch ? "ui-slider-switch" : "",
                    m = r.attr("id"),
                    f = e("[for='" + m + "']"),
                    g = f.attr("id") || m + "-label",
                    b = f.attr("id", g),
                    v = this.isToggleSwitch ? 0 : parseFloat(r.attr("min")),
                    _ = this.isToggleSwitch ? r.find("option").length - 1 : parseFloat(r.attr("max")),
                    C = t.parseFloat(r.attr("step") || 1),
                    x = this.options.mini || r.jqmData("mini") ? " ui-mini" : "",
                    y = i.createElement("a"),
                    w = e(y),
                    T = i.createElement("div"),
                    D = e(T),
                    P = this.options.highlight && !this.isToggleSwitch ? function () {
                        var t = i.createElement("div");
                        return t.className = "ui-slider-bg " + e.mobile.activeBtnClass + " ui-btn-corner-all", e(t).prependTo(D)
                    }() : !1;
                if (y.setAttribute("href", "#"), T.setAttribute("role", "application"), T.className = [this.isToggleSwitch ? "ui-slider " : "ui-slider-track ", p, " ui-btn-down-", c, " ui-btn-corner-all", x].join(""), y.className = "ui-slider-handle", T.appendChild(y), w.buttonMarkup({
                    corners: !0,
                    theme: d,
                    shadow: !0
                }).attr({
                    role: "slider",
                    "aria-valuemin": v,
                    "aria-valuemax": _,
                    "aria-valuenow": this._value(),
                    "aria-valuetext": this._value(),
                    title: this._value(),
                    "aria-labelledby": g
                }), e.extend(this, {
                    slider: D,
                    handle: w,
                    type: h,
                    step: C,
                    max: _,
                    min: v,
                    valuebg: P,
                    isRangeslider: u,
                    dragging: !1,
                    beforeStart: null,
                    userModified: !1,
                    mouseMoved: !1
                }), this.isToggleSwitch) {
                    o = i.createElement("div"), o.className = "ui-slider-inneroffset";
                    for (var k = 0, E = T.childNodes.length; E > k; k++) o.appendChild(T.childNodes[k]);
                    T.appendChild(o), w.addClass("ui-slider-handle-snapping"), a = r.find("option");
                    for (var q = 0, j = a.length; j > q; q++) {
                        var S = q ? "a" : "b",
                            A = q ? " " + e.mobile.activeBtnClass : " ui-btn-down-" + c,
                            N = (i.createElement("div"), i.createElement("span"));
                        N.className = ["ui-slider-label ui-slider-label-", S, A, " ui-btn-corner-all"].join(""), N.setAttribute("role", "img"), N.appendChild(i.createTextNode(a[q].innerHTML)), e(N).prependTo(D)
                    }
                    s._labels = e(".ui-slider-label", D)
                }
                b.addClass("ui-slider"), r.addClass(this.isToggleSwitch ? "ui-slider-switch" : "ui-slider-input"), this._on(r, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                }), D.bind("vmousedown", e.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(i, {
                    vmousemove: "_preventDocumentDrag"
                }), this._on(D.add(i), {
                    vmouseup: "_sliderVMouseUp"
                }), D.insertAfter(r), this.isToggleSwitch || u || (o = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", r.add(D).wrapAll(o)), this.isToggleSwitch && this.handle.bind({
                    focus: function () {
                        D.addClass(e.mobile.focusClass)
                    },
                    blur: function () {
                        D.removeClass(e.mobile.focusClass)
                    }
                }), this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(n, n, !0)
            },
            _controlChange: function (e) {
                return this._trigger("controlchange", e) === !1 ? !1 : (this.mouseMoved || this.refresh(this._value(), !0), n)
            },
            _controlKeyup: function () {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function () {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function () {
                this._checkedRefresh()
            },
            _handleVMouseDown: function () {
                this.handle.focus()
            },
            _handleKeydown: function (t) {
                var i = this._value();
                if (!this.options.disabled) {
                    switch (t.keyCode) {
                    case e.mobile.keyCode.HOME:
                    case e.mobile.keyCode.END:
                    case e.mobile.keyCode.PAGE_UP:
                    case e.mobile.keyCode.PAGE_DOWN:
                    case e.mobile.keyCode.UP:
                    case e.mobile.keyCode.RIGHT:
                    case e.mobile.keyCode.DOWN:
                    case e.mobile.keyCode.LEFT:
                        t.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
                    }
                    switch (t.keyCode) {
                    case e.mobile.keyCode.HOME:
                        this.refresh(this.min);
                        break;
                    case e.mobile.keyCode.END:
                        this.refresh(this.max);
                        break;
                    case e.mobile.keyCode.PAGE_UP:
                    case e.mobile.keyCode.UP:
                    case e.mobile.keyCode.RIGHT:
                        this.refresh(i + this.step);
                        break;
                    case e.mobile.keyCode.PAGE_DOWN:
                    case e.mobile.keyCode.DOWN:
                    case e.mobile.keyCode.LEFT:
                        this.refresh(i - this.step)
                    }
                }
            },
            _handleKeyup: function () {
                this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function (e) {
                return this.options.disabled || 1 !== e.which && 0 !== e.which ? !1 : this._trigger("beforestart", e) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(e), this._trigger("start"), !1)
            },
            _sliderVMouseUp: function () {
                return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.mouseMoved ? this.userModified ? this.refresh(0 === this.beforeStart ? 1 : 0) : this.refresh(this.beforeStart) : this.refresh(0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : n
            },
            _preventDocumentDrag: function (e) {
                return this._trigger("drag", e) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(e), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : n
            },
            _checkedRefresh: function () {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function () {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function () {
                this.refresh(n, !1, !0)
            },
            refresh: function (t, a, o) {
                var s, r, l, d, c = this,
                    h = e.mobile.getInheritedTheme(this.element, "c"),
                    u = this.options.theme || h,
                    p = this.options.trackTheme || h;
                c.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch" : "ui-slider-track", " ui-btn-down-" + p, " ui-btn-corner-all", this.options.mini ? " ui-mini" : ""].join(""), (this.options.disabled || this.element.attr("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function () {
                    var t = i.createElement("div");
                    return t.className = "ui-slider-bg " + e.mobile.activeBtnClass + " ui-btn-corner-all", e(t).prependTo(c.slider)
                }()), this.handle.buttonMarkup({
                    corners: !0,
                    theme: u,
                    shadow: !0
                });
                var m, f, g = this.element,
                    b = !this.isToggleSwitch,
                    v = b ? [] : g.find("option"),
                    _ = b ? parseFloat(g.attr("min")) : 0,
                    C = b ? parseFloat(g.attr("max")) : v.length - 1,
                    x = b && parseFloat(g.attr("step")) > 0 ? parseFloat(g.attr("step")) : 1;
                if ("object" == typeof t) {
                    if (l = t, d = 8, s = this.slider.offset().left, r = this.slider.width(), m = r / ((C - _) / x), !this.dragging || s - d > l.pageX || l.pageX > s + r + d) return;
                    f = m > 1 ? 100 * ((l.pageX - s) / r) : Math.round(100 * ((l.pageX - s) / r))
                } else null == t && (t = b ? parseFloat(g.val() || 0) : g[0].selectedIndex), f = 100 * ((parseFloat(t) - _) / (C - _)); if (!isNaN(f)) {
                    var y = f / 100 * (C - _) + _,
                        w = (y - _) % x,
                        T = y - w;
                    2 * Math.abs(w) >= x && (T += w > 0 ? x : -x);
                    var D = 100 / ((C - _) / x);
                    if (y = parseFloat(T.toFixed(5)), m === n && (m = r / ((C - _) / x)), m > 1 && b && (f = (y - _) * D * (1 / x)), 0 > f && (f = 0), f > 100 && (f = 100), _ > y && (y = _), y > C && (y = C), this.handle.css("left", f + "%"), this.handle[0].setAttribute("aria-valuenow", b ? y : v.eq(y).attr("value")), this.handle[0].setAttribute("aria-valuetext", b ? y : v.eq(y).getEncodedText()), this.handle[0].setAttribute("title", b ? y : v.eq(y).getEncodedText()), this.valuebg && this.valuebg.css("width", f + "%"), this._labels) {
                        var P = 100 * (this.handle.width() / this.slider.width()),
                            k = f && P + (100 - P) * f / 100,
                            E = 100 === f ? 0 : Math.min(P + 100 - k, 100);
                        this._labels.each(function () {
                            var t = e(this).is(".ui-slider-label-a");
                            e(this).width((t ? k : E) + "%")
                        })
                    }
                    if (!o) {
                        var q = !1;
                        if (b ? (q = g.val() !== y, g.val(y)) : (q = g[0].selectedIndex !== y, g[0].selectedIndex = y), this._trigger("beforechange", t) === !1) return !1;
                        !a && q && g.trigger("change")
                    }
                }
            },
            enable: function () {
                return this.element.attr("disabled", !1), this.slider.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
            },
            disable: function () {
                return this.element.attr("disabled", !0), this.slider.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
            }
        }, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.slider.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.widget("mobile.rangeslider", e.mobile.widget, {
            options: {
                theme: null,
                trackTheme: null,
                disabled: !1,
                initSelector: ":jqmData(role='rangeslider')",
                mini: !1,
                highlight: !0
            },
            _create: function () {
                var t, i = this.element,
                    n = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
                    a = i.find("input").first(),
                    o = i.find("input").last(),
                    s = i.find("label").first(),
                    r = e.data(a.get(0), "mobileSlider").slider,
                    l = e.data(o.get(0), "mobileSlider").slider,
                    d = e.data(a.get(0), "mobileSlider").handle,
                    c = e('<div class="ui-rangeslider-sliders" />').appendTo(i);
                i.find("label").length > 1 && (t = i.find("label").last().hide()), a.addClass("ui-rangeslider-first"), o.addClass("ui-rangeslider-last"), i.addClass(n), r.appendTo(c), l.appendTo(c), s.prependTo(i), d.prependTo(l), e.extend(this, {
                    _inputFirst: a,
                    _inputLast: o,
                    _sliderFirst: r,
                    _sliderLast: l,
                    _targetVal: null,
                    _sliderTarget: !1,
                    _sliders: c,
                    _proxy: !1
                }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                }), this._on({
                    mousedown: "_change"
                }), this._on(this.element.closest("form"), {
                    reset: "_handleReset"
                }), this._on(d, {
                    vmousedown: "_dragFirstHandle"
                })
            },
            _handleReset: function () {
                var e = this;
                setTimeout(function () {
                    e._updateHighlight()
                }, 0)
            },
            _dragFirstHandle: function (t) {
                return e.data(this._inputFirst.get(0), "mobileSlider").dragging = !0, e.data(this._inputFirst.get(0), "mobileSlider").refresh(t), !1
            },
            _slidedrag: function (t) {
                var i = e(t.target).is(this._inputFirst),
                    a = i ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1, "first" === this._proxy && i || "last" === this._proxy && !i ? (e.data(a.get(0), "mobileSlider").dragging = !0, e.data(a.get(0), "mobileSlider").refresh(t), !1) : n
            },
            _slidestop: function (t) {
                var i = e(t.target).is(this._inputFirst);
                this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", i ? 1 : "")
            },
            _slidebeforestart: function (t) {
                this._sliderTarget = !1, e(t.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = e(t.target).val())
            },
            _setOption: function (e) {
                this._superApply(e), this.refresh()
            },
            refresh: function () {
                var e = this.element,
                    t = this.options;
                e.find("input").slider({
                    theme: t.theme,
                    trackTheme: t.trackTheme,
                    disabled: t.disabled,
                    mini: t.mini,
                    highlight: t.highlight
                }).slider("refresh"), this._updateHighlight()
            },
            _change: function (t) {
                if ("keyup" === t.type) return this._updateHighlight(), !1;
                var i = this,
                    a = parseFloat(this._inputFirst.val(), 10),
                    o = parseFloat(this._inputLast.val(), 10),
                    s = e(t.target).hasClass("ui-rangeslider-first"),
                    r = s ? this._inputFirst : this._inputLast,
                    l = s ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === t.type && !e(t.target).hasClass("ui-slider-handle")) r.blur();
                else if ("mousedown" === t.type) return;
                return a > o && !this._sliderTarget ? (r.val(s ? o : a).slider("refresh"), this._trigger("normalize")) : a > o && (r.val(this._targetVal).slider("refresh"), setTimeout(function () {
                    l.val(s ? a : o).slider("refresh"), e.data(l.get(0), "mobileSlider").handle.focus(), i._sliderFirst.css("z-index", s ? "" : 1), i._trigger("normalize")
                }, 0), this._proxy = s ? "first" : "last"), a === o ? (e.data(r.get(0), "mobileSlider").handle.css("z-index", 1), e.data(l.get(0), "mobileSlider").handle.css("z-index", 0)) : (e.data(l.get(0), "mobileSlider").handle.css("z-index", ""), e.data(r.get(0), "mobileSlider").handle.css("z-index", "")), this._updateHighlight(), a >= o ? !1 : n
            },
            _updateHighlight: function () {
                var t = parseInt(e.data(this._inputFirst.get(0), "mobileSlider").handle.get(0).style.left, 10),
                    i = parseInt(e.data(this._inputLast.get(0), "mobileSlider").handle.get(0).style.left, 10),
                    n = i - t;
                this.element.find(".ui-slider-bg").css({
                    "margin-left": t + "%",
                    width: n + "%"
                })
            },
            _destroy: function () {
                this.element.removeClass("ui-rangeslider ui-mini").find("label").show(), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }), e.widget("mobile.rangeslider", e.mobile.rangeslider, e.mobile.behaviors.formReset), e(i).bind("pagecreate create", function (t) {
            e.mobile.rangeslider.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.widget("mobile.selectmenu", e.mobile.widget, e.extend({
            options: {
                theme: null,
                disabled: !1,
                icon: "arrow-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !0,
                overlayTheme: "a",
                dividerTheme: "b",
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                initSelector: "select:not( :jqmData(role='slider') )",
                mini: !1
            },
            _button: function () {
                return e("<div/>")
            },
            _setDisabled: function (e) {
                return this.element.attr("disabled", e), this.button.attr("aria-disabled", e), this._setOption("disabled", e)
            },
            _focusButton: function () {
                var e = this;
                setTimeout(function () {
                    e.button.focus()
                }, 40)
            },
            _selectOptions: function () {
                return this.select.find("option")
            },
            _preExtension: function () {
                var t = "";~
                this.element[0].className.indexOf("ui-btn-left") && (t = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (t = " ui-btn-right"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + t + "'>"), this.selectID = this.select.attr("id"), this.label = e("label[for='" + this.selectID + "']").addClass("ui-select"), this.isMultiple = this.select[0].multiple, this.options.theme || (this.options.theme = e.mobile.getInheritedTheme(this.select, "c"))
            },
            _destroy: function () {
                var e = this.element.parents(".ui-select");
                e.length > 0 && (e.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(e.is(".ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(e), e.remove())
            },
            _create: function () {
                this._preExtension(), this._trigger("beforeCreate"), this.button = this._button();
                var i = this,
                    n = this.options,
                    a = n.inline || this.select.jqmData("inline"),
                    o = n.mini || this.select.jqmData("mini"),
                    s = n.icon ? n.iconpos || this.select.jqmData("iconpos") : !1,
                    r = (-1 === this.select[0].selectedIndex ? 0 : this.select[0].selectedIndex, this.button.insertBefore(this.select).buttonMarkup({
                        theme: n.theme,
                        icon: n.icon,
                        iconpos: s,
                        inline: a,
                        corners: n.corners,
                        shadow: n.shadow,
                        iconshadow: n.iconshadow,
                        mini: o
                    }));
                this.setButtonText(), n.nativeMenu && t.opera && t.opera.version && r.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = e("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(r.addClass("ui-li-has-count"))), (n.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function () {
                    i.refresh(), n.nativeMenu && this.blur()
                }), this._handleFormReset(), this.build()
            },
            build: function () {
                var t = this;
                this.select.appendTo(t.button).bind("vmousedown", function () {
                    t.button.addClass(e.mobile.activeBtnClass)
                }).bind("focus", function () {
                    t.button.addClass(e.mobile.focusClass)
                }).bind("blur", function () {
                    t.button.removeClass(e.mobile.focusClass)
                }).bind("focus vmouseover", function () {
                    t.button.trigger("vmouseover")
                }).bind("vmousemove", function () {
                    t.button.removeClass(e.mobile.activeBtnClass)
                }).bind("change blur vmouseout", function () {
                    t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)
                }).bind("change blur", function () {
                    t.button.removeClass("ui-btn-down-" + t.options.theme)
                }), t.button.bind("vmousedown", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.label.bind("click focus", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.select.bind("focus", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.button.bind("mouseup", function () {
                    t.options.preventFocusZoom && setTimeout(function () {
                        e.mobile.zoom.enable(!0)
                    }, 0)
                }), t.select.bind("blur", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.enable(!0)
                })
            },
            selected: function () {
                return this._selectOptions().filter(":selected")
            },
            selectedIndices: function () {
                var e = this;
                return this.selected().map(function () {
                    return e._selectOptions().index(this)
                }).get()
            },
            setButtonText: function () {
                var t = this,
                    n = this.selected(),
                    a = this.placeholder,
                    o = e(i.createElement("span"));
                this.button.find(".ui-btn-text").html(function () {
                    return a = n.length ? n.map(function () {
                        return e(this).text()
                    }).get().join(", ") : t.placeholder, o.text(a).addClass(t.select.attr("class")).addClass(n.attr("class"))
                })
            },
            setButtonCount: function () {
                var e = this.selected();
                this.isMultiple && this.buttonCount[e.length > 1 ? "show" : "hide"]().text(e.length)
            },
            _reset: function () {
                this.refresh()
            },
            refresh: function () {
                this.setButtonText(), this.setButtonCount()
            },
            open: e.noop,
            close: e.noop,
            disable: function () {
                this._setDisabled(!0), this.button.addClass("ui-disabled")
            },
            enable: function () {
                this._setDisabled(!1), this.button.removeClass("ui-disabled")
            }
        }, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.selectmenu.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e, n) {
        function a(e, t, i, n) {
            var a = n;
            return a = t > e ? i + (e - t) / 2 : Math.min(Math.max(i, n - t / 2), i + e - t)
        }

        function o() {
            var i = e.mobile.window;
            return {
                x: i.scrollLeft(),
                y: i.scrollTop(),
                cx: t.innerWidth || i.width(),
                cy: t.innerHeight || i.height()
            }
        }
        e.widget("mobile.popup", e.mobile.widget, {
            options: {
                theme: null,
                overlayTheme: null,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null,
                initSelector: ":jqmData(role='popup')",
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                history: !e.mobile.browser.oldIE
            },
            _eatEventAndClose: function (e) {
                return e.preventDefault(), e.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
            },
            _resizeScreen: function () {
                var e = this._ui.container.outerHeight(!0);
                this._ui.screen.removeAttr("style"), e > this._ui.screen.height() && this._ui.screen.height(e)
            },
            _handleWindowKeyUp: function (t) {
                return this._isOpen && t.keyCode === e.mobile.keyCode.ESCAPE ? this._eatEventAndClose(t) : n
            },
            _expectResizeEvent: function () {
                var t = o();
                if (this._resizeData) {
                    if (t.x === this._resizeData.winCoords.x && t.y === this._resizeData.winCoords.y && t.cx === this._resizeData.winCoords.cx && t.cy === this._resizeData.winCoords.cy) return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {
                    timeoutId: setTimeout(e.proxy(this, "_resizeTimeout"), 200),
                    winCoords: t
                }, !0
            },
            _resizeTimeout: function () {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden"), this.reposition({
                    positionTo: "window"
                }), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
            },
            _ignoreResizeEvents: function () {
                var e = this;
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = setTimeout(function () {
                    e._ignoreResizeTo = 0
                }, 1e3)
            },
            _handleWindowResize: function () {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden").removeAttr("style"))
            },
            _handleWindowOrientationchange: function () {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
            },
            _handleDocumentFocusIn: function (t) {
                var n, a = t.target,
                    o = this._ui;
                if (this._isOpen) {
                    if (a !== o.container[0]) {
                        if (n = e(t.target), 0 === n.parents().filter(o.container[0]).length) return e(i.activeElement).one("focus", function () {
                            n.blur()
                        }), o.focusElement.focus(), t.preventDefault(), t.stopImmediatePropagation(), !1;
                        o.focusElement[0] === o.container[0] && (o.focusElement = n)
                    }
                    this._ignoreResizeEvents()
                }
            },
            _create: function () {
                var t = {
                    screen: e("<div class='ui-screen-hidden ui-popup-screen'></div>"),
                    placeholder: e("<div style='display: none;'><!-- placeholder --></div>"),
                    container: e("<div class='ui-popup-container ui-popup-hidden'></div>")
                }, i = this.element.closest(".ui-page"),
                    a = this.element.attr("id"),
                    o = this;
                this.options.history = this.options.history && e.mobile.ajaxEnabled && e.mobile.hashListeningEnabled, 0 === i.length && (i = e("body")), this.options.container = this.options.container || e.mobile.pageContainer, i.append(t.screen), t.container.insertAfter(t.screen), t.placeholder.insertAfter(this.element), a && (t.screen.attr("id", a + "-screen"), t.container.attr("id", a + "-popup"), t.placeholder.html("<!-- placeholder for " + a + " -->")), t.container.append(this.element), t.focusElement = t.container, this.element.addClass("ui-popup"), e.extend(this, {
                    _scrollTop: 0,
                    _page: i,
                    _ui: t,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prereqs: null,
                    _isOpen: !1,
                    _tolerance: null,
                    _resizeData: null,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                }), e.each(this.options, function (e, t) {
                    o.options[e] = n, o._setOption(e, t, !0)
                }), t.screen.bind("vclick", e.proxy(this, "_eatEventAndClose")), this._on(e.mobile.window, {
                    orientationchange: e.proxy(this, "_handleWindowOrientationchange"),
                    resize: e.proxy(this, "_handleWindowResize"),
                    keyup: e.proxy(this, "_handleWindowKeyUp")
                }), this._on(e.mobile.document, {
                    focusin: e.proxy(this, "_handleDocumentFocusIn")
                })
            },
            _applyTheme: function (e, t, i) {
                for (var n, a = (e.attr("class") || "").split(" "), o = null, s = t + ""; a.length > 0;) {
                    if (o = a.pop(), n = RegExp("^ui-" + i + "-([a-z])$").exec(o), n && n.length > 1) {
                        o = n[1];
                        break
                    }
                    o = null
                }
                t !== o && (e.removeClass("ui-" + i + "-" + o), null !== t && "none" !== t && e.addClass("ui-" + i + "-" + s))
            },
            _setTheme: function (e) {
                this._applyTheme(this.element, e, "body")
            },
            _setOverlayTheme: function (e) {
                this._applyTheme(this._ui.screen, e, "overlay"), this._isOpen && this._ui.screen.addClass("in")
            },
            _setShadow: function (e) {
                this.element.toggleClass("ui-overlay-shadow", e)
            },
            _setCorners: function (e) {
                this.element.toggleClass("ui-corner-all", e)
            },
            _applyTransition: function (t) {
                this._ui.container.removeClass(this._fallbackTransition), t && "none" !== t && (this._fallbackTransition = e.mobile._maybeDegradeTransition(t), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))
            },
            _setTransition: function (e) {
                this._currentTransition || this._applyTransition(e)
            },
            _setTolerance: function (t) {
                var i = {
                    t: 30,
                    r: 15,
                    b: 30,
                    l: 15
                };
                if (t !== n) {
                    var a = (t + "").split(",");
                    switch (e.each(a, function (e, t) {
                        a[e] = parseInt(t, 10)
                    }), a.length) {
                    case 1:
                        isNaN(a[0]) || (i.t = i.r = i.b = i.l = a[0]);
                        break;
                    case 2:
                        isNaN(a[0]) || (i.t = i.b = a[0]), isNaN(a[1]) || (i.l = i.r = a[1]);
                        break;
                    case 4:
                        isNaN(a[0]) || (i.t = a[0]), isNaN(a[1]) || (i.r = a[1]), isNaN(a[2]) || (i.b = a[2]), isNaN(a[3]) || (i.l = a[3]);
                        break;
                    default:
                    }
                }
                this._tolerance = i
            },
            _setOption: function (t, i) {
                var a, o = "_set" + t.charAt(0).toUpperCase() + t.slice(1);
                this[o] !== n && this[o](i), a = ["initSelector", "closeLinkSelector", "closeLinkEvents", "navigateEvents", "closeEvents", "history", "container"], e.mobile.widget.prototype._setOption.apply(this, arguments), -1 === e.inArray(t, a) && this.element.attr("data-" + (e.mobile.ns || "") + t.replace(/([A-Z])/, "-$1").toLowerCase(), i)
            },
            _placementCoords: function (e) {
                var t, n, s = o(),
                    r = {
                        x: this._tolerance.l,
                        y: s.y + this._tolerance.t,
                        cx: s.cx - this._tolerance.l - this._tolerance.r,
                        cy: s.cy - this._tolerance.t - this._tolerance.b
                    };
                this._ui.container.css("max-width", r.cx), t = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                }, n = {
                    x: a(r.cx, t.cx, r.x, e.x),
                    y: a(r.cy, t.cy, r.y, e.y)
                }, n.y = Math.max(0, n.y);
                var l = i.documentElement,
                    d = i.body,
                    c = Math.max(l.clientHeight, d.scrollHeight, d.offsetHeight, l.scrollHeight, l.offsetHeight);
                return n.y -= Math.min(n.y, Math.max(0, n.y + t.cy - c)), {
                    left: n.x,
                    top: n.y
                }
            },
            _createPrereqs: function (t, i, n) {
                var a, o = this;
                a = {
                    screen: e.Deferred(),
                    container: e.Deferred()
                }, a.screen.then(function () {
                    a === o._prereqs && t()
                }), a.container.then(function () {
                    a === o._prereqs && i()
                }), e.when(a.screen, a.container).done(function () {
                    a === o._prereqs && (o._prereqs = null, n())
                }), o._prereqs = a
            },
            _animate: function (t) {
                return this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd), t.prereqs.screen.resolve(), t.transition && "none" !== t.transition && (t.applyTransition && this._applyTransition(t.transition), this._fallbackTransition) ? (this._ui.container.animationComplete(e.proxy(t.prereqs.container, "resolve")).addClass(t.containerClassToAdd).removeClass(t.classToRemove), n) : (this._ui.container.removeClass(t.classToRemove), t.prereqs.container.resolve(), n)
            },
            _desiredCoords: function (t) {
                var i, n = null,
                    a = o(),
                    s = t.x,
                    r = t.y,
                    l = t.positionTo;
                if (l && "origin" !== l)
                    if ("window" === l) s = a.cx / 2 + a.x, r = a.cy / 2 + a.y;
                    else {
                        try {
                            n = e(l)
                        } catch (d) {
                            n = null
                        }
                        n && (n.filter(":visible"), 0 === n.length && (n = null))
                    }
                return n && (i = n.offset(), s = i.left + n.outerWidth() / 2, r = i.top + n.outerHeight() / 2), ("number" !== e.type(s) || isNaN(s)) && (s = a.cx / 2 + a.x), ("number" !== e.type(r) || isNaN(r)) && (r = a.cy / 2 + a.y), {
                    x: s,
                    y: r
                }
            },
            _reposition: function (e) {
                e = {
                    x: e.x,
                    y: e.y,
                    positionTo: e.positionTo
                }, this._trigger("beforeposition", e), this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))
            },
            reposition: function (e) {
                this._isOpen && this._reposition(e)
            },
            _openPrereqsComplete: function () {
                this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), this._ui.container.attr("tabindex", "0").focus(), this._ignoreResizeEvents(), this._trigger("afteropen")
            },
            _open: function (t) {
                var i = e.extend({}, this.options, t),
                    n = function () {
                        var e = navigator.userAgent,
                            t = e.match(/AppleWebKit\/([0-9\.]+)/),
                            i = !! t && t[1],
                            n = e.match(/Android (\d+(?:\.\d+))/),
                            a = !! n && n[1],
                            o = e.indexOf("Chrome") > -1;
                        return null !== n && "4.0" === a && i && i > 534.13 && !o ? !0 : !1
                    }();
                this._createPrereqs(e.noop, e.noop, e.proxy(this, "_openPrereqsComplete")), this._currentTransition = i.transition, this._applyTransition(i.transition), this.options.theme || this._setTheme(this._page.jqmData("theme") || e.mobile.getInheritedTheme(this._page, "c")), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-hidden"), this._reposition(i), this.options.overlayTheme && n && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
                    additionalCondition: !0,
                    transition: i.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prereqs: this._prereqs
                })
            },
            _closePrereqScreen: function () {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            },
            _closePrereqContainer: function () {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")
            },
            _closePrereqsDone: function () {
                this.options, this._ui.container.removeAttr("tabindex"), e.mobile.popup.active = n, this._trigger("afterclose")
            },
            _close: function (t) {
                this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrereqs(e.proxy(this, "_closePrereqScreen"), e.proxy(this, "_closePrereqContainer"), e.proxy(this, "_closePrereqsDone")), this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: t ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prereqs: this._prereqs
                })
            },
            _unenhance: function () {
                this._setTheme("none"), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove()
            },
            _destroy: function () {
                e.mobile.popup.active === this ? (this.element.one("popupafterclose", e.proxy(this, "_unenhance")), this.close()) : this._unenhance()
            },
            _closePopup: function (i, n) {
                var a, o, s = this.options,
                    r = !1;
                t.scrollTo(0, this._scrollTop), i && "pagebeforechange" === i.type && n && (a = "string" == typeof n.toPage ? n.toPage : n.toPage.jqmData("url"), a = e.mobile.path.parseUrl(a), o = a.pathname + a.search + a.hash, this._myUrl !== e.mobile.path.makeUrlAbsolute(o) ? r = !0 : i.preventDefault()), s.container.unbind(s.closeEvents), this.element.undelegate(s.closeLinkSelector, s.closeLinkEvents), this._close(r)
            },
            _bindContainerClose: function () {
                this.options.container.one(this.options.closeEvents, e.proxy(this, "_closePopup"))
            },
            open: function (i) {
                var a, o, s, r, l, d, c = this,
                    h = this.options;
                if (!e.mobile.popup.active) {
                    if (e.mobile.popup.active = this, this._scrollTop = e.mobile.window.scrollTop(), !h.history) return c._open(i), c._bindContainerClose(), c.element.delegate(h.closeLinkSelector, h.closeLinkEvents, function (e) {
                        c.close(), e.preventDefault()
                    }), n;
                    if (d = e.mobile.urlHistory, o = e.mobile.dialogHashKey, s = e.mobile.activePage, r = s.is(".ui-dialog"), this._myUrl = a = d.getActive().url, l = a.indexOf(o) > -1 && !r && d.activeIndex > 0) return c._open(i), c._bindContainerClose(), n; - 1 !== a.indexOf(o) || r ? a = e.mobile.path.parseLocation().hash + o : a += a.indexOf("#") > -1 ? o : "#" + o, 0 === d.activeIndex && a === d.initialDst && (a += o), e(t).one("beforenavigate", function (e) {
                        e.preventDefault(), c._open(i), c._bindContainerClose()
                    }), this.urlAltered = !0, e.mobile.navigate(a, {
                        role: "dialog"
                    })
                }
            },
            close: function () {
                e.mobile.popup.active === this && (this._scrollTop = e.mobile.window.scrollTop(), this.options.history && this.urlAltered ? (e.mobile.back(), this.urlAltered = !1) : this._closePopup())
            }
        }), e.mobile.popup.handleLink = function (t) {
            var i, n = t.closest(":jqmData(role='page')"),
                a = 0 === n.length ? e("body") : n,
                o = e(e.mobile.path.parseUrl(t.attr("href")).hash, a[0]);
            o.data("mobile-popup") && (i = t.offset(), o.popup("open", {
                x: i.left + t.outerWidth() / 2,
                y: i.top + t.outerHeight() / 2,
                transition: t.jqmData("transition"),
                positionTo: t.jqmData("position-to")
            })), setTimeout(function () {
                var i = t.parent().parent();
                i.hasClass("ui-li") && (t = i.parent()), t.removeClass(e.mobile.activeBtnClass)
            }, 300)
        }, e.mobile.document.bind("pagebeforechange", function (t, i) {
            "popup" === i.options.role && (e.mobile.popup.handleLink(i.options.link), t.preventDefault())
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.popup.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e, t) {
        var n = function (n) {
            var a, o, s, r = (n.select, n._destroy),
                l = n.selectID,
                d = l ? l : (e.mobile.ns || "") + "uuid-" + n.uuid,
                c = d + "-listbox",
                h = d + "-dialog",
                u = n.label,
                p = n.select.closest(".ui-page"),
                m = n._selectOptions(),
                f = n.isMultiple = n.select[0].multiple,
                g = l + "-button",
                b = l + "-menu",
                v = e("<div data-" + e.mobile.ns + "role='dialog' id='" + h + "' data-" + e.mobile.ns + "theme='" + n.options.theme + "' data-" + e.mobile.ns + "overlay-theme='" + n.options.overlayTheme + "'>" + "<div data-" + e.mobile.ns + "role='header'>" + "<div class='ui-title'>" + u.getEncodedText() + "</div>" + "</div>" + "<div data-" + e.mobile.ns + "role='content'></div>" + "</div>"),
                _ = e("<div id='" + c + "' class='ui-selectmenu'>").insertAfter(n.select).popup({
                    theme: n.options.overlayTheme
                }),
                C = e("<ul>", {
                    "class": "ui-selectmenu-list",
                    id: b,
                    role: "listbox",
                    "aria-labelledby": g
                }).attr("data-" + e.mobile.ns + "theme", n.options.theme).attr("data-" + e.mobile.ns + "divider-theme", n.options.dividerTheme).appendTo(_),
                x = e("<div>", {
                    "class": "ui-header ui-bar-" + n.options.theme
                }).prependTo(_),
                y = e("<h1>", {
                    "class": "ui-title"
                }).appendTo(x);
            n.isMultiple && (s = e("<a>", {
                text: n.options.closeText,
                href: "#",
                "class": "ui-btn-left"
            }).attr("data-" + e.mobile.ns + "iconpos", "notext").attr("data-" + e.mobile.ns + "icon", "delete").appendTo(x).buttonMarkup()), e.extend(n, {
                select: n.select,
                selectID: l,
                buttonId: g,
                menuId: b,
                popupID: c,
                dialogID: h,
                thisPage: p,
                menuPage: v,
                label: u,
                selectOptions: m,
                isMultiple: f,
                theme: n.options.theme,
                listbox: _,
                list: C,
                header: x,
                headerTitle: y,
                headerClose: s,
                menuPageContent: a,
                menuPageClose: o,
                placeholder: "",
                build: function () {
                    var i = this;
                    i.refresh(), i._origTabIndex === t && (i._origTabIndex = null === i.select[0].getAttribute("tabindex") ? !1 : i.select.attr("tabindex")), i.select.attr("tabindex", "-1").focus(function () {
                        e(this).blur(), i.button.focus()
                    }), i.button.bind("vclick keydown", function (t) {
                        i.options.disabled || i.isOpen || ("vclick" === t.type || t.keyCode && (t.keyCode === e.mobile.keyCode.ENTER || t.keyCode === e.mobile.keyCode.SPACE)) && (i._decideFormat(), "overlay" === i.menuType ? i.button.attr("href", "#" + i.popupID).attr("data-" + (e.mobile.ns || "") + "rel", "popup") : i.button.attr("href", "#" + i.dialogID).attr("data-" + (e.mobile.ns || "") + "rel", "dialog"), i.isOpen = !0)
                    }), i.list.attr("role", "listbox").bind("focusin", function (t) {
                        e(t.target).attr("tabindex", "0").trigger("vmouseover")
                    }).bind("focusout", function (t) {
                        e(t.target).attr("tabindex", "-1").trigger("vmouseout")
                    }).delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function (t) {
                        var a = i.select[0].selectedIndex,
                            o = i.list.find("li:not(.ui-li-divider)").index(this),
                            s = i._selectOptions().eq(o)[0];
                        s.selected = i.isMultiple ? !s.selected : !0, i.isMultiple && e(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", s.selected).toggleClass("ui-icon-checkbox-off", !s.selected), (i.isMultiple || a !== o) && i.select.trigger("change"), i.isMultiple ? i.list.find("li:not(.ui-li-divider)").eq(o).addClass("ui-btn-down-" + n.options.theme).find("a").first().focus() : i.close(), t.preventDefault()
                    }).keydown(function (t) {
                        var i, a, o = e(t.target),
                            s = o.closest("li");
                        switch (t.keyCode) {
                        case 38:
                            return i = s.prev().not(".ui-selectmenu-placeholder"), i.is(".ui-li-divider") && (i = i.prev()), i.length && (o.blur().attr("tabindex", "-1"), i.addClass("ui-btn-down-" + n.options.theme).find("a").first().focus()), !1;
                        case 40:
                            return a = s.next(), a.is(".ui-li-divider") && (a = a.next()), a.length && (o.blur().attr("tabindex", "-1"), a.addClass("ui-btn-down-" + n.options.theme).find("a").first().focus()), !1;
                        case 13:
                        case 32:
                            return o.trigger("click"), !1
                        }
                    }), i.menuPage.bind("pagehide", function () {
                        e.mobile._bindPageRemove.call(i.thisPage)
                    }), i.listbox.bind("popupafterclose", function () {
                        i.close()
                    }), i.isMultiple && i.headerClose.click(function () {
                        return "overlay" === i.menuType ? (i.close(), !1) : t
                    }), i.thisPage.addDependents(this.menuPage)
                },
                _isRebuildRequired: function () {
                    var e = this.list.find("li"),
                        t = this._selectOptions();
                    return t.text() !== e.text()
                },
                selected: function () {
                    return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
                },
                refresh: function (t) {
                    var i, n = this;
                    this.element, this.isMultiple, (t || this._isRebuildRequired()) && n._buildList(), i = this.selectedIndices(), n.setButtonText(), n.setButtonCount(), n.list.find("li:not(.ui-li-divider)").removeClass(e.mobile.activeBtnClass).attr("aria-selected", !1).each(function (t) {
                        if (e.inArray(t, i) > -1) {
                            var a = e(this);
                            a.attr("aria-selected", !0), n.isMultiple ? a.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : a.is(".ui-selectmenu-placeholder") ? a.next().addClass(e.mobile.activeBtnClass) : a.addClass(e.mobile.activeBtnClass)
                        }
                    })
                },
                close: function () {
                    if (!this.options.disabled && this.isOpen) {
                        var e = this;
                        "page" === e.menuType ? (e.menuPage.dialog("close"), e.list.appendTo(e.listbox)) : e.listbox.popup("close"), e._focusButton(), e.isOpen = !1
                    }
                },
                open: function () {
                    this.button.click()
                },
                _decideFormat: function () {
                    function t() {
                        var t = i.list.find("." + e.mobile.activeBtnClass + " a");
                        0 === t.length && (t = i.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")), t.first().focus().closest("li").addClass("ui-btn-down-" + n.options.theme)
                    }
                    var i = this,
                        a = e.mobile.window,
                        o = i.list.parent(),
                        s = o.outerHeight(),
                        r = (o.outerWidth(), e("." + e.mobile.activePageClass), a.scrollTop()),
                        l = i.button.offset().top,
                        d = a.height();
                    a.width(), s > d - 80 || !e.support.scrollTop ? (i.menuPage.appendTo(e.mobile.pageContainer).page(), i.menuPageContent = v.find(".ui-content"), i.menuPageClose = v.find(".ui-header a"), i.thisPage.unbind("pagehide.remove"), 0 === r && l > d && i.thisPage.one("pagehide", function () {
                        e(this).jqmData("lastScroll", l)
                    }), i.menuPage.one("pageshow", function () {
                        t()
                    }).one("pagehide", function () {
                        i.close()
                    }), i.menuType = "page", i.menuPageContent.append(i.list), i.menuPage.find("div .ui-title").text(i.label.text())) : (i.menuType = "overlay", i.listbox.one("popupafteropen", t))
                },
                _buildList: function () {
                    var t = this,
                        n = this.options,
                        a = this.placeholder,
                        o = !0,
                        s = t.isMultiple ? "checkbox-off" : "false";
                    t.list.empty().filter(".ui-listview").listview("destroy");
                    for (var r, l = t.select.find("option"), d = l.length, c = this.select[0], h = "data-" + e.mobile.ns, u = h + "option-index", p = h + "icon", m = h + "role", f = h + "placeholder", g = i.createDocumentFragment(), b = !1, v = 0; d > v; v++, b = !1) {
                        var _ = l[v],
                            C = e(_),
                            x = _.parentNode,
                            y = C.text(),
                            w = i.createElement("a"),
                            T = [];
                        if (w.setAttribute("href", "#"), w.appendChild(i.createTextNode(y)), x !== c && "optgroup" === x.nodeName.toLowerCase()) {
                            var D = x.getAttribute("label");
                            if (D !== r) {
                                var P = i.createElement("li");
                                P.setAttribute(m, "list-divider"), P.setAttribute("role", "option"), P.setAttribute("tabindex", "-1"), P.appendChild(i.createTextNode(D)), g.appendChild(P), r = D
                            }
                        }!o || _.getAttribute("value") && 0 !== y.length && !C.jqmData("placeholder") || (o = !1, b = !0, null === _.getAttribute(f) && (this._removePlaceholderAttr = !0), _.setAttribute(f, !0), n.hidePlaceholderMenuItems && T.push("ui-selectmenu-placeholder"), a !== y && (a = t.placeholder = y));
                        var k = i.createElement("li");
                        _.disabled && (T.push("ui-disabled"), k.setAttribute("aria-disabled", !0)), k.setAttribute(u, v), k.setAttribute(p, s), b && k.setAttribute(f, !0), k.className = T.join(" "), k.setAttribute("role", "option"), w.setAttribute("tabindex", "-1"), k.appendChild(w), g.appendChild(k)
                    }
                    t.list[0].appendChild(g), this.isMultiple || a.length ? this.headerTitle.text(this.placeholder) : this.header.hide(), t.list.listview()
                },
                _button: function () {
                    return e("<a>", {
                        href: "#",
                        role: "button",
                        id: this.buttonId,
                        "aria-haspopup": "true",
                        "aria-owns": this.menuId
                    })
                },
                _destroy: function () {
                    this.close(), this._origTabIndex !== t && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + e.mobile.ns + "placeholder"), this.listbox.remove(), r.apply(this, arguments)
                }
            })
        };
        e.mobile.document.bind("selectmenubeforecreate", function (t) {
            var i = e(t.target).data("mobile-selectmenu");
            i.options.nativeMenu || 0 !== i.element.parents(":jqmData(role='popup')").length || n(i)
        })
    }(e),
    function (e, t) {
        e.widget("mobile.controlgroup", e.mobile.widget, e.extend({
            options: {
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1,
                initSelector: ":jqmData(role='controlgroup')"
            },
            _create: function () {
                var i = this.element,
                    n = {
                        inner: e("<div class='ui-controlgroup-controls'></div>"),
                        legend: e("<div role='heading' class='ui-controlgroup-label'></div>")
                    }, a = i.children("legend"),
                    o = this;
                i.wrapInner(n.inner), a.length && n.legend.append(a).insertBefore(i.children(0)), i.addClass("ui-corner-all ui-controlgroup"), e.extend(this, {
                    _initialRefresh: !0
                }), e.each(this.options, function (e, i) {
                    o.options[e] = t, o._setOption(e, i, !0)
                })
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (i, n) {
                var a = "_set" + i.charAt(0).toUpperCase() + i.slice(1);
                this[a] !== t && this[a](n), this._super(i, n), this.element.attr("data-" + (e.mobile.ns || "") + i.replace(/([A-Z])/, "-$1").toLowerCase(), n)
            },
            _setType: function (e) {
                this.element.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + e), this.refresh()
            },
            _setCorners: function (e) {
                this.element.toggleClass("ui-corner-all", e)
            },
            _setShadow: function (e) {
                this.element.toggleClass("ui-shadow", e)
            },
            _setMini: function (e) {
                this.element.toggleClass("ui-mini", e)
            },
            container: function () {
                return this.element.children(".ui-controlgroup-controls")
            },
            refresh: function () {
                var t = this.element.find(".ui-btn").not(".ui-slider-handle"),
                    i = this._initialRefresh;
                e.mobile.checkboxradio && this.element.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(t, this.options.excludeInvisible ? this._getVisibles(t, i) : t, i), this._initialRefresh = !1
            }
        }, e.mobile.behaviors.addFirstLastClasses)), e(function () {
            e.mobile.document.bind("pagecreate create", function (t) {
                e.mobile.controlgroup.prototype.enhanceWithin(t.target, !0)
            })
        })
    }(e),
    function (e) {
        e(i).bind("pagecreate create", function (t) {
            e(t.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        })
    }(e),
    function (e, t) {
        e.widget("mobile.fixedtoolbar", e.mobile.widget, {
            options: {
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function () {
                    return !e.support.fixedPosition
                },
                initSelector: ":jqmData(position='fixed')"
            },
            _create: function () {
                var i = this,
                    n = i.options,
                    a = i.element,
                    o = a.is(":jqmData(role='header')") ? "header" : "footer",
                    s = a.closest(".ui-page");
                return n.supportBlacklist() ? (i.destroy(), t) : (a.addClass("ui-" + o + "-fixed"), n.fullscreen ? (a.addClass("ui-" + o + "-fullscreen"), s.addClass("ui-page-" + o + "-fullscreen")) : s.addClass("ui-page-" + o + "-fixed"), e.extend(this, {
                    _thisPage: null
                }), i._addTransitionClass(), i._bindPageEvents(), i._bindToggleHandlers(), t)
            },
            _addTransitionClass: function () {
                var e = this.options.transition;
                e && "none" !== e && ("slide" === e && (e = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(e))
            },
            _bindPageEvents: function () {
                this._thisPage = this.element.closest(".ui-page"), this._on(this._thisPage, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            },
            _handlePageBeforeShow: function () {
                var t = this.options;
                t.disablePageZoom && e.mobile.zoom.disable(!0), t.visibleOnPageShow || this.hide(!0)
            },
            _handleAnimationStart: function () {
                this.options.updatePagePadding && this.updatePagePadding(this._thisPage)
            },
            _handlePageShow: function () {
                this.updatePagePadding(this._thisPage), this.options.updatePagePadding && this._on(e.mobile.window, {
                    throttledresize: "updatePagePadding"
                })
            },
            _handlePageBeforeHide: function (t, i) {
                var n = this.options;
                if (n.disablePageZoom && e.mobile.zoom.enable(!0), n.updatePagePadding && this._off(e.mobile.window, "throttledresize"), n.trackPersistentToolbars) {
                    var a = e(".ui-footer-fixed:jqmData(id)", this._thisPage),
                        o = e(".ui-header-fixed:jqmData(id)", this._thisPage),
                        s = a.length && i.nextPage && e(".ui-footer-fixed:jqmData(id='" + a.jqmData("id") + "')", i.nextPage) || e(),
                        r = o.length && i.nextPage && e(".ui-header-fixed:jqmData(id='" + o.jqmData("id") + "')", i.nextPage) || e();
                    (s.length || r.length) && (s.add(r).appendTo(e.mobile.pageContainer), i.nextPage.one("pageshow", function () {
                            r.prependTo(this), s.appendTo(this)
                        }))
                }
            },
            _visible: !0,
            updatePagePadding: function (i) {
                var n = this.element,
                    a = n.is(".ui-header"),
                    o = parseFloat(n.css(a ? "top" : "bottom"));
                this.options.fullscreen || (i = i && i.type === t && i || this._thisPage || n.closest(".ui-page"), e(i).css("padding-" + (a ? "top" : "bottom"), n.outerHeight() + o))
            },
            _useTransition: function (t) {
                var i = e.mobile.window,
                    n = this.element,
                    a = i.scrollTop(),
                    o = n.height(),
                    s = n.closest(".ui-page").height(),
                    r = e.mobile.getScreenHeight(),
                    l = n.is(":jqmData(role='header')") ? "header" : "footer";
                return !t && (this.options.transition && "none" !== this.options.transition && ("header" === l && !this.options.fullscreen && a > o || "footer" === l && !this.options.fullscreen && s - o > a + r) || this.options.fullscreen)
            },
            show: function (e) {
                var t = "ui-fixed-hidden",
                    i = this.element;
                this._useTransition(e) ? i.removeClass("out " + t).addClass("in").animationComplete(function () {
                    i.removeClass("in")
                }) : i.removeClass(t), this._visible = !0
            },
            hide: function (e) {
                var t = "ui-fixed-hidden",
                    i = this.element,
                    n = "out" + ("slide" === this.options.transition ? " reverse" : "");
                this._useTransition(e) ? i.addClass(n).removeClass("in").animationComplete(function () {
                    i.addClass(t).removeClass(n)
                }) : i.addClass(t).removeClass(n), this._visible = !1
            },
            toggle: function () {
                this[this._visible ? "hide" : "show"]()
            },
            _bindToggleHandlers: function () {
                var t, i, n = this,
                    a = n.options,
                    o = n.element,
                    s = !0;
                o.closest(".ui-page").bind("vclick", function (t) {
                    a.tapToggle && !e(t.target).closest(a.tapToggleBlacklist).length && n.toggle()
                }).bind("focusin focusout", function (o) {
                    1025 > screen.width && e(o.target).is(a.hideDuringFocus) && !e(o.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== o.type || s ? "focusin" === o.type && s && (clearTimeout(t), s = !1, i = setTimeout(function () {
                        n.hide()
                    }, 0)) : (s = !0, clearTimeout(i), t = setTimeout(function () {
                        n.show()
                    }, 0)))
                })
            },
            _destroy: function () {
                var e = this.element,
                    t = e.is(".ui-header");
                e.closest(".ui-page").css("padding-" + (t ? "top" : "bottom"), ""), e.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"), e.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e(t.target).jqmData("fullscreen") && e(e.mobile.fixedtoolbar.prototype.options.initSelector, t.target).not(":jqmData(fullscreen)").jqmData("fullscreen", !0), e.mobile.fixedtoolbar.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        e.widget("mobile.fixedtoolbar", e.mobile.fixedtoolbar, {
            _create: function () {
                this._super(), this._workarounds()
            },
            _workarounds: function () {
                var e = navigator.userAgent,
                    t = navigator.platform,
                    i = e.match(/AppleWebKit\/([0-9]+)/),
                    n = !! i && i[1],
                    a = null,
                    o = this;
                if (t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1 || t.indexOf("iPod") > -1) a = "ios";
                else {
                    if (!(e.indexOf("Android") > -1)) return;
                    a = "android"
                } if ("ios" === a) o._bindScrollWorkaround();
                else {
                    if (!("android" === a && n && 534 > n)) return;
                    o._bindScrollWorkaround(), o._bindListThumbWorkaround()
                }
            },
            _viewportOffset: function () {
                var t = this.element,
                    i = t.is(".ui-header"),
                    n = Math.abs(t.offset().top - e.mobile.window.scrollTop());
                return i || (n = Math.round(n - e.mobile.window.height() + t.outerHeight()) - 60), n
            },
            _bindScrollWorkaround: function () {
                var t = this;
                this._on(e.mobile.window, {
                    scrollstop: function () {
                        var e = t._viewportOffset();
                        e > 2 && t._visible && t._triggerRedraw()
                    }
                })
            },
            _bindListThumbWorkaround: function () {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            },
            _triggerRedraw: function () {
                var t = parseFloat(e(".ui-page-active").css("padding-bottom"));
                e(".ui-page-active").css("padding-bottom", t + 1 + "px"), setTimeout(function () {
                    e(".ui-page-active").css("padding-bottom", t + "px")
                }, 0)
            },
            destroy: function () {
                this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }(e),
    function (e, n) {
        e.widget("mobile.panel", e.mobile.widget, {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pagePanel: "ui-page-panel",
                    pagePanelOpen: "ui-page-panel-open",
                    contentWrap: "ui-panel-content-wrap",
                    contentWrapOpen: "ui-panel-content-wrap-open",
                    contentWrapClosed: "ui-panel-content-wrap-closed",
                    contentFixedToolbar: "ui-panel-content-fixed-toolbar",
                    contentFixedToolbarOpen: "ui-panel-content-fixed-toolbar-open",
                    contentFixedToolbarClosed: "ui-panel-content-fixed-toolbar-closed",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: "c",
                position: "left",
                dismissible: !0,
                display: "reveal",
                initSelector: ":jqmData(role='panel')",
                swipeClose: !0,
                positionFixed: !1
            },
            _panelID: null,
            _closeLink: null,
            _page: null,
            _modal: null,
            _panelInner: null,
            _wrapper: null,
            _fixedToolbar: null,
            _create: function () {
                var t = this,
                    i = t.element,
                    n = i.closest(":jqmData(role='page')"),
                    a = function () {
                        var t = e.data(n[0], "mobilePage").options.theme,
                            i = "ui-body-" + t;
                        return i
                    }, o = function () {
                        var e = i.find("." + t.options.classes.panelInner);
                        return 0 === e.length && (e = i.children().wrapAll('<div class="' + t.options.classes.panelInner + '" />').parent()), e
                    }, s = function () {
                        var i = n.find("." + t.options.classes.contentWrap);
                        return 0 === i.length && (i = n.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll('<div class="' + t.options.classes.contentWrap + " " + a() + '" />').parent(), e.support.cssTransform3d && t.options.animate && i.addClass(t.options.classes.animate)), i
                    }, r = function () {
                        var i = n.find("." + t.options.classes.contentFixedToolbar);
                        return 0 === i.length && (i = n.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(t.options.classes.contentFixedToolbar), e.support.cssTransform3d && t.options.animate && i.addClass(t.options.classes.animate)), i
                    };
                e.extend(this, {
                    _panelID: i.attr("id"),
                    _closeLink: i.find(":jqmData(rel='close')"),
                    _page: i.closest(":jqmData(role='page')"),
                    _pageTheme: a(),
                    _panelInner: o(),
                    _wrapper: s(),
                    _fixedToolbar: r()
                }), t._addPanelClasses(), t._wrapper.addClass(this.options.classes.contentWrapClosed), t._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed), t._page.addClass(t.options.classes.pagePanel), e.support.cssTransform3d && t.options.animate && this.element.addClass(t.options.classes.animate), t._bindUpdateLayout(), t._bindCloseEvents(), t._bindLinkListeners(), t._bindPageEvents(), t.options.dismissible && t._createModal(), t._bindSwipeEvents()
            },
            _createModal: function () {
                var t = this;
                t._modal = e("<div class='" + t.options.classes.modal + "' data-panelid='" + t._panelID + "'></div>").on("mousedown", function () {
                    t.close()
                }).appendTo(this._page)
            },
            _getPosDisplayClasses: function (e) {
                return e + "-position-" + this.options.position + " " + e + "-display-" + this.options.display
            },
            _getPanelClasses: function () {
                var e = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed;
                return this.options.theme && (e += " ui-body-" + this.options.theme), this.options.positionFixed && (e += " " + this.options.classes.panelFixed), e
            },
            _addPanelClasses: function () {
                this.element.addClass(this._getPanelClasses())
            },
            _bindCloseEvents: function () {
                var e = this;
                e._closeLink.on("click.panel", function (t) {
                    return t.preventDefault(), e.close(), !1
                }), e.element.on("click.panel", "a:jqmData(ajax='false')", function () {
                    e.close()
                })
            },
            _positionPanel: function () {
                var t = this,
                    i = t._panelInner.outerHeight(),
                    n = i > e.mobile.getScreenHeight();
                n || !t.options.positionFixed ? (n && (t._unfixPanel(), e.mobile.resetActivePageHeight(i)), t._scrollIntoView(i)) : t._fixPanel()
            },
            _scrollIntoView: function (i) {
                e(t).scrollTop() > i && t.scrollTo(0, 0)
            },
            _bindFixListener: function () {
                this._on(e(t), {
                    throttledresize: "_positionPanel"
                })
            },
            _unbindFixListener: function () {
                this._off(e(t), "throttledresize")
            },
            _unfixPanel: function () {
                this.options.positionFixed && e.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function () {
                this.options.positionFixed && e.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function () {
                var e = this;
                e.element.on("updatelayout", function () {
                    e._open && e._positionPanel()
                })
            },
            _bindLinkListeners: function () {
                var t = this;
                t._page.on("click.panel", "a", function (i) {
                    if (this.href.split("#")[1] === t._panelID && t._panelID !== n) {
                        i.preventDefault();
                        var a = e(this);
                        return a.hasClass("ui-link") || (a.addClass(e.mobile.activeBtnClass), t.element.one("panelopen panelclose", function () {
                            a.removeClass(e.mobile.activeBtnClass)
                        })), t.toggle(), !1
                    }
                })
            },
            _bindSwipeEvents: function () {
                var e = this,
                    t = e._modal ? e.element.add(e._modal) : e.element;
                e.options.swipeClose && ("left" === e.options.position ? t.on("swipeleft.panel", function () {
                    e.close()
                }) : t.on("swiperight.panel", function () {
                    e.close()
                }))
            },
            _bindPageEvents: function () {
                var e = this;
                e._page.on("panelbeforeopen", function (t) {
                    e._open && t.target !== e.element[0] && e.close()
                }).on("pagehide", function () {
                    e._open && e.close(!0)
                }).on("keyup.panel", function (t) {
                    27 === t.keyCode && e._open && e.close()
                })
            },
            _open: !1,
            _contentWrapOpenClasses: null,
            _fixedToolbarOpenClasses: null,
            _modalOpenClasses: null,
            open: function (t) {
                if (!this._open) {
                    var i = this,
                        n = i.options,
                        a = function () {
                            i._page.off("panelclose"), i._page.jqmData("panel", "open"), !t && e.support.cssTransform3d && n.animate ? i.element.add(i._wrapper).on(i._transitionEndEvents, o) : setTimeout(o, 0), i.options.theme && "overlay" !== i.options.display && i._page.removeClass(i._pageTheme).addClass("ui-body-" + i.options.theme), i.element.removeClass(n.classes.panelClosed).addClass(n.classes.panelOpen), i._positionPanel(), i.options.theme && "overlay" !== i.options.display && i._wrapper.css("min-height", i._page.css("min-height")), i._contentWrapOpenClasses = i._getPosDisplayClasses(n.classes.contentWrap), i._wrapper.removeClass(n.classes.contentWrapClosed).addClass(i._contentWrapOpenClasses + " " + n.classes.contentWrapOpen), i._fixedToolbarOpenClasses = i._getPosDisplayClasses(n.classes.contentFixedToolbar), i._fixedToolbar.removeClass(n.classes.contentFixedToolbarClosed).addClass(i._fixedToolbarOpenClasses + " " + n.classes.contentFixedToolbarOpen), i._modalOpenClasses = i._getPosDisplayClasses(n.classes.modal) + " " + n.classes.modalOpen, i._modal && i._modal.addClass(i._modalOpenClasses)
                        }, o = function () {
                            i.element.add(i._wrapper).off(i._transitionEndEvents, o), i._page.addClass(n.classes.pagePanelOpen), i._bindFixListener(), i._trigger("open")
                        };
                    0 > this.element.closest(".ui-page-active").length && (t = !0), i._trigger("beforeopen"), "open" === i._page.jqmData("panel") ? i._page.on("panelclose", function () {
                        a()
                    }) : a(), i._open = !0
                }
            },
            close: function (t) {
                if (this._open) {
                    var i = this.options,
                        n = this,
                        a = function () {
                            !t && e.support.cssTransform3d && i.animate ? n.element.add(n._wrapper).on(n._transitionEndEvents, o) : setTimeout(o, 0), n._page.removeClass(i.classes.pagePanelOpen), n.element.removeClass(i.classes.panelOpen), n._wrapper.removeClass(i.classes.contentWrapOpen), n._fixedToolbar.removeClass(i.classes.contentFixedToolbarOpen), n._modal && n._modal.removeClass(n._modalOpenClasses)
                        }, o = function () {
                            n.options.theme && "overlay" !== n.options.display && (n._page.removeClass("ui-body-" + n.options.theme).addClass(n._pageTheme), n._wrapper.css("min-height", "")), n.element.add(n._wrapper).off(n._transitionEndEvents, o), n.element.addClass(i.classes.panelClosed), n._wrapper.removeClass(n._contentWrapOpenClasses).addClass(i.classes.contentWrapClosed), n._fixedToolbar.removeClass(n._fixedToolbarOpenClasses).addClass(i.classes.contentFixedToolbarClosed), n._fixPanel(), n._unbindFixListener(), e.mobile.resetActivePageHeight(), n._page.jqmRemoveData("panel"), n._trigger("close")
                        };
                    0 > this.element.closest(".ui-page-active").length && (t = !0), n._trigger("beforeclose"), a(), n._open = !1
                }
            },
            toggle: function () {
                this[this._open ? "close" : "open"]()
            },
            _transitionEndEvents: "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",
            _destroy: function () {
                var t = this.options.classes,
                    i = this.options.theme,
                    n = this.element.siblings("." + t.panel).length;
                n ? this._open && (this._wrapper.removeClass(t.contentWrapOpen), this._fixedToolbar.removeClass(t.contentFixedToolbarOpen), this._page.jqmRemoveData("panel"), this._page.removeClass(t.pagePanelOpen), i && this._page.removeClass("ui-body-" + i).addClass(this._pageTheme)) : (this._wrapper.children().unwrap(), this._page.find("a").unbind("panelopen panelclose"), this._page.removeClass(t.pagePanel), this._open && (this._page.jqmRemoveData("panel"), this._page.removeClass(t.pagePanelOpen), i && this._page.removeClass("ui-body-" + i).addClass(this._pageTheme), e.mobile.resetActivePageHeight())), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), t.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._closeLink.off("click.panel"), this._modal && this._modal.remove(), this.element.off(this._transitionEndEvents).removeClass([t.panelUnfixed, t.panelClosed, t.panelOpen].join(" "))
            }
        }), e(i).bind("pagecreate create", function (t) {
            e.mobile.panel.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e, t) {
        e.widget("mobile.table", e.mobile.widget, {
            options: {
                classes: {
                    table: "ui-table"
                },
                initSelector: ":jqmData(role='table')"
            },
            _create: function () {
                var e = this;
                e.refresh(!0)
            },
            refresh: function (i) {
                var n = this,
                    a = this.element.find("thead tr");
                i && this.element.addClass(this.options.classes.table), n.headers = this.element.find("tr:eq(0)").children(), n.allHeaders = n.headers.add(a.children()), a.each(function () {
                    var o = 0;
                    e(this).children().each(function () {
                        var s = parseInt(e(this).attr("colspan"), 10),
                            r = ":nth-child(" + (o + 1) + ")";
                        if (e(this).jqmData("colstart", o + 1), s)
                            for (var l = 0; s - 1 > l; l++) o++, r += ", :nth-child(" + (o + 1) + ")";
                        i === t && e(this).jqmData("cells", ""), e(this).jqmData("cells", n.element.find("tr").not(a.eq(0)).not(this).children(r)), o++
                    })
                }), i === t && this.element.trigger("refresh")
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.table.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e, t) {
        e.mobile.table.prototype.options.mode = "columntoggle", e.mobile.table.prototype.options.columnBtnTheme = null, e.mobile.table.prototype.options.columnPopupTheme = null, e.mobile.table.prototype.options.columnBtnText = "Columns...", e.mobile.table.prototype.options.classes = e.extend(e.mobile.table.prototype.options.classes, {
            popup: "ui-table-columntoggle-popup",
            columnBtn: "ui-table-columntoggle-btn",
            priorityPrefix: "ui-table-priority-",
            columnToggleTable: "ui-table-columntoggle"
        }), e.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function (i) {
            var n, a, o, s, r = e(this),
                l = r.data("mobile-table"),
                d = i.type,
                c = l.options,
                h = e.mobile.ns,
                u = (r.attr("id") || c.classes.popup) + "-popup";
            "columntoggle" === c.mode && ("refresh" !== d && (l.element.addClass(c.classes.columnToggleTable), n = e("<a href='#" + u + "' class='" + c.classes.columnBtn + "' data-" + h + "rel='popup' data-" + h + "mini='true'>" + c.columnBtnText + "</a>"), a = e("<div data-" + h + "role='popup' data-" + h + "role='fieldcontain' class='" + c.classes.popup + "' id='" + u + "'></div>"), o = e("<fieldset data-" + h + "role='controlgroup'></fieldset>")), l.headers.not("td").each(function (t) {
                var i = e(this).jqmData("priority"),
                    n = e(this).add(e(this).jqmData("cells"));
                i && (n.addClass(c.classes.priorityPrefix + i), "refresh" !== d ? e("<label><input type='checkbox' checked />" + e(this).text() + "</label>").appendTo(o).children(0).jqmData("cells", n).checkboxradio({
                    theme: c.columnPopupTheme
                }) : e("#" + u + " fieldset div:eq(" + t + ")").find("input").jqmData("cells", n))
            }), "refresh" !== d && o.appendTo(a), s = o === t ? e("#" + u + " fieldset") : o, "refresh" !== d && (s.on("change", "input", function () {
                this.checked ? e(this).jqmData("cells").removeClass("ui-table-cell-hidden").addClass("ui-table-cell-visible") : e(this).jqmData("cells").removeClass("ui-table-cell-visible").addClass("ui-table-cell-hidden")
            }), n.insertBefore(r).buttonMarkup({
                theme: c.columnBtnTheme
            }), a.insertBefore(r).popup()), l.update = function () {
                s.find("input").each(function () {
                    this.checked ? (this.checked = "table-cell" === e(this).jqmData("cells").eq(0).css("display"), "refresh" === d && e(this).jqmData("cells").addClass("ui-table-cell-visible")) : e(this).jqmData("cells").addClass("ui-table-cell-hidden"), e(this).checkboxradio("refresh")
                })
            }, e.mobile.window.on("throttledresize", l.update), l.update())
        })
    }(e),
    function (e) {
        e.mobile.table.prototype.options.mode = "reflow", e.mobile.table.prototype.options.classes = e.extend(e.mobile.table.prototype.options.classes, {
            reflowTable: "ui-table-reflow",
            cellLabels: "ui-table-cell-label"
        }), e.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function (t) {
            var i = e(this),
                n = t.type,
                a = i.data("mobile-table"),
                o = a.options;
            if ("reflow" === o.mode) {
                "refresh" !== n && a.element.addClass(o.classes.reflowTable);
                var s = e(a.allHeaders.get().reverse());
                s.each(function () {
                    var t = e(this).jqmData("cells"),
                        i = e(this).jqmData("colstart"),
                        n = t.not(this).filter("thead th").length && " ui-table-cell-label-top",
                        a = e(this).text();
                    if ("" !== a)
                        if (n) {
                            var s = parseInt(e(this).attr("colspan"), 10),
                                r = "";
                            s && (r = "td:nth-child(" + s + "n + " + i + ")"), t.filter(r).prepend("<b class='" + o.classes.cellLabels + n + "'>" + a + "</b>")
                        } else t.prepend("<b class='" + o.classes.cellLabels + "'>" + a + "</b>")
                })
            }
        })
    }(e),
    function (e, t) {
        function i(e) {
            o = e.originalEvent, d = o.accelerationIncludingGravity, s = Math.abs(d.x), r = Math.abs(d.y), l = Math.abs(d.z), !t.orientation && (s > 7 || (l > 6 && 8 > r || 8 > l && r > 6) && s > 5) ? c.enabled && c.disable() : c.enabled || c.enable()
        }
        e.mobile.iosorientationfixEnabled = !0;
        var a = navigator.userAgent;
        if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(a) && a.indexOf("AppleWebKit") > -1)) return e.mobile.iosorientationfixEnabled = !1, n;
        var o, s, r, l, d, c = e.mobile.zoom;
        e.mobile.document.on("mobileinit", function () {
            e.mobile.iosorientationfixEnabled && e.mobile.window.bind("orientationchange.iosorientationfix", c.enable).bind("devicemotion.iosorientationfix", i)
        })
    }(e, this),
    function (e, t) {
        function n() {
            a.removeClass("ui-mobile-rendering")
        }
        var a = e("html"),
            o = (e("head"), e.mobile.window);
        e(t.document).trigger("mobileinit"), e.mobile.gradeA() && (e.mobile.ajaxBlacklist && (e.mobile.ajaxEnabled = !1), a.addClass("ui-mobile ui-mobile-rendering"), setTimeout(n, 5e3), e.extend(e.mobile, {
            initializePage: function () {
                var t = e.mobile.path,
                    a = e(":jqmData(role='page'), :jqmData(role='dialog')"),
                    s = t.stripHash(t.stripQueryParams(t.parseLocation().hash)),
                    r = i.getElementById(s);
                a.length || (a = e("body").wrapInner("<div data-" + e.mobile.ns + "role='page'></div>").children(0)), a.each(function () {
                    var t = e(this);
                    t.jqmData("url") || t.attr("data-" + e.mobile.ns + "url", t.attr("id") || location.pathname + location.search)
                }), e.mobile.firstPage = a.first(), e.mobile.pageContainer = e.mobile.firstPage.parent().addClass("ui-mobile-viewport"), o.trigger("pagecontainercreate"), e.mobile.showPageLoadingMsg(), n(), e.mobile.hashListeningEnabled && e.mobile.path.isHashValid(location.hash) && (e(r).is(':jqmData(role="page")') || e.mobile.path.isPath(s) || s === e.mobile.dialogHashKey) ? e.event.special.navigate.isPushStateEnabled() ? (e.mobile.navigate.history.stack = [], e.mobile.navigate(e.mobile.path.isPath(location.hash) ? location.hash : location.href)) : o.trigger("hashchange", [!0]) : (e.mobile.path.isHashValid(location.hash) && (e.mobile.urlHistory.initialDst = s.replace("#", "")), e.event.special.navigate.isPushStateEnabled() && e.mobile.navigate.navigator.squash(t.parseLocation().href), e.mobile.changePage(e.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }), e.mobile.navreadyDeferred.resolve(), e(function () {
            t.scrollTo(0, 1), e.mobile.defaultHomeScroll = e.support.scrollTop && 1 !== e.mobile.window.scrollTop() ? 1 : 0, e.mobile.autoInitializePage && e.mobile.initializePage(), o.load(e.mobile.silentScroll), e.support.cssPointerEvents || e.mobile.document.delegate(".ui-disabled", "vclick", function (e) {
                e.preventDefault(), e.stopImmediatePropagation()
            })
        }))
    }(e, this)
});
//@ sourceMappingURL=jquery.mobile-1.3.1.min.map
window.CodiqaControls = {
    types: {},
    instances: {},
    define: function (a, b) {
        b._type = a;
        this.types[a] = b
    },
    register: function (a, b, d) {
        var c = new this.types[a];
        c._type = a;
        c._id = b;
        c._opts = d;
        this.instances[b] = c;
        this.types[a].prototype._isInited || this.types[a].prototype.initType();
        return c
    },
    init: function () {
        for (var a in this.types) this.types[a].prototype.initType()
    },
    refresh: function () {
        for (var a in this.instances) this.instances[a].refresh && this.instances[a].refresh()
    },
    callbackInit: function () {},
    getInstances: function (a) {
        var b,
            d, c = [];
        for (b in this.instances) d = this.instances[b], d._type === a && c.push(d);
        return c
    }
};
CodiqaControls.GoogleMap = function () {};
CodiqaControls.GoogleMap.prototype.initType = function () {
    if (window.CodiqaControls.getInstances("googlemaps").length)
        if (this._isInited) window.google && window.google.maps && CodiqaControls.GoogleMap.prototype.callbackInit();
        else {
            var a = document.createElement("script");
            a.type = "text/javascript";
            a.src = "https://maps.googleapis.com/maps/api/js?sensor=true&callback=CodiqaControls.types.googlemaps.prototype.callbackInit";
            document.getElementsByTagName("head")[0].appendChild(a);
            this._isInited = !0
        }
};
CodiqaControls.GoogleMap.prototype.callbackInit = function () {
    var a, b = window.CodiqaControls.getInstances("googlemaps");
    for (a = 0; a < b.length; a++) b[a]._opts.ready(b[a])
};
CodiqaControls.GoogleMap.prototype.refresh = function () {
    this.map && (this.el && $(this.el).closest(".ui-page-active").length) && (google.maps.event.trigger(this.map, "resize"), this.center && this.map.setCenter(this.center))
};
window.CodiqaControls.define("googlemaps", CodiqaControls.GoogleMap);
(function (a) {
    a.widget("mobile.tabbar", a.mobile.navbar, {
        _create: function () {
            var b = this.element.jqmData("theme") || "a";
            this.element.addClass("ui-footer ui-footer-fixed ui-bar-" + b);
            this.element.closest('[data-role="page"]').addClass("ui-page-footer-fixed");
            a.mobile.navbar.prototype._create.call(this)
        },
        setActive: function (a) {
            this.element.find("a").removeClass("ui-btn-active ui-state-persist");
            this.element.find('a[href="' + a + '"]').addClass("ui-btn-active ui-state-persist")
        }
    });
    a(document).on("pagecreate create",
        function (b) {
            return a(b.target).find(":jqmData(role='tabbar')").tabbar()
        });
    a(document).on("pageshow", ":jqmData(role='page')", function (b) {
        var d = a(b.target).attr("id");
        b = a.mobile.activePage.find(':jqmData(role="tabbar")');
        b.length && b.tabbar("setActive", "#" + d);
        window.CodiqaControls.refresh()
    });
    window.CodiqaControls.init()
})(jQuery);
$(document).ready(function () {
    var a = 0;
    $('input[type="submit"]').click(function () {
        var c = l;
        var k = $("#mode").find("input:radio").val();
        var f = $("#parking").find("input:radio").val();
        var d = $("#vehocc").find("input:slider").val();
        var g = $("#enterexit").find("input:checked").val();
        var e = $("#gender").find("input:checked").val();
        var j = $("#notes").find("input:checked").val();
        var o = $("#surveyor").find("input:text").val();
        var p = $("#date").find("input:text").val();
        var m = $("#tperiod").find("input:text").val();
        var b = $("#entexnotes").find("input:text").val();
        var n = $("#estname").find("input:text").val();
        var h = $("#loca").find("input:text").val();
        var i = $("#estnotes").find("input:text").val();
        var l = l + 1
    })
});