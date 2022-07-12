import { passport } from "./core/passport";
import dotenv from "dotenv";
dotenv.config();
import "./core/db";

import express from "express";

import { registrValidations } from "./validations/register";
import UserController from "./controllers/UserController";
import TweetsController from "./controllers/TweetsController";
import { createTweetValidations } from "./validations/createTweet";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
// Passport Initialize
app.use(passport.initialize());
// users
app.get("/users", UserController.index);
app.get(
  "/users/me",
  passport.authenticate("jwt", { session: false }),
  UserController.getUserInfo
);
app.get("/users/:id", UserController.show);
// tweets
app.get("/tweets", TweetsController.index);
app.get('/tweets/:id', TweetsController.show);
app.get('/tweets/user/:id', TweetsController.getUserTweets);
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetsController.delete);
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidations, TweetsController.update);
app.post('/tweets', passport.authenticate('jwt'), createTweetValidations, TweetsController.create);
// auth
app.get("/auth/verify", registrValidations, UserController.verify);
app.post("/auth/register", registrValidations, UserController.create);
app.post(
  "/auth/login",
  passport.authenticate("local"),
  UserController.afterLogin
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
