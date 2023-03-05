import { User } from "../models/user";

export class UserRepository {
  constructor() {}

  findUserById = async (userId: number): Promise<User> => {
    return await User.findByPk(userId);
  };

  findUserByEmail = async (email: string): Promise<User> => {
    return await User.findOne({ where: { email } });
  };
}
