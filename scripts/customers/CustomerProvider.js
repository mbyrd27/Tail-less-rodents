let customers = []

export const getCustomers = () => fetch('http://localhost:8088/customers')
    .then(resp => resp.json())
    .then(data => customers = data)

export const useCustomers = () => customers.slice()