import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core'


@Injectable({
  providedIn: 'root'
})
export class PluginServiceService extends IonicNativePlugin {

  //name in package.json file of plugin
  static pluginName = 'arplugin'; 
  // plugin id in the plugin.xml of plugin
  static plugin = 'cordova-plugin-arplugin';
  // clobbers target in the plugin.xml of plugin
  static pluginRef = 'ArPlugin';
  static repo = 'https://github.com/patilkunal-82/arplugin.git';
  static platforms = ['iOS'];

  add(num1, num2): Promise<any> {
    return cordova(this, 'add', {}, [{ param1: num1, param2: num2 }]);
  }

  getContacts(): Promise<any> {
    return cordova(this, 'getContacts', {}, [{}]);
  }

  viewAR(bookID): Promise<any> {
    return cordova(this, 'viewAR', {}, [{param1: bookID}]);
  }

}

