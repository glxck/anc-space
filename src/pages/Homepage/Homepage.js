import React, { Fragment } from "react"
import Header from "../../components/Header"
import Banner from './Banner'
import About from './About'
import Structure from './Structure'
import Geo from './Geo'
import Telescopes from "./Telescopes";
import OpticalPoints from "./OpticalPoints"
import Footer from '../../components/Footer'

const Homepage = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <About />
            <Structure />
            <Geo />
            <Telescopes />
            <OpticalPoints />
            <Footer />
        </Fragment>
    )
};
export default Homepage