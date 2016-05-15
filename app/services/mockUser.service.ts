import {Injectable, bind} from '@angular/core';
import {User} from '../models/user.model.ts';
import { IUserService } from './IUserService.service';

@Injectable()
export class MockUserService implements IUserService{

    private allUsers: Array<User>;

    constructor() {
        this.allUsers = new Array<User>();
        let user = new User();

        user.id = 1;
        user.name = "Prafulla";
        user.avatarUrl = "../../../images/male-avatar-1.png";
        this.allUsers.push(user);

        user = new User();

        user.id = 2;
        user.name = "Bhushan";
        user.avatarUrl = "../../../images/male-avatar-2.png";
        this.allUsers.push(user);

        user = new User();
        user.id = 3;
        user.name = "Nilesh";
        user.avatarUrl = "../../../images/male-avatar-3.png";
        this.allUsers.push(user);

        user = new User();
        user.id = 4;
        user.name = "Shashikant";
        user.avatarUrl = "../../../images/male-avatar-4.png";
        this.allUsers.push(user);
        
        user = new User();
        user.id = 5;
        user.name = "Megha";
        user.avatarUrl = "../../../images/female-avatar-1.png";
        this.allUsers.push(user);
        
        user = new User();
        user.id = 5;
        user.name = "Suvarna";
        user.avatarUrl = "../../../images/female-avatar-2.png";
        this.allUsers.push(user);
        
        user = new User();
        user.id = 6;
        user.name = "Vrushali";
        user.avatarUrl = "../../../images/female-avatar-3.png";
        this.allUsers.push(user);
    }

    getAllUsers(): Array<User> {
        return this.allUsers;
    }

}
