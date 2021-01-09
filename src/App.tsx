import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './navigation/navigation';
import Search from './search/search';
// import Error from './error/error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Search} exact />
            {/* <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/> */}
            {/* <Route component={Error} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
