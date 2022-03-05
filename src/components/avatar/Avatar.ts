import Block from "../../utils/Block";
import template from "../../partials/avatar/avatar.hbs";
import "./index.css";
import {IAvatar} from "../../utils/interfaces";

export class Avatar extends Block{
    constructor(props: IAvatar) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}