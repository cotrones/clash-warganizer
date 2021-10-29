import "dotenv-safe/config";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    // origin: "*",
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/", (_req, res) => {
  res.send("<h2>Hello world</h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
