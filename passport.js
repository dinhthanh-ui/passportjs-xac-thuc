// import google from 'passport-google-oauth20';
// const GoogleStrategy = google.Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "361945649077-k1rumdvn3gnr4nf9fb6va41nlrp0fsoa.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "4c3a768e144e70b098b2"
const GITHUB_CLIENT_SECRET = "00eef140dc78d22041b989cb2adad4505b0e77d8"

const FACEBOOK_APP_ID = ""
const FACEBOOK_APP_SECRET = ""

passport.use(new GoogleStrategy({
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	callbackURL: "/auth/google/callback"
},
	function (accessToken, refreshToken, profile, done)
	{
		``
		done(null, profile);
	}
));
passport.use(new GithubStrategy({
	clientID: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
	callbackURL: "/auth/github/callback"
},
	function (accessToken, refreshToken, profile, done)
	{
		done(null, profile);
	}
));
// passport.use(new FacebookStrategy({
// 	clientID: FACEBOOK_CLIENT_ID,
// 	clientSecret: FACEBOOK_CLIENT_SECRET,
// 	callbackURL: "/auth/facebook/callback"
// },
// 	function (accessToken, refreshToken, profile, done)
// 	{
// 		done(null, profile);
// 	}
// ));

passport.serializeUser((user, done) =>
{
	done(null, user);
});

passport.deserializeUser((user, done) =>
{
	done(null, user);
});
