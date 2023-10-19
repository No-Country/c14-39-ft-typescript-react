import express from "express";
import userRouter from "../routes/userRouter";
import countryRouter from "../routes/countryRouter";
import typeRouter from "../routes/typeRouter";
import authRouter from "./authRouter";
import sportCenterRouter from "../routes/sportCenterRouter";
import { authRequired } from "../../middlewares/validateToken";

const app = express();
const server = express.Router();

server.get("/", (_, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use("/", server);

app.use("/users", userRouter);
app.use("/country", countryRouter);
app.use("/types", typeRouter);
app.use("/", authRouter);  // Las rutas de autenticación están directamente en el nivel raíz
app.use("/sportCenter", authRequired, sportCenterRouter);

export default app;
