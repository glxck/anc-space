import React from 'react'
import Earth from '../../img/IMG_Earth.png'

const Geo  = () => {
    return (
        <div className = 'geo'>
            <div className='content'>
                <img src = { Earth }/>
            <p>
                АО «АНЦ» имеет собственные
                научно-исследовательские площадки,
                размещенные в Карачаево-Черкессии
                (гора Шаджатмаз) и в районе
                г. Благовещенск Амурской области
            </p>
            </div>
        </div>
    )
};

export default Geo