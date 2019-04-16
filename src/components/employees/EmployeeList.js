import React, {Component} from "react"

class EmployeeList extends Component {
    render() {
        return (
            <section className = "Container">
            <h1>Employees</h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                    {employee.name}
                    </div>
                    )
            }
            </section>
        )
    }

}
export default EmployeeList