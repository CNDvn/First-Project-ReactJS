import React from 'react'
import PropTypes from 'prop-types'
import ListNew from '../ListNew/ListNews'
import './ListNewSys.css'

function ListNewSys(props) {
    return (
        <div className="list-news-Sys">
            <nav class="nav justify-content-center nav-news">
              <a class="nav-link active" href="#">Điện Ảnh 24h</a>
              <a class="nav-link disabled" href="#">Review</a>
              <a class="nav-link disabled" href="#">Khuyến mãi</a>
            </nav>
            <div className="list-news">
                <ListNew/>
            </div>            
            <div className="see-more-news">
                <button className="btn-see-more-news">Xem thêm</button>
            </div>
        </div>
    )
}

ListNewSys.propTypes = {

}

export default ListNewSys

