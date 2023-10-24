import express from "express";
import userRouter from "../routes/userRouter";
import countryRouter from "../routes/countryRouter";
import typeRouter from "../routes/typeRouter";
import authRouter from "./authRouter";
import sportCenterRouter from "../routes/sportCenterRouter";
import reservationRouter from "./reservationRouter";
import sportCampRouter from "./sportCampRouter";
import sca_type_router from "./campTypeRouter";

const app = express();
const server = express.Router();

server.get("/", (_, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use("/", server);

app.use("/", authRouter); // Las rutas de autenticación están directamente en el nivel raíz
app.use("/users", userRouter);
app.use("/countries", countryRouter);
app.use("/types", typeRouter);
app.use("/reservation", reservationRouter);
app.use("/sportcenter", sportCenterRouter);
app.use("/sportcamp", sportCampRouter);
app.use("/sportcamptype", sca_type_router);

export default app;
