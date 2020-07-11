import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to='/equipment'>
                    <button>УЗНАТЬ БОЛЬШЕ</button>
                </Link>
            </div>
        </div>
    )
};

export default Telescopes