import React from 'react'
// import Selfie from '../images/selfie.jpg'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<section className="header-container">
			{/* <div className="figure">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#ECD288"
						d="M41.3,-66.2C52.8,-56.9,60.8,-44.2,66.3,-30.7C71.7,-17.2,74.6,-3,72.1,9.9C69.6,22.9,61.6,34.7,51.7,43C41.7,51.3,29.8,56,18.2,57.1C6.7,58.3,-4.4,55.7,-19.7,56.2C-35,56.7,-54.4,60.3,-62.5,53C-70.5,45.7,-67.2,27.5,-66.6,11.5C-66,-4.5,-68,-18.2,-63.6,-29.6C-59.2,-40.9,-48.5,-49.8,-36.8,-59C-25.2,-68.2,-12.6,-77.7,1.2,-79.5C14.9,-81.3,29.9,-75.5,41.3,-66.2Z"
						transform="translate(100 100)"
					/>
				</svg>{' '}
			</div> */}
			<div className="intro-text">
				<h2>Hello there!</h2>
				<p>
					Welcome to my portfolio. I am a graphic designer who's currently
					studying frontend developer at Hyper Island in stockholm. I will
					showcase both graphic design work, creative stuff from my freetime and
					some frontend work.
				</p>
				<Link to="/contact">
					<div className="contact-me-button contact" align="center">
						<span>Contact me</span>
					</div>
				</Link>
			</div>
			{/* <div className="intro-selfie">
				<img src={Selfie} alt=""></img>
			</div> */}
		</section>
	)
}

export default Header
