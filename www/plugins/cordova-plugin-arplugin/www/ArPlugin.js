cordova.define("cordova-plugin-arplugin.ArPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ArPlugin', 'coolMethod', [arg0]);
};

exports.add = function (arg0, success, error) {
    exec(success, error, 'ArPlugin', 'add', [arg0]);
};

exports.getContacts = function (arg0, success, error) {
    exec(success, error, 'ArPlugin', 'getContacts', [arg0]);
}

exports.viewAR = function (arg0, success, error) {
    exec(success, error, 'ArPlugin', 'viewAR', [arg0]);
}

});
