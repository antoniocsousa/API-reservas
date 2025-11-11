import express from 'express';
import ReservationsController from '../controllers/reservationsController.js';

const router = express.Router();

router
    .get('/reservations', ReservationsController.listReservations)
    .get('/reservations/:id', ReservationsController.listReservationById);

export default router;