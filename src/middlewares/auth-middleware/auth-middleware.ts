import jwt from "jsonwebtoken";
import UserRepository from "../../models/user-model";
import { Request, Response, NextFunction } from "express";
import { jwtwebtoken } from "../../config/constants";
import { ErrorMessage, StatusCode } from "../../common/type";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  console.log(authorization);

  if (!authToken || authType !== "Bearer") {
    return res.status(StatusCode.UNAUTHORIZED).send({
      message: ErrorMessage.UNAUTHORIZED_ERROR,
    });
  }

  try {
    const payload: any = jwt.verify(authToken, jwtwebtoken.secretKey);
    const userId = payload.userId;

    UserRepository.findById(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    return res.status(StatusCode.UNAUTHORIZED).send({
      message: ErrorMessage.UNAUTHORIZED_ERROR,
    });
  }
};

export default AuthMiddleware;
