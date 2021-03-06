const {addContact, getContact, getContacts}=require("./service");
const User=require('../../model/User');
const Contact=require('../../model/Contact');

async function add(req,res){
    try{
        console.log(req.body);
        
        const newContact=await addContact(req.body);

        const updateUser=await User.updateMany(
            {
                _id:newContact.user
            },
            {
                $push:{
                    Contacts: newContact._id
                }
            }
        );
        

        return res.status(200).send(newContact);

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
async function get(req, res) {
    try {
     
      const result = await getContacts(req.query.id);
      console.log('result =>', result)
      console.log('id',req.query.id)
  
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  }

  module.exports={
    add,
    get,
  };
