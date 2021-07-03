


const formatEmployee = (employee)=>{
    const formattedEmployee = {}

    if(employee.name) formattedEmployee.name = employee.name;
    if(employee.office) formattedEmployee.office = employee.office;
    if(employee.age) formattedEmployee.age = employee.age;
    
    if(employee.address){   
        const address = employee.address;
        const newAddress = {}

        if(address.street) newAddress.street = address.street;
        if(address.number) newAddress.number = address.number;
        if(address.district) newAddress.district = address.district;
        if(address.city) newAddress.city = address.city;
        if(address.state) newAddress.state = address.state;
        if(address.country) newAddress.country = address.country;
        if(address.zipCode) newAddress.zipCode = address.zipCode;

        formattedEmployee.address = newAddress;   
    } 
    return formattedEmployee;
}

const verifyEmptyFields = (employee)=>{

    if(!employee.name) return {error:'Por favor digite seu nome completo!!!'}
    
    const address = employee.address;

    if(!address?.street) return {error:'Por favor digite o nome completo da sua rua!!!'}
    if(!address?.district) return {error:'Por favor digite o nome completo do seu bairro!!!'}
    if(!address?.city) return {error:'Por favor digite o nome completo da sua cidade!!!'}
    if(!address?.state) return {error:'Por favor digite o nome completo do seu estado!!!'}
    if(!address?.country) return {error:'Por favor digite o nome completo do seu pais!!!'}
    if(!address?.zipCode) return {error:'Por favor digite o numero completo do seu cep!!!'}
    
    if(!employee.office) return {error:'Por favor digite seu cargo corretamente!!!'}
    if(!employee.age) return {error:'Por favor digite sua idade!!!'} 
    return true;   
}

module.exports = {
    formatEmployee,
    verifyEmptyFields
}