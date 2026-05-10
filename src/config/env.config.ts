export const envConfig = {
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID as string,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET as string,
  BASEURL: process.env.BASE_URL as string,
  GOLANG_BASE_URL: process.env.GOLANG_BASE_URL as string,
  JAVA_BASE_URL: process.env.JAVA_BASE_URL as string,
  NESTJS_BASE_URL: process.env.NESTJS_BASE_URL as string,
  PHP_BASE_URL: process.env.PHP_BASE_URL as string,
  PYTHON_BASE_URL: process.env.PYTHON_BASE_URL as string,
  CSHARP_BASE_URL: process.env.CSHARP_BASE_URL as string,
  APP_URL: process.env.APP_URL as string,
} as const
