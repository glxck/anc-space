import React, { Fragment } from 'react'
import Header from '../../components/Header'
import Item from '../../components/Item'
import firstIco from '../../img/ICO_Linage.png'
import secondIco from '../../img/ICO_Info.png'
import thirdIco from '../../img/ICO_Cometa.png'
import fourthIco from '../../img/ICO_Pencil.png'
import fifthIco from '../../img/ICO_Deliver.png'
import sixthIco from '../../img/ICO_Telescope.png'
import seventhIco from '../../img/ICO_Analytics.png'
import Footer from "../../components/Footer";

const Services = () => {
    return (
        <Fragment>
            <div className = 'services'>
                <Header />
                <h2 style={{
                    marginTop: '200px',
                    textAlign: 'center',
                    fontFamily: 'Open Sans',
                    fontSize: '25px',
                    color: '#fff',
                    fontWeight: 'regular'
                }}>ПЕРЕЧЕНЬ ПРЕДЛАГАЕМЫХ ИНФОРМАЦИОННЫХ УСЛУГ</h2>
                <Item img={firstIco} width = '100px' heigth = '100px' txtWidth='300px' txtPadding = '30px 0 0 30px' txt =
                    'Астрономические измерения
                    по объектам в ОКП
                    и соответствующие им погрешности'/>
                <Item img={secondIco} reverse = 'row-reverse' txtWidth='300px' txtPadding = '40px 0 0 30px' txt = 'Орбитальная информация
                и оценки погрешности
                (Ковариационные матрицы)'/>
                <Item img={thirdIco} width = '100px' heigth = '100px' txtWidth='300px' txtPadding = '40px 0 0 30px' txt = 'Оценка параметров сближения
                космических объектов
                и вероятности столкновения'/>
                <Item img={fourthIco} reverse = 'row-reverse' width = '85px' heigth = '85px' txtWidth='300px' txtPadding = '30px 0 0 30px' txt = 'Проектирование
                и изготовлениекомплексных решений
                для наблюдения за ОКП'/>
                <Item img={fifthIco} width = '110px' heigth = '110px' txtWidth='400px' txtPadding = '30px 0 0 30px' txt = 'Поставка оптико-электронных комплексов
                в сборе и их составных частей,
                администрированных к требованиям заказчика'/>
                <Item img={sixthIco} reverse = 'row-reverse' width = '80px' heigth = '80px' txtWidth='350px' txtPadding = '30px 0 0 30px' txt = 'Информационно-аналитическое
                сопровождение планируемых
                операций в ОКП (запусков, манёвров)'/>
                <Item img={seventhIco} width = '80px' heigth = '80px' txtWidth='350px' txtPadding = '50px 0 0 30px' txt = 'Информационно-аналитические
                отчеты о ситуации в ОКП'/>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Services