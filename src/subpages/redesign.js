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
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
					If you are going to use a passage of Lorem Ipsum, you need to be sure
					there isn't anything embarrassing hidden in the middle of text. All
					the Lorem Ipsum generators on the Internet tend to repeat predefined
					chunks as necessary, making this the first true generator on the
					Internet. It uses a dictionary of over 200 Latin words, combined with
					a handful of model sentence structures, to generate Lorem Ipsum which
					looks reasonable. The generated Lorem Ipsum is therefore always free
					from repetition, injected humour, or non-characteristic words etc.
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
