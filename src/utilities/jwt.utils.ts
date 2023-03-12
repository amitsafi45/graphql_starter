import jwt from "jsonwebtoken";
import DotenvConfig from "../config/dotenv.config";
import { Role } from "../constant/enum";
import { IJwtForgetPasswordPayload, IJwtOptions, IJwtPayload } from "../interface/Jwt.interfaces";


class JwtService {
  static sign(user: IJwtPayload, options: IJwtOptions, role?: String) {
    return jwt.sign({
      id: user.id,
      email: user.email,
      role: role || Role.USER,
    }, options.secret, {
      expiresIn: options.expiresIn,
    });
  }

  static verify(token: string, secret: string): any {
    return jwt.verify(token, secret);
  }

  static generateAccessToken(user: IJwtPayload, role: String) {
    return this.sign(user, {
      expiresIn: DotenvConfig.ACCESS_TOKEN_EXPIRES_IN,
      secret: DotenvConfig.ACCESS_TOKEN_SECRET,
    }, role);kkkkkk
  }

  static generateTokens(user: IJwtPayload, role?: String) {
    const accessToken = this.sign(user, {
      expiresIn: DotenvConfig.ACCESS_TOKEN_EXPIRES_IN,
      secret: DotenvConfig.ACCESS_TOKEN_SECRET,
    }, role);

    const refreshToken = this.sign(user, {
      expiresIn: DotenvConfig.REFRESH_TOKEN_EXPIRES_IN,
      secret: DotenvConfig.REFRESH_TOKEN_SECRET,
    }, role);
    return { accessToken, refreshToken };
  }
  static generateForgetPasswordToken(payload:IJwtForgetPasswordPayload){
       const forgetPasswordToken=jwt.sign(payload,
         DotenvConfig.FORGOT_PASSWORD_SECRET,{
        expiresIn:DotenvConfig.FORGOT_PASSWORD_EXPIRES_IN,
       })
       return forgetPasswordToken
  }
}

export default JwtService;
