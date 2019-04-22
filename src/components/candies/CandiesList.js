import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./candies.css"

class CandiesList extends Component {
    render() {
        return (
            <section className="Container">
                <h1>Candy</h1>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id} className="card">
                        <div className="card-body">
                            {candy.name}
                            {" "} -- {" "}
                            {
                                this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId)
                            }
                             <Link className="nav-link" to={`/candies/${candy.id}`}>Details</Link>
                            <div>
                                <button onClick={() => this.props.deleteCandies(candy.id)}>Delete</button>
                            </div>
                        </div>
                        </div>
                    )
                }
            </section>
        )
    }

}
export default CandiesList