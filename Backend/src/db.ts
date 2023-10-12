import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Express } from "express";
dotenv.config();

const { DB_USER, DB_PASSWORD } = process.env;

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@nocountry.0obnwbo.mongodb.net/nocountry?retryWrites=true&w=majority`;

const PORT: string | number = process.env.PORT ?? 3000;

export const initServer = (app: Express) => {
  mongoose
    .connect(connectionString)
    .then(() => {
      app.listen(PORT, () => {
        console.log(
          `El servidor está corriendo en el puerto => localhost:${PORT}`
        );
      });
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

  process.on("uncaughtException", (error) => {
    console.log(error);
    mongoose.disconnect();
  });
};
