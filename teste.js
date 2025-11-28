// const entrada = "25/12/2025 13:35";

// // separa data e hora
// const [dataStr, horaStr] = entrada.split(" ");

// // separa dia, mês, ano
// const [dia, mes, ano] = dataStr.split("/").map(Number);

// // separa hora e minuto
// const [hora, minuto] = horaStr.split(":").map(Number);

// // cria o objeto Date no fuso local
// const data = new Date(ano, mes - 1, dia, hora, minuto);

// console.log(data.toLocaleString());



// import Table from "./src/models/table.js";
// import Reservation from "./src/models/reservation.js";
// import db from "./src/db/dbConfig.js";

// const reservation = await db.select('*').from('reservations');

// console.log(reservation);

// const modified = {
//     id: 3,
//     table_id: 4,
//     costumer_name: 'duda',
// }

// await Reservation.updateReservation(modified);

// const reservation2 = await db.select('*').from('reservations');

// console.log(reservation2);
