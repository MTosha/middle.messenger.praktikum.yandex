import * as Handlebars from 'handlebars';

const input = Handlebars.compile(`
    <div class="wrapper-input">
        <input type={{type}} id={{id}} name={{name}} placeholder={{placeholder}} 
        {{#if readonly}}readonly{{/if}} {{#if value}}{{value}}{{/if}}>
        <label for={{id}}>{{label}}</label>
    </div>
`);

export default input;

Handlebars.registerPartial('input', `
    <div class="wrapper-input">
        <input type={{type}} id={{id}} name={{name}} placeholder={{placeholder}} 
        {{#if readonly}}readonly{{/if}}  {{#if value}}value={{value}}{{/if}}>
        <label for={{id}}>{{label}}</label>
    </div>
`);

Handlebars.registerPartial('searchInput', `
   <div class="wrapper-search">
        <button type="submit"> </button>
        <input type="text" id={{id}} name={{name}} placeholder={{placeholder}}>
   </div>
`);
