const database = require('../startup');

const create = async (employee)=>{
    const response = await database.employeeSchema.create(employee);
    return response;
}

const readAll = async (employee)=>{
       const response = await database.employeeSchema.find();
       return response;
   }

const readOne = async (findEmployee)=>{
    const response = await database.employeeSchema.findOne( findEmployee ); 
    return response;
}

const updateOne = async (idEmployee, employee)=>{
    const response = await database.employeeSchema.findOneAndUpdate({ id:idEmployee }, employee);
    return response;
}

const deleteOne = async (idEmployee)=>{
    const response = await database.employeeSchema.deleteOne({ id:idEmployee });    //({ id:idEmployee });
    return response;
}

module.exports = {
    create,
    readOne,
    readAll,
    updateOne,
    deleteOne
};