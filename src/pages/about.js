import React from 'react'
import Nav from '../components/nav.js'

import Selfie from '../images/selfie.jpg'

function About() {
	return (
		<section>
			<Nav />
			<section className="aboutContainer">
				<section>
					<h1 className="aboutHeader">Who am i?</h1>
					<p className="aboutP">
						{' '}
						I am a happy and open person who loves to learn new things and likes
						a challenge. I have a bachelor’s degree in graphic design and
						communication, and am now furthering my education as a front-end
						developer at Hyper Island.
					</p>
					<p className="aboutP skills">
						Skills: HTML, CSS, React, Javascript, Graphic Design, Photoshop,
						Illustator, Indesign, Figma, webflow, shopify
					</p>
				</section>
				<section className="selfieContainer">
					<img src={Selfie} className="selfieImage" alt=""></img>
				</section>
			</section>
		</section>
	)
}

export default About
