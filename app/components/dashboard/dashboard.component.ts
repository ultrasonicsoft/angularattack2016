import {Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'my-app',
    templateUrl : 'app/components/dashboard/dashboard.html'
})
export class AppComponent {
    
    private allUsers:Array<User>;
    
    constructor(private userService: UserService){
    }
    
    ngOnInit(){
        this.allUsers = this.userService.getAllUsers();
        console.log(this.allUsers);
        
    }
 }
