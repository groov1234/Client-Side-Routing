import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

function Rental() {
  return <h1>Rental</h1>
}

function NotFound() {
  return <h1>Page not Found</h1>;
}


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={MovieList} exact />
      <Route path="/movies/rental" component={Rental} />
      <Route path="/movies/:id" component={Movie} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
document.getElementById('root')
);