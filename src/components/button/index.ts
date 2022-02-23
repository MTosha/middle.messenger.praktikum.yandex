import "./index.css";
import {IBtn} from "../../utils/interfaces";

const button = require("./index.tmpl")

export const addBtn = (element: Element, text: string, blue: boolean = false): void => {
  const context: IBtn = {
    text: text,
    blue: blue,
  }
  element.innerHTML = button(context)
}