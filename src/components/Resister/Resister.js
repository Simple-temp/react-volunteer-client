import React, { useContext, useEffect, useState } from 'react';
import icon from '../../img/icon/icon-1.png'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Resister.css"
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link, Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Resister = () => {

    const [loggedInuser,setloggedInuser] = useContext( UserContext )

    const [selectedDate, setSelectedDate] = useState({
        selectTime : new Date()
    });

    const [ newuser, setnewuser] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/getVolentiarsingle/${id}`)
        .then( res => res.json())
        .then( data => setnewuser(data))
    },[id])


    const handleDateChange = (date) => {
        const selDate = {...selectedDate}
        selDate.selectTime = date;
      setSelectedDate(selDate);
    };

    const onSubmit = data => {
        const info = {...loggedInuser , Data:data , ...selectedDate ,...newuser}
        fetch(`http://localhost:4000/postSlecectedVolunteer`,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
        .then( res => res.json())
        .then( data => {
            alert("data added")
        })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    // console.log(watch("example")); 
  
    const {name,img} = newuser;

    const classes = useStyles();

    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-3 mx-auto logo-box">
                        <img src={icon} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mx-auto resister-box">
                        <h3>Resister</h3>

                           <form onSubmit={handleSubmit(onSubmit)}>
                                
                                <input defaultValue={loggedInuser.name} {...register("name", { required: true })} placeholder='Name' className='filed w-100' /> 
                                {errors.name && <span className='hook-form' >This field is required</span>}

                                <input defaultValue={loggedInuser.email} {...register("email", { required: true })} placeholder='Email' className='filed w-100' /> 
                                {errors.email && <span className='hook-form'>This field is required</span>}

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justifyContent="space-around">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date"
                                            format="MM/dd/yyyy"
                                            value={selectedDate.selectTime}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                        }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>

                                <input {...register("description", { required: true })} placeholder='Description' className='filed w-100' /> 
                                {errors.description && <span className='hook-form'>This field is required</span>}

                                <input defaultValue={name} {...register("role", { required: true })} placeholder='Selected role name' className='filed w-100' /> 
                                
                                <input type="submit" value="Submit" className='w-100 d-block submitbtn'/>

                            </form>
                                        <hr/>
                             <Link to="/account"><button type="submit" className='gobtn w-100 d-block '>Go to see resister item</button></Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Resister;