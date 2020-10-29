import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import ListProviderService from '@modules/appointments/services/ListProviderService';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProviderService);

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(providers);
  }
}

export default ProvidersController;
