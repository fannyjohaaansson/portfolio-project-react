import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// css
import './css/App.css'

// Components
import Nav from './components/nav.js'
import Images from './components/image-section.js'

// Pages
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/contact">
					<Contact />
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
			<Images />
		</div>
	)
}

export default App
