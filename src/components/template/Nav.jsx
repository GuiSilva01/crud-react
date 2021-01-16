import './Nav.css'
import React from 'react'
import Links from './NavItens'

export default props =>
    <aside className="menu-area">
        <na className="menu">
            <Links title="Home" icon="home" nav="#/"></Links>
            <Links title="Usuários" icon="users" nav="#/users"></Links>
        </na>
    </aside>