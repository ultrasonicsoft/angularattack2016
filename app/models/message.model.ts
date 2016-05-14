import { User } from './user.model';

declare var sjcl:any;

export class Message {
    id: number;
    isRead: boolean;
    text: string;
    sender: User;
    messageReceived: Date;
    isOwn: boolean;
    encryptedData:any;
    encryptedText:string;

    constructor(id: number, isRead: boolean, text: string, sender: User, isOwn: boolean) {
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
        this.messageReceived = new Date();
        this.isOwn = isOwn;

        setTimeout(() => { this.encryptMessage(); }, 5000);

    }

    encryptMessage() {
        this.encryptedData = sjcl.encrypt("password", this.text);
        var encryptedJson = JSON.parse(this.encryptedData);
        console.log('encrypted message: ' + encryptedJson.iv);
        this.text = encryptedJson.iv;
    }
    
    decryptMessage(){
        console.log('decrypt called for message: ', this.text);
        this.text = sjcl.decrypt("password", this.encryptedData);
        
        setTimeout(() => { this.encryptMessage(); }, 5000);
        
    }
}