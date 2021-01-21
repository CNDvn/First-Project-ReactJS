import React, { Component } from 'react'
<<<<<<< HEAD
import CinemaCluster from './CinemaCluster'
import ShowTimes from './ShowTimes/ShowTimes'
=======

import Navbar from "./navbar/Navbar"
import Slider from './Slider/Slider'
import Inforfilm from './inforfilm/Inforfilm'
import FilterBookTicket from './filter/FilterBookTicket'
import Footer from '../footer/Footer.jsx'

>>>>>>> b42b29f4082dcbc7e081580ab57f18617ff13cbf

export default class Home extends Component {
    render() {
        return (
            <>
<<<<<<< HEAD
                <ShowTimes/>
                <CinemaCluster/>
=======
            <Navbar/>
            <Slider/>
            <Inforfilm/>
            <FilterBookTicket/>
            <Footer/>
>>>>>>> b42b29f4082dcbc7e081580ab57f18617ff13cbf
            </>
        )
    }
}
