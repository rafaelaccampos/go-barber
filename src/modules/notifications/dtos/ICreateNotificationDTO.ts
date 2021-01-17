import { ServerStreamFileResponseOptionsWithError } from "http2";

export default interface ICreateNotificationDTO {
  content: string;
  recipient_id: string;
}
