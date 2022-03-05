import {renderDOM} from "./utils/renderDOM";
import "/config/index.css";
import SignPage from "./pages/Sign/sign";
import SignUpPage from "./pages/Sign/signUp";
import ChatsPage from "./pages/Chats/chats";
import ProfilePage from "./pages/Profile/Profile";
import EditProfilePage from "./pages/Profile/EditProfile/EditProfile";
import EditProfilePasswordPage from "./pages/Profile/EditProfilePassword/EditProfilePassword";
import Error from "./pages/Errors/Error";

document.addEventListener('DOMContentLoaded', () => {
    const signPage = new SignPage();
    const signUpPage = new SignUpPage();
    const chatsPage = new ChatsPage();
    const profilePage = new ProfilePage();
    const profileEditPage = new EditProfilePage();
    const profileEditPasswordPage = new EditProfilePasswordPage();

    // setTimeout(() => {
    //     renderDOM('#root', signPage2);
    // }, 1500)

    switch (window.location.pathname) {
        case "/":
            renderDOM('#root', signPage);
            break;
        case "/sign-up":
            renderDOM('#root', signUpPage);
            break;
        case "/chats":
            renderDOM('#root', chatsPage);
            break;
        case "/profile":
            renderDOM('#root', profilePage);
            break;
        case "/edit-profile":
            renderDOM('#root', profileEditPage);
            break;
        case "/edit-profile-password":
            renderDOM('#root', profileEditPasswordPage);
            break;
        case "/500":
            renderDOM('#root', new Error({
                errorCode: 500,
                text: "Мы уже фиксим",
                href: "/chats",
                hrefName: "Back to chats",
            }))
            break;
        default:
            renderDOM('#root', new Error({
                errorCode: 404,
                text: "Не туда попали",
                href: "/chats",
                hrefName: "Back to chats",
            }))
    }
});