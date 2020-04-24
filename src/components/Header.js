import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/ICO_Logo.png'

const Header = () => {
    return (
        <header>
            <div className = 'logo'>
                <h1>anc space</h1>
                <a href = '#'><img src = { logo }/></a>
            </div>
            <nav>
                <ul>
                    <Link to = '/'>
                        <li><a>Главная</a></li>
                    </Link>
                    <Link to = '/equipment'>
                        <li><a>Оборудывание</a></li>
                    </Link>
                    <Link>

                        <li><a>Услуги</a></li>
                    </Link>
                    <Link>
                        <li><a>Контакты</a></li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
};
export default Header