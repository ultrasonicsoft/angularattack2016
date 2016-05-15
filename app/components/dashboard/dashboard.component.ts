import {Component, ViewChild} from '@angular/core';
import { IUserService } from '../../services/user/interface/IUserService.service';
import { User } from '../../models/user.model';
import { Conversation } from '../conversation/conversation.component';
import { SearchUserPipe } from '../../pipes/searchUser.pipe';
@Component({
    selector: 'my-app',
    templateUrl : 'app/components/dashboard/dashboard.html',
    directives: [Conversation],
    pipes:[SearchUserPipe]
})
export class AppComponent {
    
    private allUsers:Array<User>;
    private messageText:string;
    @ViewChild(Conversation) conversation:Conversation;
    
    private activeUser:User;
    searchUser:string;
    
    constructor(private userService: IUserService){
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
