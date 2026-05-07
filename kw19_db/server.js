const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./kw19_db/usedatabase.js");

const port = 3000;

const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/patienten", (req, res) => {
  let sql = "SELECT * FROM patienten";
  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.get("/api/patienten/:id", (req, res) => {
  let sql = "SELECT * FROM patienten WHERE id = ?";
  let params = [req.params.id];

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

app.post("/api/patienten", (req, res) => {
  //#endregion

  let errors = [];
  if (!req.body.nachname) {
    errors.push("No name specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  let sql =
    "INSERT INTO patienten (nachname, vorname, created, updated) VALUES (?,?,?,?)";
  let params = [req.body.nachname, req.body.vorname, Date.now(), Date.now()];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: { id: this.lastID, ...req.body },
    });
  });
});

app.patch("/api/patienten/:id", (req, res) => {
  let data = {
    nachname: req.body.nachname,
    vorname: req.body.vorname,
    updated: Date.now(),
  };
  let sql = `UPDATE patienten SET
    nachname = COALESCE(?, nachname),
    vorname = COALESCE(?, vorname),
    updated = COALESCE(?, updated)
    WHERE id = ?`;
  let params = [data.nachname, data.vorname, data.updated, req.params.id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: { id: req.params.id, ...data },
    });
  });
});

app.delete("/api/patienten/:id", (req, res) => {
  let sql = "DELETE FROM patienten WHERE id = ?";
  let params = [req.params.id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "deleted",
      changes: this.changes,
    });
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Diese Seite existiert nicht!" });
});
