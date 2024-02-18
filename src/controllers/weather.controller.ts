import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters/weather.presenter";
import { weatherService } from "../services/weather.service";

class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    const city = req.query.q as string;
    const lat = +req.query.lat;
    const lon = +req.query.lon;

    try {
      if (city) {
        const weatherDataByCity = await weatherService.getWeatherByCity(city);
        return res.json({
          data: WeatherPresenter.weatherToResponse(weatherDataByCity),
        });
      } else if (lat && lon) {
        const weatherDataByLatLon = await weatherService.getWeatherByLatLon(
          lat,
          lon,
        );
        return res.json({
          data: WeatherPresenter.weatherToResponse(weatherDataByLatLon),
        });
      }
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
