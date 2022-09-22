import jwt from "jsonwebtoken";
import User from "../../models/user-model";
import { Request, Response, NextFunction } from "express";
import { jwtwebtoken } from "../../config/constants";
import { ErrorMessageEnum, StatusCodeEnum } from "../../common/type";

const { UNAUTHORIZED } = StatusCodeEnum;
const { UNAUTHORIZED_ERROR } = ErrorMessageEnum;

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    return res.status(UNAUTHORIZED).send({
      message: UNAUTHORIZED_ERROR,
    });
  }

  try {
    const payload: any = jwt.verify(authToken, jwtwebtoken.secretKey);
    const userId = payload.userId;

    User.findById(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    return res.status(UNAUTHORIZED).send({
      message: UNAUTHORIZED_ERROR,
    });
  }
};

export default AuthMiddleware;
