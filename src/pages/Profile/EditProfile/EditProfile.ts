import Block from "../../../utils/Block";
import template from "../EditProfile/editProfile.hbs";
import "../index.css";
import {BackButton} from "../../../components/button/BackButton";
import {Avatar} from "../../../components/avatar/Avatar";
import {Name} from "../../../components/avatar/name/Name";
import {Input} from "../../../components/input/Input";
import {Button} from "../../../components/button/Button";

export default class EditProfilePage extends Block {
    data = {
        email: "pochta@yandex.ru",
        login: "ivanivanov",
        firstName: "Иван",
        secondName: "Иванов",
        displayName: "Иван",
        phone: "79099673030",
    }

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
            events: {
                change: (e: any): void => {
                    this.data.email = e.target.value;
                }
            }
        });
        this.children.inputLogin = new Input({
            id: "login",
            type: "text",
            label: "Login",
            name: "login",
            placeholder: "ivanivanov",
            value: "ivanivanov",
            readonly: false,
            events: {
                change: (e: any): void => {
                    this.data.login = e.target.value;
                }
            }
        });
        this.children.inputFirstName = new Input({
            id: "first_name",
            type: "text",
            label: "First name",
            name: "first_name",
            placeholder: "Иван",
            value: "Иван",
            readonly: false,
            events: {
                change: (e: any): void => {
                    this.data.firstName = e.target.value;
                }
            }
        });
        this.children.inputSecondName = new Input({
            id: "second_name",
            type: "text",
            label: "Second name",
            name: "second_name",
            placeholder: "Иванов",
            value: "Иванов",
            readonly: false,
            events: {
                change: (e: any): void => {
                    this.data.secondName = e.target.value;
                }
            }
        });
        this.children.inputDisplayName = new Input({
            id: "display_name",
            type: "text",
            label: "Display name",
            name: "display_name",
            placeholder: "Иван",
            value: "Иван",
            readonly: false,
            events: {
                change: (e: any): void => {
                    this.data.displayName = e.target.value;
                }
            }
        });
        this.children.inputPhone = new Input({
            id: "phone",
            type: "phone",
            label: "Phone",
            name: "phone",
            placeholder: "79099673030",
            value: "79099673030",
            readonly: false,
            events: {
                change: (e: any): void => {
                    this.data.phone = e.target.value;
                }
            }
        });
        this.children.saveButton = new Button({
            id: "save",
            text: "save",
            blue: true,
            href: "/profile",
            events: {
                click: () => {
                    localStorage.setItem('data', JSON.stringify(this.data));
                }
            }
        });
    }

    render() {
        return this.compile(template, { })
    }
}
