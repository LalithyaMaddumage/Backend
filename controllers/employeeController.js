const { response } = require("express");
const EmployeeService = require("../services/employeeService");
const {
  employeeValidationSchema,
} = require("../validation/employeeValidation");

//controller for add employee
module.exports.createEmployeeController = async (req, res) => {
  try {
    const { error } = employeeValidationSchema(req);
    if (error) {
      return res.status(300).send({ message: "Validation Fail !", err: error });
    }

    let serviceResponse = await EmployeeService.createEmployeeService(req);
    if ((serviceResponse.msg = "success")) {
      // return serviceResponse
      return res.status(200).send({ message: "New Employee is added" });
    } else {
      return res.status(300).send({ message: "Cannot add new employee !" });
    }
  } catch (err) {
    return res
      .status(300)
      .send({ message: "Cannot add new employee !", err: err.message });
  }
};

//controller for view employee
module.exports.viewEmployeeController = async (req, res) => {
  try {
    let serviceResponse = await EmployeeService.viewEmployeeService(req);
    if ((serviceResponse.msg = "success")) {
      // return serviceResponse
      return res.status(200).send({
        message: "Employee details retrieved",
        data: serviceResponse.data,
      });
    } else {
      return res.status(300).send({ message: "Cannot view employees!" });
    }
  } catch (err) {
    return res
      .status(300)
      .send({ message: "Cannot view employees !", err: err.message });
  }
};

//controller for update employee
module.exports.updateEmployeeController = async (req, res) => {
  try {
    let serviceResponse = await EmployeeService.updateEmployeeService(req);

    if ((serviceResponse.msg = "success")) {
      return res.status(200).send({ message: "Employee details updated" });
    } else {
      return res.status(300).send({ message: "Cannot update employees!" });
    }
  } catch (err) {
    return res
      .status(300)
      .send({ message: "Cannot update employees !", err: err.message });
  }
};

//controller for delete employee
module.exports.deleteEmployeeController = async (req, res) => {
  try {
    let serviceResponse = await EmployeeService.deleteEmployeeService(req);

    if ((serviceResponse.msg = "success")) {
      // return serviceResponse
      return res.status(200).send({ message: "Employee details deleted" });
    } else {
      return res.status(300).send({ message: "Cannot delete employee!" });
    }
  } catch (err) {
    return res
      .status(300)
      .send({ message: "Cannot delete employee !", err: err.message });
  }
};

//controller for search employee by type
module.exports.searchEmployeeController = async (req, res) => {
  try {
    let serviceResponse = await EmployeeService.searchEmployeeService(req);

    if ((serviceResponse.msg = "success")) {
      // return serviceResponse
      return res.status(200).send({
        message: "Employee details searched",
        data: serviceResponse.data,
      });
    } else {
      return res.status(300).send({ message: "Cannot search employee!" });
    }
  } catch (err) {
    return res
      .status(300)
      .send({ message: "Cannot search employee !", err: err.message });
  }
};
