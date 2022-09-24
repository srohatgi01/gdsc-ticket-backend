const express = require('express');
require("./db/connectio")
const Student = require("./models/students");
const app = express();
const port = process.env.PORT ||  3500;
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("hello from the others sides by amay.");
})
app.post("/students" , (req , res)=>{
    //  console.log(req.body)
    const user = new Student(req.body)
    user.save().then(()=>{
    res.status(201).send(user);
    }).catch((err)=>{
     res.status(400).send(err);
    })

})

app.listen(port , ()=>{
    console.log(`Connection is setup at ${port} `)

})