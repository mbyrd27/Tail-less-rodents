export const Employee = (worker, computer, department, location, customers) => {
    return `<header class="employee__name">
        <h3>${worker.firstName} ${worker.lastName}</h3>
    </header>
    <section class="employee__age"><strong>Age:</strong> ${worker.age}</section>
    <section class="employee__computer">
        <strong>Issued Device:</strong> ${computer.year} ${computer.model}
    </section>
    <section class="employee__department">
        <strong>Department: </strong> ${department.name}
    </section>
    <section class="employee__location">
        <strong>Office: </strong> ${location.city}
    </section>
    <section class="employee__customers">
        <strong>Customers:</strong>
        <ul class="customerList">
            ${customers.map(cust => `<li>${cust.name}</li>`).join('')}
        </ul>
    </section>`
}