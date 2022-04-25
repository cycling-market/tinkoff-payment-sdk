"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const source_1 = __importDefault(require("got/dist/source"));
const _1 = require(".");
const logger = {
    debug: (...args) => console.log(args),
    error: (...args) => console.log(args),
    info: (...args) => console.log(args),
    log: (...args) => console.log(args),
    warn: (...args) => console.log(args),
};
const config = {
    credentials: {
        pay: { TerminalKey: '1644402651549DEMO', Password: 'zahg8y1yxuvmdcbn' },
        e2c: {
            TerminalKey: '1644402651549E2C',
            Password: '7wv9p4rq2b4yimzi'
        }
    },
    connections: {
        notificationUrl: 'http://k4mi.ml/webhooks/tinkoff',
        paymentApiUrl: 'https://securepay.tinkoff.ru/v2/',
        safedealApiUrl: 'https://securepay.tinkoff.ru/e2c/',
        userAgent: 'cycling-market (Node.js)',
        requestTimeoutMs: 5000
    }
};
const gotOptions = {
    timeout: {
        request: config.connections.requestTimeoutMs
    },
    throwHttpErrors: false
};
const gotClient = source_1.default.extend(gotOptions);
const gotHttpClient = new _1.GotHttpClient({
    got: gotClient,
});
const payClientOptions = {
    httpClient: gotHttpClient,
    terminalKey: config.credentials.pay.TerminalKey,
    password: config.credentials.pay.Password,
    userAgent: config.connections.userAgent,
    baseUrl: config.connections.paymentApiUrl,
    logger
};
const payoutClientOptions = {
    httpClient: gotHttpClient,
    terminalKey: config.credentials.e2c.TerminalKey,
    password: config.credentials.e2c.Password,
    userAgent: config.connections.userAgent,
    baseUrl: config.connections.safedealApiUrl,
    logger
};
const payment = new _1.ApiManager(payClientOptions);
const safedeal = new _1.ApiManagerSafeDeal(payoutClientOptions);
const customerKey = '6266d60c7925d61ce2129dde';
const paymentId = 1263032967;
const order = '6266d61f32e198611c68cb55';
safedeal.getCustomer({
    CustomerKey: customerKey
}).then((res) => {
    console.log(res);
});
// safedeal.initPayment({
//   CardId: 169165452,
//   OrderId: order,
//   Amount: 250,
// }).then((res) => {
//   console.log(res);
// });
// addCard({
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   //@ts-expect-error testing
//   apiClient: payment.apiClient,
//   payload: {
//     CustomerKey: customerKey,
//     CheckType: 'NO',
//   }
// }).then((res) => {
//   console.log(res);
// });
// const cancel = async () => {
//   const orderP = (await payment.checkOrder({
//     OrderId: order,
//   }));
//   console.log(orderP);
//   const payments = orderP.Payments;
//   // const lastPayment = payments[0];
//   // if (!lastPayment) {
//   //   return false;
//   // }
//   // console.log(lastPayment);
//   // const res = await payment.cancelPayment({
//   //   PaymentId: lastPayment.PaymentId});
//   // console.log(res);
// };
// cancel();
//# sourceMappingURL=demo.js.map