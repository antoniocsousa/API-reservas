PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS tables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    seats INTEGER NOT NULL,
    active BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    table_id INTEGER NOT NULL,
    costumer_name TEXT NOT NULL,
    date_time TEXT NOT NULL,
    FOREIGN KEY (table_id) REFERENCES tables (id)
);

INSERT INTO tables (seats, active) 
VALUES  (4, 1),
        (4, 1),
        (6, 1),
        (2, 1),
        (10, 1);

INSERT INTO reservations (table_id, costumer_name, date_time)
VALUES (1, 'Antonio', '13/11/2025 19:00');
