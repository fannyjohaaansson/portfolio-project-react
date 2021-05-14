import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// css
import './css/App.css'

// Components
import Nav from './components/nav.js'
import Footer from './components/footer.js'
// import Images from './components/image-section.js'
import Intro from './components/intro-section.js'
import Showcase from './components/project-showcase.js'

// Pages
// import Projects from './pages/projects'
import Contact from './pages/contact'
import About from './pages/about.js'
import Bachelor from './subpages/bachelor'
import Book from './subpages/book'
import Creative from './subpages/creative'
import Pomodoro from './subpages/pomodoro'
import Redesign from './subpages/redesign'
import Zlideon from './subpages/zlideon'

function App() {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>

				<Route path="/bachelor">
					<Bachelor />
				</Route>
				<Route path="/book">
					<Book />
				</Route>
				<Route path="/creative">
					<Creative />
				</Route>
				<Route path="/pomodoro">
					<Pomodoro />
				</Route>
				<Route path="/redesign">
					<Redesign />
				</Route>
				<Route path="/zlideon">
					<Zlideon />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}
const Home = () => {
	return (
		<div className="mainContainer">
			<Nav />
			<Intro />
			<Showcase />
			<Footer />
		</div>
	)
}

export default App
