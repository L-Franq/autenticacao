const express = require("express");
const app = express();
app.use(express.json());

require("./databases/init");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => console.log("Server Running...8080"));
