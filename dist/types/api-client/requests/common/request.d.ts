import { Schema } from '../../../serialization/schema';
import { BaseClient } from '../../clients/base-client';
import { ResponsePayload as BaseResponsePayload } from '../../response-payload';
export declare const buildSendRequestFunction: <TRequest, TResponse extends BaseResponsePayload>(url: string, RequestSchema?: Schema, ResponseSchema?: Schema, transformLambda?: ((payload: TRequest) => Partial<TRequest>) | undefined) => (options: {
    apiClient: BaseClient;
    payload: TRequest;
}) => Promise<TResponse>;
