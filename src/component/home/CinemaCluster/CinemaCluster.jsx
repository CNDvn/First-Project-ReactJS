import React from "react";
import "./CinemaCluster.css";
import PropTypes from "prop-types";
import CinemaSys from "../CinemaSys/CinemaSys";
import ClusterForSys from "../ClusterForSys/ClusterForSys";
import BookTicket from "../BookTicket/BookTicket";

function CinemaCluster(props) {
  return (
    <div className="row cover-system">
      <div className="cinema-sys">
        <ul>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
          <CinemaSys/> <hr/>
        </ul>
      </div>
      <div className="col-sm clusters">
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
          <div className="clusters-info"><ClusterForSys/></div><hr/>
      </div>
      <div className="col-sm book-ticket">
        {
          loadBookTicket()
        }
      </div>
    </div>
  );
}

function loadBookTicket(){
  let arr = [];
  for(let i=0; i<5;i++){
    arr.push(<div className="book-id">
    <BookTicket id={i}/>
  <hr/></div>)
  }
  return arr;
}

CinemaCluster.propTypes = {};

export default CinemaCluster;
