cordova.define("cordova-plugin-demoplugin.DemoPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'DemoPlugin', 'coolMethod', [arg0]);
};

exports.add = function (arg0, success, error) {
    exec(success, error, 'DemoPlugin', 'add', [arg0]);
};

exports.getContacts = function (arg0, success, error) {
    exec(success, error, 'DemoPlugin', 'getContacts', [arg0]);
}

});
