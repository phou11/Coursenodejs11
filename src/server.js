// const express =require("express");
// const app =express()

// app.listen(3000,()=>{
// console.log('server running on http://localhost:3000');
// })
import "./config/db.js"
import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router/route.js";
import { PORT } from "./config/globalkey.js";
import fileUpload from "express-fileupload";
const app = express();
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json({ extended: true,limit: '500mb' }))
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 500, limit: '500mb' }));
app.use("/api",router);
app.listen(PORT, () => {
    console.log(`Server runnint on http://localhost:${PORT}`);
})