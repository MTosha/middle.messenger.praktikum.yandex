import Block from "../../../utils/Block";
import template from "../EditProfilePassword/editProfilePassword.hbs";
import "../index.css";
import {BackButton} from "../../../components/button/BackButton";
import {Avatar} from "../../../components/avatar/Avatar";
import {Input} from "../../../components/input/Input";
import {Button} from "../../../components/button/Button";
import {validation} from "../../../utils/validation";

export default class EditProfilePasswordPage extends Block {
    constructor() {
        super();

        validation(this.getContent())
    }

    protected initChildren() {
        this.children.backBtn = new BackButton({
            id: "back-btn",
            href: "/chats",
        });
        this.children.avatar = new Avatar({
            avatarSrc: "",
        });
        this.children.oldPassword = new Input({
            id: "oldPassword",
            type: "password",
            label: "Old password",
            name: "oldPassword",
            placeholder: "empty",
            value: "password",
            readonly: false,
        });
        this.children.newPassword = new Input({
            id: "newPassword",
            type: "password",
            label: "New password",
            name: "newPassword",
            placeholder: "empty",
            value: "password",
            readonly: false,
        });
        this.children.repeatNewPassword = new Input({
            id: "repeatPassword",
            type: "password",
            label: "Repeat new password",
            name: "repeatPassword",
            placeholder: "empty",
            value: "password",
            readonly: false,
        });
        this.children.saveButton = new Button({
            id: "save",
            blue: true,
            text: "save",
            href: "/profile",
        });
    }

    render() {
        return this.compile(template, { });
    }
}
