import { User } from "../models/user";

export class UserRepository {
  constructor(private readonly user: User) {}

  getUserById = async (userId: number): Promise<User> => {
    return await User.findByPk(userId);
  };

  getUserByEmail = async (email: string): Promise<User> => {
    return await User.findOne({ where: { email } });
  };

  getUserWithStampsById = async (userId: string): Promise<UserParams> => {
    return await User.findOne({ _id: userId }).populate("stamps");
  };
}
