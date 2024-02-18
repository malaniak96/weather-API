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
      const lat = +req.query.lon;
      const lon = +req.query.lat;

      if (!(city || (lat && lon))) {
        throw new ApiError("Provide City or Lat and Lon parameters", 400);
      }

      if ((city && (lat || lon)) || (lon && !lat) || (!lon && lat)) {
        throw new ApiError(
          "Provide only one parameter: City or Lat and Lon ",
          400,
        );
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const weatherMiddleware = new WeatherMiddleware();
