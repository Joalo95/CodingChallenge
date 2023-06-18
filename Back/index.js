const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

//MIDDLEWARES

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
/* app.use(cors({ origin: `${process.env.CLIENT_URL}` })); */

//RUTAS
const users = require("./routes/users");
const blogs = require("./routes/routesBlog");
app.use("/api", users);
app.use("/api/blog", blogs);
app.use("/imagenes/", express.static('imagenes'));

//EJECUCION DEL SERVIDOR
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
