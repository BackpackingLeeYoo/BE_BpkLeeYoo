import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
// import jwt from "jsonwebtoken";
// const Joi = require("joi");
// const bcrypt = require("bcrypt");
import { jwtwebtoken } from "../config/constants";

export const kakaoCallback = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("kakao", { failureRedirect: "/" }, (err, user) => {
    console.log("userInfo", user);

    if (err) return next(err);

    const payload = user.email;

    const options = {
      expiresIn: jwtwebtoken.expiresIn,
    };

    const token = jwt.sign(payload, jwtwebtoken.secretKey, options);
    console.log("kakao-token", token);

    res.json({
      token,
      user,
    });
  })(req, res, next);
};
