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
export class AppComponent {

    private allUsers: Array<User>;
    private messageText: string;
    @ViewChild(Conversation) conversation: Conversation;

    private activeUser: User;
    searchUser: string;

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
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
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
