import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<>
			<div className="navContainer">
				<div className="logoContainer">
					<Link to="/">
						<h3>fanny johansson</h3>
					</Link>
				</div>
				<div className="navMenu">
					<ul>
						<Link to="/about">
							<li className="navLink">About me</li>
						</Link>
						<Link to="/contact">
							<li className="navLink">Contact</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Nav
