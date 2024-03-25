import express, { urlencoded } from "express";
import bodyParser from "body-parser";

import runConnect from "../config/dbConnection.js";
import formRoutes from "./routes/form_routes.js";
import authRoutes from "./routes/auth_route.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

await runConnect()
  .then(() => {
    app.use("/api/forms", formRoutes);
    app.use("/api/auth/", authRoutes);
  })
  .catch((err) => {
    throw err;
  });

app.listen(3000, () => {
  console.log("server is up!");
});
