import {button} from "./index.tmpl";
import "./index.css";

export const addBtn = (element, text, blue = false) => {
  const context = {
    text: text,
    blue: blue,
  }
  element.innerHTML = button(context)
}