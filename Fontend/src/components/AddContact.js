
import { useState } from 'react';
import {Map,Marker} from 'pigeon-maps';
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
    const [center,setCenter]=useState([33.5571,35.3729])
    const[zoom,setZoom]=useState(11)
    const[marker,setMarker]=useState([33.5571,35.3729])

    
    const onSubmit=(e)=>{
            
     
        e.preventDefault();


        // let data =new FormData();<Marker width={50} anchor={[50.879, 4.6997]} />
        // data.append("email",email)
        // data.append("password",password)
        let data={
            f_name:f_name,
            l_name:l_name,
            relationshipStatus:relationshipStatus,
            email:email,
            locationX:marker[1],
            locationY:marker[0],
            user:localStorage.getItem('-token')._id
            
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
    function tag({latLng}){
        setMarker(latLng);
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
            <div className="map">
            <label htmlFor="location">Location: </label>
            <Map  
                height={300}
                center={center} 
                zoom={zoom} 
                onBoundsChanged={({ center, zoom }) => { 
                    setCenter(center) 
                    setZoom(zoom) 
                }}
                onClick={tag} >
                    <Marker width={50} anchor={marker}/>
                </Map>
    
            </div>
           
            <input type="submit" value=" +Add+"  className="btn btn-block"/>
            {/* <a className='sua' href="">Sign Up</a> */}
            <Link className='sua' to = '/Login' >Log In</Link>
        </div>
    </form>
  )
}

export default AddContact