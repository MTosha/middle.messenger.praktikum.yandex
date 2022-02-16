import * as Handlebars from "handlebars";

export const error = Handlebars.compile(`
  <div class="outer">
    <div class="error">
        <h1 class="error-code">{{errorCode}}</h1>
        <p class="error-text">{{text}}</p>
        <a class="back-link" href={{href}}>{{hrefName}}</a>
    </div>
  </div>
`)