import { body } from "express-validator";

export const registerValidations = [
  body("email", "Enter E-Mail")
    .isEmail()
    .withMessage("Invalid Email")
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage(
      "The allowed number of characters in the mail is from 10 to 40."
    ),
  body("fullname", "Введите имя")
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage(
      "The allowed number of characters in the name is from 2 to 40."
    ),
  body("username", "Enter your login")
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage(
      "The allowed number of characters in the login is from 2 to 40."
    ),
  body("password", "Enter a password")
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage("​Minimum password length 6 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Passwords do not match");
      } else {
        return value;
      }
    }),
];
