import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Image2 from '../images/zlideon/zlideon-front.jpg'
import Image3 from '../images/zlideon/zlideon-info.jpg'
import Image4 from '../images/zlideon/zlideon-shop.jpg'

function Zlideon() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage">Zlideon</h2>
				<p className="paragraph-subpage">
					Zlideon started off as a school project, where my group built their
					English page with Shopify. It later evolved to me being part time
					hired after the project, to build them a Swedish replica on another
					domain.
				</p>
			</section>
			<section className="subpageImagesContainer" id="zlideonBg">
				<div className="subpageImages" id="zlideon">
					<img src={Image2} alt=""></img>
				</div>

				<div className="subpageImages" id="zlideon">
					<img src={Image4} alt=""></img>
				</div>
				<div className="subpageImages" id="zlideon">
					<img src={Image3} alt=""></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Zlideon
