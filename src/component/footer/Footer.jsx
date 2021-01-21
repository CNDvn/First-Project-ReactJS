import React, { Component } from 'react'
import './Footer.css'
import cgv from '../../img/cgv.png'
import logoAdroid from '../../img/android-logo.png'
import logoIOS from '../../img/apple-logo.png'
import zalo from '../../img/zalo-logo.png'
import facebook from '../../img/facebook-logo.png'
import zion from '../../img/zion-logo.jpg'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 block ng-scope" id="footer" ng-if="!isHideFooter">
                    <div className="mainMaxWidth">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <p className="title hideOnMobile">TIX</p>
                                <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                                    
                                    <a ui-sref="main.faq" href="/faq">FAQ</a>
                                    <a ui-sref="guildline.guidev2" href="/brand-guideline/">Brand Guidelines</a>
                                    
                                </div>
                               <div className="col-sm-6 col-xs-12 noPaddingLeft fontSizeP ng-scope" ng-if="!isMobile">
                                    <a ui-sref="main.term" href="/thoa-thuan-su-dung">Thỏa thuận sử dụng</a>
                                   
                                    <a ui-sref="main.policy" href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
                                 
                                </div>
                               
                            </div>
                            <div className="col-sm-4 col-xs-12 hideOnMobile">
                                <p className="title">ĐỐI TÁC</p>
                                <div className="row col-sm-12 col-xs-12 linePartner">
                                    <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                                        <img className="iconConnect" src={cgv }style={{ backgroundColor: '#fff' }} />
                                    </a>
                                    <a target="_blank" href="http://bhdstar.vn" title="BHD">
                                        <img className="iconConnect" src="app/assets/img/icons/bhd.png" />
                                    </a>
                                    <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                                        <img className="iconConnect" src="app/assets/img/icons/galaxycine.png" />
                                    </a>
                                    <a target="_blank" href="http://cinestar.com.vn" title="Cinestar">
                                        <img className="iconConnect" src="app/assets/img/icons/cinestar.png" />
                                    </a>
                                    <a target="_blank" href="http://lottecinemavn.com" title="Lotte Cinema">
                                        <img className="iconConnect" ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" />
                                    </a>
                                </div>
                                <div className="row col-sm-12 col-xs-12 linePartner">
                                    <a target="_blank" href="https://www.megagscinemas.vn" title="MegaGS">
                                        <img className="iconConnect" src="app/assets/img/icons/megags.png" />
                                    </a>
                                    <a target="_blank" href="https://www.betacineplex.vn/" title="Beta">
                                        <img className="iconConnect" src="app/assets/img/icons/bt.jpg" />
                                    </a>
                                    <a target="_blank" href="http://ddcinema.vn" title="DDC">
                                        <img className="iconConnect" src="app/assets/img/icons/dongdacinema.png" />
                                    </a>
                                    <a target="_blank" href="https://touchcinema.com/" title="Touch Cinema">
                                        <img className="iconConnect" src="app/assets/img/icons/TOUCH.png" />
                                    </a>
                                    <a target="_blank" href="https://cinemaxvn.com/" title="Cinemax">
                                        <img className="iconConnect" src="app/assets/img/icons/cnx.jpg" />
                                    </a>
                                </div>
                                <div className="row col-sm-12 col-xs-12 linePartner">
                                    <a target="_blank" href="http://starlight.vn/" title="Starlight">
                                        <img className="iconConnect" src="app/assets/img/icons/STARLIGHT.png" />
                                    </a>
                                    <a target="_blank" href="https://www.dcine.vn/" title="Dcine">
                                        <img className="iconConnect" src="app/assets/img/icons/dcine.png" />
                                    </a>
                                   
                                    <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
                                        <img className="iconConnect" src="app/assets/img/icons/zalopay_icon.png" />
                                    </a>
                                    <a target="_blank" href="https://www.payoo.vn/" title="Payoo">
                                        <img className="iconConnect" src="app/assets/img/icons/payoo.jpg" />
                                    </a>
                                    <a target="_blank" href="https://www.vietcombank.com.vn/" title="Vietcombank">
                                        <img className="iconConnect" src="app/assets/img/icons/VCB.png" />
                                    </a>
                                    {/* <a target="_blank" href="https://airpay.vn/" title="AirPay">
        <img class="iconConnect" src="app/assets/img/icons/AIRPAY.png">
    </a>
    <a target="_blank" href="http://www.saigonco-op.com.vn/" title="SaigonCoop">
        <img class="iconConnect" src="app/assets/img/icons/SGCOOP.png">
    </a> */}
                                </div>
                                <div className="row col-sm-12 col-xs-12 linePartner">
                                    <a target="_blank" href="http://www.agribank.com.vn/" title="Agribank">
                                        <img className="iconConnect" src="app/assets/img/icons/AGRIBANK.png" />
                                    </a>
                                    <a target="_blank" href="https://www.vietinbank.vn/" title="Vietinbank">
                                        <img className="iconConnect" src="app/assets/img/icons/VIETTINBANK.png" />
                                    </a>
                                    <a target="_blank" href="https://www.indovinabank.com.vn/" title="IVB">
                                        <img className="iconConnect" src="app/assets/img/icons/IVB.png" />
                                    </a>
                                    <a target="_blank" href="http://123go.vn" title="123Go">
                                        <img className="iconConnect" src="app/assets/img/icons/123go.png" />
                                    </a>
                                    <a target="_blank" href="http://laban.vn" title="La Bàn">
                                        <img className="iconConnect" src="app/assets/img/icons/laban.png" />
                                    </a>
                                </div>
                              
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="col-xs-6 hideOnMobile textCenter">
                                    <p className="title">MOBILE APP</p>
                                    <a target="_blank" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" title="Apple App">
                                        <img className="iconApp" src={logoIOS} />
                                    </a>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" title="Android App">
                                        <img className="iconApp" src={logoAdroid} />
                                    </a>
                                </div>
                                <div className="col-xs-6 textCenter">
                                    <p className="title hideOnMobile">SOCIAL</p>
                                    <a target="_blank" href="https://www.facebook.com/tix.vn/" title="Facebook social">
                                        <img className="iconApp" src={facebook} />
                                    </a>
                                    <a target="_blank" href="https://zalo.me/tixdatve" title="Zalo social">
                                        <img className="iconApp" src={zalo} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="hrFooter" />
                        <div className="row">
                            <div className="col-sm-1 col-xs-12 imgFooter">
                                <img className="vngIcon" src={zion} style={{ borderRadius: 8 }} />
                            </div>
                            <div className="col-sm-9 col-xs-12 infoFooter">
                                <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                                <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                                <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi lần&nbsp;thứ&nbsp;30, ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020  do Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.</span>
                                <span>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email: <a href="mailto:support@tix.vn" style={{ color: '#FB4226' }}>support@tix.vn</a></span>
                            </div>
                            <div className="col-sm-2 col-xs-12 imgFooter">
                                <a target="_blank" href="http://online.gov.vn/Home/WebDetails/62782"><img className="imgBoCo" alt="Bộ Công Thương" title src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
