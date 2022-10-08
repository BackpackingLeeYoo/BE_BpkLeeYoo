// import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import path from "path";
import { ErrorMessageEnum } from "../../common/type";
import { s3Bucket } from "../../config/constants";

const s3 = new S3Client({
  region: s3Bucket.region,
  credentials: {
    accessKeyId: s3Bucket.accesskey,
    secretAccessKey: s3Bucket.secretAcesskey,
  },
});

const alloedExtensions = [".png", "jpg", ".jpeg", "bmp", "gif"];

const imageUploader = multer({
  storage: multerS3({
    s3: s3,
    bucket: "bpk-leeyoo",
    key: (req, file, callback) => {
      const extension = path.extname(file.originalname);
      if (!alloedExtensions.includes(extension)) {
        return callback(new Error(ErrorMessageEnum.WRONG_EXTENSION));
      }
      callback(
        null,
        `stampImage/${Date.now()}_${path.basename(file.originalname)}`
      );
    },
    acl: "public-read",
  }),
});

export default imageUploader;
