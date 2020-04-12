import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './components/About';
import GalaxyInfo from './components/GalaxyInfo';
import Home from './containers/Home';
import PredictionResults from './components/PredictionResults';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/galaxy-info'>
          <GalaxyInfo />
        </Route>
        <Route path='/results'>
          <PredictionResults />
        </Route>
      </Switch>
    </Router>
  );
}