'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Todos from './components/Todos';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={Layout}>
  	<IndexRoute component={Layout}/>
    <Route path="/todos" component={Todos}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;
