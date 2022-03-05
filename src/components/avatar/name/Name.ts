import Block from "../../../utils/Block";
import template from "../../../partials/avatar/name.hbs";
import "../index.css";
import {IName} from "../../../utils/interfaces";

export class Name extends Block{
    constructor(props: IName) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}