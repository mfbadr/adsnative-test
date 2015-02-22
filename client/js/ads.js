/* jshint camelcase:false*/
/* global AdsNative */
'use strict';

var infeed_placement = new AdsNative('PLACEMENT-KEY', ['travel', 'food']);
infeed_placement.fetchAd(function(status){
  console.log('status', status);
  if(status){ // If returned a valid campaign to display.
    $(document).ready(function(){
      var didDisplay = infeed_placement.displayAd('adgoeshere');
      if(!didDisplay){
        console.log('Ad could not be displayed. Most likely due to invalid element ID or double rendering of ad.');
      }
    });
  }
});

console.log('ads.js', infeed_placement);
