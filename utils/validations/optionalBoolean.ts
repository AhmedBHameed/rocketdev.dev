import Joi from 'joi';

/**
 * Joi optional boolean validation function.
 * @returns
 */
const optionalBoolean = () => Joi.boolean();

export default optionalBoolean;
