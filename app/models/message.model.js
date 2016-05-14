"use strict";
var Message = (function () {
    function Message(id, isRead, text, sender, isOwn) {
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
        this.messageReceived = new Date();
        this.isOwn = isOwn;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map