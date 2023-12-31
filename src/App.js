import logo from './logo.svg';
import './App.css';
import { useGlobalContext } from './context/AppContext';
import UpperTab from './Components/UpperTab/UpperTab';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Destinationtemplate from './Pages/Destinationtemplate';
function App() {
  return (
    <div className="App">
      <UpperTab />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination/:id/:name' element={<Destinationtemplate/>}/>
      </Routes>

    </div>
  );
}

export default App;
