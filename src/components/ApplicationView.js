import {Route} from 'react-router-dom'
import React, {Component} from "react";
import StoreList from "./stores/StoreList"
import EmployeeList from  "./employees/EmployeeList"
import CandiesList from "./candies/CandieList"


class ApplicationView extends Component {
    candyTypes =[
        {id: 1, name: "Strewberry"},
        {id: 2, name: "Lemon"},
        {id: 3, name: "Watermolon"}
    ]
    candiesFromAPI =[
        {id: 1, name: "Riesen", candyTypes: 1 },
        {id: 2, name: "SweetTarrs", candyTypes: 2 },
        {id: 3, name: "Baby Ruth", candyTypes: 3 },
        {id: 4, name: "Skittle", candyTypes: 3 }
    ]
    employeeFromAPI = [
        {id: 1, name: "Ali Abdulle" },
        {id: 2, name: "David Higs" },
        {id: 3, name: "Amy Anderson" },
        {id: 4, name: "Ali Jr" }
    ]
    storesFromAPI = [
        {id: 1, name: "Apple Store" },
        {id: 2, name: "Free Market" }
    ]

    state = {
        candyTypes: this.candyTypes,
        candies: this.candiesFromAPI,
        employees: this.employeeFromAPI,
        stores: this.storesFromAPI
    }

    rander(){
        return( <React.Fragment>
                <Route exact path="/" render={(props) =>{
                return <StoreList stores={this.state.stores} />
            }} />
                <Route exact path="/employees" render={(props) =>{
                return <EmployeeList employees={this.state.employees} />
            }} />
                <Route exact path="/condies" render={(props) =>{
                return <CandiesList candies={this.state.candies} />
            }} />
        </React.Fragment>
        )
    }
}
export default ApplicationView