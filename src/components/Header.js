import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/ICO_Logo.png'
import '../App.scss'
import '../header.scss'



const Header = () => {
    return (
        <header>
            <div className = 'logo'>
                <h1>anc space</h1>
                <a href = '#'><img src = { logo }/></a>
            </div>
            <nav>
                <ul>
                    <NavLink to = '/' exact activeClassName='current'>
                        <li><a>Главная</a></li>
                    </NavLink>
                    <NavLink to = '/equipment' activeClassName='current'>
                        <li><a>Оборудование</a></li>
                    </NavLink>
                    <NavLink to = '/services' activeClassName='current'>
                        <li><a>Услуги</a></li>
                    </NavLink>
                    <NavLink to = 'contacts' activeClassName='current'>
                        <li><a>Контакты</a></li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
};
export default Header