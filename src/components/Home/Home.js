import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NewRole from '../NewRole/NewRole';
import Role from '../Role/Role';
import "./Home.css"


const Home = () => {

    const [volentiar,setvolentiar] = useState([]);

    const [ addNew , setAddNew ] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/getVolentiar`)
        .then( res => res.json())
        .then( data => setvolentiar(data))
    },[])

    useEffect(()=>{
        fetch(`http://localhost:4000/getNewAddedInfo`)
        .then( res => res.json())
        .then( data => setAddNew(data))
    },[])

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <section className='roles'>
                <h5 className='text-center'>i grow helping people by need</h5>
                <div className="inputBox col-lg-8 mx-auto d-flex justify-content-center">
                    <input type="text" placeholder='Search' />
                    <button className='search-btn'>Search</button>
                </div>
                <div className="container">
                    <div className="row  mt-5">
                        {
                        volentiar.map(role => <Role singleRole={role} key={role.id}></Role> )
                        }
                        {
                        addNew.map( newInfo => <NewRole newEvent={newInfo} key={newInfo.key}></NewRole>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;












// import fakedata from '../../fakedata/fakedata.json'

    //     const uploadbtn = ()=>{

    //     const uploadData = fakedata

    //     fetch(`http://localhost:4000/postVolentiar`, {
    //         method: 'POST',
    //         body: JSON.stringify(uploadData),
    //         headers: {'Content-type': 'application/json'}
    //     })
    //     .then( res => res.json())
    //     .then( data => setvolentiar(data))
    // }

{/* <button onClick={uploadbtn}>upload</button> */}




