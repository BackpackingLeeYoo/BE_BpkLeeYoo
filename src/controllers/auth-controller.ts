import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { UserParams } from "../common/type";
import { jwtwebtoken } from "../config/constants";

export const kakaoCallback = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
