import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Image1 from '../images/Book/book-2.jpg'
import Image2 from '../images/Book/book-3.jpg'
import Image3 from '../images/Book/book-b.jpg'
import Image4 from '../images/Book/book-v.jpg'
import Image5 from '../images/Book/book-i.jpg'
import Image6 from '../images/Book/book-1.jpg'

function Book() {
	return (
		<div>
			<Nav />
			<section className="subpageContainer">
				<h2 className="heading-subpage">Book</h2>
				<p className="paragraph-subpage">
					A course in book binding, where we created a publishing company and
					bound the book. I created Codex publishing company where you can have
					a monthly subscription to coffee table books. The main book ”The book”
					is just a magazine to promote the company and the services they
					provide. I also made a cassette to my book for a more luxurious
					feeling. The book took around three days to put together.
				</p>
			</section>
			<section className="subpageImagesContainer">
				<div className="subpageImages">
					<img src={Image6} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image2} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image5} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image1} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image3} alt=""></img>
				</div>
				<div className="subpageImages">
					<img src={Image4} alt=""></img>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Book
