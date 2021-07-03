const express = require('express');
const router = express.Router();

const employeeService = require('../services/employeeService');

const nameRoute = '/employee';


router.post(nameRoute, async(req,res)=>{
    const { body } = req;
    const response =  await employeeService.registerEmployee(body);
    return res.status(response.status).json(response.message);
})

router.get(nameRoute, async(req,res)=>{
    const response = await employeeService.recoveryAllEmployees();
    return res.status(200).json(response);
})

router.get(nameRoute + '/:id', async(req,res)=>{
    const { id } = req.params;
    const response = await employeeService.recoveryEmployee(id);
    return res.status(200).json(response);
})

router.put(nameRoute + '/:id', async(req,res)=>{
    const { body } = req;
    const { id } = req.params;
    console.log(body);
    const response = await employeeService.updateEmployee(id,body);
    return res.status(200).json(response);
})

router.delete(nameRoute + '/:id', async(req,res)=>{  
    const { id } = req.params;
    const response = await employeeService.deleteEmployee(id);
    return res.status(200).json(response);
})

module.exports = router;