import Block from "../../utils/Block";
import template from "./error.hbs";
import "./index.css";
import {IErrorContext} from "../../utils/interfaces";

export default class Error extends Block {
    constructor(props: IErrorContext) {
        super(props);
    }
    render() {
        return this.compile(template, {...this.props})
    }
}
