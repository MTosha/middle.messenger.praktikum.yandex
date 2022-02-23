import "../..//components/button/index.tmpl.js";
import "../..//components/button/index.css";
import "../..//components/input/index.tmpl.js";
import "../..//components/input/index.css";
import "./index.css";
import {errorsLog} from "../../utils/constans";

const root = document.querySelector("#root");
const sign = require("./signIn-signUp.tmpl")

export const SignIn = (element: Element | null) => {
  const context = {
    title: "Sign in",
    btnData: [
      {
        id: "sign-in",
        text: "Sign in",
        blue: true,
        href: "chats.html",
      },
      {
        id: "sign-up",
        text: "Sign up",
        blue: false,
        href: "/sign-up.html",
      },
    ],
    inputData: [
      {
        id: "login",
        label: "Login",
        type: "text",
        name: "login",
        placeholder: "empty",
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "empty",
      },
    ]
  }
  element ? element.innerHTML = sign(context) : console.error(errorsLog.notFoundElement);
}

export const SignUp = (element: Element | null) => {
  const context = {
    title: "Sign up",
    btnData: [
      {
        id: "sign-up",
        text: "Sign up",
        blue: true,
        href: "/sign-up.html",
      },
      {
        id: "sign-in",
        text: "Sign in",
        blue: false,
        href: "/",
      },
    ],
    inputData: [
      {
        id: "email",
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "empty",
      },
      {
        id: "login",
        type: "text",
        label: "Login",
        name: "login",
        placeholder: "empty",
      },
      {
        id: "first_name",
        type: "text",
        label: "First name",
        name: "first_name",
        placeholder: "empty",
      },
      {
        id: "second_name",
        type: "text",
        label: "Second name",
        name: "second_name",
        placeholder: "empty",
      },
      {
        id: "phone",
        type: "phone",
        label: "Phone",
        name: "phone",
        placeholder: "empty",
      },
      {
        id: "password",
        type: "password",
        label: "Password",
        name: "password",
        placeholder: "empty",
      },
      {
        id: "password-check",
        type: "password",
        label: "Password (confirm)",
        name: "password-check",
        placeholder: "empty",
      },
    ]
  }
  element ? element.innerHTML = sign(context) : console.error(errorsLog.notFoundElement);
}

switch (window.location.pathname) {
  case "/":
    SignIn(root)
    break;
  case "/sign-up.html":
    SignUp(root)
    break;
  default:
}
