import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
//export const Context = createContext({ isAuthenticated: false });
export const Context = createContext({isAuthenticated: false})

const AppWrapper = () => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider 
    value={{isAuthenticated, setIsAuthenticated , user, setUser}}
    >
      <App />
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
