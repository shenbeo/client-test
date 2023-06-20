import './App.css';
import  { HashRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/home' element={<Home/>}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
