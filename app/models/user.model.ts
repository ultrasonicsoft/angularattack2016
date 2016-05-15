import { Message } from './message.model';

export class User {
    id: number;
    name: string;
    messages: Array<Message>;
    enableEncryption = true;
    avatarUrl:string;
}