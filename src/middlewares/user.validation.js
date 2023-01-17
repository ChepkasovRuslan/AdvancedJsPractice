const { check } = require('express-validator');

const userValidation = [
  check('fullname')
    .exists()
    .withMessage(`Object must contain "fullname" field`)
    .isString()
    .withMessage('Text must be a string')
    .trim()
    .notEmpty()
    .withMessage('Text must be not empty'),

  check('email')
    .exists()
    .withMessage(`Object must contain "email" field`)
    .isString()
    .withMessage('Text must be a string')
    .trim()
    .notEmpty()
    .withMessage('Text must be not empty'),

  check('password')
    .exists()
    .withMessage(`Object must contain "password" field`)
    .isString()
    .withMessage('Text must be a string')
    .trim()
    .notEmpty()
    .withMessage('Text must be not empty'),
];

module.exports = {
  userValidation
};
