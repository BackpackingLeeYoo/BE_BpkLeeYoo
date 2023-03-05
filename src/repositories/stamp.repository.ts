import dayjs from "dayjs";
import { StampParams } from "../common/type";
import { UpdateStampParams } from "../controllers/stamp-controller";
import Stamp from "../schemas/stamp-model";

export class StampService {
  constructor() {}
}

const countStamps = (stamps: StampParams[]): number => {
  const isStamp = stamps.filter((stamp) => {
    return stamp.isStamp === true;
  });
  return isStamp.length;
};

const getStamp = async (stampId: string): Promise<StampParams | null> => {
  return await Stamp.findOne({ _id: stampId }).populate("userId");
};

const updateUserStamp = async (
  stampId: string,
  params: UpdateStampParams
): Promise<StampParams | null> => {
  const now = dayjs();
  const updatedAt = dayjs(now).unix() * 1000;

  await Stamp.updateOne(
    { _id: stampId },
    {
      $set: {
        isStamp: true,
        stampImage: params.stampImage,
        stampComment: params.stampComment,
        weatherTemp: params.weatherTemp,
        weatherIcon: params.weatherIcon,
        updatedAt,
      },
    }
  );

  return await Stamp.findOne({
    _id: stampId,
  });
};

export { countStamps, getStamp, updateUserStamp };
