import {Component, Input} from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { MessageService } from '../../services/message/message.service';

declare var jQuery: any;

@Component({
    selector: 'conversation',
    templateUrl: 'app/components/conversation/conversation.html'
})
export class Conversation {

    @Input('active-user') activeUser: User;
    encryptionTimeInterval = 10;
    messageToTweet: string;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.activeUser.messages = new Array<Message>();
    }

    ngAfterViewInit() {
        jQuery('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'left'
        });

        jQuery(document).ready(function () {
            jQuery('.modal-trigger').leanModal();
        });
    }

    toggleEncryption() {
        this.activeUser.enableEncryption = !this.activeUser.enableEncryption;
        if (this.activeUser.enableEncryption) {
            this.activeUser.messages = this.messageService.encryptAllMessage(this.activeUser.messages);
            this.activeUser.messages.forEach(message => {
                let messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
                this.showMessageAnimation(messageText, message.id);
            });
        }
        else {
            this.activeUser.messages = this.messageService.decryptAllMessage(this.activeUser.messages);
            this.activeUser.messages.forEach(message => {
                let messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
                this.showMessageAnimation(messageText, message.id);
            });
        }
    }
    newMessageAlert(newMessageText: string, sender: User) {

        if (!this.activeUser.messages) {
            this.activeUser.messages = new Array<Message>();
        }
        let newMessage = this.messageService.createNewMessage(this.activeUser.messages.length + 1, false,
            newMessageText, sender, true, this.activeUser.enableEncryption, this.encryptionTimeInterval);
        this.activeUser.messages.push(newMessage);

        if (this.activeUser.enableEncryption) {
            setTimeout(() => {
                newMessage = this.messageService.encryptMessage(newMessage);
                let messageText = newMessage.text + " " + newMessage.messageReceived.toLocaleTimeString();
                this.showMessageAnimation(messageText, newMessage.id);
            }, this.encryptionTimeInterval * 1000);
        }

        let echoMessage = this.messageService.createNewMessage(this.activeUser.messages.length + 1, false,
            newMessageText, sender, false, this.activeUser.enableEncryption, this.encryptionTimeInterval);
        this.activeUser.messages.push(echoMessage);

        if (this.activeUser.enableEncryption) {
            setTimeout(() => {
                echoMessage = this.messageService.encryptMessage(echoMessage);
                let messageText = echoMessage.text + " " + echoMessage.messageReceived.toLocaleTimeString();
                this.showMessageAnimation(messageText, echoMessage.id);
            }, this.encryptionTimeInterval * 1000);
        }
    }

    showMessageAnimation(messageText: string, messageId: number) {
        var messageElementName = "#message" + (messageId);
        console.log('current message elemnt: ' + messageElementName);

        jQuery(messageElementName).goBinary({
            text: messageText
        });

    }

    decryptMessag(message: Message) {
        message = this.messageService.decryptMessage(message);
        let messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
        this.showMessageAnimation(messageText, message.id);

        if (message.enableEncryption) {
            setTimeout(() => {
                message = this.messageService.encryptMessage(message);
                let messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
                this.showMessageAnimation(messageText, message.id);
            }, this.encryptionTimeInterval * 1000);
        }
    }

    deleteConversation() {
        this.activeUser.messages = new Array<Message>();
        this.activeUser.enableEncryption = true;
    }

    openSettings() {
        jQuery('#modal1').openModal();
    }

    encryptionIntervalChanged(interval: any) {
        console.log('encryptionTimeInterval: ' + interval.value);
        this.encryptionTimeInterval = interval.value;
    }

    showTweetMessageModal(message: Message) {
        this.messageToTweet = message.originalMessageText;
        jQuery('#tweetModal').openModal();
    }

    tweetMessage() {
        if (this.messageToTweet.length > 140) {
            alert('Tweet should be less than 140 Chars');
        }
        else {
            var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(this.messageToTweet);
            window.open(twtLink, '_blank');
            this.messageToTweet = "";
        }
    }
}
