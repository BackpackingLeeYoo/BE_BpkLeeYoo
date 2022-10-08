import { UserParams } from "../common/type";
import User from "../models/user-model";

const getUserById = async (userId: string): Promise<UserParams | null> => {
  return await User.findOne({ _id: userId });
};

const getUserWithStampsById = async (
  userId: string
): Promise<UserParams | null> => {
  return await User.findOne({ _id: userId }).populate("stamps");
};

const getUserByEmail = async (email: string): Promise<typeof User | null> => {
  return await User.findOne({ email });
};

export { getUserById, getUserWithStampsById, getUserByEmail };
