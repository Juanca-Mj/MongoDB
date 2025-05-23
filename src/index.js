import express from "express";
import dotenv from "dotenv";
dotenv.config(); 

import categoriaRouter from "./routes/categorias.routes.js";

import connectDB from "./config/config.js";

const app = express();

app.use("/categoria", categoriaRouter);

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
