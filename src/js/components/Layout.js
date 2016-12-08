import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default class Layout extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<div className="app-content">{this.props.children}</div>
				<Footer />
			</div>
		)
	}
}