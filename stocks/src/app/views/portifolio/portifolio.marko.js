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
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Stocks Portifolio</title><link href=\"https://fonts.googleapis.com/css2?family=Bangers&amp;display=swap\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"/resource/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/resource/css/all.min.css\"><link rel=\"stylesheet\" href=\"/resource/css/main.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"main-header d-flex align-items-center\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\">Stocks Rocks!</h1></div><div class=\"main-header-nav col-8\"><a href=\"#\" class=\"login p-3\"><i class=\"fas fa-sign-in-alt mr-2\"></i>Login</a></div></div></div></header><main class=\"main-container\"><div class=\"container\"><h1 class=\"mt-3 mb-2\">Stocks Portifolio</h1><hr><table border=1 class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><th>Código</th><th>Empresa</th><th>Quantidade</th><th>Valor Unitário</th><th>Valor Total</th><th>Atualizar</th><th>Excluir</th></tr></thead><tbody id=\"stocks\">");

  var for__32 = 0;

  marko_forEach(data.stocks, function(stock) {
    var keyscope__33 = "[" + ((for__32++) + "]");

    out.w("<tr id=\"stock_" +
      marko_escapeXmlAttr(stock.id) +
      "\"><td>" +
      marko_escapeXml(stock.code) +
      "</td><td>" +
      marko_escapeXml(stock.name) +
      "</td><td>" +
      marko_escapeXml(stock.amount) +
      "</td><td>" +
      marko_escapeXml(stock.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })) +
      "</td><td>" +
      marko_escapeXml(parseFloat(stock.amount * stock.price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })) +
      "</td><td><a href=\"/stocks/buy/" +
      marko_escapeXmlAttr(stock.id) +
      "\"><i class=\"far fa-edit text-dark\"></i></a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(stock.id) +
      "\" data-type=\"delete\"><i class=\"far fa-trash-alt text-dark\"></i></a></td></tr>");
  });

  out.w("</tbody></table></div></main><footer class=\"main-footer bg-dark mt-4\"><div class=\"container\"><p class=\"text-light text-center p-3\">Developed by Andrey Masiero - &copy; 2020</p></div></footer><script src=\"/resource/js/delete-stock.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "50");

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
