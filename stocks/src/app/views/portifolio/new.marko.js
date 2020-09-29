// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/stocks$1.0.0/src/app/views/portifolio/new.marko",
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

  out.w("<header class=\"main-header d-flex align-items-center\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\">Stocks Rocks!</h1></div><div class=\"main-header-nav col-8\"><a href=\"#\" class=\"login p-3\"><i class=\"fas fa-sign-in-alt mr-2\"></i>Login</a></div></div></div></header><main class=\"main-container\"><div class=\"container\"><h1 class=\"mt-3 mb-2\">Compre sua Ação</h1><hr>");

  if (data.errors) {
    out.w("<div><div class=\"alert alert-danger\"><ul>");

    var for__24 = 0;

    marko_forEach(data.errors, function(error) {
      var keyscope__25 = "[" + ((for__24++) + "]");

      out.w("<li>" +
        marko_escapeXml(error.param) +
        " - " +
        marko_escapeXml(error.msg) +
        "</li>");
    });

    out.w("</ul></div></div>");
  }

  out.w("<form action=\"/stocks/buy\" method=\"POST\">");

  if (data.stock.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.stock.id) +
      "\"></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"code\">Código</label><input type=\"text\" id=\"code\" name=\"code\" value=\"" +
    marko_escapeXmlAttr(data.stock.code) +
    "\" placeholder=\"Digite o código da ação desejada.\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"name\">Empresa</label><input type=\"text\" id=\"name\" name=\"name\" value=\"" +
    marko_escapeXmlAttr(data.stock.name) +
    "\" placeholder=\"Digite o nome da empresa para a ação desejada.\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"amount\">Quantidade</label><input type=\"number\" id=\"amount\" name=\"amount\" value=\"" +
    marko_escapeXmlAttr(data.stock.amount) +
    "\" placeholder=\"Digite a quantidade de ações desejada.\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"price\">Valor Unitário</label><input type=\"number\" id=\"price\" name=\"price\" step=\".01\" value=\"" +
    marko_escapeXmlAttr(data.stock.price) +
    "\" placeholder=\"Digite o valor unitário da ação desejada.\" class=\"form-control\"></div><button type=\"submit\" class=\"btn btn-primary\">Comprar</button></form></div></main><footer class=\"main-footer bg-dark mt-4\"><div class=\"container\"><p class=\"text-light text-center p-3\">Developed by Andrey Masiero - &copy; 2020</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "47");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/stocks$1.0.0/src/app/views/portifolio/new.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
