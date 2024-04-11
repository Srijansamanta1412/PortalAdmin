import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './User.js';
import EachUser from './EachUser.js';
import NewUser from './NewUser.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Main(){
    return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/user/test" element={<EachUser/>}></Route>
        <Route path="/users/new" element={<NewUser/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
)
}
export default Main;

reportWebVitals();
