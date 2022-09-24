
const mongoose = require('mongoose');
const validator = require('validator');
//definig schema 
const studentSchema = new mongoose.Schema({
Firstname : {
    type : String,
    required : true,
    minlength : 3,

},
Lastname : {
    type : String,
    required : true,
    minlength : 3,

},

    email : {
        type : String,
        required : true,
     
        unique : [true , "Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
           

        }
    },
    Ticket_id : {
        type : Number,
        min : 4 ,

       unique : true 
    } ,
   Date : {
         type : Date,
         default : Date.now()

        }})
// we will create a new collection  or a model
const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;



