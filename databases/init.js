const db = require("./db");

db.run(
  `CREATE TABLE IF NOT EXISTS usuarios(
    idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL)`,
  (err) => {
    if (err) console.log(err.message);
    else console.log("Tabela criada com sucesso.");
  }
);
