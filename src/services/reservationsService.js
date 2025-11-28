import Reservation from '../models/reservation.js';
import Table from '../models/table.js';

class ReservationsService {
    static async listReservations() {
        try {
            const reservations = await Reservation.getReservations();
            return reservations
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async listReservationById(id) {
        try {
            if (!Number.isInteger(id)) {
                throw new Error('The parameter "id" must be integer');
            }

            const reservation = await Reservation.getReservationById(id);
            return reservation;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createReservation(body) {
        try {
            const tables = await Table.getTables();
            const [ table ] = tables.filter(table => table.id === body.table_id);

            if (table === undefined) {
                throw new Error('Table does not exists');
            } else if (table.active === false) {
                throw new Error('Table is inactive');
            }

            const reservation = new Reservation(body);
            const response = await reservation.postReservation();

            return {message: 'Reservation created', content: response};
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default ReservationsService;