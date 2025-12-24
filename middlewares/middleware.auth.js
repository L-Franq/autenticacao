const jwt = require("jsonwebtoken");
const SECRET = "segredo_super_secreto";

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ erro: "Token nao fornecido" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ erro: "Token Invalido." });

    req.userId = decoded.id;
    next();
  });
};
