"use strict";
var User = (function () {
    function User() {
        this.enableEncryption = true;
    }
    User.prototype.decryptAllMessage = function () {
        this.messages.forEach(function (message) {
            message.stopEncryption();
            message.decryptMessage();
        });
    };
    User.prototype.encryptAllMessage = function () {
        this.messages.forEach(function (message) {
            message.startEncryption();
            message.encryptMessage();
        });
    };
    User.prototype.deleteConversation = function () {
        this.messages = new Array();
        this.enableEncryption = true;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map