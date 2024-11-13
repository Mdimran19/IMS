import { useState , useEffect} from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Notice from './pages/Notice';
import Signin from './pages/Signin';
import Admission from './pages/Admission';
import Footer from './components/Footer';
import Register from './pages/Register';
import { useContext } from 'react';
import { Context } from './main';
import 'leaflet/dist/leaflet.css';
import About from './pages/About';
import Teachers from './pages/Teachers';

 
const App = () => {
  const {isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(()=> {
const fetchUser = async () =>{
  try {
    const response = await axios.get("http://localhost:8000/api/v1/user/me", {withCredentials: true});
    setIsAuthenticated(true);
    setUser(response.data.user);
  } catch (error) {
    setIsAuthenticated(false);
    setUser({});
  }
};
fetchUser();
  },
[isAuthenticated]
  )

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/admission' element={<Admission/>} />
      <Route path='/notice' element={<Notice/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/teceher' element={<Teachers/>} />
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
