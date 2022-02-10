const Handlebars = require("handlebars");
export const button = Handlebars.compile(`
  {{#if blue}}
    <div class="wrapper blue" id={{id}}>
       {{text}}
    </div>
    {{else}}
    <div class="wrapper" id={{id}}>
       {{text}}
    </div>
  {{/if}}
`);

Handlebars.registerPartial('btn', `
  {{#if blue}}
    <a class="wrapper blue" id={{id}} href={{href}}>
       {{text}}
    </a>
    {{else}}
    <a class="wrapper" id={{id}} href={{href}}>
       {{text}}
    </a>
  {{/if}}
`);

Handlebars.registerPartial('backBtn', `
    <a class="back-button" id={{id}} href={{href}}></a>
`)

Handlebars.registerPartial('editBtn', `
    {{#if red}}
      <a class="edit red" id={{id}} href={{href}}>{{text}}</a>
      {{else}}
      <a class="edit" id={{id}} href={{href}} />{{text}}</a>
    {{/if}}
`)