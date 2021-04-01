import React from 'react'
import { Link } from 'react-router-dom'
import Github from '../images/icons/GitHub-Mark-64px.png'
import Linkedin from '../images/icons/linkedin.png'

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
				<ul className="socialMediaContainer">
					<li className="SocialMediaIcons">
						<a href="https://github.com/fannyjohaaansson">
							<img src={Github} alt=""></img>
						</a>
					</li>
					<li className="SocialMediaIcons">
						<a href="https://www.linkedin.com/in/fanny-johansson-69996814a/">
							<img src={Linkedin} alt=""></img>
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Footer
