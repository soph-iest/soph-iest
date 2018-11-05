module.exports = __NEXT_REGISTER_PAGE("/resume", function() {
  return {
    page: webpackJsonp(
      [4],
      {
        246: function(e, a, t) {
          e.exports = t(247);
        },
        247: function(e, a, t) {
          "use strict";
          Object.defineProperty(a, "__esModule", { value: !0 });
          var n = t(0),
            r = t.n(n),
            s = t(22),
            c = function() {
              return r.a.createElement(
                "div",
                { className: "resume-div" },
                r.a.createElement("h1", { className: "work-header" }, "résumé"),
                r.a.createElement(
                  "h4",
                  { className: "resume-subheader" },
                  "for inquiries, please contact me at ",
                  r.a.createElement(
                    "a",
                    { href: "mailto:sophie.a.debs@gmail.com" },
                    "sophie.a.debs@gmail.com"
                  ),
                  "."
                ),
                r.a.createElement(
                  "object",
                  {
                    className: "pdf-object",
                    data: "../static/pdf/resume.pdf",
                    type: "application/pdf",
                    width: "100%",
                    height: "100%"
                  },
                  r.a.createElement(
                    "iframe",
                    {
                      src: "../static/pdf/resume.pdf",
                      width: "100%",
                      height: "100%",
                      style: { border: "none" }
                    },
                    "This browser does not support PDFs. Please download the PDF to view it: ",
                    r.a.createElement(
                      "a",
                      { href: "../static/pdf/resume.pdf" },
                      "Download PDF"
                    )
                  )
                )
              );
            };
          t(23),
            (a.default = function() {
              return r.a.createElement(
                s.a,
                { title: "résumé", currentPage: "/resume" },
                r.a.createElement(c, null)
              );
            });
        }
      },
      [246]
    ).default
  };
});
