import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './navigation/navigation';
import SearchScreen from './search/search-screen';
import Error from './error/error';

import './App.css';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <div className="container-content">
            <Route path="/search" component={SearchScreen} exact />
            {/* <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/> */}
            <Route component={Error} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
