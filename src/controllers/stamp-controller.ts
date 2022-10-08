import { Request, Response } from "express";
import { ErrorMessageEnum, StampParams, StatusCodeEnum } from "../common/type";
import { countStamps, updateUserStamp } from "../services/stamp-services";
import { getUserById, getUserWithStampsById } from "../services/auth-services";

const { OK } = StatusCodeEnum;
const { NOT_FOUND_USER } = ErrorMessageEnum;

interface UpdateStampParams {
  stampImage?: string;
  stampComment: string;
  weatherTemp: string;
  weatherIcon: string;
}

const findAllStamps = async (req: Request, res: Response) => {
  const { userId } = res.locals.user;
  const user = await getUserWithStampsById(userId);

  if (!user) {
    throw new Error(NOT_FOUND_USER);
  }

  const stamps: StampParams[] = user.stamps;
  const isStampCount = countStamps(stamps);

  res.status(OK).json({
    stamps,
    isStampCount,
  });
};

const certifyStamp = async (req: Request, res: Response) => {
  const { stampId } = req.params;
  const { stampComment, weatherTemp, weatherIcon } = req.body;
  const stampImage = req.file;
  console.log(stampImage);

  const { userId } = res.locals.user;
  const user = await getUserById(userId);

  if (!user) {
    throw new Error(NOT_FOUND_USER);
  }

  const params: UpdateStampParams = {
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
