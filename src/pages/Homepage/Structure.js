import React from 'react'
import BG from '../../img/BG-Structure.png'

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
                <button>УЗНАТЬ БОЛЬШЕ</button>
            </div>
        </div>
    )
}

export default Structure