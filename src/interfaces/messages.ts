export interface IMessage {
    message: string;
    nick: string;
}

export interface IMessagesList {
    [index: number]: IMessage;
}