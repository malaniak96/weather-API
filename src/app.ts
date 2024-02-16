import express, { NextFunction, Request, Response } from "express";
import * as swaggerUi from "swagger-ui-express";

import { configs } from "./configs/configs";
import { ApiError } from "./errors/api.error";
import { weatherRouter } from "./routers/weather.router";
import * as swaggerDocument from "./unils/swagger.json";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status).json({
      message: err.message,
      status: err.status,
    });
  },
);

const PORT = configs.PORT;

app.listen(PORT, async () => {
  console.log(`Server has started on PORT ${PORT}`);
});
