import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

//import App from './App.js'
import AsideBar from './components/AsideBar.jsx';
import Home from './pages/Home.jsx';
import Student from './pages/Student.jsx';
import Teceher from './pages/Teceher.jsx';
import Signin from './pages/Signin.jsx';
import AddNewNotice from './pages/AddNewNotice.jsx';
import AddNewTeceher from './pages/AddNewTeceher.jsx';
const App = () => {
 const [user, setUser] = useState([]);
  useEffect(()=> {
    const fetchUser = async () =>{
      try {
        const response = await axios.get("http://localhost:8000/api/v1/user/me", {withCredentials: true});
       // setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
       // setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
      },[]
    )
  return (
    <div>


<AsideBar/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/student' element={<Student />} />
    <Route path='/teceher' element={<Teceher />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/addnewnotice' element={<AddNewNotice/>} />
    <Route path='/addnewteceher' element={<AddNewTeceher/>} />
  </Routes>


      
    </div>
  )
}

export default App
