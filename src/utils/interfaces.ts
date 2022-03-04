export interface IBtn {
    id?: string,
    text: string,
    blue?: boolean,
    red?: boolean,
    href?: string,
}

export interface IInput {
    label: string,
    pass: boolean,
}

export interface IInputData {
    id: string,
    type?: string,
    label?: string,
    name: string,
    placeholder: string,
    value?: string,
    readonly?: boolean,
}

export interface IChat {
    imgSrc: string,
    name: string,
    time: string,
    lastMessage: string,
    unreadCount: boolean | number,
}

export interface IChatsContext {
    profileHref: string,
    profileName: string,
    inputData: IInputData,
    activeChat?: boolean,
    type?: string,
    id?: string,
    name?: string,
    typeInput?: string,
    placeholder?: string,
    chats: IChat[],
}

export interface IErrorContext {
    errorCode: number,
    text: string,
    href: string,
    hrefName: string,
}

export interface IEditProfileContext {
    name: string,
    backBtnData: {
        id: string,
        href: string,
    },
    avatarData: {
        avatarSrc: string
    },
    inputData: IInputData[],
    btnData: IBtn | IBtn[],
}

