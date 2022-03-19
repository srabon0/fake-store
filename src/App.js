
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';

function App() {
  const [count,setCount] = useState(0);
  const setCartCount = ()=>{setCount(count+1);}
  return (
    <div className="App">
      <section className='m-3'>
      <Menu count={count} ></Menu>

      <Products setCartCount={setCartCount}></Products>

      </section>
     
      
    </div>
  );
}

export default App;
