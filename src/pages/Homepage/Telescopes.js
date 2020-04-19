import React from 'react'
import Telescope from '../../img/BG_Telescopes.png'

const Telescopes  = () => {
    return (
        <div className = 'telescopes'>
                <img src = { Telescope }/>
            <div className='info'>
                <h2>АО "АНЦ"</h2>
                <p>
                    осуществляет управление работой 51 телескопа
                    с апертурой от 19см до 65см в 14 обсерваториях, расположенных в различных районах
                    Земного шара
                </p>
                <button>УЗНАТЬ БОЛЬШЕ</button>
            </div>
        </div>
    )
};

export default Telescopes