const express = require("express")
const router = express.Router()

const Listing = require('../models/Listing')

router.get("/", (req,res) =>{
    Listing.find({}, (err,result)=>{
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
    const newListing = new Listing({
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
    Listing.findOne({id: req.params.id})
      .then(item => item.remove().then(() => res.json(item)))
      .catch(err => res.status(404).json({ success: false }));

  });




module.exports = router;