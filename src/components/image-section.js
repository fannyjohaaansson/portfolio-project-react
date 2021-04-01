import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/ipad-work.jpg'
import image2 from '../images/Forpackningar_pasar.jpg'
import image3 from '../images/bruno-kelzer-Dw6tBa20afk-unsplash.jpg'

function imageSection() {
	return (
		<section className="imageContainer">
			<div className="imageLeftContainer">
				<div className="imageLeft">
					<img src={image1} alt=""></img>

					<h5 className="imgText">Creative Stuff</h5>
					<div className="overlay1"></div>
				</div>
				<Link to="/projects">
					<div className="contact-me-button portfolio" align="center">
						<span>See more of my work</span>
					</div>
				</Link>
			</div>

			<div className="imageRight">
				<div className="imageUpper">
					<img src={image2} alt=""></img>
					<h5 className="imgText2">Graphic Design</h5>
					<div className="overlay2"></div>
				</div>
				<div className="imageBottom">
					<img src={image3} alt=""></img>
					<h5 className="imgText3">Frontend Developer</h5>
					<div className="overlay3"></div>
				</div>
			</div>
		</section>
	)
}

export default imageSection
