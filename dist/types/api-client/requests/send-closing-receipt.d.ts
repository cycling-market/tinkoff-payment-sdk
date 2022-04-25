import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { Receipt } from './common/receipt';
export interface SendClosingReceiptRequestPayload {
    PaymentId: number;
    Receipt: Receipt;
}
export interface SendClosingReceiptResponsePayload extends BaseResponsePayload {
    /** Успешность операции (true/false) */
    Success: boolean;
    /** Код ошибки, «0» - если успешно */
    ErrorCode: string;
    /** Краткое описание ошибки	*/
    Message?: string;
}
export declare const sendClosingReceipt: (options: {
    apiClient: import("../clients/base-client").BaseClient;
    payload: SendClosingReceiptRequestPayload;
}) => Promise<SendClosingReceiptResponsePayload>;
