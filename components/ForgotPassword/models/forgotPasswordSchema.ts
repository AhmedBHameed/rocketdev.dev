import {requiredEmail, Joi} from '../../../utils/validations';
import {ForgotPasswordInput} from './ForgotPasswordInput';

const forgotPasswordSchema = Joi.object<ForgotPasswordInput>({
  email: requiredEmail(),
});

export default forgotPasswordSchema;
