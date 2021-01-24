import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from '../services/ListProviderAppointmentsService';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointments: ListProviderAppointmentsService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );
  });

    it('should be able to list the appointments on a specific day', async () => {
      const firstAppointment = await fakeAppointmentsRepository.create({
        provider_id: 'provider',
        user_id: 'user',
        date: new Date(2021, 4, 20, 15, 0, 0),
      });

      const secondAppointment = await fakeAppointmentsRepository.create({
        provider_id: 'provider',
        user_id: 'user',
        date: new Date(2021, 4, 20, 16, 0, 0),
      });

      const appointments = await listProviderAppointments.execute({
        provider_id: 'provider',
        year: 2021,
        month: 5,
        day: 20
      });

      expect(appointments).toEqual([
        firstAppointment,
        secondAppointment,
      ]);
    });
});
