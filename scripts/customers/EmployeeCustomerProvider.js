let employeeCustomers = []

export const getEmployeeCustomers = () => fetch('http://localhost:8088/employeeCustomers')
    .then(resp => resp.json())
    .then(data => employeeCustomers = data)

export const useEmployeeCustomers = () => employeeCustomers.slice()