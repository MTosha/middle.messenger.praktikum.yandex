import Block from "../../../utils/Block";
import template from "../EditProfile/editProfile.hbs";
import "../index.css";
import {BackButton} from "../../../components/button/BackButton";
import {Avatar} from "../../../components/avatar/Avatar";
import {Name} from "../../../components/avatar/name/Name";
import {Input} from "../../../components/input/Input";
import {Button} from "../../../components/button/Button";

export default class EditProfilePage extends Block {
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
            value: "pochta@yandex.ru",
            readonly: false,
        });
        this.children.inputLogin = new Input({
            id: "login",
            type: "text",
            label: "Login",
            name: "login",
            placeholder: "ivanivanov",
            value: "ivanivanov",
            readonly: false,
        });
        this.children.inputFirstName = new Input({
            id: "first_name",
            type: "text",
            label: "First name",
            name: "first_name",
            placeholder: "Иван",
            value: "Иван",
            readonly: false,
        });
        this.children.inputSecondName = new Input({
            id: "second_name",
            type: "text",
            label: "Second name",
            name: "second_name",
            placeholder: "Иванов",
            value: "Иванов",
            readonly: false,
        });
        this.children.inputDisplayName = new Input({
            id: "display_name",
            type: "text",
            label: "Display name",
            name: "display_name",
            placeholder: "Иван",
            value: "Иван",
            readonly: false,
        });
        this.children.inputPhone = new Input({
            id: "phone",
            type: "phone",
            label: "Phone",
            name: "phone",
            placeholder: "+7(909)9673030",
            value: "+7(909)9673030",
            readonly: false,
        });
        this.children.saveButton = new Button({
            id: "save",
            text: "save",
            blue: true,
            href: "/profile"
        });
    }

    render() {
        return this.compile(template, { })
    }
}
