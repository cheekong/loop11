import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faVideo, faTimes, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';

import Dashboard from './containers/Dashboard/Dashboard';

library.add(faStroopwafel, faVideo, faTimes, faCheckCircle, faTimesCircle);

class App extends Component {
  render() {
    
    return (
      <div className='App'>
        <Dashboard />
      </div>
    );
  }
}

export default App;
