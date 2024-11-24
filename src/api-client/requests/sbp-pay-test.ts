import { buildSendRequestFunction } from './common/request';
import { ResponsePayload as BaseResponsePayload } from '../response-payload';

//=========//
// REQUEST //
//=========//

export interface SbpPayTestRequestPayload {
  /** PaymentId покупателя в системе Продавца   */
  PaymentId: number;
  /** Признак эмуляции отказа проведения платежа Банком по таймауту.
   * По умолчанию не используется (эмуляция не требуется).
   * • false – эмуляция не требуется
   * • true – требуется эмуляция (не может быть использован вместе с IsRejected = true)*/
  IsDeadlineExpired?: boolean;
  IsRejected?: boolean;
}


//==========//
// RESPONSE //
//==========//

export interface SbpPayTestResponsePayload extends BaseResponsePayload {}


//==========//
// FUNCTION //
//==========//

export const sbpPayTest = buildSendRequestFunction<SbpPayTestRequestPayload, SbpPayTestResponsePayload>('SbpPayTest');
