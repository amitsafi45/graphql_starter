import dotenv from "dotenv";
dotenv.config();

export default class DotenvConfiguration {
  static NODE_ENV = process.env.NODE_ENV
  static APP_NAME = process.env.APP_NAME;
  static PORT = +process.env.PORT!;

  // Database configuration
  static DATABASE_HOST = process.env.DATABASE_HOST;
  static DATABASE_PORT = +process.env.DATABASE_PORT!;
  static DATABASE_USERNAME = process.env.DATABASE_USERNAME;
  static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  static DATABASE = process.env.DATABASE_NAME;

  // JWT configuration
  static ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
  static ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN!;
  static REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;
  static REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN!;
  static FORGOT_PASSWORD_SECRET = process.env.FORGOT_PASSWORD_SECRET!;
  static FORGOT_PASSWORD_EXPIRES_IN = process.env.FORGOT_PASSWORD_EXPIRES_IN!;

  static OTP_SECRET = process.env.OTP_SECRET!;

  // Mail configuration
  static MAIL_HOST = process.env.MAIL_HOST;
  static MAIL_PORT = process.env.MAIL_PORT;
  static MAIL_USERNAME = process.env.MAIL_USERNAME;
  static MAIL_PASSWORD = process.env.MAIL_PASSWORD;
  static MAIL_FROM = process.env.MAIL_FROM;

  // File configuration
  static PUBLIC_FILE_PATH = "public/upload";
  static PUBLIC_FILE_PATH_FOR_DATABASE = "/upload";

}
