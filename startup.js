const mongoose = require('mongoose');

const startApi = require('./index');  

mongoose.connect('mongodb+srv://vitorvieira:160223@estudo0.kvsl2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true});

const modelEmployee = mongoose.Schema(
    {
        id:String,
        name:String,
        cpf:String,
        address:{
            street:String,
            number:Number,
            district:String,
            city:String,
            state:String,
            country:String, 
            zipCode:String           
        },
        office:String,
        age:String,
        //email
        //telefone
    }
);

exports.employeeSchema = mongoose.model('employees', modelEmployee);

startApi();

//module.exports = {employeeDatabase};