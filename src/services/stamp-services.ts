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

const updateUserStamp = async (
  stampId: string,
  params: UpdateStampParams
): Promise<StampParams | null> => {
  const now = dayjs();
  const updatedAt = dayjs(now).format(YYYY_MM_DD_HH_mm_ss);

  await Stamp.updateOne(
    { stampId },
    {
      $set: {
        stampImage: params.stampImage,
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

export { countStamps, updateUserStamp };
