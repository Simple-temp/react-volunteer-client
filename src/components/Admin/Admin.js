import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowList from '../ShowList/ShowList';
import icon from '../../img/icon/icon-1.png';
import "./Admin.css";

const Admin = () => {

    const [show,setShow] = useState([])

    useEffect(()=>{
        fetch(`https://volunteer-website.herokuapp.com/showlist`)
        .then( res => res.json())
        .then( data => setShow(data))
    },[])


    return (
        <div>
            <div className='top-side'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><img src={icon} alt="" /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="newItems">
                                    <Link to="/showlist" className='a'>show list</Link>
                                </li>
                                <li class="newItems">
                                    <Link to="/addnew" className='a'>add new</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="showList">
                <h6>Show list</h6>
                {
                    show.map(list => <ShowList items={list} key={list.key}></ShowList>)
                }
            </div>
        </div>
    );
};

export default Admin;
