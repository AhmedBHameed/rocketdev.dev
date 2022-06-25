const HOST_NAME = 'localhost';
const PORT = 5000;
const IS_PROD = process.env.NODE_ENV === 'production';
const DOMAIN = IS_PROD ? 'http://localhost:5000' : 'http://localhost:5000';
const GITHUB_CLIENT_ID = 'c8da19b15301ce6a6b21';
const STATIC_ASSETS_PATH = `https://minio.rocketdev.dev`;

export {DOMAIN, HOST_NAME, PORT, IS_PROD, GITHUB_CLIENT_ID, STATIC_ASSETS_PATH};
