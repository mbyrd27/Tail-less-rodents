import { getEmployees, useEmployees } from '../employees/EmployeeProvider.js'
import { getCustomers, useCustomers } from './CustomerProvider.js'
import { getEmployeeCustomers, useEmployeeCustomers } from './EmployeeCustomerProvider.js'
import { Customers } from './Customer.js'

const render = (customers, employeeCustomers, employees) => {
    const contentTarget = document.querySelector('.customers')
    contentTarget.innerHTML = `<h2>3BM Customers</h2
    ${customers.map(cust => {
        const employeeList = employeeCustomers.filter(ec => ec.customerId === cust.id)
        const matchingEmployees = employeeList.map(emp => {
            return employees.find(worker => worker.id === emp.employeeId)
        })
        return Customers(cust, matchingEmployees)
    }).join('')}`
}

export const CustomerList = () => {
    getEmployees()
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
            const customers = useCustomers()
            const employeeCustomers = useEmployeeCustomers()
            const employees = useEmployees()
            render(customers, employeeCustomers, employees)
        })
}