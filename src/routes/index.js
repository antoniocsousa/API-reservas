import express from 'express';
import tables from './tablesRoutes.js';
import reservations from './reservationsRoutes.js'

const routes = (app) => {
    app.route('/').get((_, res) => {
        res.status(200).json({ titulo: 'API de reserva de mesa' });
    });

    app.use(
        express.json(),
        tables,
        reservations,
    )
}

export default routes;
