import {Component, Input} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';


@Component({
    selector: 'conversation',
    templateUrl: 'app/components/conversation/conversation.html'
})
export class Conversation {

     @Input('active-user') activeUser: User;
     
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.activeUser.messages = new Array<Message>();
    }

    newMessageAlert(newMessageText: string, sender: User) {
        
        if(!this.activeUser.messages){
            this.activeUser.messages = new Array<Message>();
        }
        let newMessage = new Message(this.activeUser.messages.length + 1, false, newMessageText, sender, true);
        this.activeUser.messages.push(newMessage);

        let echoMessage = new Message(this.activeUser.messages.length + 1, false, newMessageText, sender, false);
        this.activeUser.messages.push(echoMessage);
    }
    
    decryptMessag(message:Message){
        message.decryptMessage();
    }
}
