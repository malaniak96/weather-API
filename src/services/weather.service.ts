import axios from "axios";

import { configs } from "../configs/configs";
import { ApiError } from "../errors/api.error";
import { IWeather } from "../interfaces/weather.interface";

class WeatherService {
  public async getWeatherByCity(city: string): Promise<IWeather> {
    const apiUrl = `${configs.BASE_URL}/weather?q=${city}&appid=${configs.API_KEY}`;

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new ApiError("City not found or weather data not available", 404);
    }
  }
}

export const weatherService = new WeatherService();
