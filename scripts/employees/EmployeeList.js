import { getEmployees, useEmployees } from './EmployeeProvider.js'
import { getComputers, useComputers } from '../computers/ComputerProvider.js'
import { Employee } from './Employee.js'

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(() => {
            const allEmployees = useEmployees()
            const allComputers = useComputers()
            render(allEmployees, allComputers)
        })
}

const render = (emps, comps) => {
    const contentTarget = document.querySelector('.employees')
    contentTarget.innerHTML = emps.map(emp => {
        const matchingComp = comps.find(cp => emp.computerId === cp.id)
        return Employee(emp, matchingComp)
    }).join('')
}