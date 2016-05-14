"use strict";
var User = (function () {
    function User() {
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
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map