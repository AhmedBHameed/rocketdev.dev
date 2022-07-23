import {Post, PostTypeEnum} from '../../../graphql/generated/graphql';
import {Joi, optionalString, requiredString} from '../../../utils/validations';

const postSchema = Joi.object<Post>({
  id: requiredString(),
  groupName: optionalString(),
  isPremium: Joi.boolean(),
  nanoId: optionalString(),
  nextPostId: optionalString(),
  postContents: Joi.array().items(
    Joi.object().keys({
      id: requiredString(),
      body: requiredString(),
      contentPreview: optionalString(),
      lang: optionalString(),
      postImage: optionalString(),
    })
  ),
  prevPostId: optionalString(),
  slug: requiredString(),
  tagIds: Joi.array().items(Joi.string()).required().messages({
    'any.required': 'validationError.required',
  }),
  type: Joi.string().valid(PostTypeEnum.Course, PostTypeEnum.Article),
  visibility: Joi.boolean(),
});

export default postSchema;
