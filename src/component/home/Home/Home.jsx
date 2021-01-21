import React, { Component } from 'react'
import CinemaCluster from '../CinemaCluster/CinemaCluster'
import ListNewSys from '../ListNewSys/ListNewSys'
import ShowTimes from '../ShowTimes/ShowTimes'
import Slider from '../Slider/Slider'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <Slider/>
                <ShowTimes/>
                <div className="margin-component"></div>
                <CinemaCluster/>
                <div className="margin-component"></div>
                <ListNewSys/>
            </>
        )
    }
}
