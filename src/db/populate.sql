CREATE TABLE IF NOT EXISTS tables (
    id INTEGER NOT NULL PRIMARY KEY,
    seats INTEGER NOT NULL,
    active BOOLEAN NOT NULL
);

INSERT INTO tables (id, seats, active) 
VALUES  (1, 4, 1),
        (2, 4, 1),
        (3, 6, 1),
        (4, 2, 1),
        (5, 10, 1);

CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER NOT NULL PRIMARY KEY,
    table_id INTEGER NOT NULL,
    costumer_name TEXT NOT NULL,
    date_time TEXT NOT NULL,
    FOREIGN KEY (table_id) REFERENCES tables (id)
);
