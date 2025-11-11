import { describe, expect, it } from '@jest/globals';
import { listTablesById } from '../../src/services/tablesService.js';

describe('Testando tablesService', () => {
    it('listTablesById deve retornar erro se id não for passado', async () => {
        const idMock = 'test';

        await expect(listTablesById(idMock))
            .rejects
            .toThrow(Error('The parameter "id" must be integer'));
    });
});