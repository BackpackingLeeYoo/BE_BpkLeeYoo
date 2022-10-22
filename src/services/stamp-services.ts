import dayjs from "dayjs";
import { StampParams } from "../common/type";
import { UpdateStampParams } from "../controllers/stamp-controller";
import Stamp from "../schemas/stamp-model";

const countStamps = (stamps: StampParams[]): number => {
  const isStamp = stamps.filter((stamp) => {
    return stamp.isStamp === true;
  });
  return isStamp.length;
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
    stampId,
  });
};

export { countStamps, updateUserStamp };
