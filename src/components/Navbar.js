import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user }) =>
{
	const logout = () =>
	{
		window.open("http://localhost:4200/auth/logout", "_self");
	};
	return (
		<div className="navbar">
			<span className="logo"> <Link to="/">Lama App</Link> </span>
			{user ? (
				<ul className="list">
					<li className="litsItem">
						<img className="avatar" src={user.photos[0].value} alt="" />
					</li>
					<li className="listItem">
						{user.displayName}
						{user.username}
					</li>
					<li className="listItem" onClick={() => logout()}>
						Logout
					</li>
				</ul>
			) : (<Link to="/login">Login</Link>)}

		</div>
	)
}

export default Navbar