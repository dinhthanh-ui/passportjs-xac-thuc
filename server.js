const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const expressSession = require("express-session");
const authRoute = require("./router/auth.js");
const passportSetup = require("./passport");

const app = express();

app.use((expressSession)({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
	origin: 'http://localhost:3000',
	method: 'GET,POST,PUT,DELETE',
	credentials: true
}))

app.use("/auth", authRoute)

app.listen("4200", () =>
{
	console.log("Server is run")
})