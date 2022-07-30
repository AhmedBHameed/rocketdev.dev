const ROUTES = {
  home: {
    path: '/',
  },
  latest: {
    path: '/latest',
  },
  courses: {
    path: '/courses',
  },
  contents: {
    path: '/contents',
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
  feedback: {
    path: '/feedback',
  },
  // Dashboard section
  dashboard: {
    path: '/dashboard',
  },
  dashboardFeedback: {
    path: '/dashboard/feedback',
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
  dashboardTags: {
    path: '/dashboard/tags',
  },
  dashboardPostContent: {
    path: '/dashboard/posts',
    params: '/:postId',
  },
};

export default ROUTES;
