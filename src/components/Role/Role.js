import React from 'react';
import { Link } from 'react-router-dom';
import "./Role.css"

const Role = (props) => {
    const {key,name,img} = props.singleRole;
    return (
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className='volenRole'>
                        <img src={img} alt="" className='role-img mx-auto'/>
                        <Link to={`/resister/${key}`}><p>{name}</p></Link>
                    </div>
                </div>
    );
};

export default Role;