import db from '../db/dbConfig.js';

class Table {
    constructor(id, seats, active) {
        this.id = id;
        this.seats = seats;
        this.active = active;
    }

    static async getTables() {
        return db.select('*').from('tables');
    }

    static async getTableById(id) {
        const table = await db.select('*').from('tables').where({ id });
        return table[0];
    }
}

export default Table;