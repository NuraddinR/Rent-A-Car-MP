"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
var cors_1 = __importDefault(require("cors"));
require("./config/db");
require("./config/auth-strategy");
var auth_1 = __importDefault(require("./routes/auth"));
var location_1 = __importDefault(require("./routes/location"));
var category_1 = __importDefault(require("./routes/category"));
var rent_1 = __importDefault(require("./routes/rent"));
var reservation_1 = __importDefault(require("./routes/reservation"));
var review_1 = __importDefault(require("./routes/review"));
var favorite_1 = __importDefault(require("./routes/favorite"));
var user_1 = __importDefault(require("./routes/user"));
var app = (0, express_1.default)();
app.set("trust proxy", 1);
var PORT = process.env.PORT || 3000;
var production = process.env.NODE_ENV === "production";
var BASE_URL = process.env.BASE_URL || "http://localhost:".concat(PORT);
var allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
// const production = process.env.NODE_ENV === "production";
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: production,
        sameSite: production ? "none" : "lax",
        httpOnly: production,
    },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/public", express_1.default.static("./public"));
app.use("/auth", auth_1.default);
app.use("/locations", location_1.default);
app.use("/categories", category_1.default);
app.use("/rents", rent_1.default);
app.use("/reservations", reservation_1.default);
app.use("/reviews", review_1.default);
app.use("/favorites", favorite_1.default);
app.use("/users", user_1.default);
app.listen(PORT, function () {
    console.log("Server is running on ".concat(BASE_URL));
});
