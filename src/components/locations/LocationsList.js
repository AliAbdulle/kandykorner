import React, {Component} from "react"
import "./locationList.css"

class LocationsList extends Component {
    render() {
        return (
            <section className = "container">
            <h1>Locations</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                    <div className="card-body">
                    {location.name}
                    </div>
                    </div>
                    )
            }
            </section>
        )
    }

}
export default LocationsList