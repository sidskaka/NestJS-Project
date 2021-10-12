import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const Signup = () => {
   const data = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
   }
   const [entryData, setEntryData] = useState(data);
   const [success, setSuccess] = useState('');
   const [error, setError] = useState('');
   const handleChange = e => {
      setEntryData({
         ...entryData,
         [e.target.id]: e.target.value
      })
   }
   const handleSubmit = e => {
      e.preventDefault();
      axios({
         method: 'POST',
         url: '/user/create',
         data: entryData
      })
      .then(res => {
         setSuccess(res.data.message);
         //console.log(res);
      })
      .catch(err => {
         console.log(err)
      })
   }
   const {name, email, password, passwordConfirm} = entryData;
   const bouton = name === '' || email === '' || password === '' || password !== passwordConfirm ?
        <button className="btn btn-success" disabled>Create User</button> : <button className="btn btn-success">Create User</button>
   return (
      <div className="containt">
         <div style={{paddingBottom: "5%"}}>
            <span style={{marginLeft: "25%",marginRight: "2%"}}><Link style={{textDecoration: "none"}} to={'/'}>Sign In</Link></span>
            <span>|</span>
            <span style={{marginLeft: "2%"}}><Link style={{textDecoration: "none"}} to={'/signup'}>Sign Up</Link></span>
         </div>
         <div className="col-md-12 form-wrapper auth-user">
            <h2> Create User </h2>
            <form id="create-post-form" onSubmit={handleSubmit}>
               <div className="form-group col-md-12">
                  <label for="title"> Name </label>
                  <input type="text" value={name} onChange={handleChange} id="name" name="title" className="form-control" placeholder="Enter name" />
               </div>
               <div className="form-group col-md-12">
                  <label for="title"> Email </label>
                  <input type="email" value={email} onChange={handleChange} id="email" name="title" className="form-control" placeholder="Enter email" />
               </div>
               <div className="form-group col-md-12">
                     <label for="title"> Password </label>
                     <input type="password" value={password} onChange={handleChange} id="password" name="password" className="form-control" placeholder="Enter password" />
               </div>
               <div className="form-group col-md-12">
                     <label for="title"> Password confirm </label>
                     <input type="password" value={passwordConfirm} onChange={handleChange} id="passwordConfirm" name="passwordConfirm" className="form-control" placeholder="Confirm password" />
               </div>
               <div style={{paddingBottom: "5%"}}>
                  <span style={{color: "#38cb14"}}>{success}</span>
               </div>
               <div className="form-group col-md-4 pull-right">
                  {bouton}
               </div>           
            </form>
         </div>
      </div>
   )
}

export default Signup;
