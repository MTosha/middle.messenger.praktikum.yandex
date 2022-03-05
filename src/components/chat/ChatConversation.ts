import Block from "../../utils/Block";
import template from "../../partials/Chats/chatConversation.hbs";
import "./index.css";
import {IChatsContext} from "../../utils/interfaces";
import {Input} from "../input/Input";

export class ChatConversation extends Block {
    constructor(props: IChatsContext) {
        super(props);
    }

    protected initChildren() {
        this.children.input = new Input({
            type: "text",
            id: "message-input",
            name: "message",
            typeInput: "-message",
            placeholder: "Message",
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
