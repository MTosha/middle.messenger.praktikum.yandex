import Block from "../../utils/Block";
import template from "./profile.hbs";
import "./index.css";
import {BackButton} from "../../components/button/BackButton";
import {Avatar} from "../../components/avatar/Avatar";
import {Name} from "../../components/avatar/name/Name";
import {Input} from "../../components/input/Input";
import {EditButton} from "../../components/button/EditButton";

export default class ProfilePage extends Block {
    protected initChildren() {
        this.children.backBtn = new BackButton({
            id: "back-btn",
            href: "/chats",
        });
        this.children.avatar = new Avatar({
            avatarSrc: "",
        });
        this.children.nameTitle = new Name({
            name: "Иван",
        });
        this.children.inputEmail = new Input({
            id: "email",
            type: "email",
            label: "Email",
            name: "email",
            placeholder: "pochta@yandex.ru",
            value: "pochta@yandex.r123",
            readonly: true,
        });
        this.children.inputLogin = new Input({
            id: "login",
            type: "text",
            label: "Login",
            name: "login",
            placeholder: "ivanivanov",
            value: "ivanivanov",
            readonly: true,
        });
        this.children.inputFirstName = new Input({
            id: "first_name",
            type: "text",
            label: "First name",
            name: "first_name",
            placeholder: "Иван",
            value: "Иван",
            readonly: true,
        });
        this.children.inputSecondName = new Input({
            id: "second_name",
            type: "text",
            label: "Second name",
            name: "second_name",
            placeholder: "Иванов",
            value: "Иванов",
            readonly: true,
        });
        this.children.inputDisplayName = new Input({
            id: "display_name",
            type: "text",
            label: "Display name",
            name: "display_name",
            placeholder: "Иван",
            value: "Иван",
            readonly: true,
        });
        this.children.inputPhone = new Input({
            id: "phone",
            type: "phone",
            label: "Phone",
            name: "phone",
            placeholder: "+7(909)9673030",
            value: "+7(909)9673030",
            readonly: true,
        });
        this.children.changeDataBtn = new EditButton({
            id: "changeData",
            red: false,
            text: "Change data",
            href: "/edit-profile",
        });
        this.children.changePasswordBtn = new EditButton({
            id: "changeData",
            red: false,
            text: "Change password",
            href: "/edit-profile-password",
        });
        this.children.signOutBtn = new EditButton({
            id: "changeData",
            red: true,
            text: "Sign out",
            href: "/",
        });
    }

    render() {
        return this.compile(template, { })
    }
}
