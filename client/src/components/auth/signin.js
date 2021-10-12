import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Signin = (props) => {
   const data = {
      email: '',
      password: ''
   }
   const [entryData, setEntryData] = useState(data);
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
         method: 'GET',
         url: `/user/login/${entryData.email}/${entryData.password}`
      })
      .then(res => {
         setError('');
         localStorage.setItem('userIdentify', res.data._id);
         props.history.push('/home');
         //console.log(res)
      })
      .catch(err => {
         setError('Please check the information entered')
         console.log(err)
      })
   }
   const {email, password} = entryData;
   const bouton = email === '' || password === '' ?
        <button className="btn btn-success" disabled>Login</button> : <button className="btn btn-success">Login</button>
   return (
      <div className="containt">
         <div style={{paddingBottom: "5%"}}>
            <span style={{marginLeft: "25%",marginRight: "2%"}}><Link style={{textDecoration: "none"}} to={'/'}>Sign In</Link></span>
            <span>|</span>
            <span style={{marginLeft: "2%"}}><Link style={{textDecoration: "none"}} to={'/signup'}>Sign Up</Link></span>
         </div>
         <div className="col-md-12 form-wrapper auth-user">
            <h2> Sign In </h2>
            <form id="create-post-form" onSubmit={handleSubmit}>
               <div className="form-group col-md-12">
                  <label for="title"> Email </label>
                  <input type="email" value={email} onChange={handleChange} id="email" name="title" className="form-control" placeholder="Enter email" />
               </div>
               <div className="form-group col-md-12">
                     <label for="title"> Password </label>
                     <input type="password" value={password} onChange={handleChange} id="password" name="password" className="form-control" placeholder="Enter password" />
               </div>
               <div style={{paddingBottom: "5%"}}>
                  <span style={{color: "#rgb(231 18 18)"}}>{error}</span>
               </div>
               <div className="form-group col-md-4 pull-right">
                  {bouton}
               </div>           
            </form>
         </div>
      </div>
   )
}

export default Signin;
