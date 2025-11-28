import { describe, expect, it, jest, beforeEach, afterEach } from '@jest/globals';
import ReservationsService from '../../src/services/reservationsService';
import Reservation from '../../src/models/reservation';
import db from '../../src/db/dbConfig';

beforeEach(async () => {
    await db.raw('BEGIN TRANSACTION');
});

afterEach(async () => {
    await db.raw('ROLLBACK');
});

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

    it('ReservationService.createReservation deve retornar mensagem de sucesso ao criar reserva', async () => {
        const reservationMock = {
            table_id: 1,
            costumer_name: 'duda',
            date_time: new Date(),
        };

        console.log(reservationMock.date_time);
    });
});