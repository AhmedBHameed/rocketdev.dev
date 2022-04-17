import Joi from 'joi';

interface PasswordErrorMessages {
  required?: string;
  invalidPassword?: string;
}

/**
 * Joi password validation function.
 * To customize error messages, pass an object of type PasswordErrorMessages; otherwise, default messages activated.
 * {
 *    required?: string;
 *    invalidPassword?: string;
 * }
 *
 * @param conf type of PasswordErrorMessages
 * @returns
 */
const requiredPassword = (conf?: PasswordErrorMessages) =>
  Joi.string()
    .pattern(
      /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,255}$/
    )
    .required()
    .messages({
      'string.pattern.base':
        conf?.invalidPassword || 'validationError.invalidPassword',
      'any.required': conf?.required || 'validationError.required',
      'string.empty': conf?.required || 'validationError.required',
    });

export default requiredPassword;

//   export const passwordValidator = Joi.string()
// .pattern(
//   /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,255}$/
// )
// .messages({
//   'string.pattern.base':
//   'Invalid password. Password must have at least: • 8 characters long Password • 1 uppercase and 1 lowercase character • 1 number • 1 non-alpha-numeric character • with no space',
// });
