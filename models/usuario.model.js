const db = require("../databases/db");

exports.criar = (email, senhaHash, callback) => {
  db.run(
    "INSERT INTO usuarios(email, senha) VALUES (?, ?)",
    [email, senhaHash],
    callback
  );
};

exports.buscarPorId = (id, callback) => {
  db.get("SELECT * FROM usuarios WHERE idUsuario = ?", [id], callback);
};

exports.buscar = (callback) => {
  db.all("SELECT * FROM usuarios", callback);
};

exports.atualizar = (id, callback) => {
  db.run("UPDATE produtos SET nome WHERE idUsuario = ?", [id], callback);
};

exports.deletar = (id, callback) => {
  db.run("DELETE FROM usuarios WHERE idUsuario = ?", [id], callback);
};
