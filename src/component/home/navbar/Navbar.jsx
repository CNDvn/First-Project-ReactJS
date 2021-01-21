import React, { Component } from 'react'
import './Navbar.css'
import Logo from "../../../img/Logo.png"
import imgLogin from "../../../img/avatar.png"
export default class Navbar extends Component {
  render() {
    return (
      <div className="contenter-header">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#" ><img className="Logo" src = {Logo}></img></a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Lịch Chiếu <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cụm Rạp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tin Tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ứng Dụng</a>
              </li>
             
            </ul>
            <div >
            <form className="form-inline row">
              <div className="signin col">
                <img className="Logo" src= {imgLogin}></img>
                <p>Đăng Nhập</p>
              </div>
              <li className="nav-item dropdown col">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tp Hồ Chí Minh</a>
                <div className="dropdown-menu " aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#"> Quảng Nam</a>
                  <a className="dropdown-item" href="#">Thanh Hóa</a>
                  <a className="dropdown-item" href="#">Quảng Ngãi</a>
                  <a className="dropdown-item" href="#">Nha Trang</a>
                  <a className="dropdown-item" href="#">Dalk Nông</a>
                </div>
              </li>
            </form>
            </div>
     
          </div>
        </nav>


      <div>
        
      </div>
      </div>
      

    )
  }
}

