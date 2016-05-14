"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('../../services/user.service');
var message_model_1 = require('../../models/message.model');
var Conversation = (function () {
    function Conversation(userService) {
        this.userService = userService;
    }
    Conversation.prototype.ngOnInit = function () {
        this.messages = new Array();
    };
    Conversation.prototype.newMessageAlert = function (newMessageText) {
        var newMessage = new message_model_1.Message(this.messages.length + 1, false, newMessageText);
        this.messages.push(newMessage);
    };
    Conversation = __decorate([
        core_1.Component({
            selector: 'conversation',
            templateUrl: 'app/components/conversation/conversation.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], Conversation);
    return Conversation;
}());
exports.Conversation = Conversation;
//# sourceMappingURL=conversation.component.js.map