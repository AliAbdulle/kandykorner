import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from "react-router"
import LocationsList from "./locations/LocationsList"
import EmployeesList from "./employees/EmployeesList"
import EmployeeDetail from "./employees/EmployeesDetail"
import CandiesList from "./candies/CandiesList"
import CandiesManager from "../modules/CandiesManager"
import CandyTypesManager from "../modules/CandyTypesManager"
import EmployeesManager from "../modules/EmployeesManager"
import LocationsManager from "../modules/LocationsManager"


class ApplicationViews extends Component {

    state = {
        candyTypes: [],
        candies: [],
        employees: [],
        locations: []
    }
    componentDidMount() {
        const newState ={}

        LocationsManager.getAll().then(
            locations => (newState.locations = locations))
        EmployeesManager.getAll().then(
            employees => (newState.employees = employees))
        CandiesManager.getAll()
            .then(candies => (newState.candies = candies))
        CandyTypesManager.getAll()
            .then(candyTypes => (newState.candyTypes = candyTypes))
            .then(() => this.setState(newState));
        }

        deleteCandies = id =>
            CandiesManager.delete(id)
                .then(CandiesManager.getAll)
                .then(candies => {
                    this.props.history.push("/candies");
                    this.setState({ candies: candies });
                });

        deleteEmployee = id =>
            EmployeesManager.delete(id)
                .then(EmployeesManager.getAll)
                .then(employees => {
                    this.props.history.push("/employees");
                    this.setState({ employees: employees });
                });

        render() {
            return (
            <React.Fragment >
                <Route exact path="/" render={props => {
                    return <LocationsList locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={props => {
                    return ( <EmployeesList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    )
                    }}
                     />
                <Route
                    path="/employees/:employeeId(\d+)"
                    render={props => {
                        // Find the employee with the id of the route parameter
                        let employee = this.state.employees.find(
                            employee => employee.id === parseInt(props.match.params.employeeId)
                        );

                        // If the animal wasn't found, create a default one
                        if (!employee) {
                            employee = { id: 404, name: "404", phone: "employee not found" };
                        }

                        return (
                            <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                        );
                    }}
                />

                <Route path="/candies" render={props => {
                    return (<CandiesList deleteCandies={this.deleteCandies} candies={this.state.candies}
                        candyTypes={this.state.candyTypes} />
                    )
                }}
                    />{""}
                    <Route
                    path="/candies/:candiesId(\d+)"
                    render={props => {
                        // Find the employee with the id of the route parameter
                        let candy = this.state.candies.find(
                            candy => candy.id === parseInt(props.match.params.candiesId)
                        );
                        let candyType = this.state.candyTypes.find(candyType => candyType.id ===candy.candyTypeId)

                        // If the animal wasn't found, create a default one
                        if (!candy) {
                            candy = { id: 404, name: "candy not found" };
                        }

                        return (
                            <candiesDetail candyType={candyType} candy={candy} deletecandy={this.deletecandy} />
                        );
                    }}
                />
            </React.Fragment >
            )
        }
    }

export default withRouter(ApplicationViews);