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
var user_model_1 = require('../../models/user.model');
var Conversation = (function () {
    function Conversation(userService) {
        this.userService = userService;
        this.enableEncryption = true;
    }
    Conversation.prototype.ngOnInit = function () {
        this.activeUser.messages = new Array();
    };
    Conversation.prototype.ngAfterViewInit = function () {
        jQuery('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
    };
    Conversation.prototype.toggleEncryption = function () {
        this.enableEncryption = !this.enableEncryption;
        if (this.enableEncryption) {
            this.activeUser.encryptAllMessage();
        }
        else {
            this.activeUser.decryptAllMessage();
        }
    };
    Conversation.prototype.newMessageAlert = function (newMessageText, sender) {
        if (!this.activeUser.messages) {
            this.activeUser.messages = new Array();
        }
        var newMessage = new message_model_1.Message(this.activeUser.messages.length + 1, false, newMessageText, sender, true, this.enableEncryption);
        this.activeUser.messages.push(newMessage);
        var echoMessage = new message_model_1.Message(this.activeUser.messages.length + 1, false, newMessageText, sender, false, this.enableEncryption);
        this.activeUser.messages.push(echoMessage);
    };
    Conversation.prototype.decryptMessag = function (message) {
        message.decryptMessage();
    };
    __decorate([
        core_1.Input('active-user'), 
        __metadata('design:type', user_model_1.User)
    ], Conversation.prototype, "activeUser", void 0);
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