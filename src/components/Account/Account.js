import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import icon from '../../img/icon/icon-1.png'
import AccountInfo from '../AccountInfo/AccountInfo';
import "./Account.css"

const Account = () => {
    document.title = "Account"

    const [loggedInuser,setloggedInuser] = useContext( UserContext )

    const [info,setInfo] = useState([])

    useEffect(()=>{
        fetch(`https://volunteer-website.herokuapp.com/getDataFromInfo?email=`+loggedInuser.email)
        .then( res => res.json())
        .then( data => setInfo(data))
    },[])


    return (
    <>
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={icon} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <span><b>User name : </b>{loggedInuser.name}</span>
                    </div>
                </div>
            </nav>
        </div>
        <section>
            <div className="container">
                <div className="row">
                    {
                        info.map(info => <AccountInfo accountinfo={info} key={info.key}></AccountInfo> )
                    }
                </div>
            </div>
        </section>
    </>
    );
};

export default Account;

/**getDataFromInfo */