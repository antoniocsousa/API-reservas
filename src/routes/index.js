import express from 'express';
import tables from './tablesRoutes.js';

const routes = (app) => {
    app.route('/').get((_, res) => {
        res.status(200).send({ titulo: 'API de reserva de mesa' });
    });

    app.use(
        express.json(),
        tables,
    )
}

export default routes;
