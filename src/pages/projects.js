import React from 'react'

import Nav from '../components/nav.js'
import Footer from '../components/footer.js'

import IpadWork from '../images/portfolio/ipad-work.jpg'
import Packaging from '../images/portfolio/Forpackningar_pasar.jpg'
import ZlideLogo from '../images/portfolio/zlideon-logo.jpg'
import Garlic from '../images/garlic/garlic.jpg'
import Book from '../images/portfolio/Fram_5.jpg'
import Pomodoro from '../images/portfolio/pomodoro-mockup.png'
import { Link } from 'react-router-dom'
import Github from '../images/icons/GitHub-Mark-64px.png'
import Linkedin from '../images/icons/linkedin.png'

function projects() {
	return (
		<section>
			<Nav />
			<section className="project-intro">
				<h2>Project showcase</h2>
				<p>
					Down below is a showcase of some of my recent work. <br /> To see more
					of my frontend work, switch over to my github.
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
			<section className="project-container">
				<div className="project-images">
					<Link to="/zlideon">
						<img className="project-image" src={ZlideLogo} alt=""></img>
						<h5 className="imgText-portfolio">ZlideOn webpage</h5>
						<div className="overlay-portfolio"></div>
					</Link>
				</div>
				<div className="project-images">
					<Link to="/pomodoro">
						<img className="project-image" src={Pomodoro} alt=""></img>
						<h5 className="imgText-portfolio">Pomodoro clock</h5>
						<div className="overlay-portfolio"></div>
					</Link>
				</div>
				<div className="project-images">
					<Link to="/bachelor">
						<img className="project-image" src={Packaging} alt=""></img>
						<h5 className="imgText-portfolio">Bachelor project</h5>
						<div className="overlay-portfolio"></div>
					</Link>
				</div>
				<div className="project-images">
					<Link to="/creative">
						<img className="project-image" src={IpadWork} alt=""></img>
						<h5 className="imgText-portfolio">Creative Stuff</h5>
						<div className="overlay-portfolio"></div>
					</Link>
				</div>
				<div className="project-images">
					<Link to="/redesign">
						<img className="project-image" src={Garlic} alt=""></img>
						<h5 className="imgText-portfolio">Redesign of packaging</h5>
						<div className="overlay-portfolio"></div>
					</Link>
				</div>
				<div className="project-images">
					<Link to="/book">
						<img className="project-image" src={Book} alt=""></img>
						<h5 className="imgText-portfolio">Book binding</h5>
						<div className="overlay-portfolio"></div>
					</Link>
				</div>
			</section>
			<Footer />
		</section>
	)
}

export default projects
