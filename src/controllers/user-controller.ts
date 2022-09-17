import { Request, Response, NextFunction } from "express";
import { NotFoundException } from "../common/exceptions/not-found-exception";
import { StatusCode, UserParams } from "../common/type";
import { getUserById } from "../services/user-services";

const findUser = async (req: Request, res: Response) => {
  const { userId } = res.locals.user;
  const existUser: UserParams | null = await getUserById(userId);

  if (!existUser) {
    throw new NotFoundException("존재하지 않는 사용자입니다.");
  }

  res.status(StatusCode.OK).json({
    existUser,
  });
};

export { findUser };
