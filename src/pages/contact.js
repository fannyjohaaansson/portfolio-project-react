import React from 'react'
import Nav from '../components/nav.js'
import Github from '../images/icons/GitHub-Mark-64px.png'
import Linkedin from '../images/icons/linkedin.png'

function contact() {
	return (
		<section className="contactContainer">
			<Nav />
			<section className="contactText">
				<h2 className="contactHeading">Hey! let's talk </h2>
				<p className="contactP">
					fannyjohansson@hyperisland.se <br /> 070 330 86 02
				</p>
				<ul className="social-media-project">
					<li className="social-media-icons-project">
						<a href="https://github.com/fannyjohaaansson">
							<img src={Github} alt=""></img>
						</a>
					</li>
					<li className="social-media-icons-project">
						<a href="https://www.linkedin.com/in/fanny-johansson-69996814a/">
							<img src={Linkedin} alt=""></img>
						</a>
					</li>
				</ul>
			</section>
		</section>
	)
}

export default contact
