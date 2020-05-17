import React, { Component } from 'react'
import FirstPic from '../../../img/IMG-FirstTel.png'
import info from '../../../characteristics'





class FirstBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            json: []
        }
    }

    componentDidMount() {
        this.setState((prevState) => {
            return {
                json: info
            }
        })
    }


    render() {
        return (
        <div className = 'firstBlock'>
            <div className = 'firstTelescope'>
                <h2>МОЭС-25 </h2>
                <img src = { FirstPic } />
                <table>
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.firstValue}</td>
                                <td>{data.firstKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.secondValue}</td>
                                <td>{data.secondKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.thirdValue}</td>
                                <td>{data.thirdKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.fourthValue}</td>
                                <td>{data.fourthKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.fifthValue}</td>
                                <td>{data.fifthKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.sixthValue}</td>
                                <td>{data.sixthKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.seventhValue}</td>
                                <td>{data.seventhKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.eigthValue}</td>
                                <td>{data.eigthKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.ninthValue}</td>
                                <td>{data.ninthKey}</td>
                            </tr>
                        )
                    })}
                    {this.state.json.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.tenthValue}</td>
                                <td>{data.tenthKey}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
    }
}



export default FirstBlock





/*
<tr>
<td>Эффективное фокусное расстояние</td>
<td>625мм</td>
</tr>
<tr>
    <td>Угловой диаметр полязрения</td>
    <td>4.8град.</td>
</tr>
<tr>
<td>Линейный диаметр полязрения</td>
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
    <td>Длина с блендой / без бленды</td>
    <td>875 / 590 мм</td>
</tr>
<tr>
<td>Диаметр наибольший (с блендой)</td>
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
</tr>*/
