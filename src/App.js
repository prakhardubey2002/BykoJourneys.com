import logo from './logo.svg';
import './App.css';
import { useGlobalContext } from './context/AppContext';
import UpperTab from './Components/UpperTab/UpperTab';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
function App() {
  const { destinationarray } = useGlobalContext();
  return (
    <div className="App">
      <UpperTab />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
