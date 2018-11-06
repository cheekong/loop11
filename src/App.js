import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faVideo, faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';

import Dashboard from './containers/Dashboard/Dashboard';

library.add(faStroopwafel, faVideo, faTimes, faCheckCircle);

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
