const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students").then(() =>{
    console.log("successful connection");
}).catch((e) =>{
   console.log('no connection');
})


