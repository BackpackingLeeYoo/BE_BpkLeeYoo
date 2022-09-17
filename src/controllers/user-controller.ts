import { Request, Response, NextFunction } from "express";
import User from "../models/user-model";

const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = res.locals.user;

    const existUser = await User.findOne({ _id: userId });

    if (!existUser) {
    }

    res.status(200).json({
      existUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      errorMessage: "사용자 정보 조회 실패",
    });
    return;
  }
};

export { getUser };
