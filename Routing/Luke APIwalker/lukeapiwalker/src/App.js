import {Router} from '@reach/router'
import './App.css';
import DisplaySelectedForm from './components/DisplaySelectedForm';
import Form from './components/Form';
import React,{useState} from 'react'

function App() {

  return (
    <div className="App">
      <Form />
      <Router>
        <DisplaySelectedForm path="/:id/:resource" />
      </Router>
      
    </div>
  );
}

export default App;
