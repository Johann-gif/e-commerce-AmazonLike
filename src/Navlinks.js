import React from 'react'
import './Navlinks.css'
import { Link } from 'react-router-dom'

function Navlinks() {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <Link>Les deals du jour</Link>
                    <Link>Service client</Link>
                    <Link>Chèques-cadeaux</Link>
                    <Link>Idées cadeaux</Link>
                    <Link>Vendre</Link>
                </div>
            </div>
        </div>
    )
}

export default Navlinks