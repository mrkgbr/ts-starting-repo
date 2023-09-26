import express, { Request, Response, NextFunction } from "express";

const app = express();
const ip = "127.0.0.1";
const port = 3000;

app.get("/", (_req: Request, res: Response, _next: NextFunction): void => {
  res.status(200).send("Hello");
});

app.listen(port, (): void => {
  console.log(`App listening on: http://${ip}:${port}`);
});
