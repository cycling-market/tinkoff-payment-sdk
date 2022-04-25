"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendClosingReceipt = void 0;
const receipt_1 = require("./common/receipt");
const request_1 = require("./common/request");
//==========//
// FUNCTION //
//==========//
exports.sendClosingReceipt = request_1.buildSendRequestFunction('sendClosingReceipt', [], [], (payload) => ({
    Receipt: receipt_1.validateAndPrepareReceipt(payload.Receipt)
}));
//# sourceMappingURL=send-closing-receipt.js.map