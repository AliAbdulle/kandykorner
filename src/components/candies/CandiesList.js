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
                    </div>
                    )
            }
            </section>
        )
    }

}
export default CandiesList