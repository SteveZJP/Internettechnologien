const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Ciao bella!" }); //resonse als json objekt
});

app.get("/ciao", (req, res) => {
  res.send("Arrivederci!"); //response als text
});

app.use((req, res) => {
  res.status(404).json({ error: "Diese Seite existiert nicht." });
});
