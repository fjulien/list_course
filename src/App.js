import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import MakeShopping from './components/MakeShopping';
import EndCommand from './containers/EndCommand';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/achat" component={MakeShopping} />
          <Route  path="/commande" component={EndCommand} />
        </Switch>
      </div>
    );
  }
}

export default App;
