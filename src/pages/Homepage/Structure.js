import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../img/BG_Telescopes.png'

const Structure = () => {
    return (
        <div className = 'structure'>
            <img src={ BG }/>
            <div className = 'info'>
                <h2>Структура компании</h2>
                <p>
                    На предприятии
                    работают более 100 высококвалифицированных сотрудников,
                    имеющих большой практический опыт в области космической деятельности.
                </p>
                <Link to='/services'>
                    <button>УЗНАТЬ БОЛЬШЕ</button>
                </Link>
            </div>
        </div>
    )
};

export default Structure