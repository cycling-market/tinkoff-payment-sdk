import { ApiClient } from '../clients/api-client';
import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { validateAndPrepareReceipt } from './common/receipt';
import { Receipt } from './common/receipt';
import { buildSendRequestFunction } from './common/request';

//=========//
// REQUEST //
//=========//

export interface SendClosingReceiptRequestPayload {
    PaymentId: number;
    Receipt: Receipt;
}

//==========//
// RESPONSE //
//==========//

export interface SendClosingReceiptResponsePayload extends BaseResponsePayload {
    /** Успешность операции (true/false) */
    Success: boolean;
    /** Код ошибки, «0» - если успешно */
    ErrorCode: string;
    /** Краткое описание ошибки	*/
    Message?: string;
}

//==========//
// FUNCTION //
//==========//


export function sendClosingReceipt(options: {
    apiClient: ApiClient;
    payload: SendClosingReceiptRequestPayload;

}): Promise<SendClosingReceiptResponsePayload> {
  const sendRequest = buildSendRequestFunction<SendClosingReceiptRequestPayload, SendClosingReceiptResponsePayload>('SendClosingReceipt');

  const $payload = options.payload;

  const payload = {
    ...$payload,
    Receipt: validateAndPrepareReceipt($payload.Receipt)
  };

  return sendRequest({ ...options, payload });

}