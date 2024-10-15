import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import "./config/passport.config.js";
import sessionConfigs from "./config/session.config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8080;
const HOST_NAME = process.env.HOST_NAME ?? "http://localhost:";

app.use(session(sessionConfigs));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.send(`Sever is up and running at port: ${PORT}`);
});

// Routes
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${HOST_NAME}${PORT}`);
});
