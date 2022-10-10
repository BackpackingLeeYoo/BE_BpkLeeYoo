import { Request, Response } from "express";
import { ErrorMessageEnum, StampParams, StatusCodeEnum } from "../common/type";
import { countStamps, updateUserStamp } from "../services/stamp-services";
import { getUserById, getUserWithStampsById } from "../services/auth-services";

const { OK, BAD_REQUEST, NOT_FOUND } = StatusCodeEnum;
const { NOT_FOUND_ERROR, BAD_REQUEST_ERROR } = ErrorMessageEnum;

interface UpdateStampParams {
  stampImage: string;
  stampComment: string;
  weatherTemp: string;
  weatherIcon: string;
}

const findAllStamps = async (req: Request, res: Response) => {
  try {
    const { userId } = res.locals.user;
    const user = await getUserWithStampsById(userId);

    const stamps = user.stamps as StampParams[];
    const isStampCount = countStamps(stamps);

    res.status(OK).json({
      stamps,
      isStampCount,
    });
  } catch (err) {
    console.error(err);
    res.status(NOT_FOUND).send({
      message: NOT_FOUND_ERROR,
    });
  }
};

const certifyStamp = async (req: Request, res: Response) => {
  try {
    const { userId } = res.locals.user;
    const { stampId } = req.params;
    const { stampComment, weatherTemp, weatherIcon } = req.body;
    const stampImage = (req.file as Express.MulterS3.File).location;

    const user = await getUserById(userId);

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
  } catch (err) {
    console.error(err);
    res.status(BAD_REQUEST).send({
      message: BAD_REQUEST_ERROR,
    });
  }
};

export { findAllStamps, certifyStamp };
