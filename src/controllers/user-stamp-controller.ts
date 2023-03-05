import { Request, Response } from "express";
import Joi from "joi";
import { UserStampService } from "src/services/user-stamp-services";

export const stampSchema = Joi.object({
  stampComment: Joi.string().required(),
  weatherTemp: Joi.string().required(),
  weatherIcon: Joi.string().required(),
});

export class StampController {
  constructor(private readonly userStampService: UserStampService) {
    this.userStampService = userStampService;
  }

  public getAllUserStamps = async (req: Request, res: Response) => {
    try {
      const { userId } = res.locals.user;

      const userStampList = await this.userStampService.findAllUserStamp(
        userId
      );

      const stamps = userStampList.map((stamp) => {
        return {
          userStampId: stamp.id,
          stampName: stamp.stampName,
          isStamp: stamp.isStamp,
          userStampImage: stamp.userStampImage,
          registrationAt: stamp.registrationAt,
          // latitude: stamp.latitude,
          // longitude: stamp.longitude,
        };
      });

      const userStampCount =
        this.userStampService.countUserStamp(userStampList);

      res.status(200).json({
        stamps,
        isStampCount: userStampCount,
      });
    } catch (error: any) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };

  public getUserStamp = async (req: Request, res: Response) => {
    try {
      const { userStampId } = req.params;

      const userStamp = await this.userStampService.findUserStamp(
        Number(userStampId)
      );

      const stamp = {
        userStampId: userStamp.id,
        // nickname: userStamp.nickname,
        // profileImg: userStamp.profileImg,
        stampName: userStamp.stampName,
        userStampImage: userStamp.userStampImage,
        stampComment: userStamp.stampComment,
        weatherTemp: userStamp.weatherTemp,
        weatherIcon: userStamp.weatherIcon,
        registrationAt: userStamp.registrationAt,
      };

      res.status(200).json({
        stamp,
      });
    } catch (error: any) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };

  public certifyStamp = async (req: Request, res: Response) => {
    try {
      const { userStampId } = req.params;
      const { stampComment, weatherTemp, weatherIcon } =
        await stampSchema.validateAsync(req.body);

      // const stampImage = (req.file as Express.MulterS3.File).location;
      const stampImage = `https://bpk-leeyoo.s3.ap-northeast-2.amazonaws.com/${
        (req.file as Express.MulterS3.File).key
      }`;

      const certifiedUserStamp = await this.userStampService.certifyStamp({
        userStampId: Number(userStampId),
        userStampImage: stampImage,
        stampComment,
        weatherTemp,
        weatherIcon,
      });

      res.status(200).json({
        certifiedUserStamp,
      });
    } catch (error: any) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };
}
