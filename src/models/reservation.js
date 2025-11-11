import db from "../db/dbConfig.js";

class Reservation {
    constructor({table_id, costumer_name, date_time}) {
        this.table_id = table_id;
        this.costumer_name = costumer_name;
        this.date_time = date_time;
    }

    static async getReservations() {
        return await db.select('*').from('reservations');
    }

    static async getReservationById(id) {
        const reservation = await db.select('*').from('reservations').where({ id });
        return reservation[0];
    }
}

export default Reservation;