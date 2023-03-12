import { Request, Response } from "express";
import * as userService from "../services/user-services";

const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = res.locals.user;

    const existsUser = await userService.findUser(userId);

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

export { getUser };
