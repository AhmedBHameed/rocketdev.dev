import {FeedbackInput} from '../../graphql/generated/graphql';
import {requiredString, Joi} from '../../utils/validations';

const feedbackSchema = Joi.object<Omit<FeedbackInput, 'id'>>({
  title: requiredString(),
  message: requiredString(),
  resolved: Joi.boolean(),
});

export default feedbackSchema;
