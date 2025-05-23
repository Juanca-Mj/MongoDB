import Categorias from "../models/Categorias.js";

const obtenerCategorias = async (req, res) => {   
    const categorias = await Categorias.find();

    res.json({
        categorias,
    });
}

export {

    obtenerCategorias,
}