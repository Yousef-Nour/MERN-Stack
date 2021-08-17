import './App.css';
import {Router} from '@reach/router';
import Product from './components/Product';
import ProductUpdate from './components/ProductUpdate';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Product path="/product/:id"/>
        <ProductUpdate path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
