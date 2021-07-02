const shortId = require("shortid");

const employeeManager = require('../managers/employerManager')
const employeeEnuns = require('../enuns/employeeEnuns');
const employeeHelper = require('../helpers/cpfHelper');


const registerEmployee = async (employee)=>{//async
     
    const validatedEmployee = await validateEmployee(employee);
    if(validatedEmployee.error) return { status:400, message:validatedEmployee.error }
    const response =  await employeeManager.create(employee);
    return { status:200, message:response};    
}

const recoveryAllEmployees = async()=>{
    const response  = await employeeManager.readAll();
    return response;
}

const recoveryEmployee = async(idEmployee)=>{
    const response = await employeeManager.readOne({ id:idEmployee });
    return response;
}

const updateEmployee = async(idEmployee, body)=>{
    const formattedEmployee =  employeeEnuns.formatEmployee(body);
    const response = await employeeManager.updateOne(idEmployee, formattedEmployee);
    return response;
}

const deleteEmployee = async(idEmployee)=>{
    const response = await employeeManager.deleteOne(idEmployee);
    return response;
}

const validateEmployee = async (employee)=>{
    const id = shortId.generate();
    
    employee.id = id;

    const emptyFieldsChecked = employeeEnuns.verifyEmptyFields(employee);
    if(emptyFieldsChecked.error) return { error:emptyFieldsChecked.error };     

    const cpfIsValid = employeeHelper.validateCpf(employee.cpf);
    if(!cpfIsValid) return { error:'CPF invalido!!!' };
    if(cpfIsValid) employee.cpf = employeeHelper.formatCpf(employee.cpf);
    
    const cpfExist = await employeeManager.readOne({ cpf:employee.cpf });
    if(cpfExist !== null) return {error:'CPF já cadastrado'};

    return employee;
}

module.exports = {
    registerEmployee,
    recoveryAllEmployees,
    recoveryEmployee,
    updateEmployee,
    deleteEmployee
}
