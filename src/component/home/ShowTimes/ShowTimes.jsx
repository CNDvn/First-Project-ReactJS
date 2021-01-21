import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Movie from "../Movie/Movie";
import "./ShowTimes.css";
import Axios from 'axios'
import Action from '../../../redux/typeAction'
import {connect} from 'react-redux'

function ShowTimes(props) {
  const date = Date.UTC();
  useEffect(()=>{
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10&tuNgay=18%2F01%2F2021&denNgay=20%2F05%2F2021`,
      method: "GET"
      }).then(res => {
          console.log(res);
      }).catch(err=>{
          console.log(err);
      })
    }, [])

  return (
    <div>
      {/* navbar */}
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Đang Chiếu
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Sắp Chiếu
          </a>
        </li>
      </ul>
      {/* slider */}
      <div className="slider-cover">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner slider-inner">
            <div className="carousel-item active" data-interval={10000}>
              <div className="row">
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
              </div>
            </div>
            <div className="carousel-item" data-interval={2000}>
              <div className="row">
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
                <div className="col-3">
                  <Movie />
                </div>
              </div>
            </div>
            {/* <div className="carousel-item">
              <img src="https://lh4.googleusercontent.com/-YtNCbegHndc/Un1BID2_oqI/AAAAAAAABXM/KilOdhWuEUg/s1600/Anh-bia-facebook-doc-tu-ky-vui-hai-huoc-kho-do-nhat-.jpg" className="d-block w-100" alt="..." />
            </div> */}
          </div>
          <a
            className="carousel-control-prev control control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next control control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

ShowTimes.propTypes = {};

const mapStateToProps = state =>({
  
})

export default connect(mapStateToProps)(ShowTimes)
