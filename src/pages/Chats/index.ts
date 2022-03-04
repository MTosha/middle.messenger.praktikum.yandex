import "./index.css";
import "../../components/input";
import "../../components/chat/index.tmpl";
import {IChatsContext} from "../../utils/interfaces";
import {errorsLog} from "../../utils/constans";
// @ts-ignore
import chats from "./index.tmpl";

const root = document.querySelector("#root");

export const Chats = (element: Element | null): void => {
  const context: IChatsContext = {
    profileHref: "/profile.html",
    profileName: "Profile",
    inputData: {
      id: "search-input",
      name: "search-input",
      placeholder: "Search",
    },
    activeChat: true,
    type: "text",
    id: "message-input",
    name: "message",
    typeInput: "-message",
    placeholder: "Message",
    chats: [
      {
        imgSrc: "",
        name: "Viktor",
        time: "10:11",
        lastMessage: "Привет!",
        unreadCount: 3,
      },
      {
        imgSrc: "",
        name: "James",
        time: "09:25",
        lastMessage: "Awesome!",
        unreadCount: 1,
      },
      {
        imgSrc: "",
        name: "Manoj",
        time: "Th",
        lastMessage: "Okay! Thanks!",
        unreadCount: false,
      },
      {
        imgSrc: "",
        name: "Viktor",
        time: "10:11",
        lastMessage: "Привет!",
        unreadCount: 3,
      },
      {
        imgSrc: "",
        name: "James",
        time: "09:25",
        lastMessage: "Awesome!",
        unreadCount: 1,
      },
      {
        imgSrc: "",
        name: "Manoj",
        time: "Th",
        lastMessage: "Okay! Thanks!",
        unreadCount: false,
      },
      {
        imgSrc: "",
        name: "Viktor",
        time: "10:11",
        lastMessage: "Привет!",
        unreadCount: 3,
      },
      {
        imgSrc: "",
        name: "James",
        time: "09:25",
        lastMessage: "Awesome!",
        unreadCount: 1,
      },
      {
        imgSrc: "",
        name: "Manoj",
        time: "Th",
        lastMessage: "Okay! Thanks!",
        unreadCount: false,
      },
      {
        imgSrc: "",
        name: "Viktor",
        time: "10:11",
        lastMessage: "Привет!",
        unreadCount: 3,
      },
      {
        imgSrc: "",
        name: "James",
        time: "09:25",
        lastMessage: "Awesome!",
        unreadCount: 1,
      },
      {
        imgSrc: "",
        name: "Manoj",
        time: "Th",
        lastMessage: "Okay! Thanks!",
        unreadCount: false,
      },
    ]
  }
  element ? element.innerHTML = chats(context) : console.error(errorsLog.notFoundElement);
}

Chats(root)