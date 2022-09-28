import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { jwtwebtoken } from "../config/constants";
import { ErrorMessageEnum, StatusCodeEnum, UserParams } from "../common/type";
import { getUserById } from "../services/auth-services";

const { UNAUTHORIZED } = StatusCodeEnum;
const { NOT_FOUND_USER } = ErrorMessageEnum;

const kakaoCallback = (req: Request, res: Response, next: NextFunction) => {
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

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = res.locals.user;
  const user = await getUserById(userId);

  if (!user) {
    return res.status(UNAUTHORIZED).json({ message: NOT_FOUND_USER });
  }

  res.status(StatusCodeEnum.OK).json({
    user,
  });
};

export { kakaoCallback, findUser };
