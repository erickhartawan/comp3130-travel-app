const express = require("express")
const router = express.Router()

const User = require('../models/User')

router.get("/", (req,res) =>{
    User.find({}, (err,result)=>{
        if(err) console.log(err)
        else {res.json(result);
            console.log("reached here")
        }
    })
})

module.exports = router;