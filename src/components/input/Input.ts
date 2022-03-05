import Block from "../../utils/Block";
import {IInput} from "../../utils/interfaces";
import template from "../../partials/inputs/input.hbs";
import "./index.css";

export class Input extends Block{
    constructor(props: IInput) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}