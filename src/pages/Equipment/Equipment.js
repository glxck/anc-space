import React, { Fragment } from 'react'
import Header from '../../components/Header'
import TabMenu from "../../components/TabMenu"
import FirstBlock from "./Content/FirstBlock"

const Equipment = () => {
    return (
        <Fragment>
            <Header/>
                <div className = 'catalog'>
                    <TabMenu/>
                    <FirstBlock/>
                </div>
        </Fragment>
        )
}

export default Equipment