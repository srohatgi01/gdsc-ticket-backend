const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://eywa:eywasarthak@cluster0.svfwnqj.mongodb.net/?retryWrites=true&w=majority",{

    useNewUrlParser : true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Connection is succesful")
}).catch((e)=>{
    console.log(`${e}`)
    console.log("No connection");
});