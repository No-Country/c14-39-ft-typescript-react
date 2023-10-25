// Tipado para express
import express, { Express } from "express";
import { initServer } from "./db";
import bodyParser from "body-parser";
import morgan from 'morgan'
import swaggerUi from "swagger-ui-express";
import { specs } from "./doc/swaggerConfig";
import cookieParser from "cookie-parser";
// Ruta principal
import indexRoutes from "../src/routes/indexRoutes";


// dependencias node
const app: Express = express();
import cors from "cors";

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(cors( {origin: "http://localhost:5173", credentials: true} ));
app.use(bodyParser.urlencoded({ extended: true }));


initServer(app);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
); // Ruta para la documentación
app.use("/api", indexRoutes);

export default app;
