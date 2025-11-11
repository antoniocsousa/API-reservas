import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../../src/app.js';

describe('Testando Router', () => {
    it('/ deve retornar status 200', async () => {
        const result = await request(app)
            .get('/')
            .expect(200);
        
        expect(result.body).toStrictEqual({ titulo: 'API de reserva de mesa' });
    });
});