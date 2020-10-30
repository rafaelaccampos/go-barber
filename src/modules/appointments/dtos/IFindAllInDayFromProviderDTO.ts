import IFindAllProvidersDTO from "@modules/users/dtos/IFindAllProvidersDTO";

export default interface IFindAllInDayFromProvidersDTO {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}
