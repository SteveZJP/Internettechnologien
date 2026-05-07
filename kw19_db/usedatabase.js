const sqlite3 = require("sqlite3");

const dbsource = "./kw19_db/patienten.db";

let db = new sqlite3.Database(dbsource, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("Connected to the SQLite database.");
});

module.exports = db;
