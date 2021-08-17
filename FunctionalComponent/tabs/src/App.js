import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs items = {[
        {tab : "Tab1", content : "Tab1 content is showing here"},
        {tab : "Tab2", content : "Tab2 content is showing here"},
        {tab : "Tab3", content : "Tab3 content is showing here"},
        {tab : "Tab10", content : "Tab10 content is showing here"}
      ]}/>
    </div>
  );
}

export default App;
