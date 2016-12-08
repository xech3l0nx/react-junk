import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Router from './routes';
import store from "./store"

window.onload = () => {
	ReactDOM.render(<Router store={store} />, document.getElementById('main'));
}

//Isomorphic applications principles
//MODULE SHARING(WEBPACK)
//UNIVERSAL ROUTES
//UNIVERSAL API ACCESS
