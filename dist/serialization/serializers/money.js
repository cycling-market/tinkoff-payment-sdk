"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyFromPennyOrThrow = exports.moneyToPennyOrThrow = void 0;
function moneyToPennyOrThrow(value) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof value !== 'number') {
        throw new Error(`Value must be a number`);
    }
    return Math.floor(value * 100);
}
exports.moneyToPennyOrThrow = moneyToPennyOrThrow;
function moneyFromPennyOrThrow(value) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof value !== 'number') {
        throw new Error(`Value must be a number`);
    }
    return Math.floor(value) / 100;
}
exports.moneyFromPennyOrThrow = moneyFromPennyOrThrow;
//# sourceMappingURL=money.js.map