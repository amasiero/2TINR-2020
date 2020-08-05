// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/stocks$1.0.0/src/app/views/portifolio/portifolio.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Stocks Portifolio</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Stocks Portifolio</h1><hr><table border=1><thead><tr><th>Código</th><th>Empresa</th><th>Quantidade</th><th>Valor Unitário</th><th>Valor Total</th></tr></thead><tbody>");

  var for__16 = 0;

  marko_forEach(data.stocks, function(stock) {
    var keyscope__17 = "[" + ((for__16++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(stock.code) +
      "</td><td>" +
      marko_escapeXml(stock.name) +
      "</td><td>" +
      marko_escapeXml(stock.amount) +
      "</td><td>R$ " +
      marko_escapeXml(stock.price) +
      "</td><td>R$ " +
      marko_escapeXml(parseFloat(stock.amount) * stock.price) +
      "</td></tr>");
  });

  out.w("</tbody></table>");

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
    id: "/stocks$1.0.0/src/app/views/portifolio/portifolio.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
