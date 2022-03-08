import Block from "../../utils/Block";
import {IInput} from "../../utils/interfaces";
import template from "../../partials/inputs/searchInput.hbs";
import "./index.css";

export class SearchInput extends Block{
    constructor(props: IInput) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}