import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import {Router} from '@reach/router';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Header>
        <Router>
          <Main path="/players/list" />
          <Create path="/players/addplayer"/>
        </Router>
      </Header>
    </div>
  );
}

export default App;
