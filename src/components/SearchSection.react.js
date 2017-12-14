"use strict"

var React = require("react")
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

var SearchForm = require("./SearchForm.react");

var SearchSection = createReactClass({

  propTypes: {
    states: PropTypes.object.isRequired,
    onSearchTweet: PropTypes.func.isRequired
  },

  componentDidMount: function() {
    this._loadTweetsFromServer();
  },

  _loadTweetsFromServer: function() {
    this.props.onSearchTweet();
  },

  _handleFormSubmit: function() {
    this.props.onSearchTweet();
  },

  render: function() {
    var states = this.props.states;
    return (
      <div id="searchSection" className="search-section">
        <SearchForm
          query={states.query}
          lat={states.lat}
          lng={states.lng}
          within={states.within}
          rpp={states.rpp}
          zoom={states.zoom}
          distances={states.distances}
          units={states.units}
          formatGeocode={this._handleFormatGeocode}
          onFormSubmit={this._handleFormSubmit}
        />
      </div>
    );
  }

});

export default SearchSection