import React from 'react'
import './Movie.css'
import PropTypes from 'prop-types'

function Movie(props) {
    return (
      <div className="card">
        <div className="info-movie">
          <div className="play-movie"></div>
          <img className="card-img-top" src="https://s3img.vcdn.vn/mobile/123phim/2020/12/ky-si-cuoi-rong-dragon-rider-p-16091398279162_215x318.png" alt="" />
          <span className="card-rate">
            <p>5.7</p>
          </span>
        </div>
        <button className="btn-ticket">MUA VÉ</button>
        <div className="card-body card-hide">
          <h5 className="card-title">Kỵ sĩ cưỡi rồng</h5>
          <p className="card-text">12 phút</p>
        </div>
      </div>
    );
}

Movie.propTypes = {

}

export default Movie

