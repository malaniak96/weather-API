import { NextFunction, Request, Response } from "express";

import { weatherService } from "../services/weather.service";

class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    const city = req.query.city as string;
    try {
      const weatherData = await weatherService.getWeatherByCity(city);

      return res.json(weatherData);
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
