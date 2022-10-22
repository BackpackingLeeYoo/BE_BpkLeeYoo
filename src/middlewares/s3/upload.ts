import AWS from "aws-sdk";
import multer, { FileFilterCallback } from "multer";
import multerS3 from "multer-s3";
import path from "path";
import dayjs from "dayjs";
import { Request } from "express";
import { ErrorMessageEnum } from "../../common/type";
import { s3Bucket } from "../../configs/constants";

type FileNameCallback = (error: Error | null, filename: string) => void;

AWS.config.update({
  accessKeyId: s3Bucket.accesskey,
  secretAccessKey: s3Bucket.secretAcesskey,
  region: s3Bucket.region,
});

const s3 = new AWS.S3();

const fileFilter = (
  req: Request,
  file: Express.MulterS3.File,
  cb: FileFilterCallback
) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    return cb(new Error(ErrorMessageEnum.WRONG_EXTENSION));
  }
};

export const s3Storage = multerS3({
  s3: <any>s3,
  bucket: s3Bucket.bucket,
  acl: "public-read",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req: Request, file: Express.MulterS3.File, cb: FileNameCallback) {
    cb(
      null,
      `stampImage/${dayjs().format("YYYY/MM/DD")}_${path.basename(
        file.originalname
      )}`
    );
  },
});

export const imageUploader = multer({
  storage: s3Storage,
  fileFilter,
});
