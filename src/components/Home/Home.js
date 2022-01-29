import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar/Navbar';
import NewRole from '../NewRole/NewRole';
import Role from '../Role/Role';
import loader from "../../img/gif/loading.gif"
import "./Home.css"



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
}));

const Home = () => {
    const classes = useStyles();

    const [volentiar,setvolentiar] = useState([]);

    const [ addNew , setAddNew ] = useState([])

    useEffect(()=>{
        fetch(`https://volunteer-website.herokuapp.com/getVolentiar`)
        .then( res => res.json())
        .then( data => setvolentiar(data))
    },[])

    useEffect(()=>{
        fetch(`https://volunteer-website.herokuapp.com/getNewAddedInfo`)
        .then( res => res.json())
        .then( data => setAddNew(data))
    },[])

    return (
        <>
            <header>
            {
                volentiar.length === 0 && <div className='loading'><img src={loader} alt="" /></div>
            }
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




