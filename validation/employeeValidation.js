const Joi = require("joi");

//validation schema to validate employee data fields
const employeeValidationSchema = (data) => {
  const schemaVAlidation = Joi.object({
    employeeName: Joi.string().required(),
    nameWithInitials: Joi.string().required(),
    displayName: Joi.string().required(),
    Gender: Joi.string().required(),
    DOB: Joi.date().required(),
    Email: Joi.string().required(),
    mobileNumber: Joi.number().required(),
    Designation: Joi.string().required(),
    employeeType: Joi.string().required(),
    joinDate: Joi.date().required(),
    Experience: Joi.string().required(),
    Salary: Joi.number().required(),
    personalNotes: Joi.string().required(),
  });

  return schemaVAlidation.validate(data);
};

module.exports.employeeValidationSchema = employeeValidationSchema;
