import {Route} from 'react-router-dom'
import React, {Component} from "react";
import StoreList from "./stores/StoreList"
import EmployeeList from  "./employees/EmployeeList"
import CandiesList from "./candies/CandiesList"


class ApplicationView extends Component {
    candyTypes =[
        {id: 1, name: "Strewberry"},
        {id: 2, name: "Lemon"},
        {id: 3, name: "Watermolon"}
    ]
    candiesFromAPI =[
        {id: 1, name: "Riesen", candyTypeId: 1 },
        {id: 2, name: "SweetTarrs", candyTypeId: 2 },
        {id: 3, name: "Baby Ruth", candyTypeId: 3 },
        {id: 4, name: "Skittle", candyTypeId: 3 }
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

    render(){
        return( <React.Fragment>
                <Route exact path="/" render={(props) =>{
                return <StoreList stores={this.state.stores} />
            }} />
                <Route exact path="/employees" render={(props) =>{
                return <EmployeeList employees={this.state.employees} />
            }} />
                <Route path="/candies" render={(props) =>{
                return <CandiesList candies={this.state.candies}
                candyTypes={this.state.candyTypes}  />
            }} />
        </React.Fragment>
        )
    }
}
export default ApplicationView