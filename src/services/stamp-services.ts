import { StampParams, UserStampParams } from "../common/type";
import Stamp from "../models/stamp-model";
import UserStamp from "../models/user-stamp-model";

const addNewStamp = async (params: StampParams): Promise<StampParams> => {
  const newStamp = await Stamp.create({
    stampName: params.stampName,
    stampImage: params.stampImage,
    latitude: params.latitude,
    longitude: params.longitude,
  });

  return newStamp;
};

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

export { addNewStamp, getAllUserStamp, countStamps };
