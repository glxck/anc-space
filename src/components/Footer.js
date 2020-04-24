import React from 'react'
import Logo from '../img/ICO_LogoFooter.png'

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className = 'info'>
                <p className = 'contacts'>+7 (495) 641 51 35 / info@ancprotek.ru</p>
                <img src = { Logo }/>
                <p className = 'address'>Россия, Москва, шоссе Энтузиастов, 56с25</p>
            </div>
        </div>
    )
}

export default Footer