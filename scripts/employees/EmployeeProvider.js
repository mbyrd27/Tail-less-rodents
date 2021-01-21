let employees = []

export const getEmployees = () => {
    return fetch('http://localhost:8088/employees')
        .then(resp => resp.json())
        .then(workers => employees = workers)
}

export const useEmployees = () => employees.slice()