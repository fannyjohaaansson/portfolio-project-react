import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<>
			<div className="footerContainer">
				<ul className="links-subpages">
					<Link to="/projects">
						<li>Portfolio</li>
					</Link>
					<Link to="/contact">
						<li>Contact</li>
					</Link>
				</ul>
				<ul>
					<li></li>
				</ul>
			</div>
		</>
	)
}

export default Footer
