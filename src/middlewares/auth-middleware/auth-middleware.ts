import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { jwtwebtoken } from "../../common/constants";
import { User } from "src/models/user";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    return res.status(401).send({
      message: "유효하지 않은 토큰입니다.",
    });
  }

  try {
    const payload: any = jwt.verify(authToken, jwtwebtoken.secretKey);
    const userId = payload.userId;

    User.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error: any) {
    return res.status(401).send({
      message: error.message,
    });
  }
};
