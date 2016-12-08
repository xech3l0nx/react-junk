'use strict';
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage'
import Todos from './components/Todos'
import NotFoundPage from './components/NotFound';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="todos" component={Todos}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;

// 'use strict';
// import React from 'react'
// import { Route, IndexRoute } from 'react-router'
// import Layout from './components/Layout';
// import Todos from './components/Todos';
// import NotFound from './components/NotFound';

// const routes = (
// 	<Route component={Layout}>
// 	<Route path="/" component={Todos} />
// 	</Route>
// );

// export default routes;
