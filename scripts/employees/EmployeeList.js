import { getEmployees, useEmployees } from './EmployeeProvider.js'
import { getComputers, useComputers } from '../computers/ComputerProvider.js'
import { getDepartments, useDepartments } from '../departments/DepartmentProvider.js'
import { getLocations, useLocations } from '../locations/LocationsProvider.js'
import { Employee } from './Employee.js'

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(() => {
            const allEmployees = useEmployees()
            const allComputers = useComputers()
            const allDepartments = useDepartments()
            const allLocations = useLocations()
            render(allEmployees, allComputers, allDepartments, allLocations)
        })
}

const render = (emps, comps, depts, locs) => {
    const contentTarget = document.querySelector('.employees')
    contentTarget.innerHTML = emps.map(emp => {
        const matchingComp = comps.find(cp => emp.computerId === cp.id)
        const matchingDept = depts.find(dep => emp.departmentId === dep.id)
        const matchingLoc = locs.find(loc => emp.locationId === loc.id)
        return Employee(emp, matchingComp, matchingDept, matchingLoc)
    }).join('')
}