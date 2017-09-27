const express= require('express');
const router=express.Router();

const Contact=require('../models/contact');

//retrieving contacts
router.get('/Contact',(req,res,next)=>{
Contact.find(function(err,contacts){
    res.json(contacts);
})    
});

//add contact
router.post('/Contact',(req,res,next)=>{
    let newContact=new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
newContact.save((err,contact)=>{
    if(err){
        res.json({msg:'Failed to add Contacts'});
    }
    else{
        res.json({msg:'Contact added Successfuly'});
    }
});

})

//delete contacts
router.delete('/Contact/:id',(req,res,next)=>{
    Contact.remove({__id:req.params.id},function(err,result){
        if(err){
      res.json(err)
        }
    else{
        res.json(result);
    }
    });
})


module.exports=router;