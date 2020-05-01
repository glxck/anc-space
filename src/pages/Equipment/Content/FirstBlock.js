import React from 'react'
import FirstPic from '../../../img/IMG-FirstTel.png'

const FirstBlock = () => {
    return (
        <div className = 'firstBlock'>
            <div className = 'firstTelescope'>
                <h2>МОЭС-25 </h2>
                <img src = { FirstPic } />
                <table>
                    <tr>
                        <td>Диаметр входного зрачка</td>
                        <td>250мм</td>
                    </tr>
                    <tr>
                        <td>Эффективное фокусное расстояние</td>
                        <td>625мм</td>
                    </tr>
                    <tr>
                        <td>Угловой диаметр полезрения</td>
                        <td>4.8град.</td>
                    </tr>
                    <tr>
                        <td>Линейный диаметр полезрения</td>
                        <td>52мм</td>
                    </tr>
                    <tr>
                        <td>Задний отрезок</td>
                        <td>65мм</td>
                    </tr>
                    <tr>
                        <td>Длина оптической системы</td>
                        <td>248,44мм</td>
                    </tr>
                    <tr>
                        <td>Длина с блейндой / без бленды</td>
                        <td>875 / 590 мм</td>
                    </tr>
                    <tr>
                        <td>Диаметр наибольшей (с блендой)</td>
                        <td>310мм</td>
                    </tr>
                    <tr>
                        <td>Масса объектива, не более </td>
                        <td>23кг</td>
                    </tr>
                    <tr className = 'big'>
                        <td>Ожидаемое проницание
                            за 5 с экспозиции на ФПУ,
                            не хуже, зв. величина</td>
                        <td> 16,5m</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}



export default FirstBlock