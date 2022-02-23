import * as Handlebars from 'handlebars';

const chats = Handlebars.compile(`
  <div class="wrapper-chats">
    <div class="chats-list">
        <a class="profile-link" href={{profileHref}}>
        {{profileName}}<span class="arrow" /></a>
        {{#inputData}}
          <form>
            {{> searchInput}}
          </form>
        {{/inputData}}
        <ul>
            {{#each chats}}
              <li>
                {{> chat}}
              </li>
            {{/each}}
        </ul>
    </div>
    <div class="chats-active">
      {{#if activeChat}}
      {{else}}
        {{> chooseChat}}
      {{/if}}
    </div>
  </div>
`);

export default chats;
