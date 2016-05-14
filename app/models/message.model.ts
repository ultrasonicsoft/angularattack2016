import { User } from './user.model';
export class Message {
    id: number;
    isRead: boolean;
    text: string;
    sender: User;
    messageReceived: Date;
    isOwn:boolean;

    constructor(id: number, isRead: boolean, text: string, sender: User, isOwn:boolean) {
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
        this.messageReceived = new Date();
        this.isOwn = isOwn;
    }
}