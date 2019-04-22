import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./candies.css"
//import dog from "./DogIcon.svg"


export default class CandiesDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="candies">
                <div key={ this.props.candies.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={ dog } className="icon--dog" /> */}
                            { this.props.candies.name } typo of {""}
                            {this.props.candiesType}
                        </h4>
                        <Link className="nav-link" to={`/candies/${candies.id}`}>Details</Link>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeEmployee(this.props.candies.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}