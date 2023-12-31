import express from "express";
import userRouter from "../routes/userRouter";
import countryRouter from "../routes/countryRouter";
import typeRouter from "../routes/typeRouter";
import authRouter from "./authRouter";
import sportCenterRouter from "../routes/sportCenterRouter";
import reservationRouter from "./reservationRouter";
import sportCampRouter from "./sportCampRouter";
import sca_type_router from "./campTypeRouter";
import webhookRouter from "./webhookRouter";
import orderRouter from "./orderRouter";
import mailRouter from "./mailRouter";

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
app.use("/webhook", webhookRouter);
app.use("/order", orderRouter);
app.use("/send-email", mailRouter)

export default app;
