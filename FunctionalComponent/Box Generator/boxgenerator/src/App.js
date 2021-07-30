import './App.css';
import CreateBox from './components/CreateBox';
import ShowBoxes from './components/ShowBoxes';
import React,{useState} from 'react';

function App() {
  const[boxes, setBoxes]=useState([])
  const addBox = (box)=>{
    setBoxes([...boxes, box]);
  }
  return (
    <div className="App">
      <CreateBox addBox={addBox}/>
      <ShowBoxes boxes={boxes}/>
    </div>
  );
}

export default App;
