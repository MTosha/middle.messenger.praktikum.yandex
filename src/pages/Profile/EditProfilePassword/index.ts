import "../index.css";
import "../../..//components/button/index.tmpl";
import "../../..//components/button/index.css";
import "../../..//components/avatar/index.tmpl";
import "../../..//components/avatar/index.css";
import "../../..//components/input/index.tmpl";
import "../../..//components/input/index.css";
import {IEditProfileContext} from "../../../utils/interfaces";
import {errorsLog} from "../../../utils/constans";

const root = document.querySelector("#root");
const editProfilePassword = require("./index.tmpl")

export const EditProfilePassword = (element: Element | null): void => {
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
        id: "oldPassword",
        type: "password",
        label: "Old password",
        name: "oldPassword",
        placeholder: "empty",
        value: "password",
        readonly: false,
      },
      {
        id: "newPassword",
        type: "password",
        label: "New password",
        name: "newPassword",
        placeholder: "empty",
        value: "password",
        readonly: false,
      },
      {
        id: "repeatPassword",
        type: "password",
        label: "Repeat new password",
        name: "repeatPassword",
        placeholder: "empty",
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
  element ? element.innerHTML = editProfilePassword(context) : console.error(errorsLog.notFoundElement);
}

EditProfilePassword(root)