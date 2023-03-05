import { Request, Response } from "express";
import { ErrorMessageEnum, StatusCodeEnum } from "../common/type";
import { getUserById } from "../services/auth-services";
import { UserService } from "../services/user-services";

export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUser = async (req: Request, res: Response) => {
    try {
      const { userId } = res.locals.user;
      const existUser = await getUserById(userId);

      const user = {
        userId: existUser.userId,
        nickname: existUser.nickname,
        profileImg: existUser.profileImg,
      };

      res.status(StatusCodeEnum.OK).json({
        user,
      });
    } catch (err) {
      res.status(StatusCodeEnum.NOT_FOUND).send({
        message: ErrorMessageEnum.NOT_FOUND_USER,
      });
    }
  };
}
