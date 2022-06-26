const Contact = require('../../model/Contact');
const User=require('../../model/User')
async function addContact(body) {
  const {
    f_name,
    l_name,
    phone,
    RelationshipStatus,
    Email,
    LocationLongitude,
    LocationLatitude,
    user,
  } = body;

  const contact = new Contact({
    f_name,
    l_name,
    phone,
    RelationshipStatus,
    Email,
    LocationLongitude,
    LocationLatitude,
    user,
  });
  return await contact.save();
}
async function getContacts(id){
    return await Contact.findById(id).populate('contacts');
}
module.exports={
    addContact,
    getContacts,
}
