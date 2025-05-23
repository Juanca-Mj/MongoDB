import mongoose from "mongoose";

const categoriasSchema = mongoose.Schema(
  { 
    Imagen: {
      type: String, //
      required: true, //URL de la imagen
      trim: true, //Quita espacios en blanco al inicio y al final
    },

    categoriaNombre: {
      type: String,
      required: true, //Nombre de la categoria
      trim: true, //Quita espacios en blanco al inicio y al final
    },

    Descripcion: {
      type: String,
      required: true, //Descripcion de la categoria
      trim: true, //Quita espacios en blanco al inicio y al final
    },
  },
  {
    timestamps: true, //Crea los campos createdAt y updatedAt
  }
);

const Categorias = mongoose.model("Categorias", categoriasSchema);

export default Categorias;

//MongoDB --> NO USA ESQUEMAS
//MONGOOSE --> SI USA SCHEMAS
//MONGOOSE --> ES UN ORM (Object Relational Mapping) --> MONGODB NO ES RELACIONAL