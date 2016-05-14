import {Component, ViewChild} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Conversation } from '../conversation/conversation.component';

@Component({
    selector: 'my-app',
    templateUrl : 'app/components/dashboard/dashboard.html',
    directives: [Conversation]
})
export class AppComponent {
    
    private allUsers:Array<User>;
    messageText:string;
    @ViewChild(Conversation) conversation:Conversation;
    
    constructor(private userService: UserService){
    }
    
    ngOnInit(){
        this.allUsers = this.userService.getAllUsers();
        console.log(this.allUsers);
    }
    
    sendMessage(){
        this.conversation.newMessageAlert(this.messageText);
        this.messageText = '';
        // alert(this.messageText);
        
    }
 }
