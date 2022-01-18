import React from 'react';
import "./ShowList.css"

const ShowList = (props) => {
    
    const {name,email,Data,selectTime,key} = props.items;

    const deleteInfo = (e,id) =>{
        console.log(id,"clicked it")

        fetch(`http://localhost:4000/deleteInfo/${id}`,{
            method:"DELETE"
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            e.target.parentNode.style.display="none";
        })

    }

    return (
        <div className='container single-item'>
            <ul className='lists'>
                <li><label> <b>Name</b> </label><br/>
                    {Data.name}
                </li>
                <li><label> <b>Email</b> </label><br/>
                    {email}
                </li>
                <li><label> <b>Date</b> </label><br/>
                    {new Date(selectTime).toDateString("dd/MM/yyyy")}
                </li>
                <li><label> <b>Activity</b> </label><br/>
                    {name}
                </li>
            </ul>
            {/* <button onClick={(e)=>deleteInfo(e,key)} >delete</button> */}
            <i class="far fa-trash-alt" onClick={(e)=>deleteInfo(e,key)}></i>
        </div>
    );
};

export default ShowList;