import dayjs from "dayjs";
import { StampParams } from "../common/type";
import { UpdateStampParams } from "../controllers/stamp-controller";
import Stamp from "../schemas/stamp-model";

const YYYY_MM_DD_HH_mm_ss = "YYYY.MM.DD HH:mm:ss";

const countStamps = (stamps: StampParams[]): number => {
  const isStamp = stamps.filter((stamp) => {
    return stamp.isStamp === true;
  });
  return isStamp.length;
};

const uploadStampImage = async (
  stampId: string,
  stampImage: string
): Promise<StampParams | null> => {
  await Stamp.updateOne(
    { stampId },
    {
      $set: {
        stampImage: stampImage,
      },
    }
  );

  return await Stamp.findOne({
    stampId,
  });
};

const updateUserStamp = async (
  stampId: string,
  params: UpdateStampParams
): Promise<StampParams | null> => {
  const now = dayjs();
  const updatedAt = dayjs(now).unix() * 1000;

  await Stamp.updateOne(
    { stampId },
    {
      $set: {
        isStamp: true,
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

export { countStamps, uploadStampImage, updateUserStamp };
