import React, { Component } from 'react'
import './Filter.css'
import slide14 from '../../../img/slide14.jpg'
import phone from '../../../img/mobile.png'
import slide13 from '../../../img/slide13.jpg'

export default class FilterBookTicket extends Component {
    render() {
        return (
            <div>
                <div ng-controller="AppHomeController" ng-include src="'app/main/app/app.html'" id="appblock" className="ng-scope"><div className="row ng-scope" id="wrapHomeApp">
                    <div className="col-xs-12 block" id="homeApp">
                        <div className="mainMaxWidth">
                            <div className="row">
                                <div className="col-md-6 left text-left">
                                    <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                                    <p className="textLeft">người yêu điện ảnh</p>
                                    <br />
                                    <p className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                    <br />
                                    <button className="buttonLeft" onclick="window.open('https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8','_blank');">App miễn phí - Tải về ngay!</button>
                                    <p className="textAppUnder">TIX có hai phiên bản
              <a className="tagA" target="_blank" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">iOS</a>
              &amp;&nbsp;<a className="tagA" target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a>
                                    </p>
                    </div>
                                <div className="col-md-6 right">
                                    <img className="img-responsive phone-img" id= ""src={phone} alt="Loading..." />
                                    <div id="sliderScreen" className="wrapSlick slick-initialized slick-slider">
                                        </div></div>
                                    </div>
                                </div>
                    </div>
                </div></div>

            </div>
        )
    }
}
