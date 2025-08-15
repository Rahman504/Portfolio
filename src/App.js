
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './portfolio';

function App() {
  return(
    <Routes>
        <Route path="/" Component={Portfolio}/>
    </Routes>
  )
}

export default App;
