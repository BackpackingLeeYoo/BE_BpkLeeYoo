import { Request, Response } from "express";
import Joi from "joi";
import { ErrorMessageEnum, StampParams, StatusCodeEnum } from "../common/type";
import {
  countStamps,
  getStamp,
  updateUserStamp,
} from "../services/stamp-services";
import { getUserById, getUserWithStampsById } from "../services/auth-services";

const { OK, BAD_REQUEST, NOT_FOUND } = StatusCodeEnum;
const { NOT_FOUND_ERROR, VALIDATION_ERROR } = ErrorMessageEnum;

export interface UpdateStampParams {
  stampImage: string;
  stampComment: string;
  weatherTemp: string;
  weatherIcon: string;
}

const stampSchema = Joi.object({
  stampComment: Joi.string().required(),
  weatherTemp: Joi.string().required(),
  weatherIcon: Joi.string().required(),
});

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

const findStamp = async (req: Request, res: Response) => {
  try {
    // const { userId } = res.locals.user;
    const { stampId } = req.params;

    // await getUserById(userId);

    const stamp = await getStamp(stampId);

    res.status(OK).json({
      stamp,
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
    const { stampComment, weatherTemp, weatherIcon } =
      await stampSchema.validateAsync(req.body);

    // const stampImage = (req.file as Express.MulterS3.File).location;

    const stampImage = `https://bpk-leeyoo.s3.ap-northeast-2.amazonaws.com/${
      (req.file as Express.MulterS3.File).key
    }`;

    await getUserById(userId);

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
      message: VALIDATION_ERROR,
    });
  }
};

export { findAllStamps, findStamp, certifyStamp };
