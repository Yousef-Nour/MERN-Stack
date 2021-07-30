import './App.css';
import Welcome from './components/Welcome';
import {Router} from '@reach/router'
import Variable from './components/Variable';

function App() {
  return (
    <div className="App">
      <Router>
          <Welcome path="home"/>
          <Welcome path="home/:color" />
          <Welcome path="home/:color/:backgroundColor"/>
          <Variable path="/:variable"/>
          <Variable path="/:variable/:color/:backgroundColor"/>
      </Router>
      
    </div>
  );
}

export default App;

