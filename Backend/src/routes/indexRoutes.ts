import express from "express";
import userRouter from "../routes/userRouter";
import countryRouter from "../routes/countryRouter";
import typeRouter from "../routes/typeRouter";
import loginRouter from "../routes/loginRouter";
import sportCenterRouter from "../routes/sportCenterRouter";

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
app.use("/login", loginRouter);
app.use("/sportCenter", sportCenterRouter);

export default app;
