import React from "react"
import Todos from "./Todos"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default class Layout extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<Footer />
			</div>
		)
	}
}