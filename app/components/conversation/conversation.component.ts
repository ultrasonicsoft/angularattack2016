import {Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Message } from '../../models/message.model';

@Component({
    selector: 'conversation',
    templateUrl : 'app/components/conversation/conversation.html'
})
export class Conversation {
    
    private messages:Array<Message>;
    
    constructor(private userService: UserService){
    }
    
    ngOnInit(){
        this.messages = new Array<Message>();
    }
    
    newMessageAlert(newMessageText:string){
        let newMessage = new Message(this.messages.length+1, false, newMessageText);
        this.messages.push(newMessage);
    }
 }
