import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Header from './compo/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="main-container">
    <Header/>
    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/login" element ={<Login/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
