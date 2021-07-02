const express = require('express');

const employeeController = require('./controllers/employeeController');

const api = express();

const port = process.env.PORT || 3000;

const startApi = ()=>{
    api.use(express.json());
    api.use('/', employeeController);        

    api.listen(port,()=>{
        console.log("Aplicação Iniciada!!!");
    })
}

module.exports = startApi;

