import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import icon from '../../img/icon/icon-1.png';
import "./AddNew.css";


const AddNew = () => {
    
    document.title = "Add new event"


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        const uploadData = data

        fetch(`https://volunteer-website.herokuapp.com/addnew`, {
            method: 'POST',
            body: JSON.stringify(uploadData),
            headers: {'Content-type': 'application/json'}
        })
        .then( res => res.json())
        .then( data => {
            if(data)
            {
                alert("New data added on home page please reload the home page ")
            }
        })

        console.log(data)
    };
  


    return (
        <div>
            <div className="top-side">
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
            <div className="addnew container">
                <h6>add new</h6>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input {...register("name", { required: true })} placeholder='Name' className='w-100 newField'/>
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input {...register("key", { required: true })} placeholder='Key' className='w-100 newField'/>
                            {errors.key && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input {...register("img", { required: true })} placeholder='Img'/>
                            {errors.img && <span>This field is required</span>}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="submit" value="Add new" className='addBtn'/>
                        </div>
                    </div>
                    
                </form>

            </div>
        </div>
    );
};

export default AddNew;