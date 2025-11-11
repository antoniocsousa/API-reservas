import { describe, expect, it, jest } from '@jest/globals';
import TablesService from '../../src/services/tablesService.js';
import Table from '../../src/models/table.js';

describe('Testando tablesService', () => {
    it('listTables deve retornar erro se a busca falhar', async () => {
        jest.spyOn(Table, 'getTables').mockRejectedValue(new Error());

        await expect(TablesService.listTables())
            .rejects
            .toThrow(Error());
    });

    it('listTablesById deve retornar erro se id não for passado', async () => {
        const idMock = 'test';

        await expect(TablesService.listTablesById(idMock))
            .rejects
            .toThrow(Error('The parameter "id" must be integer'));
    });
});