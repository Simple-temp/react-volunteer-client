import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className="top-side">
                <ul>
                    <li> <Link to="/showlist">show list</Link></li>
                    <li> <Link to="/addnew">add new</Link></li>
                </ul>
            </div>
            <div className="showList">
                <h1>showlist</h1>
            </div>
        </div>
    );
};

export default Admin;