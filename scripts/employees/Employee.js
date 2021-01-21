export const Employee = (worker, computer) => {
    return `<h3>${worker.firstName} ${worker.lastName}</h3>
    <div>Age: ${worker.age}</div>
    <div>Issued Device: ${computer.year} ${computer.model}</div>`
}