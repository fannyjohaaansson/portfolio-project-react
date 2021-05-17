import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Image from '../images/portfolio/pomodoro-mockup.jpg'
function Pomodoro() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage">Pomodoro clock</h2>
				<p className="paragraph-subpage">
					A small school project built in react JS. The pomodoro technique
					allows you to make the time more efficient.
				</p>
				<a
					href="https://fannyjohaaansson.github.io/pomodoro-clock/"
					className="link"
				>
					<p className="paragraph-subpage">Try it!</p>
				</a>
			</section>
			<section className="subpageImagesContainer">
				<div className="subpageImages" id="pomodoro">
					<img src={Image} alt=""></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Pomodoro
