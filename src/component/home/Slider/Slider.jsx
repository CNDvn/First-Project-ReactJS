
import React, { Component } from 'react'
import './Slider.css'
import hinh1 from "../../../img/vosinhdaichien.jpg"
import hinh2 from "../../../img/wonderwoman.jpg"
import hinh3 from "../../../img/datvenhanhnhar.png"
export default class Slider extends Component {
    render() {
        return (

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" src={hinh1} alt="slidershow_vosinhdaichien" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={hinh2} alt="Slidersow_wonderwoment" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={hinh3} alt="Slidershow_datvenhanh" />
                    </div>
                </div>
                <div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>



            </div>


        )
    }
}
