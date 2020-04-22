const express = require("express");

const app = express();

app.use(bodyParser.json());

app.get("/is-dev", (_req, res) => {
  res.send(process.env.ALLOW_DEV);
});

app.listen(8080, () => {
  console.log(`Listening on 8080`);
});
