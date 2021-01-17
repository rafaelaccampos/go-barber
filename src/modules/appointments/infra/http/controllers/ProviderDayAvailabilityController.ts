import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDayProviderAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService'

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response) : Promise<Response>{
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listDayProviderAvailabilityService = container.resolve(
      ListDayProviderAvailabilityService,
    );

    const availability = await listDayProviderAvailabilityService.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
