const Handlebars = require("handlebars");

Handlebars.registerPartial('avatar', `
  <div class="avatar">
      <input type="file" name="avatar" alt="avatar">
  </div>
`)