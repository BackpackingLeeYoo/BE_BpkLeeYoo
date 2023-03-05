import { ErrorMessageEnum, StatusCodeEnum, UserParams } from "../common/type";
import User from "../schemas/user-model";

export class UserRepository {
  constructor() {}
}

const getUserById = async (userId: string): Promise<UserParams> => {
  const user = await User.findOne({ _id: userId });
  return isUser(user);
};

const getUserWithStampsById = async (userId: string): Promise<UserParams> => {
  const user = await User.findOne({ _id: userId }).populate("stamps");
  return isUser(user);
};

const getUserByEmail = async (email: string): Promise<UserParams> => {
  const user = await User.findOne({ email });
  return isUser(user);
};

const isUser = (user: UserParams | null): UserParams => {
  if (!user) {
    throw new Error(ErrorMessageEnum.NOT_FOUND_USER);
  }

  return user;
};

export { getUserById, getUserWithStampsById, getUserByEmail };
