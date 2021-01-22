import { getEmployees, useEmployees } from './EmployeeProvider.js'
import { getComputers, useComputers } from '../computers/ComputerProvider.js'
import { getDepartments, useDepartments } from '../departments/DepartmentProvider.js'
import { Employee } from './Employee.js'

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(() => {
            const allEmployees = useEmployees()
            const allComputers = useComputers()
            const allDepartments = useDepartments()
            render(allEmployees, allComputers, allDepartments)
        })
}

const render = (emps, comps, depts) => {
    const contentTarget = document.querySelector('.employees')
    contentTarget.innerHTML = emps.map(emp => {
        const matchingComp = comps.find(cp => emp.computerId === cp.id)
        const matchingDept = depts.find(dep => emp.departmentId === dep.id)
        return Employee(emp, matchingComp, matchingDept)
    }).join('')
}