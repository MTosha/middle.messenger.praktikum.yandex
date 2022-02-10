import {input} from "./index.tmpl";
import "./index.css"

export const addInput = (element, label, pass = false) => {
  const content = {
    label: label,
    pass: pass,
  }
  element.innerHTML = input(content)
}