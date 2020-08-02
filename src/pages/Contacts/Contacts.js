import React, { Fragment } from 'react'
import Header from "../../components/Header"
import Maps from './Maps.js'
import Geo from '../../img/ICO_Geo.png'
import Email from '../../img/ICO_Email.png'
import Phone from '../../img/ICO_Phone.png'
import Footer from '../../components/Footer'

const Contacts = () => {
    return (
        <Fragment>
            <div className = 'contactsPage'>
                <Header />
                <div className = 'content'>
                    <div className = 'map'>
                        <Maps />
                    </div>
                    <div className = 'info'>
                        <ul>
                            <li>
                                <img src = {Geo} /*style = {{width: '28px', height: '40px'}}*//>
                                <p>Москва ул. Шоссе Энтузиастов
    д. 56 стр. 25</p>
                            </li>
                            <li>
                                <img src = {Email} style = {{marginLeft: '-12px'}}/*style = {{width: '40px', height: '30px'}}*//>
                                <p style = {{marign: '0 0 0 20px'}}>info@ancprotek.ru</p>
                            </li>
                            <li>
                                <img src = {Phone} /*style = {{width: '38px', height: '30px'}}*//>
                                <p>+7 (495) 641 51 35</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Contacts