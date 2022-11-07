import React from 'react'
import Carts from '../components/Carts'
import { posts } from "../data"
const Home = () =>
{
	return (
		<div className="home">
			{posts.map((post) => (
				<Carts key={post.id} post={post} />
			))}
		</div>
	)
}

export default Home