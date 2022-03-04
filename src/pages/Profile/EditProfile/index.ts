import "../index.css";
import "../../..//components/button/index.tmpl";
import "../../..//components/button/index.css";
import "../../..//components/avatar/index.tmpl";
import "../../..//components/avatar/index.css";
import "../../..//components/input/index.tmpl";
import "../../..//components/input/index.css";
import {IEditProfileContext} from "../../../utils/interfaces";
import {errorsLog} from "../../../utils/constans";
// @ts-ignore
import editProfile from "./index.tmpl";

const root = document.querySelector("#root");

export const EditProfile = (element: Element | null): void => {
  const context: IEditProfileContext = {
    name: "Иван",
    backBtnData: {
      id: "back-btn",
      href: "/chats.html",
    },
    avatarData: {
      avatarSrc: "",
    },
    inputData: [
      {
        id: "email",
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "pochta@yandex.ru",
        value: "pochta@yandex.ru",
        readonly: false,
      },
      {
        id: "login",
        type: "text",
        label: "Login",
        name: "login",
        placeholder: "ivanivanov",
        value: "ivanivanov",
        readonly: false,
      },
      {
        id: "first_name",
        type: "text",
        label: "First name",
        name: "first_name",
        placeholder: "Иван",
        value: "Иван",
        readonly: false,
      },
      {
        id: "second_name",
        type: "text",
        label: "Second name",
        name: "second_name",
        placeholder: "Иванов",
        value: "Иванов",
        readonly: false,
      },
      {
        id: "display_name",
        type: "text",
        label: "Display name",
        name: "display_name",
        placeholder: "Иван",
        value: "Иван",
        readonly: false,
      },
      {
        id: "phone",
        type: "phone",
        label: "Phone",
        name: "phone",
        placeholder: "+7(909)9673030",
        value: "+7(909)9673030",
        readonly: false,
      },
    ],
    btnData: {
        id: "save",
        text: "save",
        blue: true,
        href: "/profile.html"
      },
  }
  element ? element.innerHTML = editProfile(context) : console.error(errorsLog.notFoundElement);
}

EditProfile(root)