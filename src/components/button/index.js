import {button} from "./index.tmpl";
import "./index.css";

export const addBtn = (element, text, blue= false) => {
  const content = {
    text: text,
    blue: blue,
  }
  element.innerHTML = button(content)
}