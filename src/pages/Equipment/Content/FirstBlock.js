import React, { useState, useEffect } from 'react' //If u want to use class Component, just add "Component" to breckets
import FirstPic from '../../../img/IMG-FirstTel.png'
import axios from 'axios' //U can try to use fetch, but idk


const FirstBlock = ({src, obj}) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const res = axios.get("/api/data") //get data from express api
            .then(res => {
                console.log(res.data)
                console.log(res.data)
                const filterData = res.data.filter((element) => {return element.id == obj}) //filter json by id
                setData(filterData) //pull json to data
            })
    }, [])

    return (
        <div className = 'firstBlock'>
            <div className = 'firstTelescope'>
                {data.map((item, index) => (
                    <h2 key={index}>{item.name}</h2>
                ))}
                <img src = { src } />
                <table>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstValue}</td>
                            <td>{item.firstKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.secondValue}</td>
                            <td>{item.secondKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.thirdValue}</td>
                            <td>{item.thirdKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fourthValue}</td>
                            <td>{item.fourthKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fifthValue}</td>
                            <td>{item.fifthKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.sixthValue}</td>
                            <td>{item.sixthKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.seventhValue}</td>
                            <td>{item.seventhKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.eighthValue}</td>
                            <td>{item.eighthKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.ninthValue}</td>
                            <td>{item.ninthKey}</td>
                        </tr>
                    ))}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.tenthValue}</td>
                            <td>{item.tenthKey}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default FirstBlock



//class version of FirstBlock

/*class FirstBlock extends Component {

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
}*/

//Only JSX/HTML
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
