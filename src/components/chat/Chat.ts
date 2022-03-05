import Block from "../../utils/Block";
import template from "../../partials/Chats/chat.hbs";
import "./index.css";
import {IChat} from "../../utils/interfaces";

export class Chat extends Block {
    constructor(props: IChat) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
