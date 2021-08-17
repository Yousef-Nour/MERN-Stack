import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Update path="/edit/:id"/>
        <Create path="/new"/>
      </Router>
    </div>
  );
}

export default App;
