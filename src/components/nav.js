import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<>
			<div className="navContainer">
				<div className="logoContainer">
					<Link to="/">
						<h3>Fanny Johansson</h3>
					</Link>
				</div>
				<div className="navMenu">
					<ul>
						<Link to="/projects">
							<li className="navLink">
								<span>Portfolio</span>
							</li>
						</Link>
						<Link to="/contact">
							<li className="navLink">
								<span>Contact</span>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	)
}

// let Links = document.querySelectorAll('.navLink')
// console.log(Links)

// Links.forEach((event) => {
// 	event.addEventListener('click', () => {
// 		// removeActiveClasses()
// 		navLink.classList.add('active')
// 		console.log('hello')
// 	})
// })

// export function removeActiveClasses() {
// 	Links.forEach((navLink) => {
// 		navLink.classList.remove('active')
// 	})
// }

export default Nav
