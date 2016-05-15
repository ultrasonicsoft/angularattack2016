import {Injectable, bind} from '@angular/core';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';

declare var sjcl: any;

@Injectable()
export class MessageService {
    
    private encryptionKey="AngularAttack";
    
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
    }

    encryptMessage(message: Message): Message {

        message.encryptedData = sjcl.encrypt(this.encryptionKey, message.originalMessageText);
        var encryptedJson = JSON.parse(message.encryptedData);
        message.text = encryptedJson.iv;

        let messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
        return message;
    }

    decryptMessage(encryptMessage: Message): Message {
        encryptMessage.text = sjcl.decrypt(this.encryptionKey, encryptMessage.encryptedData);
        return encryptMessage;
    }
    
    decryptAllMessage(allMessage:Array<Message>): Array<Message>{
        allMessage.forEach(message => {
            message.stopEncryption();
            message = this.decryptMessage(message);
        });
        
        return allMessage;
    }

    encryptAllMessage(allMessage:Array<Message>):Array<Message> {
        allMessage.forEach(message => {
            message.startEncryption();
            message = this.encryptMessage(message);
        })
        return allMessage;
    }
}
