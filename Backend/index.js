import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/postRouter.js';
import {PORT} from "./config.js";

const app = express(); // Creamos la aplicación express
app.use(cors()); // Habilitamos CORS
app.use(morgan("dev")); // Habilitamos Morgan para ver las solicitudes en consola
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes POST
app.use(router); // Habilitamos las rutas

// // Configuración del puerto
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});