import "./index.css";
import {IInput} from "../../utils/interfaces";

const input = require("./index.tmpl")

export const addInput = (element: Element, label: string, pass: boolean = false): void => {
  const context: IInput = {
    label: label,
    pass: pass,
  }
  element.innerHTML = input(context)
}