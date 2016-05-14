"use strict";
var Message = (function () {
    function Message(id, isRead, text, sender) {
        this.id = id;
        this.isRead = isRead;
        this.text = text;
        this.sender = sender;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map