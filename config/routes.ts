const ROUTES = {
  home: {
    path: '/',
  },
  latest: {
    path: '/latest',
  },
  post: {
    path: '/post',
    params: '/:slug/:nanoId',
  },
  login: {
    path: '/login',
  },
  signup: {
    path: '/signup',
  },
  forgotPassword: {
    path: '/forgot-password',
  },
  resetPassword: {
    path: '/reset-password',
  },
};

export {ROUTES};
