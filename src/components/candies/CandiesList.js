import React, {Component} from "react"

class CandiesList extends Component {
    render() {
        return (
            <section className = "Container">
            <h1>Candy</h1>
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                    {candy.name}
                    {" "} -- {" "}
                    {
                        this.props.candyTypes.find(candyTypes => candyTypes.id === candy.candyTypeId)
                    }
                    <button onClick={() => this.props.deleteCandy(candy.id)}>Delete</button>
                    </div>
                    )
            }
            </section>
        )
    }

}
export default CandiesList