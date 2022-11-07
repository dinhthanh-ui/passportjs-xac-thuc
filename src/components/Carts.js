import React from 'react'
import { Link } from 'react-router-dom'

const Carts = ({ post }) =>
{
	return (
		<div className="card">
			<Link to={`/post/${post.id}`}>
				<span className="title">{post.title}</span>
				<img src={post.img} alt="" className="img" />
				<p className=" desc">{post.desc}</p>
				<button className="carButton">Read More</button>
			</Link>
		</div>
	)
}

export default Carts