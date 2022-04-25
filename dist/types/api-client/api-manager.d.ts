import { SignProvider } from '../sign-providers/sign-provider';
import { ApiClientOptions, BaseClient } from './clients/base-client';
import { AddCardRequestPayload, AddCardResponsePayload } from './requests/add-card';
import { AddCustomerRequestPayload, AddCustomerResponsePayload } from './requests/add-customer';
import { CancelPaymentRequestPayload, CancelPaymentResponsePayload } from './requests/cancel-payment';
import { ChargePaymentRequestPayload, ChargePaymentResponsePayload } from './requests/charge-payment';
import { CheckOrderRequestPayload, CheckOrderResponsePayload } from './requests/check-order';
import { ConfirmPaymentRequestPayload, ConfirmPaymentResponsePayload } from './requests/confirm-payment';
import { GetCardListRequestPayload, GetCardListResponsePayload } from './requests/get-card-list';
import { GetCustomerRequestPayload, GetCustomerResponsePayload } from './requests/get-customer';
import { GetQrRequestPayload, GetQrResponsePayload } from './requests/get-qr';
import { GetStateRequestPayload, GetStateResponsePayload } from './requests/get-state';
import { InitPaymentRequestPayload, InitPaymentResponsePayload } from './requests/init-payment';
import { PaymentRequestPayload, PaymentResponsePayload } from './requests/payment';
import { RemoveCardRequestPayload, RemoveCardResponsePayload } from './requests/remove-card';
import { RemoveCustomerRequestPayload, RemoveCustomerResponsePayload } from './requests/remove-customer';
import { ResendResponsePayload, ResendRequestPayload } from './requests/resend';
import { SendClosingReceiptRequestPayload, SendClosingReceiptResponsePayload } from './requests/send-closing-receipt';
declare abstract class BaseApiManager {
    protected apiClient: BaseClient;
}
/**
 * Just a wrapper around `ApiClient` and all the request functions to
 * simplify the SDK usage.
 */
export declare class ApiManager extends BaseApiManager {
    constructor(options: ApiClientOptions);
    initPayment(payload: InitPaymentRequestPayload): Promise<InitPaymentResponsePayload>;
    cancelPayment(payload: CancelPaymentRequestPayload): Promise<CancelPaymentResponsePayload>;
    confirmPayment(payload: ConfirmPaymentRequestPayload): Promise<ConfirmPaymentResponsePayload>;
    chargePayment(payload: ChargePaymentRequestPayload): Promise<ChargePaymentResponsePayload>;
    getState(payload: GetStateRequestPayload): Promise<GetStateResponsePayload>;
    getQr(payload: GetQrRequestPayload): Promise<GetQrResponsePayload>;
    checkOrder(payload: CheckOrderRequestPayload): Promise<CheckOrderResponsePayload>;
    sendClosingReceipt(payload: SendClosingReceiptRequestPayload): Promise<SendClosingReceiptResponsePayload>;
    addCustomer(payload: AddCustomerRequestPayload): Promise<AddCustomerResponsePayload>;
    getCustomer(payload: GetCustomerRequestPayload): Promise<GetCustomerResponsePayload>;
    removeCustomer(payload: RemoveCustomerRequestPayload): Promise<RemoveCustomerResponsePayload>;
    getCardList(payload: GetCardListRequestPayload): Promise<GetCardListResponsePayload>;
    resend(payload: ResendRequestPayload): Promise<ResendResponsePayload>;
}
export declare class ApiManagerSafeDeal extends BaseApiManager {
    constructor(options: ApiClientOptions);
    addCustomer(payload: AddCustomerRequestPayload): Promise<AddCustomerResponsePayload>;
    getCustomer(payload: GetCustomerRequestPayload): Promise<GetCustomerResponsePayload>;
    removeCustomer(payload: RemoveCustomerRequestPayload): Promise<RemoveCustomerResponsePayload>;
    addCard(payload: AddCardRequestPayload): Promise<AddCardResponsePayload>;
    getCardList(payload: GetCardListRequestPayload): Promise<GetCardListResponsePayload>;
    removeCard(payload: RemoveCardRequestPayload): Promise<RemoveCardResponsePayload>;
    initPayment(payload: InitPaymentRequestPayload): Promise<InitPaymentResponsePayload>;
    payment(payload: PaymentRequestPayload): Promise<PaymentResponsePayload>;
    getState(payload: GetStateRequestPayload): Promise<GetStateResponsePayload>;
    resend(payload: ResendRequestPayload): Promise<ResendResponsePayload>;
}
export declare class ApiManagerMerchant extends BaseApiManager {
    constructor(options: ApiClientOptions, signProvider: SignProvider);
    addCustomer(payload: AddCustomerRequestPayload): Promise<AddCustomerResponsePayload>;
    getCustomer(payload: GetCustomerRequestPayload): Promise<GetCustomerResponsePayload>;
    removeCustomer(payload: RemoveCustomerRequestPayload): Promise<RemoveCustomerResponsePayload>;
    addCard(payload: AddCardRequestPayload): Promise<AddCardResponsePayload>;
    getCardList(payload: GetCardListRequestPayload): Promise<GetCardListResponsePayload>;
    removeCard(payload: RemoveCardRequestPayload): Promise<RemoveCardResponsePayload>;
    initPayment(payload: InitPaymentRequestPayload): Promise<InitPaymentResponsePayload>;
    payment(payload: PaymentRequestPayload): Promise<PaymentResponsePayload>;
    getState(payload: GetStateRequestPayload): Promise<GetStateResponsePayload>;
    resend(payload: ResendRequestPayload): Promise<ResendResponsePayload>;
}
export {};
