import Joi from 'joi';

/**
 * Joi optional string validation function.
 * @returns
 */
const optionalString = () => Joi.string().allow('');

export default optionalString;
