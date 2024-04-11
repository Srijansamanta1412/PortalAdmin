import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppNew from './AppNew.js';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './User.js';
import EachUser from './EachUser.js';
import NewUser from './NewUser.jsx';
import Main from './Main.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
    return(
    <>
    <Main/>
    </>
)
}
export default App;

reportWebVitals();
