import React from 'react'

import IpadWork from '../images/portfolio/ipad-work.jpg'
import Packaging from '../images/bachelor/bags-1.jpg'
import ZlideLogo from '../images/zlideon/zlideon-front-1.png'
import Garlic from '../images/garlic/garlic-1.jpg'
import Book from '../images/Book/book-1.jpg'
import Pomodoro from '../images/portfolio/pomodoro-mockup.jpg'
import { Link } from 'react-router-dom'

function projectShowCase() {
	return (
		<section>
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
		</section>
	)
}

export default projectShowCase
