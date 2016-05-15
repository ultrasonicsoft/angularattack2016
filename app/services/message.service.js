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
var message_model_1 = require('../models/message.model');
var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.createNewMessage = function (id, isRead, text, sender, isOwn, enableEncryption, encryptionInterval) {
        var newMessage = new message_model_1.Message();
        newMessage.id = id;
        newMessage.isRead = isRead;
        newMessage.text = text;
        newMessage.sender = sender;
        newMessage.messageReceived = new Date();
        newMessage.isOwn = isOwn;
        newMessage.enableEncryption = enableEncryption;
        newMessage.encryptionInterval = encryptionInterval;
        newMessage.originalMessageText = text;
        return newMessage;
        // if (this.enableEncryption) {
        //     setTimeout(() => { this.encryptMessage(); }, this.encryptionInterval * 1000);
        // }
    };
    MessageService.prototype.encryptMessage = function (message) {
        message.encryptedData = sjcl.encrypt("password", message.text);
        var encryptedJson = JSON.parse(message.encryptedData);
        message.text = encryptedJson.iv;
        var messageText = message.text + " " + message.messageReceived.toLocaleTimeString();
        return message;
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map