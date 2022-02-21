import {error} from "./index.tmpl";
import "./index.css";
import {SignIn, SignUp} from "../Sign";

const root = document.querySelector("#root");

export const showError = (element, errorCode, text, href, hrefName) => {
  const context = {
    errorCode: errorCode,
    text: text,
    href: href,
    hrefName: hrefName,
  }
  element.innerHTML = error(context)
}

switch (window.location.pathname) {
  case "/error500.html":
    showError(root, 500, "Мы уже фиксим", "/chats.html", "Back to chats");
    break;
  case "/error404.html":
    showError(root, 404, "Не туда попали", "/chats.html", "Back to chats");
    break;
  default:
}