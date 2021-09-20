import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "../../../swagger.json";

import "../typeorm";
import "../../container";
import { handleError } from "../http/middlewares/handleError";
import { router } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.use(handleError);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`[App]: Server running on port ${port}`);
});
