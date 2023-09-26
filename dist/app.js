import express from "express";
const app = express();
const ip = "127.0.0.1";
const port = 3000;
app.get("/", (_req, res, _next) => {
    res.status(200).send("Hello");
});
app.listen(port, () => {
    console.log(`App listening on: http://${ip}:${port}`);
});
//# sourceMappingURL=app.js.map