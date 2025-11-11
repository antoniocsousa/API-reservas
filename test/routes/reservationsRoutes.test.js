import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../../src/app.js';

describe('Testando as rotas de reservations', () => {
    it('/reservations deve retornar uma lista de reservas (GET)', async () => {
        await request(app)
            .get('/reservations')
            .expect(200);
    });

    it('/reservations/:id deve retornar a reserva com o id passado (GET)', async () => {
        const idMock = 1;

        const response = await request(app)
            .get(`/reservations/${idMock}`)
            .expect(200);
        
        expect(response.body.id).toBe(idMock);
    });
});