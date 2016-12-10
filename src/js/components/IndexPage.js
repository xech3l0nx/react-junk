'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className="home">
			<h1>Hello World!!!</h1>
			<Link to={`/todos`} activeClassName="active">
			Todo List
			</Link>;
			<Link to={`/sticaiser`} activeClassName="active">
			Stocazzo
			</Link>;
			</div>
		);
	}
}
