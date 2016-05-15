"use strict";
var Message = (function () {
    function Message() {
        this.enableEncryption = true;
        this.encryptionInterval = 3;
    }
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