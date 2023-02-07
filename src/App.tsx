import logo from './logo.svg';
import './App.css';
import Indicators from './components/indicators';
import { indicators } from './mockData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Indicators indicators={indicators}/>
    </div>
  );
}

export default App;
