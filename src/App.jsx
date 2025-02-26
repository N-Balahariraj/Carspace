// Auth pages
import Auth from './Pages/Auth/Auth';
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import VerifySignUp from './Pages/Auth/VerifySignUp'

// App pages
import Main from './Pages/Main/Main';
import About from './Pages/Main/About/About';
import Home from './Pages/Main/Home/Home';
import Profile from './Pages/Main/Profile/Profile'
import Cars from './Pages/Main/Cars/Cars';

//Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<SignIn />}></Route>
          <Route path='register' element={<SignUp />}></Route>
          <Route path='otp' element={<VerifySignUp />}></Route>
        </Route>
        <Route path='/' element={<Main />}>
          <Route path='' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='cars' element={<Cars/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
