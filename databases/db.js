const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./usuarios.db", (err) => {
  if (err) {
    console.log("Erro ao se conectar a BD", err.message);
  } else {
    console.log("Conectado ao banco com sucesso.");
  }
});

module.exports = db;
