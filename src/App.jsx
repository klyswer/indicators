import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { indicators } from './mockData';
import Indicators from './components/indicators';
import logo from './logo.svg';
import { getIndicatorsAction } from './reducers/indicators/IndicatorsAction';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { indicators } =useSelector(store => store?.IndicatorInfo);
  useEffect(() => {
    dispatch(getIndicatorsAction())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
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
