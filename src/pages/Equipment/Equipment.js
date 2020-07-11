import React, { Fragment } from 'react'
import Header from '../../components/Header'
import TabMenu from "../../components/TabMenu"
import Footer from "../../components/Footer"

const Equipment = () => {
    return (
        <Fragment>
            <Header/>
                <div className = 'catalog'>
                    <TabMenu/>
                </div>
            <Footer/>
        </Fragment>
        )
}

export default Equipment