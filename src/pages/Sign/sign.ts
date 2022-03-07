import Block from "../../utils/Block";
import {Button} from "../../components/button/Button";
import template from "./sign.hbs";
import "./index.css";
import {Input} from "../../components/input/Input";
import {validation} from "../../utils/validation";

export default class SignPage extends Block {
    constructor() {
        super();

        validation(this.getContent())
    }

    protected initChildren() {
        this.children.inputLogin = new Input({
            id: "login",
            label: "Login",
            type: "text",
            name: "login",
            placeholder: "empty",
        });
        this.children.inputPassword = new Input({
            id: "password",
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "empty",
        });
        this.children.btnSignIn = new Button({
            id: "sign-in",
            text: "Sign in",
            blue: true,
            href: "/chats",
        });
        this.children.btnSignUp = new Button({
            id: "sign-up",
            text: "Sign up",
            blue: false,
            href: "/sign-up",
        });
    }

    render() {
        return this.compile(template, { })
    }
}
