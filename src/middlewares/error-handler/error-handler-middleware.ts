import { NextFunction } from "express";

export const errorLogger = (
  error: any,
  req: any,
  res: any,
  next: NextFunction
) => {
  console.error(error);
  next(error);
};

export const errorHandler = (
  error: { status: number; message: any },
  req: any,
  res: {
    status: (arg0: any) => void;
    json: (arg0: { errorMessage: any }) => void;
  },
  next: NextFunction
) => {
  const status = error.status || 400;

  res.status(status);
  res.json({ errorMessage: error.message });
};
