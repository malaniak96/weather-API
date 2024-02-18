import { IWeather } from "../interfaces/weather.interface";

export class WeatherPresenter {
  public static weatherToResponse(weather: IWeather) {
    return {
      name: weather.name,
      coord: weather.coord,
      sys: {
        country: weather.sys.country,
        sunrise: weather.sys.sunrise,
        sunset: weather.sys.sunset,
      },
      timezone: weather.timezone,
      weather: [
        {
          main: weather.weather[0].main,
          description: weather.weather[0].description,
          icon: weather.weather[0].icon,
        },
      ],
      main: weather.main,
      wind: weather.wind,
      rain: weather.rain,
      clouds: weather.clouds,
      visibility: weather.visibility,
      cod: weather.cod,
    };
  }
}
