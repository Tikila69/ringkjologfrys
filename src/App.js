import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';
import Services from './pages/services';
import LuftLuft from './pages/luftluft';
import LuftVann from './pages/luftvann';
import VaeskeVann from './pages/vaeskevann';
import Kjolerom from './pages/kjolerom';

function App() {
  document.title = "Ring Kjøl og Frys"
  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Products/LuftLuft' element={<LuftLuft />} />
        <Route path='/Products/LuftVann' element={<LuftVann />} />
        <Route path='/Products/VaeskeVann' element={<VaeskeVann />} />
        <Route path='/Products/Kjolerom' element={<Kjolerom/>}/>
        <Route path='/Services' element={<Services />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;