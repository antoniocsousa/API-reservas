import { describe, expect, it } from '@jest/globals';
import Reservation from "../../src/models/reservation.js";

describe('Testando Reservation', () => {
    const reservationMock = {
        table_id: 2,
        costumer_name: 'Antonio',
        date_time: new Date().toLocaleString(),
    }
    const reservation = new Reservation(reservationMock);

    it.each([
        {expected: reservationMock.table_id, received: reservation.table_id},
        {expected: reservationMock.costumer_name, received: reservation.costumer_name},
        {expected: reservationMock.date_time, received: reservation.date_time},
    ])('Reservation deve criar uma instância corretamente', ({expected, received}) => {
        expect(received).toBe(expected);
    });

    it('Reservation.getReservationById deve retornar a reserva com o ID especificado', async () => {
        const id = 1;
        const reservation = await Reservation.getReservationById(id);

        expect(reservation.id).toBe(id);
    });
});