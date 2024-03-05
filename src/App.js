import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Form from './compo/Fom/Form';
import Header from './compo/Header';
import Rides from './pages/Rides'
import Services from './pages/Services';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/signIn" element ={<Login/>}/>
    <Route path="/rides" element ={<Rides />}/>
    <Route path="/services" element ={<Services/>}/>
    <Route path="/form" element ={<Form />}/>

    </Routes>
    </>
    
  );
}

export default App;
