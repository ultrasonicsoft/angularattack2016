import {Injectable, bind} from '@angular/core';
import {Message} from '../models/message.model';
import {User} from '../models/user.model';

declare var sjcl: any;

@Injectable()
export class MessageService {
    createNewMessage(id: number, isRead: boolean, text: string, sender: User,
        isOwn: boolean, enableEncryption: boolean, encryptionInterval: number): Message {
        let newMessage = new Message();
        newMessage.id = id;
        newMessage.isRead = isRead;
        newMessage.text = text;
        newMessage.sender = sender;
        newMessage.messageReceived = new Date();
        newMessage.isOwn = isOwn;
        newMessage.enableEncryption = enableEncryption;
        newMessage.encryptionInterval = encryptionInterval;
        newMessage.originalMessageText = text;
        return newMessage;

        // if (this.enableEncryption) {
        //     setTimeout(() => { this.encryptMessage(); }, this.encryptionInterval * 1000);
        // }
    }

    encryptMessage(message: Message): Message {

        message.encryptedData = sjcl.encrypt("password", message.text);
        var encryptedJson = JSON.parse(message.encryptedData);
        message.text = encryptedJson.iv;

        let messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
        return message;
    }

    decryptMessage(encryptMessage: Message): Message {
        encryptMessage.text = sjcl.decrypt("password", encryptMessage.encryptedData);

        // if (encryptMessage.enableEncryption) {
        //     setTimeout(() => { encryptMessage.encryptMessage(); }, encryptMessage.encryptionInterval * 1000);
        // }

        // let messageText = this.text + " " + this.messageReceived.toLocaleTimeString();
        // this.showAnimation(messageText, this.id);
        return encryptMessage;
    }

    // decrypt(encryptedData:any):string{
    //     return sjcl.decrypt("password", encryptedData);
    // }

    // stopEncryption() {
    //     this.enableEncryption = false;
    // }

    // startEncryption() {
    //     this.enableEncryption = true;
    // }
}
