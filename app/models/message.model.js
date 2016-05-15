"use strict";
var Message = (function () {
    function Message() {
        this.enableEncryption = true;
        this.encryptionInterval = 3;
    }
    Message.prototype.encryptMessage = function () {
        console.log('encrypt called for: ' + this.text);
        this.encryptedData = sjcl.encrypt("password", this.text);
        var encryptedJson = JSON.parse(this.encryptedData);
        this.text = encryptedJson.iv;
        var messageText = this.text + " " + this.messageReceived.toLocaleTimeString();
        this.showAnimation(messageText, this.id);
    };
    Message.prototype.showAnimation = function (text, id) {
        var messageElementName = "#message" + (id);
        console.log('current message elemnt: ' + messageElementName);
        jQuery(messageElementName).goBinary({
            text: text
        });
    };
    Message.prototype.decryptMessage = function () {
        var _this = this;
        console.log('decrypt called for message: ', this.text);
        this.text = sjcl.decrypt("password", this.encryptedData);
        if (this.enableEncryption) {
            setTimeout(function () { _this.encryptMessage(); }, this.encryptionInterval * 1000);
        }
        var messageText = this.text + " " + this.messageReceived.toLocaleTimeString();
        this.showAnimation(messageText, this.id);
    };
    Message.prototype.decrypt = function (encryptedData) {
        return sjcl.decrypt("password", encryptedData);
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