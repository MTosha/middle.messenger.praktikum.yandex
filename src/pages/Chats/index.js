import {chats} from "./index.tmpl";
import "./index.css";
import "../../components/input";
import "../../components/chat/index.tmpl";

const root = document.querySelector("#root");

export const Chats = (element) => {
  const context = {
    profileHref: "/profile.html",
    profileName: "Profile",
    inputData: {
      id: "search-input",
      name_input: "search-input",
      placeholder: "Search",
    },
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
  element.innerHTML = chats(context)
}

Chats(root)