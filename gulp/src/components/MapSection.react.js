"use strict";

var React = require("react");
var MapCanvas = require("./MapCanvas.react");

var MapSection = React.createClass({

  propTypes: {
    states: React.PropTypes.object.isRequired,
    onSearchTweet: React.PropTypes.func.isRequired
  },

  _handleSearchTweet: function() {
    this.props.onSearchTweet();
  },

  render: function() {
    var states = this.props.states;
    return (
      <div id="mapSection">
        <MapCanvas
          lat={states.lat}
          lng={states.lng}
          zoom={states.zoom}
          within={states.within}
          onSearchTweet={this._handleSearchTweet}
        />
        <div id="positionInfo">
          <p className="latlng">Lat：<span id="lat"></span>&nbsp;&nbsp;&nbsp;Lng：<span id="lng"></span></p>
          <p className="address"><span id="address">Address 取得中…</span></p>
        </div>
        <div className="link">develop by <a href="//github.com/tkabeee" target="_blank">tkabee</a>. ＠<a href="//twitter.com/TweetAroundHere" target="_blank">TweetAroundHere</a></div>
      </div>
    );
  }
});

module.exports = MapSection;