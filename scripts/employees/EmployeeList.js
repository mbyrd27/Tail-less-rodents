import { getEmployees, useEmployees } from './EmployeeProvider.js'
import { getComputers, useComputers } from '../computers/ComputerProvider.js'
import { getDepartments, useDepartments } from '../departments/DepartmentProvider.js'
import { getLocations, useLocations } from '../locations/LocationsProvider.js'
import { getCustomers, useCustomers } from '../customers/CustomerProvider.js'
import { getEmployeeCustomers, useEmployeeCustomers } from '../customers/EmployeeCustomerProvider.js'
import { Employee } from './Employee.js'

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
            const allEmployees = useEmployees()
            const allComputers = useComputers()
            const allDepartments = useDepartments()
            const allLocations = useLocations()
            const allCustomers = useCustomers()
            const customerRelationships = useEmployeeCustomers()
            render(allEmployees, allComputers, allDepartments, allLocations, allCustomers, customerRelationships)
        })
}

const render = (emps, comps, depts, locs, cust, custRel) => {
    const contentTarget = document.querySelector('.employees')
    contentTarget.innerHTML = `<h2> 3BM Employees </h2>
        ${emps.map(emp => {
        const matchingComp = comps.find(cp => emp.computerId === cp.id)
        const matchingDept = depts.find(dep => emp.departmentId === dep.id)
        const matchingLoc = locs.find(loc => emp.locationId === loc.id)

        const relationships = custRel.filter(rel => rel.employeeId === emp.id)
        const matchingCust = relationships.map(empRel => {
            return cust.find(c => c.id === empRel.customerId)
        })
        return Employee(emp, matchingComp, matchingDept, matchingLoc, matchingCust)
    }).join('')
        }`
}