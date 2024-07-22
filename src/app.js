const express  = require('express');
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.port || 8000;

app.use(express.json());


// app.get("/", (req,res) =>{
//     res.send("Hello from other side ");
// })

//creates a new students
app.post("/students" , (req,res) =>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
    res.send("Hello from other side");
})

app.listen(port , ()=>{
    console.log(`connection successful`);
})