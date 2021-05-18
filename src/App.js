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
		<Router basename={process.env.PUBLIC_URL}>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>

				<Route exact path="/bachelor">
					<Bachelor />
				</Route>
				<Route exact path="/book">
					<Book />
				</Route>
				<Route exact path="/creative">
					<Creative />
				</Route>
				<Route exact path="/pomodoro">
					<Pomodoro />
				</Route>
				<Route exact path="/redesign">
					<Redesign />
				</Route>
				<Route exact path="/zlideon">
					<Zlideon />
				</Route>
				<Route exact path="/">
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
