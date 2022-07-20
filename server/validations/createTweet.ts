import { body } from 'express-validator';

export const createTweetValidations = [
  body('text', 'Enter the text of the tweet')
    .isString()
    .isLength({
      max: 280,
    })
    .withMessage('Maximum tweet length 280 characters'),
];
