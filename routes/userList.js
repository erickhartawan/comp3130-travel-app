const express = require("express")
const router = express.Router()

const UserList = require('../models/UserList')

router.get("/", (req,res) =>{
    UserList.find({}, (err,result)=>{
        if(err) console.log(err)
        else {
            console.log("reached here")
            res.json(result);
            
        }

    })
        // .then(items => {
        //     res.json(items);
        //     console.log(res.json(items))
            
        // })
})
router.post("/", (req,res) => {
    const newListing = new UserList({
        id: req.body.id,
        title:req.body.title,
        subtitle:req.body.subtitle,
        rating:req.body.rating,
        state:req.body.state,
        image:req.body.image,
        description:req.body.description,
    })
    newListing.save().then(item => res.json(item))
})

router.delete(`/:id`,(req, res) => {
    UserList.findOne({id: req.params.id})
      .then(item => item.remove().then(() => res.json(item)))
      .catch(err => res.status(404).json({ success: false }));

  });




module.exports = router;