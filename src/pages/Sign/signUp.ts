import Block from "../../utils/Block";
import {Button} from "../../components/button/Button";
import template from "./signUp.hbs";
import "./index.css";
import {Input} from "../../components/input/Input";

export default class SignUpPage extends Block {


    protected initChildren() {
        this.children.inputEmail = new Input({
            id: "email",
            type: "email",
            label: "Email",
            name: "email",
            placeholder: "empty",
        });
        this.children.inputLogin = new Input({
            id: "login",
            type: "text",
            label: "Login",
            name: "login",
            placeholder: "empty",
        });
        this.children.inputFirstName = new Input({
            id: "first_name",
            type: "text",
            label: "First name",
            name: "first_name",
            placeholder: "empty",
        });
        this.children.inputSecondName = new Input({
            id: "second_name",
            type: "text",
            label: "Second name",
            name: "second_name",
            placeholder: "empty",
        });
        this.children.inputPhone = new Input({
            id: "phone",
            type: "phone",
            label: "Phone",
            name: "phone",
            placeholder: "empty",
        });
        this.children.inputPassword = new Input({
            id: "password",
            type: "password",
            label: "Password",
            name: "password",
            placeholder: "empty",
        });
        this.children.inputPasswordConfirm = new Input({
            id: "password-check",
            type: "password",
            label: "Password (confirm)",
            name: "password-check",
            placeholder: "empty",
        });
        this.children.btnSignUp = new Button({
            id: "sign-up",
            text: "Sign up",
            blue: true,
            href: "/sign-up",
        });
        this.children.btnSignIn = new Button({
            id: "sign-in",
            text: "Sign in",
            blue: false,
            href: "/",
        });
    }

    render() {
        return this.compile(template, { })
    }
}
