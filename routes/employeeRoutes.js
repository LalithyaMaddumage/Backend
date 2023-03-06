const router =require ("express").Router();
const EmployeeController =require("../controllers/employeeController");
const Employee = require("../models/employee");


router.route("/addEmployee").post((req,res)=>{
    const response = EmployeeController.createEmployeeController(req.body,res);
})

router.route("/viewEmployee").get((req,res)=>{
    const response = EmployeeController.viewEmployeeController(req.body.data,res);
})

router.route("/updateEmployee/:id").post((req,res)=>{
    let id=req.params.id;
    console.log("id eka",id);

    let updateData = {
        id:id,
        body:req.body,
    }

    const response = EmployeeController.updateEmployeeController(updateData,res);
})

router.route("/deleteEmployee/:id").delete((req,res)=>{
    let id=req.params.id;
    console.log("id eka",id);

  

    const response = EmployeeController.deleteEmployeeController(id,res);
})



module.exports=router;