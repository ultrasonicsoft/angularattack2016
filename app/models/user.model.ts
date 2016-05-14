import { Message } from './message.model';

export class User {
    id: number;
    name: string;
    messages: Array<Message>;
    enableEncryption = true;

    decryptAllMessage() {
        this.messages.forEach(message => {
            message.stopEncryption();
            message.decryptMessage();
        });
    }

    encryptAllMessage() {
        this.messages.forEach(message => {
            message.startEncryption();
            message.encryptMessage();
        })
    }
}