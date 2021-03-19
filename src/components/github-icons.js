import React from 'react'
import { Link } from 'react-router-dom'

function githubIcons() {
	return (
		<>
			<div className="githubIconsContainer">
				<div className="githubIcons">
					<ul>
						<Link to="/projects">
							<li>
								<span>
									<i>Portfolio</i>
								</span>
							</li>
						</Link>
						<Link to="/contact">
							<li>
								<span>Contact</span>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	)
}

export default githubIcons
