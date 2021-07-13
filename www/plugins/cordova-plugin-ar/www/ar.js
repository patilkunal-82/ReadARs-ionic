cordova.define("cordova-plugin-ar.ar", function(require, exports, module) {
var exec = require('cordova/exec');

var PLUGIN_NAME = "ar"; 

var ar = function() {}; // This just makes it easier forus to export all of the functions at once.
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
ar.testar = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "testar", []);
   
};


module.exports = ar;
});
