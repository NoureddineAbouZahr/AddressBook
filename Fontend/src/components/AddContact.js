
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch,Link ,useHistory,useNavigate} from 'react-router-dom'
import axios from 'axios'


const AddContact = () => {
    const [f_name,setFname]=useState("");
    const [l_name,setLname]=useState("");
    const [phone,setPhone]=useState("");
    const [relationshipStatus,setStatus]=useState("");
    const [email,setEmail]=useState("");
    const [locationX,setLocationX]=useState("");
    const [locationY,setLocationY]=useState("");

    
    const onSubmit=(e)=>{
            
        if(!email){
            alert('input data')
            return
        }
        e.preventDefault();


        // let data =new FormData();
        // data.append("email",email)
        // data.append("password",password)
        let data={
            f_name:f_name,
            l_name:l_name,
            relationshipStatus:relationshipStatus,
            email:email,
            locationX:locationX,
            locationY:locationY
            
        }
        console.log(data)
        
        
        setFname('')
        setLname('')
        setPhone('')
        setStatus('')
        setEmail('')
        setLocationX('')
        setLocationY('')
        
        axios({
            method: "post",
            url: "http://localhost:3001/api/contacts/addContacts",
            data,
            
    
        }).then(function (response) {
            localStorage.clear();
            // localStorage.setItem('access_token',response.data['access_token']);
            
            
            
        }).catch(function(error){
            alert(error)

        })
            

        
    }
  return (
    <form  action='' className='login-form container sup' onSubmit={onSubmit}>

        <div className="form-inner">
            <div className='hc'><h2>Add Contact</h2>
            </div>
            {/* Error! */}
            <div className="form-control">
                <label htmlFor="f_name">First Name: </label>
                <input type="text" name='f_name' id='f_name' 
                placeholder='First Name'
                onChange={e=>setFname(e.target.value)}  />
            </div>
            <div className="form-control">
                <label htmlFor="l_name">Last Name: </label>
                <input type="text" name='l_name' id='l_name' 
                placeholder='Last Name'
                onChange={e=>setLname(e.target.value)}  />
            </div>
            <div className="form-control">
                <label htmlFor="phone">Phone number: </label>
                <input type="text" name='phone' id='phone' 
                placeholder='Phone number'
                onChange={e=>setLname(e.target.value)}  />
            </div>
            <div className="form-control">
                <label htmlFor="phone">Relationship status: </label>
                <select  name="status" id='status'
                onChange={e=>setLname(e.target.value)} >
                    <option value={"single"}>
                        Single
                    </option>
                    <option value={"married"}>
                        Married
                    </option>
                    <option value={"engaged"}>
                        Engaged
                    </option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' id='email' 
                placeholder='Email'
                onChange={e=>setEmail(e.target.value)}  />
            </div>
           
            <input type="submit" value=" Sign Up"  className="btn btn-block"/>
            {/* <a className='sua' href="">Sign Up</a> */}
            <Link className='sua' to = '/Login' >Log In</Link>
        </div>
    </form>
  )
}

export default AddContact