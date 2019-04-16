import React, {Component} from "react"

class StoreList extends Component {
    render() {
        return (
            <section className = "Container">
            <h1>Locations</h1>
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                    {store.name}
                    </div>
                    )
            }
            </section>
        )
    }

}
export default StoreList