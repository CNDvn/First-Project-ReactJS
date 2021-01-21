import React, { Component } from 'react'

import Navbar from "./navbar/Navbar"
import Slider from './Slider/Slider'
import Inforfilm from './inforfilm/Inforfilm'
import FilterBookTicket from './filter/FilterBookTicket'
import Footer from '../footer/Footer.jsx'


export default class Home extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Slider/>
            <Inforfilm/>
            <FilterBookTicket/>
            <Footer/>
            </>
        )
    }
}
