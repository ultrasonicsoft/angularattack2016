import {Injectable, bind} from '@angular/core';
import {User} from '../../models/user.model';
import { IUserService } from './interface/IUserService.service';

@Injectable()
export class UserService implements IUserService {

    private allUsers : Array<User>;
    
    constructor(){
        this.allUsers = new Array<User>();
       //TODO: fetch real user from some service
    }
    
    getAllUsers():Array<User>{
        return this.allUsers;
    }
  
}
