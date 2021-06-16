import React from 'react'
import './Navlinks.css'
import { Link } from 'react-router-dom'

function Navlinks() {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <Link to="/">Les deals du jour</Link>
                    <Link to="/">Service client</Link>
                    <Link to="/">Chèques-cadeaux</Link>
                    <Link to="/">Idées cadeaux</Link>
                    <Link to="/">Vendre</Link>
                </div>
            </div>
        </div>
    )
}

export default Navlinks