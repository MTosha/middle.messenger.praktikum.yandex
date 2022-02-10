import "./index.css"

const Handlebars = require("handlebars");
Handlebars.registerPartial('chat', `
  <div class="wrapper-chat">
    <div class="chat-img-wrapper">
      {{#if imgSrc}}
        <img class="chat-img" src={{imgSrc}} />
      {{/if}}
    </div>
    <div class="content-left">
      <p class="name">{{name}}</p>
      <p class="chat-message">{{lastMessage}}</p>
    </div>
    <div class="content-right">
      <p class="time">{{time}}</p>
      {{#if unreadCount}}
        <div class="unread-count">{{unreadCount}}</div>
      {{/if}}
    </div>
  </div>
`)

Handlebars.registerPartial('chooseChat', `
  <div class="wrapper-chooseChat">
    <p class="chooseChat-text">Select a chat to send a message</p>
  </div>
`)