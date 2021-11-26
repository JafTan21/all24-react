import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink(props) {
    return (
        <>
            <Link to={props.to} className="nav-link-styles">
                {props.icon ? props.icon : null}
                <span> {props.text} </span>
            </Link>
        </>
    )
}
