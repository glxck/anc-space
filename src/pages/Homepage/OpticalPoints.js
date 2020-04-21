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
                    <p>Гора Шадмахадз</p>
                </div>
                <div className = 'secondPic'>
                    <img src = { RightPic } />
                    <p>Благовещенский Район</p>
                </div>
            </div>
        </div>
    )
}

export default OpticalPoints