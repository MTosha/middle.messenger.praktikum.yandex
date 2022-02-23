import * as Handlebars from 'handlebars';

const editProfilePassword = Handlebars.compile(`
   <div class="wrapper-profile">
    <div class="wrapper-back-button">
        {{#backBtnData}}
          {{> backBtn}}
        {{/backBtnData}}
    </div>
    <div class="wrapper-profile-block">
      <div class="profile-block">
          {{#avatarData}}
            {{> avatar}}
          {{/avatarData}}
          {{#each inputData}}
            {{> input}}
          {{/each}}
          <div class="edit-button">
              {{#btnData}}
                {{> btn}}
              {{/btnData}}
          </div>
      </div>
    </div>
   </div>
`);

export default editProfilePassword;
