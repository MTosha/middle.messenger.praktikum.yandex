import "./index.css";
import {IErrorContext} from "../../utils/interfaces";
import {errorsLog} from "../../utils/constans";
// @ts-ignore
import error from "./index.tmpl";

const root = document.querySelector("#root");

export const showError = (element: Element | null, errorCode: number, text: string, href: string, hrefName: string): void => {
  const context: IErrorContext = {
    errorCode: errorCode,
    text: text,
    href: href,
    hrefName: hrefName,
  }
  element ? element.innerHTML = error(context) : console.error(errorsLog.notFoundElement);
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