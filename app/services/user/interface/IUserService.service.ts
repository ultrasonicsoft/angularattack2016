import {User} from '../../../models/user.model.ts';

export abstract class IUserService{
    abstract getAllUsers():Array<User>;
}