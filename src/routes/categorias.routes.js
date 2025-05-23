import express from "express";
import { obtenerCategorias } from "../controllers/Categoria.controllers.js";

const router = express.Router();

router.get("/all", obtenerCategorias);

export default router;
