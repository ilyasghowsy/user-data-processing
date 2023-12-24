import express, { Request, Response } from "express";
import './configs/dbConfig'
import './services/worker'

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server has been connected");
});
