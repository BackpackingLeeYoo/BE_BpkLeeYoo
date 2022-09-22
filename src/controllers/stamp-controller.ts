import { Request, Response, NextFunction } from "express";
import {
  ErrorMessageEnum,
  StampParams,
  StatusCodeEnum,
  UserParams,
  UserStampParams,
} from "../common/type";
import {
  addNewStamp,
  countStamps,
  getAllUserStamp,
} from "../services/stamp-services";
import { getUserById } from "../services/auth-services";

const { UNAUTHORIZED, OK } = StatusCodeEnum;
const { NOT_FOUND_USER } = ErrorMessageEnum;

const params: StampParams = {
  stampName: "대이작도",
  stampImage:
    "https://itour.incheon.go.kr/common/viewImg.do?imgId=DBI22012116261839588",
  latitude: 37.486313,
  longitude: 126.926586,
};

const createStamp = async (req: Request, res: Response, next: NextFunction) => {
  const newStamp: StampParams = await addNewStamp(params);
  return newStamp;
};

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

export { createStamp, findAllUserStamp };
