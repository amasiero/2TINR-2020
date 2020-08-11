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
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Stocks Portifolio</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Compre sua Ação</h1><hr><form action=\"/stocks\" method=\"POST\"><input type=\"hidden\" id=\"id\" name=\"id\"><div><label for=\"code\">Código</label><input type=\"text\" id=\"code\" name=\"code\" placeholder=\"Digite o código da ação desejada.\"></div><div><label for=\"name\">Empresa</label><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Digite o nome da empresa para a ação desejada.\"></div><div><label for=\"amount\">Quantidade</label><input type=\"number\" id=\"amount\" name=\"amount\" placeholder=\"Digite a quantidade de ações desejada.\"></div><div><label for=\"price\">Valor Unitário</label><input type=\"number\" id=\"price\" name=\"price\" step=\".01\" placeholder=\"Digite o valor unitário da ação desejada.\"></div><button type=\"submit\">Comprar</button></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

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
