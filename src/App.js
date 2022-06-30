import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header />

      <div>
        <Route path="/" exact> 
          <Home />
        </Route>

        <Route path="/cart" exact> 
          <Cart />
        </Route>
      </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
