import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import About from './components/About';
import Home from './components/Home';
import Pricing from './components/Pricing';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="pricing" component={Pricing} />
      </Route>
    </Router>,
    document.getElementById('app')

  );
}