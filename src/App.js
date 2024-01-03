
import './App.css';

import UpperTab from './Components/UpperTab/UpperTab';
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Destinationtemplate from './Pages/Destinationtemplate';
import Contactus from './Pages/Contactus';
function App() {
  return (
    <div className="App">
      <div className="topfixed">
        <UpperTab />
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination/:id/:name' element={<Destinationtemplate />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>

    </div>
  );
}

export default App;
