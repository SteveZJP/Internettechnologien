const sqlite3 = require("sqlite3");

let db = new sqlite3.Database("./patienten.db", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("db created");
  db.run(
    `CREATE TABLE IF NOT EXISTS patienten (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nachname TEXT NOT NULL,
    vorname TEXT,
    created INTEGER,
    updated INTEGER
  )`,
    (err) => {
      if (err) {
        console.error(err.message);
        throw err;
      }
      console.log("table created");
      let insert =
        "INSERT INTO patienten (nachname, vorname, created, updated) VALUES (?,?,?,?)";
      db.run(insert, ["Mustermann", "Max", Date.now(), Date.now()]);
      db.run(insert, ["Becker", "Matthias", Date.now(), Date.now()]);
      db.run(insert, ["Schorsten", "Maya", Date.now(), Date.now()]);
    },
  );
});
