import React, {Component} from "react"

class storeList extends Component {
    render() {
        return (
            <section className = "Container">
            <h1>Stores</h1>
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
export default storeList