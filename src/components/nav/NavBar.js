import React, {Component} from "react"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="nav nav-holder">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link className="nav-link" to="/">Stores</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/candies">Candy</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;