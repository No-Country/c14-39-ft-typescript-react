import express from "express";
import userRouter from "../routes/userRouter";
import countryRouter from "../routes/countryRouter";

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

export default app;
