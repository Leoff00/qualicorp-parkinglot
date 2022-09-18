import { Request, Response, NextFunction, Handler } from "express";

export const resolver = (handlerFn: Handler) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      return await Promise.resolve(handlerFn(request, response, next));
    } catch (e) {
      return next(e);
    }
  };
};
