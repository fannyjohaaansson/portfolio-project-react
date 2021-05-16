import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Image1 from '../images/garlic/garlic-1.jpg'
import Image2 from '../images/garlic/garlic-2.jpg'
import Image3 from '../images/garlic/garlic-3.jpg'
import Image4 from '../images/garlic/garlic-plant.jpg'

function Redesign() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage">Redesign Garlic</h2>
				<p className="paragraph-subpage">
					A school project, the task was to redesign an existing product with a
					better packaging. I choose a garlic net in plastic. After reading up I
					discovered that the garlic thrives in dark cold places, such as an
					earth cellar. So I made an earth cellar out of carboard, with holes
					for keeping the moist out, a packaging that doesn’t let sunlight
					through and without any glue.
				</p>
			</section>
			<section className="subpageImagesContainer">
				<div className="subpageImages garlic">
					<img src={Image1} alt=""></img>
				</div>
				<div className="subpageImages garlic">
					<img src={Image2} alt=""></img>
				</div>
				<div className="subpageImages garlic">
					<img src={Image3} alt=""></img>
				</div>
				<div className="subpageImages garlic">
					<img src={Image4} alt=""></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Redesign
