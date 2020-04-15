import React from 'react'
import logo from '../../img/ICO_Logo.png'

const Header = () => {
    return (
        <header>
            <div className = 'logo'>
                <h1>anc space</h1>
                <a href = '#'><img src = { logo }/></a>
            </div>
            <nav>
                <ul>
                    <li><a href='#'>Главная</a></li>
                    <li><a href='#'>Оборудывание</a></li>
                    <li><a href='#'>Услуги</a></li>
                    <li><a href='#'>Контакты</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header