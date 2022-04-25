"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeDealClient = void 0;
const consts_1 = require("../../common/consts");
const sdk_error_1 = require("../../common/sdk-error");
const logger_1 = require("../../logger/logger");
const base_client_1 = require("./base-client");
const safedealMerchantClientDefaultOptions = {
    baseUrl: consts_1.TINKOFF_API_MERCHANT_URL,
    userAgent: 'Tinkoff Payment Node.js SDK (https://github.com/jfkz/tinkoff-payment-sdk)',
};
/**
 * A generic API client that encapsulates all communications
 * with Tinkoff Payment API using the provided low-level HTTP client.
 */
class SafeDealClient extends base_client_1.BaseClient {
    constructor(options) {
        super(options, safedealMerchantClientDefaultOptions);
    }
    async sendRequest(options) {
        const { httpClient } = this.options;
        const { request, requestSchema, responseSchema, } = options;
        this.applyBaseUrl(request);
        this.serializeRequest(request, requestSchema);
        this.addTerminalKey(request);
        this.setFormType(request);
        this.addSignatureToken(request);
        this.handleHeaders(request);
        this.log(logger_1.SdkLogLevel.debug, request);
        // Using low-level transport to send the request
        const response = await httpClient.sendRequest(request);
        this.log(logger_1.SdkLogLevel.debug, response);
        this.deserializeResponse(response, responseSchema);
        const { payload } = response;
        // Throwing error in case if request failed
        if (payload.ErrorCode !== '0') {
            throw new sdk_error_1.SdkError({ payload });
        }
        return response;
    }
    setFormType(request) {
        request.asForm = true;
    }
}
exports.SafeDealClient = SafeDealClient;
//# sourceMappingURL=safedeal-client.js.map