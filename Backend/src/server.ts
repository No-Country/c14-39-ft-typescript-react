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

const prodOrigins = ["https://app.reservatucancha.vercel.app"];
const devOrigins = ["http://localhost:5173"];
const isProduction = process.env.NODE_ENV === 'production';

const allowedOrigins = isProduction ? prodOrigins : devOrigins;

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));


initServer(app);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
); // Ruta para la documentación
app.use("/api", indexRoutes);

export default app;
