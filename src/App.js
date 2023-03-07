import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Header from './compo/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="main-container">
    <Header/>
    <Routes>
    <Route path="/" element ={<Home/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
