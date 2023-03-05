import { Request, Response } from "express";
import { UserService } from "../services/user-services";

export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  public getUser = async (req: Request, res: Response) => {
    try {
      const { userId } = res.locals.user;

      const existsUser = await this.userService.findUser(userId);

      const user = {
        userId: existsUser.id,
        nickname: existsUser.nickname,
        profileImg: existsUser.profileImg,
      };

      res.status(200).json({
        user,
      });
    } catch (error: any) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };
}
