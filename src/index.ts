// import {renderDOM} from "./utils/renderDOM";
import "/config/index.css";
import SignPage from "./pages/Sign/sign";
import SignUpPage from "./pages/Sign/signUp";
import ChatsPage from "./pages/Chats/chats";
import ProfilePage from "./pages/Profile/Profile";
import EditProfilePage from "./pages/Profile/EditProfile/EditProfile";
import EditProfilePasswordPage from "./pages/Profile/EditProfilePassword/EditProfilePassword";
import Error from "./pages/Errors/Error";
import Router from "./utils/Router";

const router = new Router()

router
    .use("/", SignPage)
    .use("/sign-up", SignUpPage)
    .use("/chats", ChatsPage)
    .use("/profile", ProfilePage)
    .use("/edit-profile", EditProfilePage)
    .use("/edit-profile-password", EditProfilePasswordPage)
    .use("/500", Error)
    .use("/404", Error)
    .start()

    switch (window.location.pathname) {
        case "/":
            router.go("/");
            break;
        case "/sign-up":
            router.go("/sign-up");
            break;
        case "/chats":
            router.go("/chats");
            break;
        case "/profile":
            router.go("/profile");
            break;
        case "/edit-profile":
            router.go("/edit-profile");
            break;
        case "/edit-profile-password":
            router.go("/edit-profile-password");
            break;
        case "/500":
            router.go("/500");
            break;
        default:
            router.go("/404");
            // renderDOM('#root', new Error({
            //     errorCode: 404,
            //     text: "Не туда попали",
            //     href: "/chats",
            //     hrefName: "Back to chats",
            // }))
    }
