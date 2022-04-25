import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { NotificationTypes } from './common/notification-types';
export interface ResendRequestPayload {
    /** Id платежа, по которому необходимо получить нотификацию из архива	*/
    PaymentId?: number;
    NotificationTypes?: NotificationTypes;
}
export interface ResendResponsePayload extends BaseResponsePayload {
    Count: number;
}
export declare const resend: (options: {
    apiClient: import("../clients/base-client").BaseClient;
    payload: ResendRequestPayload;
}) => Promise<ResendResponsePayload>;
