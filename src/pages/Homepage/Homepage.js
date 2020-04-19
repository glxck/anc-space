import React from "react"
import Header from "./Header"
import Banner from './Banner'
import About from './About'
import Structure from './Structure'
import Geo from './Geo'
import Telescopes from "./Telescopes";

const Homepage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Structure/>
            <Geo/>
        </div>
    )
};
export default Homepage
