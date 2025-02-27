// Auth pages
import Auth from './Pages/Auth/Auth';
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import VerifySignUp from './Pages/Auth/VerifySignUp'

// User App pages
import User from './Pages/User/Main/User';
import About from './Pages/User/Main/About/About';
import Home from './Pages/User/Main/Home/Home';
import Profile from './Pages/User/Main/Profile/Profile'
import Cars from './Pages/User/Main/Cars/Cars';

//Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './Pages/Admin/Admin';


export function UserApp() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<SignIn />}></Route>
          <Route path='register' element={<SignUp />}></Route>
          <Route path='otp' element={<VerifySignUp />}></Route>
        </Route>
        <Route path='/' element={<User />}>
          <Route path='' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='cars' element={<Cars/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export function AdminApp(){
  return(
    <Admin/>
  )
}

