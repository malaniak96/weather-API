import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";
import { weatherMiddleware } from "../middlewares/weather.middleware";

const router = Router();

router.get(
  `/`,
  weatherMiddleware.validateWeatherRequest,
  weatherController.getWeather,
);

export const weatherRouter = router;
