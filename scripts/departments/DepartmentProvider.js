let departments = []

export const getDepartments = () => {
    return fetch('http://localhost:8088/departments')
        .then(resp => resp.json())
        .then(data => departments = data)
}

export const useDepartments = () => departments.slice()