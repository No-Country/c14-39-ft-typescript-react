import mongoose from "mongoose";

const connectionString = "mongodb+srv://luisguzman:emulnor1865@atlascluster.uumd5o7.mongodb.net/nocountry?retryWrites=true&w=majority"

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("conectado a la base de datos");
  })
  .catch((err) => {
    console.log(err);
  });

process.on("uncaughtException", (error) => {
  console.log(error);
  mongoose.disconnect();
});
