const Product = require('../../model/Contact');

async function addContact(body) {
  const {
    f_name,
    l_name,
    phone,
    RelationshipStatus,
    Email,
    LocationLongitude,
    LocationLatitude
  } = body;

  const user = new Contact({
    f_name,
    l_name,
    phone,
    RelationshipStatus,
    Email,
    LocationLongitude,
    LocationLatitude
  });
  return await user.save();
}
async function getContacts(){
    return await Contact.find().populate('contacts');
}
module.exports={
    addContact,
    getContacts,
}
