import logo from './logo.svg';
import './App.css';
import { useGlobalContext } from './context/AppContext';
function App() {
  const {destinationarray}=useGlobalContext();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         
        </p>
        {destinationarray.map(arr=>(
          <p>
            {arr}
          </p>
        ))}
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
