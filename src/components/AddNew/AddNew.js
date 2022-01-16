import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddNew = () => {

    const [volentiar,setvolentiar] = useState([]);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        const uploadData = data

        fetch(`http://localhost:4000/add`, {
            method: 'POST',
            body: JSON.stringify(uploadData),
            headers: {'Content-type': 'application/json'}
        })
        .then( res => res.json())
        .then( data => setvolentiar(data))

        console.log(data)
    };
  


    return (
        <div>
            <div className="top-side">
                <ul>
                    <li> <Link to="/showlist">show list</Link></li>
                    <li> <Link to="/addnew">add new</Link></li>
                </ul>
            </div>
            <div className="addnew">
                <h1>add new</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input {...register("name", { required: true })} placeholder='name'/>
                    {errors.name && <span>This field is required</span>}

                    <input {...register("img", { required: true })} placeholder='img'/>
                    {errors.img && <span>This field is required</span>}

                    <input {...register("key", { required: true })} placeholder='key'/>
                    {errors.key && <span>This field is required</span>}
                    
                    <input type="submit" value="Add new"/>
                </form>

            </div>
        </div>
    );
};

export default AddNew;