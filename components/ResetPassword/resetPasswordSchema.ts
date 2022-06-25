import {
  requiredPassword,
  confirmPasswordWith,
  Joi,
} from '../../utils/validations';
import {ResetPasswordInput} from './models/resetPasswordInput';

const resetPasswordSchema = Joi.object<ResetPasswordInput>({
  newPassword: requiredPassword(),
  confirmPassword: confirmPasswordWith('newPassword'),
});

export default resetPasswordSchema;
