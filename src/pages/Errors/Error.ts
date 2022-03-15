import Block from "../../utils/Block";
import template from "./error.hbs";
import "./index.css";
import {IErrorContext} from "../../utils/interfaces";

export default class Error extends Block {
    constructor(props: IErrorContext) {
        super(props);
    }
    // добавить обновление данных в зависимости от ошибки
    render() {
        return this.compile(template, {
                errorCode: 404,
                text: "Не туда попали",
                href: "/chats",
                hrefName: "Back to chats",
            });
    }
}
