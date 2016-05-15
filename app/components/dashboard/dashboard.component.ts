import {Component, ViewChild} from '@angular/core';
import { IUserService } from '../../services/user/interface/IUserService.service';
import { User } from '../../models/user.model';
import { Conversation } from '../conversation/conversation.component';
import { SearchUserPipe } from '../../pipes/searchUser.pipe';

declare var jQuery: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/dashboard/dashboard.html',
    directives: [Conversation],
    pipes: [SearchUserPipe]
})
export class DashboardComponent {

    private allUsers: Array<User>;
    private messageText: string;
    private activeUser: User;
    searchUser: string;
    
    @ViewChild(Conversation) conversation: Conversation;

    constructor(private userService: IUserService) {
    }

    ngOnInit() {
        this.allUsers = this.userService.getAllUsers();
        this.activeUser = this.allUsers[0];
        console.log(this.allUsers);
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

        jQuery('#splashScreenModal').openModal();
    }

    setActiveUser(sender: User) {
        this.activeUser = sender;
    }

    sendMessage() {
        console.log(this.activeUser.name);
        this.conversation.newMessageAlert(this.messageText, this.activeUser);
        this.messageText = '';
    }
}
