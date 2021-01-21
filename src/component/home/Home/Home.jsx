import React, { Component } from 'react'
import CinemaCluster from '../CinemaCluster/CinemaCluster'
import ListNewSys from '../ListNewSys/ListNewSys'
import ShowTimes from '../ShowTimes/ShowTimes'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <ShowTimes/>
                <div className="margin-component"></div>
                <CinemaCluster/>
                <div className="margin-component"></div>
                <ListNewSys/>
            </>
        )
    }
}
