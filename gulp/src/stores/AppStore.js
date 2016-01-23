"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var AppConstants = require("../constants/AppConstants");
var SearchConstants = require("../constants/SearchConstants");
var assign = require("object-assign");

var CHANGE_EVENT = 'change';

var _state = {
  // TODO: 初期値の定義はここでするのか？
  query: SearchConstants.INIT_QUERY,
  lat: SearchConstants.INIT_LAT,
  lng: SearchConstants.INIT_LNG,
  within: SearchConstants.INIT_WITHIN,
  rpp: SearchConstants.INIT_RPP,
  zoom: SearchConstants.INIT_ZOOM,
  requestUrl: SearchConstants.REQUEST_URL,
  distances: SearchConstants.DISTANCES,
  units: SearchConstants.UNITS
};

/**
 * [explain...]
 * @param {string} a
 * @param {string} b
 */
function update(a, b) {
  // TODO: 定義
}

function updateLatLng(lat, lng) {
  _state.lat = lat;
  _state.lng = lng;
  // console.log('updateLatLng: ' + lat + ',' + lng);
}

function updateDistance() {
}

function updateZoom(zoom) {
  _state.zoom = zoom;
  // console.log('updateZoom: ' + zoom);
}

function updateTweets() {
}

var AppStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _state;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case AppConstants.UPDATE_LAT_LNG:
      updateLatLng(action.lat, action.lng);
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_DISTANCE:
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_ZOOM:
      updateZoom(action.zoom);
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_TWEETS:
      AppStore.emitChange();
      break;

    default:
  }

});

module.exports = AppStore;