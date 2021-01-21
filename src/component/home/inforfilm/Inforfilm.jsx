import React, { Component } from 'react'
import './Inforfilm.css'
export default class inforfilm extends Component {
    render() {
        return (
            // <div className="content">
            //     <div className="Menu_infor row ">
            //         <div className="dropdown phim col">
            //             <a className="btn btn-secondary dropdown-toggle slecectMenu white ng-binding"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                phim
            //             </a>
            //             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                 <a className="dropdown-item" href="#">Action</a>
            //                 <a className="dropdown-item" href="#">Another action</a>
            //                 <a className="dropdown-item" href="#">Something else here</a>
            //             </div>
            //         </div>
            //         <div className="dropdown col">
            //             <a className="btn btn-secondary dropdown-toggle slecectMenu white ng-binding"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                phim
            //             </a>
            //             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                 <a className="dropdown-item" href="#">Action</a>
            //                 <a className="dropdown-item" href="#">Another action</a>
            //                 <a className="dropdown-item" href="#">Something else here</a>
            //             </div>
            //         </div>
            //         <div className="dropdown col">
            //             <a className="btn btn-secondary dropdown-toggle slecectMenu white ng-binding"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                phim
            //             </a>
            //             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                 <a className="dropdown-item" href="#">Action</a>
            //                 <a className="dropdown-item" href="#">Another action</a>
            //                 <a className="dropdown-item" href="#">Something else here</a>
            //             </div>
            //         </div>
            //         <div className="dropdown col">
            //             <a className="btn btn-secondary dropdown-toggle slecectMenu white ng-binding"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                phim
            //             </a>
            //             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                 <a className="dropdown-item" href="#">Action</a>
            //                 <a className="dropdown-item" href="#">Another action</a>
            //                 <a className="dropdown-item" href="#">Something else here</a>
            //             </div>
            //         </div>

            //     </div>
            <div id="homeTools" className="hideOnMobile  d-flex justify-content-md-center flex-row">
                <div className="w20p widthByPercent dropdown selectFilm p-2" id="selectMoive">
                    <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown">Phim</div>
                    <ul className="dropdown-menu selectScroll">
                        {/* ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2338} data-name="Chị Mười Ba: 3 Ngày Sinh Tử (C18)" className="ng-binding">Chị Mười Ba: 3 Ngày Sinh Tử (C18)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2532} data-name="Thợ Săn Quái Vật - Monster Hunter (C13)" className="ng-binding">Thợ Săn Quái Vật - Monster Hunter (C13)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2214} data-name="Cuộc Sống Nhiệm Màu - Soul - (P)" className="ng-binding">Cuộc Sống Nhiệm Màu - Soul - (P)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={1981} data-name="Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)" className="ng-binding">Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2535} data-name="'Em' Là Của Em (C16)" className="ng-binding">'Em' Là Của Em (C16)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2539} data-name="Cậu Vàng (C16)" className="ng-binding">Cậu Vàng (C16)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2529} data-name="Võ Sinh Đại Chiến (C13)" className="ng-binding">Võ Sinh Đại Chiến (C13)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2530} data-name="Josée, Nàng Thơ Của Tôi - Josée (C16)" className="ng-binding">Josée, Nàng Thơ Của Tôi - Josée (C16)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2522} data-name="Người Cần Quên Phải Nhớ (C16)" className="ng-binding">Người Cần Quên Phải Nhớ (C16)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2525} data-name="Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon the Movie: Nobita's New Dinosaurs (P)" className="ng-binding">Doraemon: Nobita và Những Bạn Khủng Long Mới - Doraemon the Movie: Nobita's New Dinosaurs (P)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2533} data-name="Đại Dịch Cúm - The Flu (P)" className="ng-binding">Đại Dịch Cúm - The Flu (P)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2517} data-name="Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)" className="ng-binding">Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon Slayer The Movie: Mugen Train (P)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}<li ng-repeat="film in toolFilms" className="ng-scope">
                            <a ng-click="chooseMovie($event)" data-id={2524} data-name="Nghề Siêu Khó - Extreme Job (C18)" className="ng-binding">Nghề Siêu Khó - Extreme Job (C18)</a>
                        </li>{/* end ngRepeat: film in toolFilms */}
                    </ul>
                </div>
                <div className="smallBlock widthByPercent dropdown selectCinema p-2">
                    <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown">Rạp</div>
                    <ul className="dropdown-menu" ng-class="{'selectScroll': (isChoseMovie && toolCinemas.length > 0)}">
                        {/* ngIf: !isChoseMovie */}<li ng-if="!isChoseMovie" className="ng-scope"><a className="ng-binding">Vui lòng chọn phim</a></li>{/* end ngIf: !isChoseMovie */}
                        {/* ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}{/* ngIf: isChoseMovie */}{/* end ngRepeat: cinema in toolCinemas */}
                    </ul>
                </div>
                <div className="smallBlock widthByPercent dropdown selectDate p-2">
                    <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown">Ngày xem</div>
                    <ul className="dropdown-menu">
                        {/* ngIf: !isChoseCinema */}<li ng-if="!isChoseCinema" className="ng-scope"><a>Vui lòng chọn phim và rạp</a></li>{/* end ngIf: !isChoseCinema */}
                        {/* ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}{/* ngIf: isChoseCinema */}{/* end ngRepeat: date in listDate */}
                    </ul>
                </div>
                <div className="smallBlock widthByPercent dropdown selectSession p-2">
                    <div className="dropdown-toggle selectMenu white ng-binding" ng-click="onClickHomeToolsMenu($event)" data-toggle="dropdown">Suất chiếu</div>
                    <ul className="dropdown-menu">
                        {/* ngIf: !isChoseDate */}<li ng-if="!isChoseDate" className="ng-scope"><a>Vui lòng chọn phim, rạp và ngày xem</a></li>{/* end ngIf: !isChoseDate */}
                        {/* ngRepeat: session in listSessions */}
                        {/* ngIf: isChoseDate && listSessions.length == 0 */}
                    </ul>
                </div>
                <div className="smallBlock widthByPercent">
                    {/* Noel */}
                    <div className="after-btn" />
                    <div className="before-btn" />
                    <button ng-click="buyTicket()" type="button" className="btn btn-primary" ng-class="{'active':canBuyNowTool}" id="btnBuy">MUA VÉ NGAY</button>
                </div>
            </div>


        )
    }
}
