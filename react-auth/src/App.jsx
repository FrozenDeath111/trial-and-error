import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Personalauth from './Components/Personalauth/Personalauth';
import Home from './Components/Home/Home';
import Protected from './Components/Protected/Protected';
import { createContext, useState } from 'react';

export const userContext = createContext();

function App() {
  const [userinfo, setUserinfo] = useState({
      name:'',
      email:'',
      photo:''
  });

  return (
    <Router>
      <div>
        <Header></Header>
        <userContext.Provider value={[userinfo, setUserinfo]}>
        <Routes>
          <Route path='/' element={<Protected/>}>
            <Route path='/' index element={<Home/>} />
          </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/personalauth' element={<Personalauth/>} />
        </Routes>
        </userContext.Provider>
      </div>
    </Router>
  );
}

export default App;
