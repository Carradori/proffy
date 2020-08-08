import express from "express";
import cors from "cors";
import path from "path";

import { routes } from "./routes";
class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
  }
}
export default new App().express;
