const mongoose =require("mongoose");

const Schema =mongoose.Schema;

const employee = new Schema({
    employeeName : {
        type : String,
        maxlength: 100,
        required : true,
        
    },

    nameWithInitials:{
        type:String,
        maxlength: 100,
        required : true,
    },

    displayName :{
        type:String,
        maxlength: 100,
        required : true,
    },

    Gender :{
        type:String,
        maxlength: 10,
        required : true,
    },

    DOB : {
        type :Date,
        required : true,
    },

    Email :{
        type : String,
        maxlength :50,
        required : true,
    },

    mobileNumber :{
        type :Number,
        maxlength:10,
        
        required : true,
    },

    Designation :{
        type : String,
        required : true,
    },

    employeeType :{
        type : String,
        required : true,

    },

    joinDate :{
        type : Date,
        required : true,

    },

    Experience :{
        type : String,
        required : true,
    },

    Salary :{
        type : Number,
        required : true,
    },

    personalNotes :{
        type : String,
        maxlength:100,
        required : true,
    }



})

const Employee = mongoose.model("Employee" ,employee);
module.exports =Employee;