function scoreChange(a) {
	function e() {
		var b = document.getElementById("doughnutChartCanvas").getContext("2d");
		new Chart(b).Doughnut(c, d), $("#resumeScore .scoreVal span").text(a).parent().fadeIn(200)
	}
	var b = 360 * parseInt(a) / 100,
		c = [{
			value: b,
			color: "#009a6d"
		}, {
			value: 360 - b,
			color: "#ffffff"
		}],
		d = {
			percentageInnerCutout: 80,
			segmentShowStroke: !1
		};
	setTimeout(e, 100)
}!
function(a, b) {
	"use strict";
	a.HoverDir = function(b, c) {
		this.$el = a(c), this._init(b)
	}, a.HoverDir.defaults = {
		speed: 300,
		easing: "ease",
		hoverDelay: 0,
		inverse: !1
	}, a.HoverDir.prototype = {
		_init: function(b) {
			this.options = a.extend(!0, {}, a.HoverDir.defaults, b), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
		},
		_loadEvents: function() {
			var b = this;
			this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(c) {
				var d = a(this),
					e = d.find("div"),
					f = b._getDir(d, {
						x: c.pageX,
						y: c.pageY
					}),
					g = b._getStyle(f);
				"mouseenter" === c.type ? (e.hide().css(g.from), clearTimeout(b.tmhover), b.tmhover = setTimeout(function() {
					e.show(0, function() {
						var c = a(this);
						b.support && c.css("transition", b.transitionProp), b._applyAnimation(c, g.to, b.options.speed)
					})
				}, b.options.hoverDelay)) : (b.support && e.css("transition", b.transitionProp), clearTimeout(b.tmhover), b._applyAnimation(e, g.from, b.options.speed))
			})
		},
		_getDir: function(a, b) {
			var c = a.width(),
				d = a.height(),
				e = (b.x - a.offset().left - c / 2) * (c > d ? d / c : 1),
				f = (b.y - a.offset().top - d / 2) * (d > c ? c / d : 1),
				g = Math.round((Math.atan2(f, e) * (180 / Math.PI) + 180) / 90 + 3) % 4;
			return g
		},
		_getStyle: function(a) {
			var b, c, d = {
				left: "0px",
				top: "-100%"
			},
				e = {
					left: "0px",
					top: "100%"
				},
				f = {
					left: "-100%",
					top: "0px"
				},
				g = {
					left: "100%",
					top: "0px"
				},
				h = {
					top: "0px"
				},
				i = {
					left: "0px"
				};
			switch (a) {
			case 0:
				b = this.options.inverse ? e : d, c = h;
				break;
			case 1:
				b = this.options.inverse ? f : g, c = i;
				break;
			case 2:
				b = this.options.inverse ? d : e, c = h;
				break;
			case 3:
				b = this.options.inverse ? g : f, c = i
			}
			return {
				from: b,
				to: c
			}
		},
		_applyAnimation: function(b, c, d) {
			a.fn.applyStyle = this.support ? a.fn.css : a.fn.animate, b.stop().applyStyle(c, a.extend(!0, [], {
				duration: d + "ms"
			}))
		}
	};
	var c = function(a) {
			b.console && b.console.error(a)
		};
	a.fn.hoverdir = function(b) {
		var d, e = a.data(this, "hoverdir");
		return "string" == typeof b ? (d = Array.prototype.slice.call(arguments, 1), this.each(function() {
			return e ? a.isFunction(e[b]) && "_" !== b.charAt(0) ? (e[b].apply(e, d), void 0) : (c("no such method '" + b + "' for hoverdir instance"), void 0) : (c("cannot call methods on hoverdir prior to initialization; attempted to call method '" + b + "'"), void 0)
		})) : this.each(function() {
			e ? e._init() : e = a.data(this, "hoverdir", new a.HoverDir(b, this))
		}), e
	}
}(jQuery, window), window.Modernizr = function(a, b, c) {
	function d(a) {
		q.cssText = a
	}
	function f(a, b) {
		return typeof a === b
	}
	function g(a, b) {
		return !!~ ("" + a).indexOf(b)
	}
	function h(a, b) {
		var d, e;
		for (d in a) if (e = a[d], !g(e, "-") && q[e] !== c) return "pfx" == b ? e : !0;
		return !1
	}
	function i(a, b, d) {
		var e, g;
		for (e in a) if (g = b[a[e]], g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g;
		return !1
	}
	function j(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1),
			e = (a + " " + u.join(d + " ") + d).split(" ");
		return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + v.join(d + " ") + d).split(" "), i(e, b, c))
	}
	var r, B, D, E, k = "2.6.2",
		l = {},
		m = !0,
		n = b.documentElement,
		o = "modernizr",
		p = b.createElement(o),
		q = p.style,
		t = ({}.toString, "Webkit Moz O ms"),
		u = t.split(" "),
		v = t.toLowerCase().split(" "),
		w = {},
		z = [],
		A = z.slice,
		C = {}.hasOwnProperty;
	D = f(C, "undefined") || f(C.call, "undefined") ?
	function(a, b) {
		return b in a && f(a.constructor.prototype[b], "undefined")
	} : function(a, b) {
		return C.call(a, b)
	}, Function.prototype.bind || (Function.prototype.bind = function(a) {
		var c, d, b = this;
		if ("function" != typeof b) throw new TypeError;
		return c = A.call(arguments, 1), d = function() {
			var e, f, g;
			return this instanceof d ? (e = function() {}, e.prototype = b.prototype, f = new e, g = b.apply(f, c.concat(A.call(arguments))), Object(g) === g ? g : f) : b.apply(a, c.concat(A.call(arguments)))
		}
	}), w.csstransitions = function() {
		return j("transition")
	};
	for (E in w) D(w, E) && (B = E.toLowerCase(), l[B] = w[E](), z.push((l[B] ? "" : "no-") + B));
	return l.addTest = function(a, b) {
		if ("object" == typeof a) for (var d in a) D(a, d) && l.addTest(d, a[d]);
		else {
			if (a = a.toLowerCase(), l[a] !== c) return l;
			b = "function" == typeof b ? b() : b, "undefined" != typeof m && m && (n.className += " " + (b ? "" : "no-") + a), l[a] = b
		}
		return l
	}, d(""), p = r = null, function(a, b) {
		function c(a, b) {
			var c = a.createElement("p"),
				d = a.getElementsByTagName("head")[0] || a.documentElement;
			return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
		}
		function d() {
			var a = r.elements;
			return "string" == typeof a ? a.split(" ") : a
		}
		function e(a) {
			var b = p[a[n]];
			return b || (b = {}, o++, a[n] = o, p[o] = b), b
		}
		function f(a, c, d) {
			if (c || (c = b), q) return c.createElement(a);
			d || (d = e(c));
			var f;
			return f = d.cache[a] ? d.cache[a].cloneNode() : l.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !k.test(a) ? d.frag.appendChild(f) : f
		}
		function g(a, c) {
			if (a || (a = b), q) return a.createDocumentFragment();
			c = c || e(a);
			for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
			return f
		}
		function h(a, b) {
			b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
				return r.shivMethods ? f(c, a, b) : b.createElem(c)
			}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
				return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
			}) + ");return n}")(r, b.frag)
		}
		function i(a) {
			a || (a = b);
			var d = e(a);
			return r.shivCSS && !m && !d.hasCSS && (d.hasCSS = !! c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), q || h(a, d), a
		}
			p = {};
		!
		function() {}(), r = {
		}, a.html5 = r, i(b)
	}(this, b), l._version = k, l._domPrefixes = v, l._cssomPrefixes = u, l.testProp = function(a) {
		return h([a])
	}, l.testAllProps = j, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + z.join(" ") : ""), l
}(this, this.document), function(a, b, c) {
	function d(a) {
		return "[object Function]" == o.call(a)
	}
	function e(a) {
		return "string" == typeof a
	}
	function f() {}
	function g(a) {
		return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	}
	function h() {
		var a = p.shift();
		q = 1, a ? a.t ? m(function() {
			("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), h()) : q = 0
	}
	function i(a, c, d, e, f, i, j) {
		function k(b) {
			if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
				"img" != a && m(function() {
					t.removeChild(l)
				}, 50);
				for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
			}
		}
		var j = j || B.errorTimeout,
			l = b.createElement(a),
			o = 0,
			r = 0,
			u = {
				t: d,
				s: c,
				e: f,
				a: i,
				x: j
			};
		1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
			k.call(this, r)
		}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
	}
	function j(a, b, c, d, f) {
		return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
	}
	function k() {
		var a = B;
		return a.loader = {
			load: j,
			i: 0
		}, a
	}
	var A, B, l = b.documentElement,
		m = a.setTimeout,
		n = b.getElementsByTagName("script")[0],
		o = {}.toString,
		p = [],
		q = 0,
		r = "MozAppearance" in l.style,
		s = r && !! b.createRange().compareNode,
		t = s ? l : n.parentNode,
		l = a.opera && "[object Opera]" == o.call(a.opera),
		l = !! b.attachEvent && !l,
		u = r ? "object" : l ? "script" : "img",
		v = l ? "script" : u,
		w = Array.isArray ||
	function(a) {
		return "[object Array]" == o.call(a)
	}, x = [], y = {}, z = {
		timeout: function(a, b) {
			return b.length && (a.timeout = b[0]), a
		}
	};
	B = function(a) {
		function b(a) {
			var e, f, g, a = a.split("!"),
				b = x.length,
				c = a.pop(),
				d = a.length,
				c = {
					url: c,
					origUrl: c,
					prefixes: a
				};
			for (f = 0; d > f; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
			for (f = 0; b > f; f++) c = x[f](c);
			return c
		}
		function g(a, e, f, g, h) {
			var i = b(a),
				j = i.autoCallback;
			i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
				k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
			})))
		}
		function h(a, b) {
			function c(a, c) {
				if (a) {
					if (e(a)) c || (j = function() {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					}), g(a, j, b, 0, h);
					else if (Object(a) === a) for (n in m = function() {
						var c, b = 0;
						for (c in a) a.hasOwnProperty(c) && b++;
						return b
					}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					} : j[n] = function(a) {
						return function() {
							var b = [].slice.call(arguments);
							a && a.apply(this, b), l()
						}
					}(k[n])), g(a[n], j, b, n, h))
				} else!c && l()
			}
			var m, n, h = !! a.test,
				i = a.load || a.both,
				j = a.callback || f,
				k = j,
				l = a.complete || f;
			c(h ? a.yep : a.nope, !! i), i && c(i)
		}
		var i, j, l = this.yepnope.loader;
		if (e(a)) g(a, 0, l, 0);
		else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
		else Object(a) === a && h(a, l)
	}, B.addPrefix = function(a, b) {
		z[a] = b
	}, B.addFilter = function(a) {
		x.push(a)
	}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
		b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
		var l, o, k = b.createElement("script"),
			e = e || B.errorTimeout;
		k.src = a;
		for (o in d) k.setAttribute(o, d[o]);
		c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
			!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
		}, m(function() {
			l || (l = 1, c(1))
		}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
	}, a.yepnope.injectCss = function(a, c, d, e, g, i) {
		var j, e = b.createElement("link"),
			c = i ? h : c || f;
		e.href = a, e.rel = "stylesheet", e.type = "text/css";
		for (j in d) e.setAttribute(j, d[j]);
		g || (n.parentNode.insertBefore(e, n), m(c, 0))
	}
}(this, document), Modernizr.load = function() {
	yepnope.apply(window, [].slice.call(arguments, 0))
}, $(function() {
	function d() {
		return window.innerHeight ? c = window.innerHeight : document.body && document.body.clientHeight && (c = document.body.clientHeight), document.documentElement && document.documentElement.clientHeight && (c = document.documentElement.clientHeight), c
	}
	var a, c, e;
	$(" #da-thumbs > li ").each(function() {
		$(this).hoverdir()
	})
});
