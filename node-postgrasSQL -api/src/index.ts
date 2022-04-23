const express = require("express");
const routerApi = require("./routes/index.ts");
const { PORT, SERVER_URL } = require("../config");

const app = express();

app.use(express.json());
app.use("/api", routerApi);

app.listen(PORT, () => {
  console.log(
    `
  \n server run on port: ${PORT} ...\n`,
    `${SERVER_URL} \n`
  );
});
