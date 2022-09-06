/* eslint-disable prefer-destructuring */
/**
 * !This file required to centralize the environment variables.
 * */
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * * Server basic configuration.
 * */
const NODE_ENV = process.env.NODE_ENV;
const APP_VERSION = process.env.npm_package_version;
const SERVER_PORT = 5000;
const SERVER_BASE_PATH = process.env.SERVER_BASE_PATH || '';
const SERVER_ALLOWED_ORIGIN =
  'http://localhost:5000,http://192.168.0.95:5000,https://www.rocketdev.dev'?.split(
    ','
  );

/**
 * Database configuration
 * */
const AUTH_SERVICE_BASE_URL = IS_PRODUCTION
  ? 'http://localhost:5001'
  : 'http://localhost:5001';
const CODING_SCHOOL_SERVICE_BASE_URL = IS_PRODUCTION
  ? 'http://localhost:5002'
  : 'http://localhost:5002';

/**
 * * Winston configuration.
 * */
const WINSTON_LOG_DIR = process.env.WINSTON_LOG_DIR || 'logs';
const WINSTON_LOG_LEVEL = IS_PRODUCTION ? 'error' : 'debug';

/**
 * Base API
 * */
const BASE_API = IS_PRODUCTION ? '' : 'http://localhost';

export default {
  APP_VERSION,
  AUTH_SERVICE_BASE_URL,
  CODING_SCHOOL_SERVICE_BASE_URL,
  BASE_API,
  IS_PRODUCTION,
  NODE_ENV,
  SERVER_ALLOWED_ORIGIN,
  SERVER_BASE_PATH,
  SERVER_PORT,
  WINSTON_LOG_DIR,
  WINSTON_LOG_LEVEL,
};
