import {
  Joi,
  optionalBoolean,
  requiredEmail,
  requiredPassword,
} from '../../utils/validations';
import {LoginInput} from './models/LoginInput';

const loginSchema = Joi.object<LoginInput>({
  email: requiredEmail(),
  password: requiredPassword(),
  rememberMe: optionalBoolean(),
});

export default loginSchema;
