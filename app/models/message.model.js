"use strict";
var Message = (function () {
    function Message(id, isRead, text, sender, isOwn, enableEncryption, encryptionInterval) {
        var _this = this;
        this.enableEncryption = true;
        this.encryptionInterval = 5;
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
        this.messageReceived = new Date();
        this.isOwn = isOwn;
        this.enableEncryption = enableEncryption;
        this.encryptionInterval = encryptionInterval;
        if (this.enableEncryption) {
            setTimeout(function () { _this.encryptMessage(); }, this.encryptionInterval * 1000);
        }
    }
    Message.prototype.encryptMessage = function () {
        console.log('encrypt called for: ' + this.text);
        this.encryptedData = sjcl.encrypt("password", this.text);
        var encryptedJson = JSON.parse(this.encryptedData);
        this.text = encryptedJson.iv;
    };
    Message.prototype.decryptMessage = function () {
        var _this = this;
        console.log('decrypt called for message: ', this.text);
        this.text = sjcl.decrypt("password", this.encryptedData);
        if (this.enableEncryption) {
            setTimeout(function () { _this.encryptMessage(); }, this.encryptionInterval * 1000);
        }
    };
    Message.prototype.stopEncryption = function () {
        this.enableEncryption = false;
    };
    Message.prototype.startEncryption = function () {
        this.enableEncryption = true;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map