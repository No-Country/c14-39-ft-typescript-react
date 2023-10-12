import express from "express";
import userRouter from "../routes/userRouter";
import countryRouter from "../routes/countryRouter";
import typeRouter from "../routes/typeRouter";
import loginRouter from "../routes/loginRouter";

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

export default app;
