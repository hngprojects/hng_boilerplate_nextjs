/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  '/',
  '/career',
  '/faqs',
  'privacy-policy',
  '/terms',
  '/about-us',
  '/pricing',
  '/contact-us',
  '/waitlist',
  '/blog',
]

export const authRoutes = [
  '/register',
  '/login',
  '/forgot-password',
  '/reset-password',
  '/verify-otp',
  '/recovery',
]

export const superAdminRoutes = ['dashboard/admin/faqs']

export const apiAuthPrefix = '/api/'

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard'

/**
 * An array of routes that are accessible to the client
 * These routes require authentication
 * @type {string[]}
 */
export const clientRoutes: string[] = [
  '/dashboard',
  '/hisory',
  '/messages',
  '/notifications',
  '/profile',
]
