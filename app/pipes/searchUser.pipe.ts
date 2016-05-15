import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';
@Pipe({
    name: 'searchUserFilter',
    pure: false
})
export class SearchUserPipe implements PipeTransform {
    transform(users: User[], args: any[]): any {
        if (args) {

            var searchUserName = <string>args[0];
            return users.filter(item => item.name.indexOf(searchUserName) !== -1);
        }
        else {
            return users;
        }
    }
}