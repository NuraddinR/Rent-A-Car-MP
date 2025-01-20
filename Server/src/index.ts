import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import cors from "cors";

import "./config/db";
import "./config/auth-strategy";

import authRoutes from "./routes/auth";
import locationRoutes from "./routes/location";
import categoryRoutes from "./routes/category";
import rentRoutes from "./routes/rent";
import reservationRoutes from "./routes/reservation";
import reviewRoutes from "./routes/review";
import favoriteRouter from "./routes/favorite"
import userRoutes from "./routes/user";

const app = express();
app.set("trust proxy", 1);

const PORT = process.env.PORT || 3000;
const production = process.env.NODE_ENV === "production";
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log(`CORS error ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: production,
      sameSite: production ? "none" : "lax",
      httpOnly: production,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static("./public"));
app.use("/auth", authRoutes);
app.use("/locations", locationRoutes);
app.use("/categories", categoryRoutes);
app.use("/rents", rentRoutes);
app.use("/reservations", reservationRoutes);
app.use("/reviews", reviewRoutes);
app.use("/favorites", favoriteRouter)
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}`);
});
