import {sign} from "./signIn-signUp.tmpl";
import "../..//components/button/index.tmpl.js";
import "../..//components/button/index.css";
import "../..//components/input/index.tmpl.js";
import "../..//components/input/index.css";
import "./index.css";

const root = document.querySelector("#root");

export const SignIn = (element) => {
  const content = {
    title: "Sign in",
    signIn: true,
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
        pass: false,
      },
      {
        id: "password",
        label: "Password",
        pass: true,
      },
    ]
  }
  element.innerHTML = sign(content);
}

export const SignUp = (element) => {
  const content = {
    title: "Sign up",
    signIn: false,
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
        name_input: "email",
      },
      {
        id: "login",
        type: "text",
        label: "Login",
        name_input: "login",
      },
      {
        id: "first_name",
        type: "text",
        label: "First name",
        name_input: "first_name",
      },
      {
        id: "second_name",
        type: "text",
        label: "Second name",
        name_input: "second_name",
      },
      {
        id: "phone",
        type: "phone",
        label: "Phone",
        name_input: "phone",
      },
      {
        id: "password",
        type: "password",
        label: "Password",
        name_input: "password",
      },
      {
        id: "password-check",
        type: "password",
        label: "Password (confirm)",
        name_input: "password-check",
      },
    ]
  }
  element.innerHTML = sign(content);
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
