import React from 'react'
import './BookTicket.css'
import PropTypes from 'prop-types'

function BookTicket(props) {
    return (
      <div>
        <div className="ticket-info">
          <div className="ticket-info-img">
            <img
              src="https://s3img.vcdn.vn/mobile/123phim/2020/10/soul-16032488077578_60x60.png"
              alt
            />
          </div>
         <div className="ticket-info-detail">
         <h6 className="ticket-info-name">Chị Mười Ba: 3 Ngày Sinh Tử</h6>
          <a
            className="show-time "
            data-toggle="collapse"
            href={`#${props.id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            100 phút - TIX 9 - IMDb 8
          </a>
         </div>
        </div>
        <div className="collapse show" id={`${props.id}`}>
          <div className="card card-body">
            <p>2D Digital</p>
            <div className="row">
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
              <a href="#" className="time-detail"><span className="time-detail-begin">16:45</span> ~ 18:29</a>
            </div>
          </div>
        </div>
      </div>
    );
}

BookTicket.propTypes = {
  
}

export default BookTicket

