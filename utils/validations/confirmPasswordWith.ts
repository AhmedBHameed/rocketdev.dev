import Joi from 'joi';

const confirmPasswordWith = (
  fieldName: string,
  conf?: {passwordNotMatch?: string}
) =>
  Joi.any()
    .valid(Joi.ref(fieldName))
    .required()
    .messages({
      'any.only': conf?.passwordNotMatch || 'validationError.passwordsNotMatch',
    });

export default confirmPasswordWith;
