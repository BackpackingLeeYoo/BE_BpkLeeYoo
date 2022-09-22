import { StampParams, UserStampParams } from "../common/type";
import UserStamp from "../models/user-stamp-model";

const getAllUserStamp = async (
  userId: string
): Promise<UserStampParams | null> => {
  return await UserStamp.findOne({ _id: userId });
};

const countStamps = (stamps: StampParams[]): number => {
  const isStamp = stamps.filter((stamp) => {
    return stamp.isStamp === true;
  });
  return isStamp.length;
};

export { getAllUserStamp, countStamps };
