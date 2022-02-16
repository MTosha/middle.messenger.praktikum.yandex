import * as Handlebars from "handlebars";

export const sign = Handlebars.compile(`
  <div class="outer">
    <div class="wrapper_sign">
      <div>
        <h1>{{title}}</h1>
          <div class="position-top">
            {{#if signIn}}
              <form>
                {{#each inputData}}
                    {{> signIn}}
                {{/each}}
              </form>
              {{else}}
              <form>
                {{#each inputData}}
                    {{> signUp}}
                {{/each}}
              </form>
            {{/if}}
          </div>
      </div>
      <div>
        {{#each btnData}}
            {{> btn}}
        {{/each}}
      </div>
    </div>
  </div>
`)