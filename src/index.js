import { config } from "dotenv";
import app from "./app.js";
import dbConnect from "./db/db.js";

config({
  path: "../.env",
});

const PORT = process.env.PORT || 4000;

dbConnect().then(() =>
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)),
);
