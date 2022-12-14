import joi from 'joi';

const loginValidation = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export default {
  loginValidation,
};