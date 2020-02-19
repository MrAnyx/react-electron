import React from 'react'
import '../css/main.css'
import logo from '../assets/b_black.png'
const { ipcRenderer }  = window.require("electron")

export default class Footer extends React.Component {
	constructor(){
		super()
		this.handleOnClick = this.handleOnClick.bind(this)
	}

	handleOnClick(e){
		e.preventDefault()
		console.log("bonjour")
		ipcRenderer.send("test", "bonjour")
		ipcRenderer.once("test-reply", (evt, args) => {
			console.log(args)
		})
	}

	render() {
		return (
			<footer>
				<div id="footer_color">
					<div id="text_footer">
						<h1>Lorem ipsum dolor sit</h1>
						<div id="buttons_image" className="mt-4">
							<a href="./">Previous project</a>
							<a href="./">► Watch a video</a>
						</div>
					</div>
				</div>

				<div id="footer">
					<div className="footer_flex">
						© BIOS
					</div>
					<div className="footer_flex">
						<div id="logo_footer" className="mx-auto">
							<img src={logo} alt="logo footers"/>
						</div>
					</div>
					<div className="footer_flex text-right">
						<a href="./">Privacy</a>
					</div>
				</div>

				<button onClick={this.handleOnClick.bind(this)}>click</button>
		
			</footer>
		)
	}
}