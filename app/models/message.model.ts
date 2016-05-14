import { User } from './user.model';

declare var sjcl: any;

export class Message {
    id: number;
    isRead: boolean;
    text: string;
    sender: User;
    messageReceived: Date;
    isOwn: boolean;
    encryptedData: any;
    encryptedText: string;

    enableEncryption = true;

    constructor(id: number, isRead: boolean, text: string, sender: User, isOwn: boolean, enableEncryption:boolean) {
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
        this.messageReceived = new Date();
        this.isOwn = isOwn;
        this.enableEncryption = enableEncryption;
        
        if (this.enableEncryption) {
            setTimeout(() => { this.encryptMessage(); }, 5000);
        }
    }

    encryptMessage() {
        console.log('encrypt called for: '+ this.text);
        
        this.encryptedData = sjcl.encrypt("password", this.text);
        var encryptedJson = JSON.parse(this.encryptedData);
        this.text = encryptedJson.iv;
    }

    decryptMessage() {
        console.log('decrypt called for message: ', this.text);
        this.text = sjcl.decrypt("password", this.encryptedData);

        if (this.enableEncryption) {
            setTimeout(() => { this.encryptMessage(); }, 5000);
        }
    }
    
    stopEncryption(){
        this.enableEncryption = false;
    }
    
    startEncryption(){
        this.enableEncryption = true;
    }
}