import React from 'react'
import './ClusterForSys.css'
import PropTypes from 'prop-types'

function ClusterForSys(props) {
    return (
        <div className="cluster-detail">
        <div className="cluster-image">
          <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt=""/>
        </div>
        <div className="cluster-info">
          <span className="cluster-title">BHD Star - Bitexco</span>
          <span className="cluster-address">L3-Bitexco Icon 68, 2 Hải Triều, Q.1 hai phong nam</span>
          <span className="see-cluster-info-detail"><a href="#">[Chi tiết]</a></span>
        </div>
      </div>
    )
}

ClusterForSys.propTypes = {

}

export default ClusterForSys

