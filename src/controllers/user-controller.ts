import { Request, Response, NextFunction } from "express";
import { ErrorMessage, StatusCode, UserParams } from "../common/type";
import { getUserById } from "../services/user-services";

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = res.locals.user;
  const user: UserParams | null = await getUserById(userId);

  if (!user) {
    return res
      .status(StatusCode.NOT_FOUND)
      .json({ message: ErrorMessage.NOT_FOUND_ERROR });
  }

  res.status(StatusCode.OK).json({
    user,
  });
};

export { findUser };
