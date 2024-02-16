import { config } from "dotenv";
config();

export const configs = {
  PORT: process.env.PORT,

  API_KEY: process.env.API_KEY,

  BASE_URL: process.env.BASE_URL,
};
