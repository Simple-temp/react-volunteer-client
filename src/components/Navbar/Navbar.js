import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../img/icon/icon-1.png';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><img src={icon} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="item res">
                                    <Link class="link" to="/resister">Resister</Link>
                                </li>
                                <li class="item adm">
                                    <Link class="link" to="/showlist">Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;