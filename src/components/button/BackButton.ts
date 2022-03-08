import Block from "../../utils/Block";
import {IBtn} from "../../utils/interfaces";
import template from "../../partials/buttons/backBtn.hbs";
import "./index.css";

export class BackButton extends Block{
    constructor(props: IBtn) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}