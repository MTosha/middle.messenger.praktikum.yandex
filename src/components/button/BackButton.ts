import Block from "../../utils/Block";
import {IBtn} from "../../utils/interfaces";
import template from "../../partials/buttons/btn.hbs";
import "./index.css";

export class Button extends Block{
    constructor(props: IBtn) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}