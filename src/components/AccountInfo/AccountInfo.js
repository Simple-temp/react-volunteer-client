import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./AccountInfo.css";

const AccountInfo = (props) => {

    const {name,img,Data,selectTime,key} = props.accountinfo;

    const deleteInfo = (e,id) =>{
        console.log(id,"clicked it")

        fetch(`https://volunteer-website.herokuapp.com/deleteInfo/${id}`,{
            method:"DELETE"
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            e.target.parentNode.style.display="none";
        })

    }
    

    return (
        <>
            <div className="col-lg-5 col-md-8 col-sm-12 info">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={img} alt="" className='w-100 d-block' />
                            </div>
                            <div className="col-lg-8 information">
                                <h4>{name}</h4>
                                <h5>{new Date(selectTime).toDateString("dd/MM/yyyy")}</h5>
                                <p>{Data.description}</p>
                            </div>
                        </div>
                    <button className='removebtn' onClick={(e)=>deleteInfo(e,key)} >Cancel</button>
            </div> 
        </>
    );
};

export default AccountInfo;

