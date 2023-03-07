const { response } = require("express");
const mongoose = require("mongoose");
let Employee = require("../models/employee");

//create employee service for add employee
module.exports.createEmployeeService = async (req, res) => {
  try {
    const employeeName = req.employeeName;
    const nameWithInitials = req.nameWithInitials;
    const displayName = req.displayName;
    const Gender = req.Gender;
    const DOB = req.DOB;
    const Email = req.Email;
    const mobileNumber = req.mobileNumber;
    const Designation = req.Designation;
    const employeeType = req.employeeType;
    const joinDate = req.joinDate;
    const Experience = req.Experience;
    const Salary = req.Salary;
    const personalNotes = req.personalNotes;

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
      personalNotes,
    });
    let reponse = await newEmployee.save();

    if (reponse) {
      return {
        msg: "success",
        data: reponse,
      };
    } else {
      msg: "failed";
      data: reponse;
    }
  } catch (err) {
    throw err;
  }
};

//view employee service for view all employee details
module.exports.viewEmployeeService = async (req, res) => {
  try {
    let response = await Employee.find();

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch {
    throw err;
  }
};

//update employee service for update selected employee
module.exports.updateEmployeeService = async (req, res) => {
  try {
    let id = req.id;
    let idString = id.toString();

    //destructure
    const {
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
      personalNotes,
    } = req.body;

    const updateEmployee = {
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
      personalNotes,
    };

    let response = await Employee.findByIdAndUpdate(
      { _id: idString },
      updateEmployee
    );

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch (err) {
    throw err;
  }
};

//delete employee service for delete selected employee
module.exports.deleteEmployeeService = async (req, res) => {
  try {
    let id = req;
    let idString = id.toString();

    let response = await Employee.findByIdAndDelete({ _id: idString });

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch (err) {
    throw err;
  }
};

//search employee service for filter employee by type
module.exports.searchEmployeeService = async (req, res) => {
  try {
    let type = req;

    let response = await Employee.find({ employeeType: type });

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch (err) {
    throw err;
  }
};
