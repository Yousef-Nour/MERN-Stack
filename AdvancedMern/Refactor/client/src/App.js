import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import ShowProduct from './views/ShowProduct';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ShowProduct path="/product/:id"/>
        <UpdateProduct path="product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
