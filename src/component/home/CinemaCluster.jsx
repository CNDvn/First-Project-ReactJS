import React from "react";
import PropTypes from "prop-types";

function CinemaCluster(props) {
  return (
    <div className="row w-50 m-auto">
      {/* Cinema System */}
      <div className="col-2">
      <ul className="list-group">
        <li className="list-group-item active">
          {" "}
          <img
            className="w-100"
            src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
            alt=""
          />
        </li>
        <li className="list-group-item">
          {" "}
          <img
            className="w-100"
            src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png"
            alt=""
          />
        </li>
        <li className="list-group-item">
          <img
            className="w-100"
            src="https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png"
            alt=""
          />
        </li>
      </ul>
      </div>

      {/* Cinema cluster for system */}
      <div className="col-3">
        <div className="row">
          <img
            src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg"
            alt=""
            className="w-50"
          />
          <h3 className="col-6">BHD Star - Bitexco</h3>
          <p>L3-Bitexco Icon 68, 2 Hải...</p>
          <p>[Chi Tiết]</p>
        </div>
        <div>
          <img
            src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg"
            alt=""
          />
          <h3>BHD Star - Bitexco</h3>
          <p>L3-Bitexco Icon 68, 2 Hải...</p>
          <p>[Chi Tiết]</p>
        </div>
        <div>
          <img
            src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg"
            alt=""
          />
          <h3>BHD Star - Bitexco</h3>
          <p>L3-Bitexco Icon 68, 2 Hải...</p>
          <p>[Chi Tiết]</p>
        </div>
      </div>
      {/* Book ticket */}
      <div className="col-7"></div>
    </div>
  );
}

CinemaCluster.propTypes = {};

export default CinemaCluster;
