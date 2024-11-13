import React from 'react';
import { Link } from 'react-router-dom';

const AsideBar = () => {
  return (
    <div style={{position: ""}}>
         <div className="as" style={{position: "" }}>
        <Link style={{textDecoration:"none" , marginTop: "10px"}} to={'/'}>Home</Link>
        <Link style={{textDecoration:"none"}} to={'/student'}>Student</Link>
        <Link style={{textDecoration:"none"}} to={'/teceher'}>Teceher</Link>
        <Link style={{textDecoration:"none"}} to={'/signin'}>SignIn</Link>
        <Link  style={{textDecoration:"none"}} to={'/addnewnotice'}>AddNewNotice</Link>
        <Link  style={{textDecoration:"none"}} to={'/addnewteceher'}>AddNewTeceher</Link>
     </div>
      
    </div>
  )
}

export default AsideBar