import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Router from './routes';
import store from "./store"

window.onload = () => {
	const app = document.getElementById('main')
	ReactDOM.render(<Router store={store}></Router>, app);
}

//Isomorphic applications principles
//MODULE SHARING(WEBPACK)
//UNIVERSAL ROUTES
//UNIVERSAL API ACCESS
