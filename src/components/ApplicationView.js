import {Route} from 'react-router-dom'
import React, {Component} from "react";
import StoreList from "./stores/StoreList"
import EmployeeList from  "./employees/EmployeeList"
import CandiesList from "./candies/CandiesList"


class ApplicationView extends Component {

    state = {
        candyTypes: [],
        candies: [],
        employees: [],
        stores: []
    }

    componentDidMount() {

        const newState = {}
                fetch("http://localhost:5002/candyTypes")
                .then(r => r.json())
                .then(() => fetch("http://localhost:5002/candiesFromAPI"))
                .then(r => r.json())
                .then(candies => newState.candies = candies)
                .then(candyTypes => newState.candyTypes = candyTypes)
                .then(() => fetch("http://localhost:5002/employeeFromAPI"))
                .then(r => r.json())
                .then(employees =>  newState.employees = employees)
                .then(() => fetch("http://localhost:5002/storesFromAPI"))
                .then(r => r.json())
                .then(stores => newState.stores = stores)
                .then(() => this.setState(newState))
    }

    deleteCandy = id => {

        return fetch(`http://localhost:5002/candiesFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch(`http://localhost:5002/candiesFromAPI`))
        .then(r => r.json())
        .then(candies => this.setState({
            candies: candies
        }))

    }

    render(){
        return( <React.Fragment>
                <Route exact path="/" render={(props) =>{
                return <StoreList stores={this.state.stores} />
            }} />
                <Route exact path="/employees" render={(props) =>{
                return <EmployeeList employees={this.state.employees} />
            }} />
                <Route path="/candies" render={(props) =>{
                return <CandiesList deleteCandy={this.deleteCandy}candies={this.state.candies}
                candyTypes={this.state.candyTypes}  />
            }} />
        </React.Fragment>
        )
    }
}
export default ApplicationView