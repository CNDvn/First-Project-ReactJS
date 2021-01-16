import React, { Component } from 'react'
import CinemaCluster from './CinemaCluster'
import ShowTimes from './ShowTimes/ShowTimes'

export default class Home extends Component {
    render() {
        return (
            <>
                <ShowTimes/>
                <CinemaCluster/>
            </>
        )
    }
}
