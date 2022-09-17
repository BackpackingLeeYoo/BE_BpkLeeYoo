import jwt from "jsonwebtoken";
import User from "../../models/user-model";
import { Request, Response, NextFunction } from "express";
import { jwtwebtoken } from "../../config/constants";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {
    const payload: any = jwt.verify(authToken, jwtwebtoken.secretKey);
    const userId = payload.userId;
    console.log(payload);

    User.findById(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
  }
};

export default AuthMiddleware;
