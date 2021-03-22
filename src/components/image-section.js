import React from 'react'
// import { Link } from 'react-router-dom'
import image1 from '../images/ipad-work.jpg'
import image2 from '../images/placeholder.jpg'
import image3 from '../images/bruno-kelzer-Dw6tBa20afk-unsplash.jpg'

function imageSection() {
	return (
		<div className="imageContainer">
			<div className="imageLeft">
				<img src={image1}></img>
			</div>
			<div className="imageRight">
				<div className="imageUpper">
					<img src={image2}></img>
				</div>
				<div className="imageBottom">
					<img src={image3}></img>
				</div>
			</div>
		</div>
	)
}

export default imageSection
