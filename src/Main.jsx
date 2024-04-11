import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNew from './AppNew.js';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './User.js';
import EachUser from './EachUser.js';
import NewUser from './NewUser.jsx';

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/PortalAdmin" element={<AppNew />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/test" element={<EachUser />} />
                <Route path="/users/new" element={<NewUser />} />
            </Routes>
        </Router>
    );
}
export default Main;

reportWebVitals();
