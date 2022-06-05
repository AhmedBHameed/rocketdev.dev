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
  // Dashboard section
  dashboard: {
    path: '/dashboard',
  },
  dashboardLogin: {
    path: '/dashboard/login',
  },
  dashboardAuthorization: {
    path: '/dashboard/authorizations',
  },
  dashboardUsers: {
    path: '/dashboard/users',
  },
  dashboardCourses: {
    path: '/dashboard/courses',
  },
  dashboardPosts: {
    path: '/dashboard/posts',
  },
};

export {ROUTES};
