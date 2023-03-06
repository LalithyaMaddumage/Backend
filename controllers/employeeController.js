const { response } = require("express");
const EmployeeService = require("../services/employeeService");

module.exports.createEmployeeController=async(req,res)=>{
    try{

        let serviceResponse=await EmployeeService.createEmployeeService(req);
        if(serviceResponse.msg = 'success'){
        // return serviceResponse
                return res.status(200).send({ message: "New Employee is added" })
        }else{
                return res.status(300).send({ message:"Cannot add new employee !" });
        }
        
    }catch(err){
        console.log(err.message);
        return res.status(300).send({ message:"Cannot add new employee !" ,err:err.message});
    }
}

module.exports.viewEmployeeController=async(req,res)=>{
    try{

        let serviceResponse=await EmployeeService.viewEmployeeService(req);
        if(serviceResponse.msg = 'success'){
        // return serviceResponse
                return res.status(200).send({ message: "Employee details retrieved",data:serviceResponse.data})
        }else{
                return res.status(300).send({ message:"Cannot view employees!" });
        }
        
    }catch(err){
        console.log(err.message);
        return res.status(300).send({ message:"Cannot view employees !" ,err:err.message});
    }
}

module.exports.updateEmployeeController=async(req,res)=>{
    try{

        let serviceResponse=await EmployeeService.updateEmployeeService(req);
        console.log("update req",req);
      
        if(serviceResponse.msg = 'success'){
        // return serviceResponse
                return res.status(200).send({ message: "Employee details updated"})
        }else{
                return res.status(300).send({ message:"Cannot update employees!" });
        }

    }catch(err){
        console.log(err.message);
        return res.status(300).send({ message:"Cannot update employees !" ,err:err.message});
    }
}

module.exports.deleteEmployeeController=async(req,res)=>{
    try{

        let serviceResponse=await EmployeeService.deleteEmployeeService(req);
        console.log("delete req",req);
      
        if(serviceResponse.msg = 'success'){
        // return serviceResponse
                return res.status(200).send({ message: "Employee details deleted"})
        }else{
                return res.status(300).send({ message:"Cannot delete employee!" });
        }

    }catch(err){
        console.log(err.message);
        return res.status(300).send({ message:"Cannot delete employee !" ,err:err.message});
    }
}