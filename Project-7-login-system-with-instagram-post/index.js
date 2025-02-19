const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const port = 9000;

connectDB();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'rnw4',
    name: 'mahadev',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", require("./routes/indexRoutes"));

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    }
    console.log(`Server is running on port ${port}`);
});
