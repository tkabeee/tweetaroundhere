"use strict";

import React from "react";
import MapCanvas from "./MapCanvas";

export default class MapSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mapSection" className="map-section">
        {this.props.children}
        <div id="positionInfo">
          <p className="latlng">
            Lat:&nbsp;<span id="lat">{Number(this.props.lat).toFixed(6)}</span>&nbsp;&nbsp;
            Lng:&nbsp;<span id="lng">{Number(this.props.lng).toFixed(6)}</span>
          </p>
          <p className="address">
            <span id="address">Address 取得中…</span>
          </p>
        </div>
        <div className="link">develop by <a href="//github.com/tkabeee" target="_blank">tkabee</a>. ＠<a href="//twitter.com/TweetAroundHere" target="_blank">TweetAroundHere</a></div>
      </div>
    );
  }
}

MapSection.propsTypes = {
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
};
