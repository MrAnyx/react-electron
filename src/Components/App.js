import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import ContenuMain from './ContenuMain'
import ImageHeader from "./ImageHeader"
import image from "../assets/background2.jpg"

export default class App extends React.Component {
	render() {
		
		return (
			<Router>
				<Header/>

				<Switch>
					<Route exact path="/">
						<ContenuMain/>
						<Footer/>
					</Route>
					<Route exact path="/test">
						<ImageHeader image={image}/>
						<Footer/>
					</Route>
					<Route exact path="/test1">
						<Footer/>
					</Route>
				</Switch>

			</Router>
	
		)	
	}
}

