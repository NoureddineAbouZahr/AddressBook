
import { async } from "q";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const ContactsPage = () => {
  const navigate =useNavigate();
  const[contacts,setContacts]=useState([]);
  const[details,setDetails]=useState([]);


  // const getContacts=async()=>{
  //   const res= await fetch("http://localhost:3001/api/contacts//getconts:id");
  //   const data=await res.json();
  //   return data;
  // };


  // useEffect(()=>{
  //   const getData=async()=>{
  //     const conts=await getContacts();
  //     setContacts(conts);

  //   };
  //   getData;
  // },[])
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
              <h3>Email: {contact.email}</h3>
              <div>Location: 

              </div>

            </div>
          </div>
          <Link to="/addContact">Add new contact</Link>
          </div>
        );
      })}

    </div>
  )
}

export default ContactsPage