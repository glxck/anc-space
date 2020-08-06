import React from 'react'
import LeftPic from '../../img/IMG_PointsLeft.png'
import RightPic from '../../img/IMG_PointsRight.png'

const OpticalPoints = () => {
    return (
        <div className = 'points'>
            <h2>Оптические пункты наблюдения</h2>
            <div className = 'items'>
                <div className = 'firstPic'>
                    <img src = { LeftPic } />
                    <p className = 'name'>Гора Шадмахадз</p>
                    <p className = 'description'>Республика Карачаево-Черкесия</p>
                </div>
                <div className = 'secondPic'>
                    <img src = { RightPic } />
                    <p className = 'name'>Благовещенский Район</p>
                    <p className = 'description'>Амурская область</p>
                </div>
            </div>
        </div>
    )
}

export default OpticalPoints