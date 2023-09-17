import express, { Express, Request, Response, NextFunction } from "express";

const app = express();
const ip = "127.0.0.1";
const port = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.status(200).send("Hello");
});

app.listen(port, (): void => {
  console.log(`App listening on: http://${ip}:${port}`);
});
