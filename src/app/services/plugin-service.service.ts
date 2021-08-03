import { jsonpCallbackContext } from '@angular/common/http/src/module';
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

  viewAR(bookID, bookName, anchorContentURLsMap): Promise<any> {
    console.log("anchorContentURLsMap", anchorContentURLsMap);
    
    return cordova(this, 'viewAR', {}, [{param1: bookName, param2: Array.from(anchorContentURLsMap.entries()), 
                                         param3: bookID}]);
   
  }

}

