export interface IBtn {
    id?: string,
    text?: string,
    blue?: boolean,
    red?: boolean,
    href?: string,
    events?: {
        click?: () => void
    }
}

export interface IInput {
    label?: string,
    pass?: boolean,
    id?: string,
    type?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    readonly?: boolean,
    typeInput?: string,
    events?: {
        click?: () => void,
        // eslint-disable-next-line no-unused-vars
        blur?: (e: any) => void,
        change?: (e: any) => void,
    }
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
    profileHref?: string,
    profileName?: string,
    inputData?: IInputData,
    activeChat?: boolean,
    type?: string,
    id?: string,
    name?: string,
    typeInput?: string,
    placeholder?: string,
    chats?: IChat[],
}

export interface IErrorContext {
    errorCode: number,
    text: string,
    href: string,
    hrefName: string,
}


export interface IAvatar {
    avatarSrc?: string
}

export interface IName {
    name?: string
}

