const { response } = require("express");
const mongoose =require("mongoose");
let Employee = require("../models/employee");

module.exports.createEmployeeService=async(req,res)=>{
    try{
    const employeeName =req.employeeName;
    const nameWithInitials =req.nameWithInitials;
    const displayName = req.displayName;
    const Gender = req.Gender;
    const DOB = req.DOB;
    const Email = req.Email;
    const  mobileNumber = req.mobileNumber;
    const Designation =req.Designation; 
    const employeeType =req.employeeType;
    const joinDate =req.joinDate; 
    const Experience = req.Experience;
    const Salary = req.Salary;
    const personalNotes =req.personalNotes;
      
    const newEmployee = new Employee({
        employeeName,
        nameWithInitials,
        displayName,
        Gender,
        DOB,
        Email,
        mobileNumber,
        Designation,
        employeeType,
        joinDate,
        Experience,
        Salary,
        personalNotes
    })
        let reponse = await newEmployee.save() 
        console.log("reponse eka",reponse);
        if(reponse){
            return {
                        msg:'success',
                        data:reponse
                    }
        } else{
            msg:'failed'
            data:reponse
        }
    }catch(err){
        throw err
    }
}

module.exports.viewEmployeeService=async(req,res)=>{

try{
    let response = await Employee.find()
    console.log("view eke response",response)

    if(response){
        return{
            msg:"success",
            data:response
        } 
    }else{
        return{
        msg:"faild",
        data:response
        }
    }
}catch{
    throw err
}
}

module.exports.updateEmployeeService=async(req,res)=>{
    try{

        console.log("update service",req)

        let id=req.id;
        let idString=id.toString();
        console.log("service eke id",typeof (idString));
    //destructure
    const{
        employeeName,
        nameWithInitials,
        displayName,
        Gender,
        DOB,
        Email,
        mobileNumber,
        Designation,
        employeeType,
        joinDate,
        Experience,
        Salary,
        personalNotes}=req.body;

    const updateEmployee ={
        employeeName,
        nameWithInitials,
        displayName,
        Gender,
        DOB,
        Email,
        mobileNumber,
        Designation,
        employeeType,
        joinDate,
        Experience,
        Salary,
        personalNotes
    }
    
    let response = await Employee.findByIdAndUpdate( {_id : idString} ,updateEmployee)
    console.log("update eke response",response)

    if(response){
        return{
            msg:"success",
            data:response
        } 
    }else{
        return{
        msg:"faild",
        data:response
        }
    }

    }catch(err){
        throw err
    }
}

module.exports.deleteEmployeeService=async(req,res)=>{
    try{

        console.log("delete service",req)

        let id=req;
        let idString=id.toString();
        console.log("service eke id",typeof (idString));
        
        let response = await Employee.findByIdAndDelete( {_id : idString})

        if(response){
            return{
                msg:"success",
                data:response
            } 
        }else{
            return{
            msg:"faild",
            data:response
            }
        }
    }catch(err){
        throw err
    }
}