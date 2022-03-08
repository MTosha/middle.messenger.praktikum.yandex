import {renderDOM} from "./utils/renderDOM";
import "/config/index.css";
import SignPage from "./pages/Sign/sign";
import SignUpPage from "./pages/Sign/signUp";
import ChatsPage from "./pages/Chats/chats";
import ProfilePage from "./pages/Profile/Profile";
import EditProfilePage from "./pages/Profile/EditProfile/EditProfile";
import EditProfilePasswordPage from "./pages/Profile/EditProfilePassword/EditProfilePassword";
import Error from "./pages/Errors/Error";

    switch (window.location.pathname) {
        case "/":
            const signPage = new SignPage();
            renderDOM('#root', signPage);
            break;
        case "/sign-up":
            const signUpPage = new SignUpPage();
            renderDOM('#root', signUpPage);
            break;
        case "/chats":
            const chatsPage = new ChatsPage();
            renderDOM('#root', chatsPage);
            break;
        case "/profile":
            const profilePage = new ProfilePage();
            renderDOM('#root', profilePage);
            break;
        case "/edit-profile":
            const profileEditPage = new EditProfilePage();
            renderDOM('#root', profileEditPage);
            break;
        case "/edit-profile-password":
            const profileEditPasswordPage = new EditProfilePasswordPage();
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
