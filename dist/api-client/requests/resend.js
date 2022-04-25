"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resend = void 0;
const request_1 = require("./common/request");
//==========//
// FUNCTION //
//==========//
exports.resend = request_1.buildSendRequestFunction('Resend', [], [], (payload) => {
    if (payload.PaymentId && !payload.NotificationTypes) {
        throw Error('NotificationTypes is required if PaymentId is supplied');
    }
    return {};
});
//# sourceMappingURL=resend.js.map