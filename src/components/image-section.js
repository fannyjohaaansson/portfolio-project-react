import React from 'react'
// import { Link } from 'react-router-dom'
import image1 from '../images/ipad-work.jpg'
import image2 from '../images/placeholder.jpg'
import image3 from '../images/bruno-kelzer-Dw6tBa20afk-unsplash.jpg'

function imageSection() {
	return (
		<section className="imageContainer">
			<div className="imageLeft">
				<img src={image1} alt=""></img>

				<h5 className="imgText">Creative Stuff</h5>
				<div className="overlay1"></div>
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
