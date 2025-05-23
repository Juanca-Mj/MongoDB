import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGO_URI);

    const { host, port, name } = connectionDB.connection;

    const url = `CONECTADO A MONGODB\n- HOST: ${host}\n- PUERTO: ${port}\n- DB: ${name}`;
    console.log(url);

  } catch (error) {
    console.log(` Error de conexión: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
