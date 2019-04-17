import {Route} from 'react-router-dom'
import React, {Component} from "react";
import StoreList from "./stores/StoreList"
import EmployeeList from  "./employees/EmployeeList"
import CandiesList from "./candies/CandiesList"
import CandiesManager from "../modules/CandiesManager"
import CandyTypesManager from "../modules/CandyTypesManager"
import EmployeeManager from "../modules/EmployeeManager"
import StoresManager from "../modules/StoresManager"


class ApplicationView extends Component {

    state = {
        candyTypes: [],
        candies: [],
        employees: [],
        stores: []
    }
    componentDidMount() {

        const newState = {}
                CandiesManager.getAll()
                .then(candies => newState.candies = candies)
                CandyTypesManager.getAll()
                .then(candyTypes => newState.candyTypes = candyTypes)
                EmployeeManager.getAll()
                .then(employees =>  newState.employees = employees)
                StoresManager.getAll()
                .then(stores => newState.stores = stores)
                .then(() => this.setState(newState))
    }

    deleteCandies = id => {

        return CandiesManager.delete(id)
        .then(() => CandiesManager.getAll())
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
                return <CandiesList deleteCandies={this.deleteCandies}candies={this.state.candies}
                candyTypes={this.state.candyTypes}  />
            }} />
        </React.Fragment>
        )
    }
}
export default ApplicationView