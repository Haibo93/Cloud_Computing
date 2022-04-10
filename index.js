const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  res.json({ status: "OK" });
});

app.listen(port, () => {
  console.log(`App listening on port ${PORT}`);
});
