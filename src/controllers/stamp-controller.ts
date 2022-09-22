import { Request, Response, NextFunction } from "express";
import {
  ErrorMessageEnum,
  StatusCodeEnum,
  UserParams,
  UserStampParams,
} from "../common/type";
import { countStamps, getAllUserStamp } from "../services/stamp-services";
import { getUserById } from "../services/user-services";

const { UNAUTHORIZED, OK } = StatusCodeEnum;
const { NOT_FOUND_USER } = ErrorMessageEnum;

const findAllUserStamp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = res.locals.user;
  const user: UserParams | null = await getUserById(userId);

  if (!user) {
    return res.status(UNAUTHORIZED).json({ message: NOT_FOUND_USER });
  }

  const userStamps: UserStampParams | null = await getAllUserStamp(userId);

  if (userStamps !== null) {
    const isStampCount = countStamps(userStamps.stamps);

    res.status(OK).json({
      userStamps,
      isStampCount,
    });
  }
};

export { findAllUserStamp };
