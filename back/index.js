const express = require("express");
const cors = require("cors");
const Routes = require("./Routes/routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));


app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log("app working");
});

app.use(express.json());
app.use("/", Routes);
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to mongoDB"));
