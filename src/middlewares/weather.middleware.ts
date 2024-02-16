import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";

class WeatherMiddleware {
  public async validateWeatherRequest(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const city = req.query.city;

      if (!city) {
        throw new ApiError("City parameter is missing", 400);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const weatherMiddleware = new WeatherMiddleware();
