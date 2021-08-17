import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName="Bara Salameh" age="23" hairColor="blonde"/>
        <PersonCard firstName="Jad Dawani" age="25" hairColor="bald"/>
        <PersonCard firstName="Wadee" age="28" hairColor="black"/>
    </div>
  );
}

export default App;
