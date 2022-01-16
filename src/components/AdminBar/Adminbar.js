import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import "./Adminbar.css"

const Adminbar = () => {
    return (
        <div className='row'>
            <div className="top-side">
                <ul>
                    <li> <Link to="/showlist">show list</Link></li>
                    <li> <Link to="/addnew">add new</Link></li>
                </ul>
            </div>
            <Admin></Admin>
        </div>
    );
};

export default Adminbar;