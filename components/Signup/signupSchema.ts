import {SignupInput} from '../../graphql/generated/graphql';
import {
  requiredString,
  Joi,
  requiredEmail,
  requiredPassword,
} from '../../utils/validations';

const signupSchema = Joi.object<SignupInput>({
  firstName: requiredString(),
  lastName: requiredString(),
  email: requiredEmail(),
  password: requiredPassword(),
});

export default signupSchema;
