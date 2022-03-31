import './App.css';
import { Route, Routes } from 'react-router-dom';
import Currencies from './pages/Currencies.js';
import Main from './pages/main';
import Price from './pages/Price.js'

function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/currencies' element={ <Currencies /> } />
        <Route path='/price' element={ <Price /> } />
      </Routes>
    </div>
    
  );
}

export default App;
