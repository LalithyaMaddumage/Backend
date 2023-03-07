const router = require("express").Router();
const EmployeeController = require("../controllers/employeeController");
const Employee = require("../models/employee");

//route for add employee
router.route("/addEmployee").post((req, res) => {
  const response = EmployeeController.createEmployeeController(req.body, res);
});

//route for view employee
router.route("/viewEmployee").get((req, res) => {
  const response = EmployeeController.viewEmployeeController(
    req.body.data,
    res
  );
});

//route for update employee
router.route("/updateEmployee/:id").post((req, res) => {
  let id = req.params.id;

  let updateData = {
    id: id,
    body: req.body,
  };

  const response = EmployeeController.updateEmployeeController(updateData, res);
});

//route for delete employee
router.route("/deleteEmployee/:id").delete((req, res) => {
  let id = req.params.id;

  const response = EmployeeController.deleteEmployeeController(id, res);
});

//route for search employee by employee type
router.route("/searchEmployee/:employeeType").post((req, res) => {
  let EmployeeType = req.params.employeeType;

  const response = EmployeeController.searchEmployeeController(
    EmployeeType,
    res
  );
});

module.exports = router;
