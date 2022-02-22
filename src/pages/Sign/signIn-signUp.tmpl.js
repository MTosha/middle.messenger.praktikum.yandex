import * as Handlebars from "handlebars";

export const sign = Handlebars.compile(`
  <div class="outer">
    <div class="wrapper_sign">
      <div>
        <h1>{{title}}</h1>
          <div class="position-top">
              <form>
                {{#each inputData}}
                    {{> input}}
                {{/each}}
              </form>
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