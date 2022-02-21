import {input} from "./index.tmpl";
import "./index.css";

export const addInput = (element, label, pass = false) => {
  const context = {
    label: label,
    pass: pass,
  }
  element.innerHTML = input(context)
}