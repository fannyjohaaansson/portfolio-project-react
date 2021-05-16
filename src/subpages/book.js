import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Placeholder from '../images/placeholder.jpg'

function Book() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage">Book</h2>
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
				<div className="subpageImages">
					<img src={Placeholder}></img>
				</div>
				<div className="subpageImages">
					<img src={Placeholder}></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Book
