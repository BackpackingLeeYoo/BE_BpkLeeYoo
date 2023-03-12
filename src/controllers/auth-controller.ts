import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { User } from "../models/user";
import { jwtwebtoken } from "../common/constants";

const kakaoCallback = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "kakao",
    { failureRedirect: "/" },
    (err: Error, user: User) => {
      if (err) return next(err);

      const payload = { userId: user.id };

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

export { kakaoCallback };
