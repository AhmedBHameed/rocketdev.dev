const IS_PROD = process.env.NODE_ENV === 'production';
const DOMAIN = IS_PROD
  ? process.env.NEXT_PUBLIC_DOMAIN
  : 'http://localhost:5000';
const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '';

export {DOMAIN, IS_PROD, GITHUB_CLIENT_ID};
