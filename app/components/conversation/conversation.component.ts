import {Component, Input} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';

declare var jQuery: any;

@Component({
    selector: 'conversation',
    templateUrl: 'app/components/conversation/conversation.html'
})
export class Conversation {

    @Input('active-user') activeUser: User;
    encryptionTimeInterval = 5;

    constructor() {
    }

    ngOnInit() {
        this.activeUser.messages = new Array<Message>();
    }

    ngAfterViewInit() {
        jQuery('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });

        jQuery(document).ready(function () {
            jQuery('.modal-trigger').leanModal();
        });

        var list = ['first blurb', 'second blurb', 'third blurb'];  // list of blurbs
        var txt = jQuery('#message1');
        var options = {
            duration: 1000,          // Time (ms) each blurb will remain on screen
            rearrangeDuration: 1000, // Time (ms) a character takes to reach its position
            effect: 'random',        // Animation effect the characters use to appear
            centered: true           // Centers the text relative to its container
        }
        
        // if(txt)
        // txt.textualizer(list, options); // textualize it!
        // txt.textualizer('start'); // start
    }

    toggleEncryption() {
        this.activeUser.enableEncryption = !this.activeUser.enableEncryption;
        if (this.activeUser.enableEncryption) {
            this.activeUser.encryptAllMessage();
        }
        else {
            this.activeUser.decryptAllMessage();
        }
    }
    newMessageAlert(newMessageText: string, sender: User) {

        if (!this.activeUser.messages) {
            this.activeUser.messages = new Array<Message>();
        }
        let newMessage = new Message(this.activeUser.messages.length + 1, false, newMessageText, sender, true, this.activeUser.enableEncryption, this.encryptionTimeInterval);
        this.activeUser.messages.push(newMessage);

        let echoMessage = new Message(this.activeUser.messages.length + 1, false, newMessageText, sender, false, this.activeUser.enableEncryption, this.encryptionTimeInterval);
        this.activeUser.messages.push(echoMessage);
    }

    decryptMessag(message: Message) {
        message.decryptMessage();
    }

    deleteConversation() {
        this.activeUser.deleteConversation();
    }

    openSettings() {
        jQuery('#modal1').openModal();
    }

    encryptionIntervalChanged(interval: any) {
        console.log('encryptionTimeInterval: ' + interval.value);
        this.encryptionTimeInterval = interval.value;
    }
}
