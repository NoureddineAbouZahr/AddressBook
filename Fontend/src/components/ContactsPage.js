import { async } from "q";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link } from 'react-router-dom'
import jwt from 'jwt-decode'

const ContactsPage = () => {
  const navigate =useNavigate();
  const[contacts,setContacts]=useState([]);
  const[details,setDetails]=useState([]);

  useEffect(()=>{

  const getContacts=async()=>{
    const res= await fetch("http://localhost:3001/api/contacts/getconts?"+ new URLSearchParams({
      id: jwt(localStorage.getItem('-token'))._id,
  }));
    const data=await res.json();
    setContacts(data);

    console.log(data);

  };
  getContacts();
},[])



  return (
    <div className="contactsContainer">
      Contacts
      {contacts.map((contact)=>{
        return(
          <div key={contact._id}
          onClick={()=>{
            navigate(`${contact._id}`);
          }}>
            <div className="CC">
            <h3>{contact.f_name } {contact.l_name}</h3>
            <div className="contDetails">
              <h3>Phone: {contact.phone}</h3>
              <h3>Relationship Status: {contact.RelationshipStatus}</h3>
              <h3>Email: {contact.Email}</h3>
              <div>Location: 

              </div>

            </div>
          </div>
          
          </div>
        );
      })}
      <Link to="/addcontact">Add</Link>
    </div>
  )
}

export default ContactsPage