import dotenv from "dotenv";
dotenv.config();
import "./core/db";

import express from "express";

import { registrValidations } from "./validations/register";
import UserController from "./controllers/UserController";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/users", UserController.index);
app.post("/users", registrValidations, UserController.create);
app.get("/users/verify", registrValidations, UserController.verify);
// app.patch("/users", UserController.update);
// app.delete("/users", UserController.delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
