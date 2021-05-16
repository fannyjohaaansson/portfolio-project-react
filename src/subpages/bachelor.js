import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Image1 from '../images/bachelor/box.jpg'
import Image2 from '../images/bachelor/bags-1.jpg'
import Image3 from '../images/bachelor/bags-2.jpg'
import Image4 from '../images/bachelor/recipie.jpg'

function Bachelor() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage"> Bachelor</h2>
				<p className="paragraph-subpage">
					My bachelor project from the last year in graphic design and
					communication. Klimatmat is a company that delivers recipes gathered
					in reusable packaging. The app allows you to pick the recipes,
					portions and allergies that fits your needs. The production takes
					place in the Northern Sweden, where also most of the fruits and
					vegetables are grown. When you have used the products, you simply put
					out your wooden box with the glass packaging and put it up for
					collect. Klimatmat takes the packaging back, cleans it and reuses it.
				</p>
			</section>
			<section className="subpageImagesContainer">
				<div className="subpageImages">
					<img src={Image1} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image3} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image2} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image4} alt=""></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Bachelor
