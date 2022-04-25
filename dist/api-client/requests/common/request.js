"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSendRequestFunction = void 0;
const http_client_1 = require("../../../http-client/http-client");
exports.buildSendRequestFunction = function (url, RequestSchema = [], ResponseSchema = [], transformLambda) {
    return async (options) => {
        const { apiClient } = options;
        const restPayload = __rest(options.payload, []);
        let $payload = Object.assign({}, restPayload);
        if (transformLambda) {
            $payload = Object.assign($payload, transformLambda(restPayload));
        }
        const response = await apiClient.sendRequest({
            request: {
                url: url,
                method: http_client_1.HttpRequestMethod.POST,
                payload: $payload,
            },
            requestSchema: RequestSchema,
            responseSchema: ResponseSchema,
        });
        return response.payload;
    };
};
//# sourceMappingURL=request.js.map