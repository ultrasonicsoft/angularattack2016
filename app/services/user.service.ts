import {Injectable, bind} from '@angular/core';
import {User} from '../models/user.model';
import { IUserService } from './IUserService.service';

@Injectable()
export class UserService implements IUserService {

    private allUsers : Array<User>;
    
    constructor(){
        this.allUsers = new Array<User>();
        let user = new User();
        
        for (var index = 0; index < 10; index++) {
            user = new User();
            user.id = index + 1;
            user.name = "User " + user.id;
            this.allUsers.push(user);
        }
    }
    
    getAllUsers():Array<User>{
        return this.allUsers;
    }
  
}
