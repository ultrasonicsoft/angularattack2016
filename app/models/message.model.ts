import { User } from './user.model';
export class Message{
    constructor(private id:number, private isRead:boolean, private text:string, private sender:User){
    }
}