import ReservationsService from '../services/reservationsService.js';

class ReservationsController {
    static listReservations = async (req, res) => {
        try {
            const reservations = await ReservationsService.listReservations()

            res.status(200).json(reservations);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static listReservationById = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const reservation = await ReservationsService.listReservationById(id);

            res.status(200).json(reservation);
        } catch (error) {
            if (error.message === 'The parameter "id" must be integer') {
                res.status(400).json(error.message);
            } else {
                res.status(500).json(error.message);
            }
        }
    }
}

export default ReservationsController;