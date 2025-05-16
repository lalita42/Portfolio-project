
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Master from './Master';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Master/>}> 
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/about' element={<About/>}> </Route>
    <Route path='/services' element={<Services/>}> </Route>
    <Route path='/contact' element={<Contact/>}> </Route>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
