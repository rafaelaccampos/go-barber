import IFindAllProvidersDTO from "@modules/users/dtos/IFindAllProvidersDTO";

export default interface IFindAllInMothFromProviderDTO {
  provider_id: string;
  month: number;
  year: number;
}
