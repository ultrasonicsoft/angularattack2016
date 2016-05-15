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
var user_model_1 = require('../../models/user.model');
var message_service_1 = require('../../services/message.service');
var Conversation = (function () {
    function Conversation(messageService) {
        this.messageService = messageService;
        this.encryptionTimeInterval = 5;
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
        jQuery(document).ready(function () {
            jQuery('.modal-trigger').leanModal();
        });
    };
    Conversation.prototype.toggleEncryption = function () {
        this.activeUser.enableEncryption = !this.activeUser.enableEncryption;
        if (this.activeUser.enableEncryption) {
            this.activeUser.encryptAllMessage();
        }
        else {
            this.activeUser.decryptAllMessage();
        }
    };
    Conversation.prototype.newMessageAlert = function (newMessageText, sender) {
        var _this = this;
        if (!this.activeUser.messages) {
            this.activeUser.messages = new Array();
        }
        var newMessage = this.messageService.createNewMessage(this.activeUser.messages.length + 1, false, newMessageText, sender, true, this.activeUser.enableEncryption, this.encryptionTimeInterval);
        this.activeUser.messages.push(newMessage);
        if (this.activeUser.enableEncryption) {
            setTimeout(function () { newMessage = _this.messageService.encryptMessage(newMessage); }, this.encryptionTimeInterval * 1000);
        }
        var echoMessage = this.messageService.createNewMessage(this.activeUser.messages.length + 1, false, newMessageText, sender, false, this.activeUser.enableEncryption, this.encryptionTimeInterval);
        this.activeUser.messages.push(echoMessage);
        if (this.activeUser.enableEncryption) {
            setTimeout(function () { echoMessage = _this.messageService.encryptMessage(echoMessage); }, this.encryptionTimeInterval * 1000);
        }
    };
    Conversation.prototype.decryptMessag = function (message) {
        message.decryptMessage();
    };
    Conversation.prototype.deleteConversation = function () {
        this.activeUser.deleteConversation();
    };
    Conversation.prototype.openSettings = function () {
        jQuery('#modal1').openModal();
    };
    Conversation.prototype.encryptionIntervalChanged = function (interval) {
        console.log('encryptionTimeInterval: ' + interval.value);
        this.encryptionTimeInterval = interval.value;
    };
    Conversation.prototype.showTweetMessageModal = function (message) {
        this.messageToTweet = message.originalMessageText;
        jQuery('#tweetModal').openModal();
    };
    Conversation.prototype.tweetMessage = function () {
        if (this.messageToTweet.length > 140) {
            alert('Tweet should be less than 140 Chars');
        }
        else {
            var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(this.messageToTweet);
            window.open(twtLink, '_blank');
            this.messageToTweet = "";
        }
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
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], Conversation);
    return Conversation;
}());
exports.Conversation = Conversation;
//# sourceMappingURL=conversation.component.js.map