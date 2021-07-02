const {cpf} = require('cpf-cnpj-validator');

const validateCpf = (cpfEmployee)=>{
    const checkCpf = cpf.isValid(cpfEmployee);
    return checkCpf;
}    

const formatCpf = (cpfEmployee)=>{
    const formattedCpf = cpf.format(cpfEmployee);
    return formattedCpf;
}
    
        



 module.exports =
  {
    validateCpf,
    formatCpf
};


 
