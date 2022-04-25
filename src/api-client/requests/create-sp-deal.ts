import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { buildSendRequestFunction } from './common/request';

//=========//
// REQUEST //
//=========//

export interface CreateSpDealRequestPayload {
  /** Тип сделки (N1/1N) */
  SpDealType: 'N1' | '1N'
}


//==========//
// RESPONSE //
//==========//

export interface CreateSpDealResponsePayload extends BaseResponsePayload {
  /** Идентификатор сделки	*/
  SpAccumulationId: string;
}


//==========//
// FUNCTION //
//==========//

export const CreateSpDeal = buildSendRequestFunction<CreateSpDealRequestPayload, CreateSpDealResponsePayload>('createSpDeal');
