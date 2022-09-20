/* eslint-disable @typescript-eslint/no-unused-vars */
import { router } from "./router";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }
  return response.status(500).json({
    status: "Error",
    message: "Internal server error",
  });
});

export { app };
