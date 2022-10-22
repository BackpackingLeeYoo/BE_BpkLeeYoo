import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { jwtwebtoken } from "../configs/constants";
import { ErrorMessageEnum, StatusCodeEnum, UserParams } from "../common/type";
import { getUserById } from "../services/auth-services";

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

const findUser = async (req: Request, res: Response) => {
  try {
    const { userId } = res.locals.user;
    const existUser = await getUserById(userId);

    const user = {
      userId: existUser.userId,
      nickname: existUser.nickname,
      profileImg: existUser.profileImg,
    };

    res.status(StatusCodeEnum.OK).json({
      user,
    });
  } catch (err) {
    res.status(StatusCodeEnum.NOT_FOUND).send({
      message: ErrorMessageEnum.NOT_FOUND_USER,
    });
  }
};

export { kakaoCallback, findUser };
