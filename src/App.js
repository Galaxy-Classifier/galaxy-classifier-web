import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './pages/About';
import GalaxyInfo from './pages/GalaxyInfo';
import Home from './pages/Home';
import PredictionResults from './pages/PredictionResults';

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