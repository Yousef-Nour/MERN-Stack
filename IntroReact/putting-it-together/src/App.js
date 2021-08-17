import './App.css';
import Person from './components/Person';
function App() {
  return (
    <div className="App">
      <Person firstName = "Bara" lastName="Salameh" age = {23} hairColor = "blonde"></Person>
      <Person firstName = "Jad" lastName="Dawani" age = {25} hairColor = "bald"></Person>
    </div>
  );
}

export default App;
