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
    private messageText:string;
    @ViewChild(Conversation) conversation:Conversation;
    
    private activeUser:User;
    
    constructor(private userService: UserService){
    }
    
    ngOnInit(){
        this.allUsers = this.userService.getAllUsers();
        this.activeUser = this.allUsers[0];
        console.log(this.allUsers);
    }
    
    setActiveUser(sender:User){
        this.activeUser = sender;    
    }
    
    sendMessage(){
        console.log(this.activeUser.name);
        this.conversation.newMessageAlert(this.messageText, this.activeUser);
        this.messageText = '';
        
    }
 }
