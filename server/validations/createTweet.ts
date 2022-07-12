import { body } from 'express-validator';

export const createTweetValidations = [
  body('text', 'Enter tweet text')
    .isString()
    .isLength({
      max: 280,
    })
    .withMessage('Maximum tweet length 280 letters'),
];
