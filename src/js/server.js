'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux'
import routes from './routes';
import NotFoundPage from './components/NotFound';

const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'))

app.use(Express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
		if(err) {
			return res.status(500).send(err.message)
		}

		if(redirectLocation) {
			return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		}

		let markup;
		//se esiste renderProps significa che ha matchato una rotta e che quindi a quella rotta 
		//è aggangiato un componente
		if(renderProps) {
			//the renderding of the markup should be async
			markup = renderToString(<RouterContext {...renderProps}/>)
		} else {
			// otherwise we can render a 404 page
			markup = renderToString(<NotFoundPage/>);
			res.status(404);
		}

		// render the index template with the embedded React markup
		return res.render('index', { markup });
	})
})

app.listen(3000, () => {
	console.log('app listening on port 3000')
})