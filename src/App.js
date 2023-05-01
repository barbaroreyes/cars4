import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import Header from './compo/Header';

function App() {
  return (
    <div className='container'>
      <Header/>
    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/form" element ={<Form />}/>
    </Routes>
    </div>
    
  );
}

export default App;
