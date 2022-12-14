import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as compression from "compression";
require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.use(compression());
  await app.listen(8080, "0.0.0.0");

  // Gracefully shutdown the server.
  process.on("SIGINT", () => {
    console.info("SIGINT signal received.");
    console.log("Closing server.");
    app.close();
  });
}
bootstrap();
