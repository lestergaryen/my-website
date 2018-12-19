// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/my-travel-website$1.0.0/server/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang><head><meta charset=\"UTF-8\"><title>" +
    marko_escapeXml(input.title) +
    "</title><meta name=\"viewport\" content=\"width = device-width, initial-scale = 1.0, shrink-to-fit = no\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><style>\r\n      body {\r\n        background-image: url('images/christmas-bg.jpg');\r\n      }\r\n    </style></head><body>");

  component_globals_tag({}, out);

  out.w("<main class=\"container my-4\"><div class=\"d-flex justify-content-between\"><span>" +
    marko_escapeXml(input.title) +
    "</span><a href=\"/place\" title=\"Add Item\" class=\"btn btn-primary\">Add Item</a></div><article class=\"my-2\"><div class=\"row\">");

  var for__14 = 0;

  marko_forEach(input.wishList, function(item) {
    var keyscope__15 = "[" + ((for__14++) + "]");

    out.w("<div class=\"col-md-3\"><div class=\"card\"><img" +
      marko_attr("src", "" + item.image) +
      " class=\"card-img-top\"><div class=\"card-body\"><h4>" +
      marko_escapeXml(item.name) +
      "</h4><p>" +
      marko_escapeXml(item.description) +
      "</p></div></div></div>");
  });

  out.w("</div></article></main><footer></footer><script>\r\n\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/my-travel-website$1.0.0/server/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
