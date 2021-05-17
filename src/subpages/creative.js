import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Image1 from '../images/portfolio/ipad-work.jpg'
import Image2 from '../images/ipad/ipad-2.jpg'
import Image3 from '../images/ipad/ipad-3.jpg'
import Image4 from '../images/ipad/ipad-4.jpg'
import Image5 from '../images/ipad/ipad-5.jpg'
import Image6 from '../images/ipad/ipad-6.jpg'

function Creative() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage">Creative Stuff</h2>
				<p className="paragraph-subpage">Artwork created with Procreate.</p>
			</section>
			<section className="subpageImagesContainer">
				<div className="subpageImages">
					<img src={Image1} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image2} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image3} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image4} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image5} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image6} alt=""></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Creative
