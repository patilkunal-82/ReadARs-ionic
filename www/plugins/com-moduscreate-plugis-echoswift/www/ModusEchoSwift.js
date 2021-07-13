cordova.define("com-moduscreate-plugis-echoswift.ModusEchoSwift", function(require, exports, module) {
var exec = require('cordova/exec');

//native method
exports.echo = function (arg0, success, error) {
    exec(success, error, 'ModusEchoSwift', 'echo', [arg0]);
};

// pure js method
exports.echojs = function(arg0, success, error) {
    if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
      success(arg0);
    } else {
      error('Empty message!');
    }
  };

});
