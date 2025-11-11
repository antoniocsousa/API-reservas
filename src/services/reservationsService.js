import Reservation from '../models/reservation.js';

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
}

export default ReservationsService;