/*! For license information please see rowgroup.bootstrap5.js.LICENSE.txt */
!(function () {
    var t = {
            53333: function (t, r, e) {
                var n, a;
                (n = [e(19567), e(59117)]),
                    (a = function (t) {
                        return (function (t, r, e, n) {
                            "use strict";
                            var a = t.fn.dataTable;
                            return (
                                t.extend(!0, a.defaults, {
                                    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                                    renderer: "bootstrap",
                                }),
                                t.extend(a.ext.classes, {
                                    sWrapper:
                                        "dataTables_wrapper dt-bootstrap5",
                                    sFilterInput:
                                        "form-control form-control-sm",
                                    sLengthSelect: "form-select form-select-sm",
                                    sProcessing: "dataTables_processing card",
                                    sPageButton: "paginate_button page-item",
                                }),
                                (a.ext.renderer.pageButton.bootstrap =
                                    function (r, o, s, i, d, u) {
                                        var c,
                                            l,
                                            p,
                                            f = new a.Api(r),
                                            h = r.oClasses,
                                            w = r.oLanguage.oPaginate,
                                            b =
                                                r.oLanguage.oAria.paginate ||
                                                {},
                                            g = 0,
                                            v = function (e, n) {
                                                var a,
                                                    o,
                                                    i,
                                                    p,
                                                    m = function (r) {
                                                        r.preventDefault(),
                                                            t(
                                                                r.currentTarget
                                                            ).hasClass(
                                                                "disabled"
                                                            ) ||
                                                                f.page() ==
                                                                    r.data
                                                                        .action ||
                                                                f
                                                                    .page(
                                                                        r.data
                                                                            .action
                                                                    )
                                                                    .draw(
                                                                        "page"
                                                                    );
                                                    };
                                                for (
                                                    a = 0, o = n.length;
                                                    a < o;
                                                    a++
                                                )
                                                    if (
                                                        ((p = n[a]),
                                                        Array.isArray(p))
                                                    )
                                                        v(e, p);
                                                    else {
                                                        switch (
                                                            ((c = ""),
                                                            (l = ""),
                                                            p)
                                                        ) {
                                                            case "ellipsis":
                                                                (c =
                                                                    "&#x2026;"),
                                                                    (l =
                                                                        "disabled");
                                                                break;
                                                            case "first":
                                                                (c = w.sFirst),
                                                                    (l =
                                                                        p +
                                                                        (d > 0
                                                                            ? ""
                                                                            : " disabled"));
                                                                break;
                                                            case "previous":
                                                                (c =
                                                                    w.sPrevious),
                                                                    (l =
                                                                        p +
                                                                        (d > 0
                                                                            ? ""
                                                                            : " disabled"));
                                                                break;
                                                            case "next":
                                                                (c = w.sNext),
                                                                    (l =
                                                                        p +
                                                                        (d <
                                                                        u - 1
                                                                            ? ""
                                                                            : " disabled"));
                                                                break;
                                                            case "last":
                                                                (c = w.sLast),
                                                                    (l =
                                                                        p +
                                                                        (d <
                                                                        u - 1
                                                                            ? ""
                                                                            : " disabled"));
                                                                break;
                                                            default:
                                                                (c = p + 1),
                                                                    (l =
                                                                        d === p
                                                                            ? "active"
                                                                            : "");
                                                        }
                                                        c &&
                                                            ((i = t("<li>", {
                                                                class:
                                                                    h.sPageButton +
                                                                    " " +
                                                                    l,
                                                                id:
                                                                    0 === s &&
                                                                    "string" ==
                                                                        typeof p
                                                                        ? r.sTableId +
                                                                          "_" +
                                                                          p
                                                                        : null,
                                                            })
                                                                .append(
                                                                    t("<a>", {
                                                                        href: "#",
                                                                        "aria-controls":
                                                                            r.sTableId,
                                                                        "aria-label":
                                                                            b[
                                                                                p
                                                                            ],
                                                                        "data-dt-idx":
                                                                            g,
                                                                        tabindex:
                                                                            r.iTabIndex,
                                                                        class: "page-link",
                                                                    }).html(c)
                                                                )
                                                                .appendTo(e)),
                                                            r.oApi._fnBindAction(
                                                                i,
                                                                { action: p },
                                                                m
                                                            ),
                                                            g++);
                                                    }
                                            };
                                        try {
                                            p = t(o)
                                                .find(e.activeElement)
                                                .data("dt-idx");
                                        } catch (t) {}
                                        v(
                                            t(o)
                                                .empty()
                                                .html(
                                                    '<ul class="pagination"/>'
                                                )
                                                .children("ul"),
                                            i
                                        ),
                                            p !== n &&
                                                t(o)
                                                    .find(
                                                        "[data-dt-idx=" +
                                                            p +
                                                            "]"
                                                    )
                                                    .trigger("focus");
                                    }),
                                a
                            );
                        })(t, window, document);
                    }.apply(r, n)),
                    void 0 === a || (t.exports = a);
            },
            16843: function (t, r, e) {
                var n, a;
                (n = [e(19567), e(53333), e(7304)]),
                    void 0 ===
                        (a = function (t) {
                            return (function (t, r, e, n) {
                                return t.fn.dataTable;
                            })(t, window, document);
                        }.apply(r, n)) || (t.exports = a);
            },
            7304: function (t, r, e) {
                var n, a;
                (n = [e(19567), e(59117)]),
                    (a = function (t) {
                        return (function (t, r, e, n) {
                            "use strict";
                            var a = t.fn.dataTable,
                                o = function (r, e) {
                                    if (
                                        !a.versionCheck ||
                                        !a.versionCheck("1.10.8")
                                    )
                                        throw "RowGroup requires DataTables 1.10.8 or newer";
                                    (this.c = t.extend(
                                        !0,
                                        {},
                                        a.defaults.rowGroup,
                                        o.defaults,
                                        e
                                    )),
                                        (this.s = { dt: new a.Api(r) }),
                                        (this.dom = {});
                                    var n = this.s.dt.settings()[0],
                                        s = n.rowGroup;
                                    if (s) return s;
                                    (n.rowGroup = this), this._constructor();
                                };
                            return (
                                t.extend(o.prototype, {
                                    dataSrc: function (r) {
                                        if (r === n) return this.c.dataSrc;
                                        var e = this.s.dt;
                                        return (
                                            (this.c.dataSrc = r),
                                            t(e.table().node()).triggerHandler(
                                                "rowgroup-datasrc.dt",
                                                [e, r]
                                            ),
                                            this
                                        );
                                    },
                                    disable: function () {
                                        return (this.c.enable = !1), this;
                                    },
                                    enable: function (t) {
                                        return !1 === t
                                            ? this.disable()
                                            : ((this.c.enable = !0), this);
                                    },
                                    enabled: function () {
                                        return this.c.enable;
                                    },
                                    _constructor: function () {
                                        var t = this,
                                            r = this.s.dt,
                                            e = r.settings()[0];
                                        r.on("draw.dtrg", function (r, n) {
                                            t.c.enable && e === n && t._draw();
                                        }),
                                            r.on(
                                                "column-visibility.dt.dtrg responsive-resize.dt.dtrg",
                                                function () {
                                                    t._adjustColspan();
                                                }
                                            ),
                                            r.on("destroy", function () {
                                                r.off(".dtrg");
                                            });
                                    },
                                    _adjustColspan: function () {
                                        t(
                                            "tr." + this.c.className,
                                            this.s.dt.table().body()
                                        )
                                            .find("td:visible")
                                            .attr("colspan", this._colspan());
                                    },
                                    _colspan: function () {
                                        return this.s.dt
                                            .columns()
                                            .visible()
                                            .reduce(function (t, r) {
                                                return t + r;
                                            }, 0);
                                    },
                                    _draw: function () {
                                        var t = this.s.dt,
                                            r = this._group(
                                                0,
                                                t
                                                    .rows({ page: "current" })
                                                    .indexes()
                                            );
                                        this._groupDisplay(0, r);
                                    },
                                    _group: function (t, r) {
                                        for (
                                            var e,
                                                o = Array.isArray(
                                                    this.c.dataSrc
                                                )
                                                    ? this.c.dataSrc
                                                    : [this.c.dataSrc],
                                                s =
                                                    a.ext.oApi._fnGetObjectDataFn(
                                                        o[t]
                                                    ),
                                                i = this.s.dt,
                                                d = [],
                                                u = this,
                                                c = 0,
                                                l = r.length;
                                            c < l;
                                            c++
                                        ) {
                                            var p,
                                                f = r[c];
                                            (null !==
                                                (p = s(i.row(f).data())) &&
                                                p !== n) ||
                                                (p = u.c.emptyDataGroup),
                                                (e !== n && p === e) ||
                                                    (d.push({
                                                        dataPoint: p,
                                                        rows: [],
                                                    }),
                                                    (e = p)),
                                                d[d.length - 1].rows.push(f);
                                        }
                                        if (o[t + 1] !== n)
                                            for (
                                                c = 0, l = d.length;
                                                c < l;
                                                c++
                                            )
                                                d[c].children = this._group(
                                                    t + 1,
                                                    d[c].rows
                                                );
                                        return d;
                                    },
                                    _groupDisplay: function (t, r) {
                                        for (
                                            var e,
                                                n = this.s.dt,
                                                a = 0,
                                                o = r.length;
                                            a < o;
                                            a++
                                        ) {
                                            var s,
                                                i = r[a],
                                                d = i.dataPoint,
                                                u = i.rows;
                                            this.c.startRender &&
                                                ((e = this.c.startRender.call(
                                                    this,
                                                    n.rows(u),
                                                    d,
                                                    t
                                                )),
                                                (s = this._rowWrap(
                                                    e,
                                                    this.c.startClassName,
                                                    t
                                                )) &&
                                                    s.insertBefore(
                                                        n.row(u[0]).node()
                                                    )),
                                                this.c.endRender &&
                                                    ((e = this.c.endRender.call(
                                                        this,
                                                        n.rows(u),
                                                        d,
                                                        t
                                                    )),
                                                    (s = this._rowWrap(
                                                        e,
                                                        this.c.endClassName,
                                                        t
                                                    )) &&
                                                        s.insertAfter(
                                                            n
                                                                .row(
                                                                    u[
                                                                        u.length -
                                                                            1
                                                                    ]
                                                                )
                                                                .node()
                                                        )),
                                                i.children &&
                                                    this._groupDisplay(
                                                        t + 1,
                                                        i.children
                                                    );
                                        }
                                    },
                                    _rowWrap: function (r, e, a) {
                                        return (
                                            (null !== r && "" !== r) ||
                                                (r = this.c.emptyDataGroup),
                                            r === n || null === r
                                                ? null
                                                : ("object" == typeof r &&
                                                  r.nodeName &&
                                                  "tr" ===
                                                      r.nodeName.toLowerCase()
                                                      ? t(r)
                                                      : r instanceof t &&
                                                        r.length &&
                                                        "tr" ===
                                                            r[0].nodeName.toLowerCase()
                                                      ? r
                                                      : t("<tr/>").append(
                                                            t("<th/>")
                                                                .attr(
                                                                    "colspan",
                                                                    this._colspan()
                                                                )
                                                                .attr(
                                                                    "scope",
                                                                    "row"
                                                                )
                                                                .append(r)
                                                        )
                                                  )
                                                      .addClass(
                                                          this.c.className
                                                      )
                                                      .addClass(e)
                                                      .addClass(
                                                          "dtrg-level-" + a
                                                      )
                                        );
                                    },
                                }),
                                (o.defaults = {
                                    className: "dtrg-group",
                                    dataSrc: 0,
                                    emptyDataGroup: "No group",
                                    enable: !0,
                                    endClassName: "dtrg-end",
                                    endRender: null,
                                    startClassName: "dtrg-start",
                                    startRender: function (t, r) {
                                        return r;
                                    },
                                }),
                                (o.version = "1.2.0"),
                                (t.fn.dataTable.RowGroup = o),
                                (t.fn.DataTable.RowGroup = o),
                                a.Api.register("rowGroup()", function () {
                                    return this;
                                }),
                                a.Api.register(
                                    "rowGroup().disable()",
                                    function () {
                                        return this.iterator(
                                            "table",
                                            function (t) {
                                                t.rowGroup &&
                                                    t.rowGroup.enable(!1);
                                            }
                                        );
                                    }
                                ),
                                a.Api.register(
                                    "rowGroup().enable()",
                                    function (t) {
                                        return this.iterator(
                                            "table",
                                            function (r) {
                                                r.rowGroup &&
                                                    r.rowGroup.enable(
                                                        t === n || t
                                                    );
                                            }
                                        );
                                    }
                                ),
                                a.Api.register(
                                    "rowGroup().enabled()",
                                    function () {
                                        var t = this.context;
                                        return (
                                            !(!t.length || !t[0].rowGroup) &&
                                            t[0].rowGroup.enabled()
                                        );
                                    }
                                ),
                                a.Api.register(
                                    "rowGroup().dataSrc()",
                                    function (t) {
                                        return t === n
                                            ? this.context[0].rowGroup.dataSrc()
                                            : this.iterator(
                                                  "table",
                                                  function (r) {
                                                      r.rowGroup &&
                                                          r.rowGroup.dataSrc(t);
                                                  }
                                              );
                                    }
                                ),
                                t(e).on("preInit.dt.dtrg", function (r, e, n) {
                                    if ("dt" === r.namespace) {
                                        var s = e.oInit.rowGroup,
                                            i = a.defaults.rowGroup;
                                        if (s || i) {
                                            var d = t.extend({}, i, s);
                                            !1 !== s && new o(e, d);
                                        }
                                    }
                                }),
                                o
                            );
                        })(t, window, document);
                    }.apply(r, n)),
                    void 0 === a || (t.exports = a);
            },
            59117: function (t) {
                "use strict";
                t.exports = window["$.fn.dataTable"];
            },
            19567: function (t) {
                "use strict";
                t.exports = window.jQuery;
            },
        },
        r = {};
    function e(n) {
        var a = r[n];
        if (void 0 !== a) return a.exports;
        var o = (r[n] = { exports: {} });
        return t[n](o, o.exports, e), o.exports;
    }
    (e.n = function (t) {
        var r =
            t && t.__esModule
                ? function () {
                      return t.default;
                  }
                : function () {
                      return t;
                  };
        return e.d(r, { a: r }), r;
    }),
        (e.d = function (t, r) {
            for (var n in r)
                e.o(r, n) &&
                    !e.o(t, n) &&
                    Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
        }),
        (e.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r);
        }),
        (e.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        });
    var n = {};
    !(function () {
        "use strict";
        e.r(n);
        e(16843);
    })();
    var a = window;
    for (var o in n) a[o] = n[o];
    n.__esModule && Object.defineProperty(a, "__esModule", { value: !0 });
})();
