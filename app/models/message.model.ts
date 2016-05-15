import { User } from './user.model';

declare var sjcl: any;
declare var jQuery: any;

export class Message {
    id: number;
    isRead: boolean;
    text: string;
    sender: User;
    messageReceived: Date;
    isOwn: boolean;
    encryptedData: any;
    encryptedText: string;
    originalMessageText:string;

    enableEncryption = true;
    encryptionInterval = 3;

    stopEncryption() {
        this.enableEncryption = false;
    }

    startEncryption() {
        this.enableEncryption = true;
    }
}