(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    15: function (e, t, a) {},
    16: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(2),
        c = a.n(r),
        s = a(6),
        i = a(3),
        l = a(4),
        u = a(7),
        d = a(5),
        p = a(8),
        h = function (e) {
          return o.a.createElement(
            "header",
            { className: "app-header" },
            o.a.createElement(
              "h1",
              { className: "app-header__title" },
              "Super Sticky Notes"
            ),
            o.a.createElement(
              "aside",
              { className: "app-header__controls" },
              o.a.createElement(
                "button",
                { className: "add-new", onClick: e.addNote },
                "+ New Note"
              ),
              o.a.createElement("input", {
                type: "text",
                placeholder: "Type here to search...",
                className: "search",
                value: e.searchText,
                onChange: function (t) {
                  e.onSearch(t.target.value);
                },
              })
            )
          );
        },
        m = function (e) {
          return o.a.createElement(
            "li",
            { className: "note" },
            o.a.createElement("input", {
              type: "text",
              value: e.note.title,
              onChange: function (t) {
                var a = t.target.value,
                  n = e.note.id;
                e.onType(n, "title", a);
              },
              placeholder: "Title",
              className: "note__title",
            }),
            o.a.createElement("textarea", {
              value: e.note.description,
              onChange: function (t) {
                var a = t.target.value,
                  n = e.note.id;
                e.onType(n, "description", a);
              },
              placeholder: "Description...",
              className: "note__description",
            }),
            o.a.createElement(
              "span",
              {
                onClick: function () {
                  return e.removeNote(e.note.id);
                },
                className: "note__delete",
              },
              "X"
            )
          );
        },
        v = function (e) {
          var t = e.notes
            .filter(function (e) {
              return e.doesMatchSearch;
            })
            .map(function (t) {
              return o.a.createElement(m, {
                note: t,
                key: t.id,
                onType: e.onType,
                removeNote: e.removeNote,
              });
            });
          return o.a.createElement("ul", { className: "notes-list" }, t);
        },
        f = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(d.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                notes: [
                  {
                    id: Date.now(),
                    title: "",
                    description: "",
                    doesMatchSearch: !0,
                  },
                ],
                searchText: "",
              }),
              (a.addNote = function () {
                var e = [
                  {
                    id: Date.now(),
                    title: "",
                    description: "",
                    doesMatchSearch: !0,
                  },
                ].concat(Object(s.a)(a.state.notes));
                a.setState({ notes: e });
              }),
              (a.onType = function (e, t, n) {
                var o = a.state.notes.map(function (a) {
                  return a.id !== e
                    ? a
                    : "title" === t
                    ? ((a.title = n), a)
                    : ((a.description = n), a);
                });
                a.setState({ notes: o });
              }),
              (a.onSearch = function (e) {
                var t = e.toLowerCase(),
                  n = a.state.notes.map(function (e) {
                    if (t) {
                      var a = e.title.toLowerCase(),
                        n = e.description.toLowerCase(),
                        o = a.includes(t),
                        r = n.includes(t),
                        c = o || r;
                      return (e.doesMatchSearch = c), e;
                    }
                    return (e.doesMatchSearch = !0), e;
                  });
                a.setState({ searchText: t, notes: n });
              }),
              (a.removeNote = function (e) {
                var t = a.state.notes.filter(function (t) {
                  return t.id !== e;
                });
                a.setState({ notes: t });
              }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = JSON.stringify(this.state.notes);
                  localStorage.setItem("savedNotes", e);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = localStorage.getItem("savedNotes");
                  if (e) {
                    var t = JSON.parse(e);
                    this.setState({ notes: t });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(h, {
                      searchText: this.state.searchText,
                      addNote: this.addNote,
                      onSearch: this.onSearch,
                    }),
                    o.a.createElement(v, {
                      notes: this.state.notes,
                      onType: this.onType,
                      removeNote: this.removeNote,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        N = (a(15), document.getElementById("root"));
      c.a.render(o.a.createElement(f, null), N);
    },
    9: function (e, t, a) {
      e.exports = a(16);
    },
  },
  [[9, 1, 2]],
]);
//# sourceMappingURL=main.30779cbb.chunk.js.map
