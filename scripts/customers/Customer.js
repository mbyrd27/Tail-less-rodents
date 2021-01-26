export const Customers = (customer, employee) => {
    return `<header class="customer__name">
        <h3>${customer.name}</h3>
    </header>
    <section class="customer__employees">
        <ul class="custEmployeeList">
            ${employee.map(emp => `<li>${emp.firstName} ${emp.lastName}</li>`).join('')}
        </ul>
    </section>`
}
