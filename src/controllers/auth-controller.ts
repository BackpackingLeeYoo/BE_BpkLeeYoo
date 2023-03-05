import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { jwtwebtoken } from "../common/constants";
import { UserParams } from "../common/type";

export class AuthController {
  kakaoCallback = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "kakao",
      { failureRedirect: "/" },
      (err: Error, user: UserParams) => {
        if (err) return next(err);

        const payload = { userId: user.userId };

        const options = {
          expiresIn: jwtwebtoken.expiresIn,
        };

        const token: string = jwt.sign(payload, jwtwebtoken.secretKey, options);

        res.json({
          token,
          user,
        });
      }
    )(req, res, next);
  };
}
