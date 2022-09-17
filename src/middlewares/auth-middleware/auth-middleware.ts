import jwt from "jsonwebtoken";
import User from "../../models/user-model";
import { Request, Response, NextFunction } from "express";
import { jwtwebtoken } from "../../config/constants";
import { UnauthorizedException } from "../../common/exceptions/unauthorized-exception";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    throw new UnauthorizedException("유효하지 않은 토큰입니다.");
    // res.status(401).send({
    //   errorMessage: "로그인 후 이용 가능합니다.",
    // });
    // return;
  }

  try {
    const payload: any = jwt.verify(authToken, jwtwebtoken.secretKey);
    const userId = payload.userId;

    if (!payload) {
      throw new UnauthorizedException("로그인 후 이용 가능합니다.");
    }

    User.findById(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    next(err);
    // res.status(401).send({
    //   errorMessage: "로그인 후 이용 가능합니다.",
    // });
  }
};

export default AuthMiddleware;
