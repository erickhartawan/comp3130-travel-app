const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require('path');
const config = require("config");
const listing = require("./routes/listing")
const user = require("./routes/user");
const userList = require('./routes/userList');

const app = express();



//body parser
app.use(express.json())
app.use(cors())


const db = config.get('mongoURI')

mongoose
  .connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB hooked up bruh"))
  .catch(err => console.log(err));

app.use('/api/listing', listing)
app.use('/api/user', user)  
app.use('/api/userlist', userList) 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
