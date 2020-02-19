import React from 'react'
import '../css/main.css'
import ImageHeader from './ImageHeader'
import image from "../assets/image.jpg"

export default class ContenuMain extends React.Component {

    render() {
        return (
            <main>
				<ImageHeader image={image}/>
				<span id="ref_to_bot"></span>
				<h1 id="title_content">Take a look at these posts</h1>

			</main>
        )
    }
}