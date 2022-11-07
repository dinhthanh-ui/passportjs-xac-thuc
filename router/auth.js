// import express from "express";
const express = require("express");
const passport = require("passport");
const router = express.Router();

const CLIENT_URL = "http://localhost:3000/"

router.get("/login/failed", (req, res) =>
{
	res.status(401).json({
		success: false,
		message: "Failed"
	})
});

router.get("/login/success", (req, res) =>
{
	if (req.user)
	{
		// res.cookie("jwt", req.user, { httpOnly: true, maxAge: 60 * 60 * 1000 });
		res.status(200).json({
			success: true,
			message: "thanh cong",
			user: req.user,
		})
	} else
	{
		res.status(401).json({
			success: false,
			message: "Failed"
		})
	}
});

router.get("/logout", (req, res) =>
{
	req.logout(function (err)
	{
		if (err) { return next(err); }
		res.redirect(CLIENT_URL)
	});
});


router.get("/google", passport.authenticate('google', { scope: ['profile'] }));
router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
router.get("/github", passport.authenticate('github', { scope: ['user:email'] }));
router.get(
	"/github/callback",
	passport.authenticate("github", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
router.get("/facebook", passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));
router.get(
	"/facebook/callback",
	passport.authenticate("facebook", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

module.exports = router