import {editProfile} from "./index.tmpl";
import "../index.css";
import "../../..//components/button/index.tmpl";
import "../../..//components/button/index.css";
import "../../..//components/avatar/index.tmpl";
import "../../..//components/avatar/index.css";
import "../../..//components/input/index.tmpl";
import "../../..//components/input/index.css";

const root = document.querySelector("#root");

export const EditProfile = (element) => {
  const context = {
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
        name_input: "email",
        value: "pochta@yandex.ru",
        readonly: false,
      },
      {
        id: "login",
        type: "text",
        label: "Login",
        name_input: "login",
        value: "ivanivanov",
        readonly: false,
      },
      {
        id: "first_name",
        type: "text",
        label: "First name",
        name_input: "first_name",
        value: "Иван",
        readonly: false,
      },
      {
        id: "second_name",
        type: "text",
        label: "Second name",
        name_input: "second_name",
        value: "Иванов",
        readonly: false,
      },
      {
        id: "display_name",
        type: "text",
        label: "Display name",
        name_input: "display_name",
        value: "Иван",
        readonly: false,
      },
      {
        id: "phone",
        type: "phone",
        label: "Phone",
        name_input: "phone",
        value: "+7(909)9673030",
        readonly: false,
      },
    ],
    btnData: {
        id: "save",
        blue: true,
        text: "save",
        href: "/profile.html"
      },
  }
  element.innerHTML = editProfile(context)
}

EditProfile(root)