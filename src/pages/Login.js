import React from 'react'
import Google from '../image/google.png';
import Github from '../image/github.png';
import Facebook from '../image/facebook.png';
const Login = () =>
{

	const handleGoogle = () =>
	{
		window.open("http://localhost:4200/auth/google", "_self")
	}
	const handleGithub = () =>
	{
		window.open("http://localhost:4200/auth/github", "_self")
	}
	const handleFacebook = () =>
	{
		window.open("http://localhost:4200/auth/github", "_self")
	}

	return (
		<div className="login">
			<h1 className="loginTitle">
				Choose a Login Method
			</h1>
			<div className="wrapper">
				<div className="left">
					<div className="loginButton google" onClick={() => handleGoogle()}>
						<img src={Google} alt="google" className="icon" />
						Google
					</div>
					<div className="loginButton github" onClick={() => handleGithub()}>
						<img src={Github} alt="google" className="icon" />
						Github
					</div>
					<div className="loginButton facebook" onClick={() => handleFacebook()}>
						<img src={Facebook} alt="google facebook" className="icon" />
						Facebook
					</div>
				</div>
				<div className="center">
					<div className="line" />
					<div className="or">OR</div>
				</div>
				<div className="right">
					<input type="text" placeholder="Username" />
					<input type="text" placeholder="Password" />
					<button className="submit">Login</button>
				</div>
			</div>
		</div>
	)
}

export default Login