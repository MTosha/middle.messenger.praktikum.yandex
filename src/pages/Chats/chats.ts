import Block from "../../utils/Block";
import template from "./chats.hbs";
import "./index.css";
import {SearchInput} from "../../components/input/SearchInput";
import {Chat} from "../../components/chat/Chat";
import {ChatConversation} from "../../components/chat/ChatConversation";

export default class ChatsPage extends Block {
    protected initChildren() {
        this.children.searchInput = new SearchInput({
            id: "search-input",
            name: "search-input",
            placeholder: "Search",
        });
        this.children.chat1 = new Chat({
            imgSrc: "",
            name: "Viktor",
            time: "10:11",
            lastMessage: "Привет!",
            unreadCount: 3,
        });
        this.children.chat2 = new Chat({
            imgSrc: "",
            name: "James",
            time: "09:25",
            lastMessage: "Awesome!",
            unreadCount: 1,
        });
        this.children.chat3 = new Chat({
            imgSrc: "",
            name: "Manoj",
            time: "Th",
            lastMessage: "Okay! Thanks!",
            unreadCount: false,
        });
        this.children.chat4 = new Chat({
            imgSrc: "",
            name: "Viktor",
            time: "10:11",
            lastMessage: "Привет!",
            unreadCount: 3,
        });
        this.children.chat5 = new Chat({
            imgSrc: "",
            name: "James",
            time: "09:25",
            lastMessage: "Awesome!",
            unreadCount: 1,
        });
        this.children.chat6 = new Chat({
            imgSrc: "",
            name: "Manoj",
            time: "Th",
            lastMessage: "Okay! Thanks!",
            unreadCount: false,
        });
        this.children.chat7 = new Chat({
            imgSrc: "",
            name: "Viktor",
            time: "10:11",
            lastMessage: "Привет!",
            unreadCount: 3,
        });
        this.children.chat8 = new Chat({
            imgSrc: "",
            name: "James",
            time: "09:25",
            lastMessage: "Awesome!",
            unreadCount: 1,
        });
        this.children.chat9 = new Chat({
            imgSrc: "",
            name: "Manoj",
            time: "Th",
            lastMessage: "Okay! Thanks!",
            unreadCount: false,
        });
        this.children.chat10 = new Chat({
            imgSrc: "",
            name: "Viktor",
            time: "10:11",
            lastMessage: "Привет!",
            unreadCount: 3,
        });
        this.children.chat11 = new Chat({
            imgSrc: "",
            name: "James",
            time: "09:25",
            lastMessage: "Awesome!",
            unreadCount: 1,
        });

        this.children.chatConversation = new ChatConversation({
            activeChat: true,
            type: "text",
            id: "message-input",
            name: "message",
            typeInput: "message",
            placeholder: "Message",
        })
    }

    render() {
        return this.compile(template, { })
    }
}
