"use strict";
var Message = (function () {
    function Message(id, isRead, text, sender, isOwn) {
        var _this = this;
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
        this.messageReceived = new Date();
        this.isOwn = isOwn;
        setTimeout(function () { _this.encryptMessage(); }, 5000);
    }
    Message.prototype.encryptMessage = function () {
        this.encryptedText = sjcl.encrypt("password", this.text);
        var encryptedJson = JSON.parse(this.encryptedText);
        console.log('encrypted message: ' + encryptedJson.iv);
        this.text = encryptedJson.iv;
    };
    Message.prototype.decryptMessage = function () {
        var _this = this;
        console.log('decrypt called for message: ', this.text);
        this.text = sjcl.decrypt("password", this.encryptedText);
        setTimeout(function () { _this.encryptMessage(); }, 5000);
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map