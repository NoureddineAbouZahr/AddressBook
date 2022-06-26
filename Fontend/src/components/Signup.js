
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch,Link ,useHistory,useNavigate} from 'react-router-dom'
import axios from 'axios'
import React from 'react'


const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onSubmit=(e)=>{
            
        if(!email || !password){
            alert('input data')
            return
        }
        e.preventDefault();


        // let data =new FormData();
        // data.append("email",email)
        // data.append("password",password)
        let data={
            name:name,
            email:email,
            password:password
        }
        console.log(data)
        console.log('name:',name);
        console.log('email:',email);
        console.log('email:',password);
        setName('')
        setEmail('')
        setPassword('')
        
        axios({
            method: "post",
            url: "http://localhost:3001/api/users/register",
            data,
            
    
        }).then(function (response) {
            localStorage.clear();
            // localStorage.setItem('access_token',response.data['access_token']);
            window.location="/Login"
            
            
        }).catch(function(error){
            alert(error)

        })
            

        
    }
  return (
    <form  action='' className='login-form container sup' onSubmit={onSubmit}>

        <div className="form-inner">
            <div className='hc'><h2>Sign Up</h2>
            </div>
            {/* Error! */}
            <div className="form-control">
                <label htmlFor="name">Email: </label>
                <input type="text" name='name' id='name' 
                placeholder='Name'
                onChange={e=>setName(e.target.value)}  />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' id='email' 
                placeholder='Email'
                onChange={e=>setEmail(e.target.value)}  />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' 
                placeholder='Password'
                onChange={e=>setPassword(e.target.value)}  />
            </div>
            <input type="submit" value=" Sign Up"  className="btn btn-block"/>
            {/* <a className='sua' href="">Sign Up</a> */}
            <Link className='sua' to = '/Login' >Log In</Link>
        </div>
    </form>
  )
}

export default Signup