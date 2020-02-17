import React from 'react'
import '../css/main.css'
import ImageHeader from './ImageHeader'

export default class ContenuMain extends React.Component {

    render() {
        return (
            <main>
				<ImageHeader/>
				<span id="ref_to_bot"></span>
				<h1 id="title_content">Take a look at these posts</h1>

			</main>
        )
    }
}