const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const dbase = new mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gforms",
  multipleStatements: true,
});

app.post("/Form", (req, res) => {
  const tablename = req.body.tablename;
  const prashna = req.body.prashna;
  const uttar = req.body.uttar;
  const newPrashna = req.body.newPrashna;

  console.log(req.body);

  let table = tablename;
  let column = prashna;
  let newColumn = newPrashna;
  let row = uttar;

  let query = `CREATE TABLE ${table} (${column} VARCHAR(200))`;
  let query1 = `INSERT INTO ${table} (${column}) VALUES ('${row}')`;


  dbase.query(query, function (err, result) {
    console.log(result, "awd");
    //console.log(query);
  });
  dbase.query(query1, function (err, result) {
    console.log(result, "awd");
    //console.log(query);
  });
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("server gud");
});
