import React from 'react';
import { Link } from 'react-router-dom';
import "./NewRole.css";

const NewRole = (props) => {

    const {name,img,key} = props.newEvent;

    const deleteInfo = (e,id) =>{
        console.log(id,"clicked it")

        fetch(`https://volunteer-website.herokuapp.com/newDeleteInfo/${id}`,{
            method:"DELETE"
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            e.target.parentNode.style.display="none";
        })

    }

    return (
        <div className="col-lg-3 col-md-6 col-12 mb-3">
            <div className='newRole'>
                <h4>{name}</h4>
                <p>{key}</p>
                <p>{img}</p>
                <button onClick={(e)=>deleteInfo(e,key)} className='newBtn'>delete</button>
            </div>
        </div>
    );
};

export default NewRole;