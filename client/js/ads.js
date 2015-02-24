/* jshint camelcase:false*/
/* global AdsNative */
'use strict';

var infeed_placement = new AdsNative('OgvwWraDkZxXRI1yFt090xdfxtNcnsTB7xMHUqUP', ['travel', 'food']);
console.log('infeed_placement', infeed_placement);
infeed_placement.fetchAd(function(status){
  console.log('status', status);
  if(status){ // If returned a valid campaign to display.
    $(document).ready(function(){
      var didDisplay = infeed_placement.displayAd('adgoeshere');
      if(!didDisplay){
        console.log('Ad could not be displayed. Most likely due to invalid element ID or double rendering of ad.');
      }
    });
  }else{
    console.log('status is ', status, ' - Unable to fetchAd');
  }
});

//console.log('AdsNative', AdsNative);
