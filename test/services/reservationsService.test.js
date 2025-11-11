import { describe, expect, it, jest } from '@jest/globals';
import ReservationsService from '../../src/services/reservationsService';
import Reservation from '../../src/models/reservation';

describe('Testando ReservationsService', () => {
    it('ReservationsService.listReservations deve retornar erro se a busca falhar', async () => {
        jest.spyOn(Reservation, 'getReservations').mockRejectedValue(new Error());

        await expect(ReservationsService.listReservations())
            .rejects
            .toThrow(Error());
    });

    it('ReservationsService.listReservationById deve retornar erro se id não for passado', async () => {
        const idMock = 'test';

        expect(ReservationsService.listReservationById(idMock))
            .rejects
            .toThrow(Error('The parameter "id" must be integer'));
    });
});