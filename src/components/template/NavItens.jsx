import './NavItens.css'
import React from 'react'

export default props =>
    <a href={props.nav}>
        <i className={`fa fa-${props.icon}`}>{props.title}</i>
    </a>