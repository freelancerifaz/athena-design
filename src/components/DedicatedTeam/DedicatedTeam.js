import React from 'react';
import './DedicatedTeam.css';

const DedicatedTeam = () => {
  return (
    <div className="container">
       <h1 className="font-weight-bold mt-5">Choose Your Dedicated Team</h1>
      <div className="row">
        <div className="col-md-3 py-5 box-shadow margin">
          <h1 className="font-weight-bold">$199</h1>
          <p>For Basic</p>
          <hr className="borderCyan"/>
          <ul class="list-group">
            <li class="list-group-item">Homepage</li>
            <li class="list-group-item">No Inner Page</li>
            <li class="list-group-item">Asset File</li>
            <li class="list-group-item">Source File </li>
            <li class="list-group-item">Free Stock Photos</li>
            <li class="list-group-item">10 Days Free Support</li>
            <li class="list-group-item">24/7 Support</li>
          </ul>
        </div>
        <div className="col-md-3 py-5 box-shadow cardBorder margin">
          <h1 className="font-weight-bold">$399</h1>
          <p>For Preferred</p>
          <hr className="borderGray"/>
          <ul class="list-group">
            <li class="list-group-item">Homepage</li>
            <li class="list-group-item">4 Inner Page</li>
            <li class="list-group-item">Asset File</li>
            <li class="list-group-item">Source File </li>
            <li class="list-group-item">Free Stock Photos</li>
            <li class="list-group-item">20 Days Free Support</li>
            <li class="list-group-item">24/7 Support</li>
            <div className="d-flex justify-content-center pt-4">
              <button className="btn-bg">Order Now</button>
            </div>
          </ul>
        </div>
        <div className="col-md-3 py-5 box-shadow margin">
          <h1 className="font-weight-bold">$599</h1>
          <p>For Elite</p>
          <hr className="borderCyan"/>
          <ul class="list-group">
            <li class="list-group-item">Homepage</li>
            <li class="list-group-item">8 Inner Page</li>
            <li class="list-group-item">Asset File</li>
            <li class="list-group-item">Source File </li>
            <li class="list-group-item">Free Stock Photos</li>
            <li class="list-group-item">30 Days Free Support</li>
            <li class="list-group-item">24/7 Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DedicatedTeam;