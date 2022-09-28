import { Request, Response, NextFunction } from "express";
import {
  ErrorMessageEnum,
  StampParams,
  StatusCodeEnum,
  UserParams,
} from "../common/type";
import { countStamps, updateUserStamp } from "../services/stamp-services";
import { getUserById, getUserWithStampsById } from "../services/auth-services";

const { UNAUTHORIZED, OK, NOT_FOUND } = StatusCodeEnum;
const { NOT_FOUND_USER, NOT_FOUND_ERROR } = ErrorMessageEnum;

interface UpdateStampParams {
  stampImage: string;
  stampComment: string;
  weatherTemp: string;
  weatherIcon: string;
}

const findAllStamps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = res.locals.user;
  const user = await getUserWithStampsById(userId);

  if (!user) {
    return res.status(UNAUTHORIZED).json({ message: NOT_FOUND_USER });
  }

  const stamps: StampParams[] = user.stamps;
  const isStampCount = countStamps(stamps);

  res.status(OK).json({
    stamps,
    isStampCount,
  });
};

const certifyStamp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { stampId } = req.params;
  const { stampImage, stampComment, weatherTemp, weatherIcon } = req.body;

  const { userId } = res.locals.user;
  const user = await getUserById(userId);

  if (!user) {
    return res.status(UNAUTHORIZED).json({ message: NOT_FOUND_USER });
  }

  const params: UpdateStampParams = {
    stampImage,
    stampComment,
    weatherTemp,
    weatherIcon,
  };

  const certifiedUserStamp = await updateUserStamp(stampId, params);

  res.status(OK).json({
    certifiedUserStamp,
  });
};

export { findAllStamps, certifyStamp };
