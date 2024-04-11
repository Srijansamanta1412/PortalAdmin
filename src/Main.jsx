import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNew from './AppNew.js';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar.jsx';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import User from './User.js';
import EachUser from './EachUser.js';
import NewUser from './NewUser.jsx';

function Main() {
    return (
        <BrowserRouter >
            <Routes>
                <Route exact path="/PortalAdmin" element={<AppNew />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/test" element={<EachUser />} />
                <Route path="/users/new" element={<NewUser />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;

reportWebVitals();
