/** @see http://static2.tinkoff.ru/acquiring/manuals/merchant_api_protocoI_e2c.pdf */

import { HttpRequestMethod } from '../../http-client/http-client';
import { Schema } from '../../serialization/schema';
import { BaseClient } from '../clients/base-client';
import { ResponsePayload as BaseResponsePayload } from '../response-payload';

//=========//
// REQUEST //
//=========//

export interface GetQrStateRequestPayload {
  /** PaymentId покупателя в системе Продавца   */
  PaymentId: number;
  /** IP-адрес запроса */
  IP?: string;
}


const getStateRequestSchema: Schema = [];


//==========//
// RESPONSE //
//==========//

export interface GetQrStateResponsePayload extends BaseResponsePayload {
  /** Уникальный номер заказа в системе Продавца    */
  OrderId: string;

  QrCancelCode?: string,
  QrCancelMessage?: string,

  /** Сумма отмены в копейках. */
  Amount?: number;
}


const getStateResponseSchema: Schema = [];


//==========//
// FUNCTION //
//==========//

export async function getQrState(options: {
  apiClient: BaseClient;
  payload: GetQrStateRequestPayload;

}): Promise<GetQrStateResponsePayload> {

  const { apiClient } = options;

  const { ...restPayload } = options.payload;

  const $payload: any = {
    ...restPayload,
  };

  const response = await apiClient.sendRequest<GetQrStateResponsePayload>({
    request: {
      url: 'GetQrState',
      method: HttpRequestMethod.POST,
      payload: $payload,
    },
    requestSchema: getStateRequestSchema,
    responseSchema: getStateResponseSchema,
  });

  return response.payload;

}
