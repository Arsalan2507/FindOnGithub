import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {

    return (
        <nav className="navbar bg-primary">
            <Link to="/"><h1>{title}</h1></Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )

}

Navbar.defaultProps = {
    title: 'Find On Github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
export default Navbar;