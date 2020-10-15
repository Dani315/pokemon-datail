import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import PrintPokemon from '../Pages/PrintPokemon';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Pokemon/:name/PrintPokemon" component={PrintPokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
