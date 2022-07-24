import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import mongoose from "mongoose";

import Router from "./routes/all.routes.js";


const app = express();

app.use(json());



//DB CONNECTION
mongoose.connect(process.env.DB_KEY);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connection established to dreamteams server.");
});

//ROUTES
app.get("/",async(req,res)=>{
    res.status(200).json("dreamteams server")
})
app.use("/", Router);

//END
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, (req, res) => {
  console.log(`dreamteams server started at port ${port}`);
});
