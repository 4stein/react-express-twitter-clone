import { body } from "express-validator";

export const registrValidations = [
  body("email", "Enter E-Mail")
    .isEmail()
    .withMessage("Wrong E-Mail")
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage("Wrong E-Mail size"),
  body("username", "Enter login")
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage("Wrong login size"),
  body("password")
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage("Wrong password size. 6 minimum")
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Passwords do not match");
      } else {
        return value;
      }
    }),
];
