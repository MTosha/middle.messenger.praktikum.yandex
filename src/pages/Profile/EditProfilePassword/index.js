import {editProfilePassword} from "./index.tmpl";
import "../index.css";
import "../../..//components/button/index.tmpl";
import "../../..//components/button/index.css";
import "../../..//components/avatar/index.tmpl";
import "../../..//components/avatar/index.css";
import "../../..//components/input/index.tmpl";
import "../../..//components/input/index.css";

const root = document.querySelector("#root");

export const EditProfilePassword = (element) => {
  const content = {
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
        id: "oldPassword",
        type: "password",
        label: "Old password",
        name_input: "oldPassword",
        value: "password",
        readonly: false,
      },
      {
        id: "newPassword",
        type: "password",
        label: "New password",
        name_input: "newPassword",
        value: "password",
        readonly: false,
      },
      {
        id: "repeatPassword",
        type: "password",
        label: "Repeat new password",
        name_input: "repeatPassword",
        value: "password",
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
  element.innerHTML = editProfilePassword(content)
}

EditProfilePassword(root)