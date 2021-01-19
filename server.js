const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const errorHandler = require("./middleware/errorHandler");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(router);
app.use(errorHandler);

app.listen(8844, "127.0.0.1", () => {
  console.log({
    port: 8844,
    host: "127.0.0.1",
  });
});
