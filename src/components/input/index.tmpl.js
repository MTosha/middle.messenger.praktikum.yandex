import * as Handlebars from "handlebars";

export const input = Handlebars.compile(`
    <div class="wrapper-input">
      {{#if pass}}
        <input type="password" id="password" name={{label}} placeholder="empty">
        <label for="password" >{{label}}</label>
        {{else}}
        <input type="text" id="login" name={{label}} placeholder="empty">
        <label for="login">{{label}}</label>
      {{/if}}
    </div>
`);

Handlebars.registerPartial("signIn", `
   <div class="wrapper-input">
      {{#if pass}}
        <input type="password" id="password" name={{label}} placeholder="empty">
        <label for="password" >{{label}}</label>
        {{else}}
        <input type="text" id="login" name={{label}} placeholder="empty">
        <label for="login">{{label}}</label>
      {{/if}}
    </div>
`);

Handlebars.registerPartial("signUp", `
   <div class="wrapper-input">
        <input type={{type}} id={{id}} name={{name_input}} placeholder="empty">
        <label for={{id}}>{{label}}</label>
    </div>
`);

Handlebars.registerPartial("input", `
    <div class="wrapper-input">
    {{#if readonly}}
        <input type={{type}} id={{id}} name={{name_input}} readonly value={{value}}>
        <label for={{id}}>{{label}}</label>
    {{else}}
        <input type={{type}} id={{id}} name={{name_input}} value={{value}}>
        <label for={{id}}>{{label}}</label>
    {{/if}}
    </div>
`);

Handlebars.registerPartial("searchInput", `
   <div class="wrapper-search">
        <button type="submit"></button>
        <input type="text" id={{id}} name={{name_input}} placeholder={{placeholder}}>
   </div>
`);

