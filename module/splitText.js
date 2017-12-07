var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function (t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function (t) {
            var i, n = t.split("."),
                r = e;
            for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
            return r
        },
        n = i("com.greensock.utils"),
        r = "codepen",
        o = "SplitText",
        s = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        a = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        h = function (e) {
            return true
        }(t ? t.location.host : ""),
        l = function (t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += l(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        c = document,
        d = c.defaultView ? c.defaultView.getComputedStyle : function () {},
        f = /([A-Z])/g,
        g = function (t, e, i, n) {
            var r;
            return (i = i || d(t, null)) ? (t = i.getPropertyValue(e.replace(f, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
        },
        u = function (t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        p = function (t) {
            var e, i, n, r = [],
                o = t.length;
            for (e = 0; o > e; e++)
                if (i = t[e], u(i))
                    for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                else r.push(i);
            return r
        },
        _ = /(?:\r|\n|\t\t)/g,
        m = /(?:\s\s+)/g,
        C = 55296,
        v = 56319,
        S = 56320,
        y = 127462,
        w = 127487,
        b = 127995,
        x = 127999,
        M = function (t) {
            return (t.charCodeAt(0) - C << 10) + (t.charCodeAt(1) - S) + 65536
        },
        A = c.all && !c.addEventListener,
        P = " style='position:relative;display:inline-block;" + (A ? "*display:inline;*zoom:1;'" : "'"),
        D = function (t, e) {
            t = t || "";
            var i = -1 !== t.indexOf("++"),
                n = 1;
            return i && (t = t.split("++").join("")),
                function () {
                    return "<" + e + P + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                }
        },
        T = n.SplitText = e.SplitText = function (e, i) {
            if ("string" == typeof e && (e = T.selector(e)), !e) throw "cannot split a null element.";
            return h ? (this.elements = u(e) ? p(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = i || {}, void this.split(i)) : (t.location.href = "http://" + s + a + "?plugin=" + o + "&source=" + r, !1)
        },
        k = function (t, e, i) {
            var n = t.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (t = t.firstChild; t; t = t.nextSibling) k(t, e, i);
            else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        E = function (t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        N = function (t) {
            var e, i = [],
                n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        },
        R = function (t, e, i) {
            for (var n; t && t !== e;) {
                if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
            return !1
        },
        L = function (t) {
            var e, i, n = N(t.childNodes),
                r = n.length;
            for (e = 0; r > e; e++) i = n[e], i._isSplit ? L(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
        },
        H = function (t, e, i, n, r, o, s) {
            var a, h, l, f, u, p, _, m, C, v, S, y, w = d(t),
                b = g(t, "paddingLeft", w),
                x = -999,
                M = g(t, "borderBottomWidth", w) + g(t, "borderTopWidth", w),
                A = g(t, "borderLeftWidth", w) + g(t, "borderRightWidth", w),
                P = g(t, "paddingTop", w) + g(t, "paddingBottom", w),
                D = g(t, "paddingLeft", w) + g(t, "paddingRight", w),
                T = .2 * g(t, "fontSize"),
                N = g(t, "textAlign", w, !0),
                H = [],
                O = [],
                q = [],
                I = e.wordDelimiter || " ",
                G = e.span ? "span" : "div",
                z = e.type || e.split || "chars,words,lines",
                X = r && -1 !== z.indexOf("lines") ? [] : null,
                V = -1 !== z.indexOf("words"),
                B = -1 !== z.indexOf("chars"),
                j = "absolute" === e.position || e.absolute === !0,
                F = e.linesClass,
                Y = -1 !== (F || "").indexOf("++"),
                Q = [];
            for (X && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), Y && (F = F.split("++").join("")), h = t.getElementsByTagName("*"), l = h.length, u = [], a = 0; l > a; a++) u[a] = h[a];
            if (X || j)
                for (a = 0; l > a; a++) f = u[a], p = f.parentNode === t, (p || j || B && !V) && (y = f.offsetTop, X && p && Math.abs(y - x) > T && "BR" !== f.nodeName && (_ = [], X.push(_), x = y), j && (f._x = f.offsetLeft, f._y = y, f._w = f.offsetWidth, f._h = f.offsetHeight), X && ((f._isSplit && p || !B && p || V && p || !V && f.parentNode.parentNode === t && !f.parentNode._isSplit) && (_.push(f), f._x -= b, R(f, t, I) && (f._wordEnd = !0)), "BR" === f.nodeName && f.nextSibling && "BR" === f.nextSibling.nodeName && X.push([])));
            for (a = 0; l > a; a++) f = u[a], p = f.parentNode === t, "BR" !== f.nodeName ? (j && (C = f.style, V || p || (f._x += f.parentNode._x, f._y += f.parentNode._y), C.left = f._x + "px", C.top = f._y + "px", C.position = "absolute", C.display = "block", C.width = f._w + 1 + "px", C.height = f._h + "px"), !V && B ? f._isSplit ? (f._next = f.nextSibling, f.parentNode.appendChild(f)) : f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && Q.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), u.splice(a--, 1), l--) : p || (y = !f.nextSibling && R(f.parentNode, t, I), f.parentNode._parent && f.parentNode._parent.appendChild(f), y && f.parentNode.appendChild(c.createTextNode(" ")), e.span && (f.style.display = "inline"), H.push(f)) : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? O.push(f) : B && !f._isSplit && (e.span && (f.style.display = "inline"), H.push(f))) : X || j ? (f.parentNode && f.parentNode.removeChild(f), u.splice(a--, 1), l--) : V || t.appendChild(f);
            for (a = Q.length; --a > -1;) Q[a].parentNode.removeChild(Q[a]);
            if (X) {
                for (j && (v = c.createElement(G), t.appendChild(v), S = v.offsetWidth + "px", y = v.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(v)), C = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (m = " " === I && (!j || !V && !B), a = 0; a < X.length; a++) {
                    for (_ = X[a], v = c.createElement(G), v.style.cssText = "display:block;text-align:" + N + ";position:" + (j ? "absolute;" : "relative;"), F && (v.className = F + (Y ? a + 1 : "")), q.push(v), l = _.length, h = 0; l > h; h++) "BR" !== _[h].nodeName && (f = _[h], v.appendChild(f), m && f._wordEnd && v.appendChild(c.createTextNode(" ")), j && (0 === h && (v.style.top = f._y + "px", v.style.left = b + y + "px"), f.style.top = "0px", y && (f.style.left = f._x - y + "px")));
                    0 === l ? v.innerHTML = "&nbsp;" : V || B || (L(v), k(v, String.fromCharCode(160), " ")), j && (v.style.width = S, v.style.height = f._h + "px"), t.appendChild(v)
                }
                t.style.cssText = C
            }
            j && (s > t.clientHeight && (t.style.height = s - P + "px", t.clientHeight < s && (t.style.height = s + M + "px")), o > t.clientWidth && (t.style.width = o - D + "px", t.clientWidth < o && (t.style.width = o + A + "px"))), E(i, H), E(n, O), E(r, q)
        },
        O = function (t, e, i, n) {
            var r, o, s, a, h, d, f, g, u, p = e.span ? "span" : "div",
                S = e.type || e.split || "chars,words,lines",
                A = (-1 !== S.indexOf("words"), -1 !== S.indexOf("chars")),
                P = "absolute" === e.position || e.absolute === !0,
                D = e.wordDelimiter || " ",
                T = " " !== D ? "" : P ? "&#173; " : " ",
                E = e.span ? "</span>" : "</div>",
                N = !0,
                R = c.createElement("div"),
                L = t.parentNode;
            for (L.insertBefore(R, t), R.textContent = t.nodeValue, L.removeChild(t), t = R, r = l(t), f = -1 !== r.indexOf("<"), e.reduceWhiteSpace !== !1 && (r = r.replace(m, " ").replace(_, "")), f && (r = r.split("<").join("{{LT}}")), h = r.length, o = (" " === r.charAt(0) ? T : "") + i(), s = 0; h > s; s++)
                if (d = r.charAt(s), d === D && r.charAt(s - 1) !== D && s) {
                    for (o += N ? E : "", N = !1; r.charAt(s + 1) === D;) o += T, s++;
                    s === h - 1 ? o += T : ")" !== r.charAt(s + 1) && (o += T + i(), N = !0)
                } else "{" === d && "{{LT}}" === r.substr(s, 6) ? (o += A ? n() + "{{LT}}</" + p + ">" : "{{LT}}", s += 5) : d.charCodeAt(0) >= C && d.charCodeAt(0) <= v || r.charCodeAt(s + 1) >= 65024 && r.charCodeAt(s + 1) <= 65039 ? (g = M(r.substr(s, 2)), u = M(r.substr(s + 2, 2)), a = (y > g || g > w || y > u || u > w) && (b > u || u > x) ? 2 : 4, o += A && " " !== d ? n() + r.substr(s, a) + "</" + p + ">" : r.substr(s, a), s += a - 1) : o += A && " " !== d ? n() + d + "</" + p + ">" : d;
            t.outerHTML = o + (N ? E : ""), f && k(L, "{{LT}}", "<")
        },
        q = function (t, e, i, n) {
            var r, o, s = N(t.childNodes),
                a = s.length,
                h = "absolute" === e.position || e.absolute === !0;
            if (3 !== t.nodeType || a > 1) {
                for (e.absolute = !1, r = 0; a > r; r++) o = s[r], (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (h && 3 !== o.nodeType && "inline" === g(o, "display", null, !0) && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, q(o, e, i, n));
                return e.absolute = h, void(t._isSplit = !0)
            }
            O(t, e, i, n)
        },
        I = T.prototype;
    I.split = function (t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, i, n, r = this.elements.length, o = t.span ? "span" : "div", s = ("absolute" === t.position || t.absolute === !0, D(t.wordsClass, o)), a = D(t.charsClass, o); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, q(n, t, s, a), H(n, t, this.chars, this.words, this.lines, i, e);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, I.revert = function () {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, T.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (T.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }, T.version = "0.5.6"
}(_gsScope),
    function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports && (module.exports = e())
    }("SplitText");