import { ResponsePayload as BaseResponsePayload } from '../response-payload';
export interface CloseSpDealRequestPayload {
    /** Идентификатор сделки	*/
    SpAccumulationId: string;
}
export declare type CloseSpDealResponsePayload = BaseResponsePayload;
export declare const CloseSpDeal: (options: {
    apiClient: import("../clients/base-client").BaseClient;
    payload: CloseSpDealRequestPayload;
}) => Promise<BaseResponsePayload>;
