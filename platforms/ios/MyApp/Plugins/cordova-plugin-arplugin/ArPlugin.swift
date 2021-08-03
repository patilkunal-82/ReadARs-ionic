import Foundation
import Contacts



@objc(ArPlugin) class ArPlugin : CDVPlugin {

    // MARK: Properties
    var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)

    //This method is called when the plugin is initialized; plugin setup methods got here
    override func pluginInitialize() {
    }

    @objc(add:) func add(_ command: CDVInvokedUrlCommand) {

        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        let param1 = (command.arguments[0] as? NSObject)?.value(forKey: "param1") as? Int
        let param2 = (command.arguments[0] as? NSObject)?.value(forKey: "param2") as? Int

        if let p1 = param1 , let p2 = param2 {

            if p1 >= 0 && p1 >= 0 {

                let total = String(p1 + p2)
                pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: total)
            } else {
                pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Something wrong")
            }
        }

        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(getContacts:) func getContacts(_ command: CDVInvokedUrlCommand) {

          var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
          
          let contactStore = CNContactStore();
          var contacts = [Any]()
          let keys = [
              CNContactFormatter.descriptorForRequiredKeys(for: .fullName),
              CNContactPhoneNumbersKey, CNContactEmailAddressesKey
          ] as [Any]

           let request = CNContactFetchRequest(keysToFetch: keys as! [CNKeyDescriptor])
           contactStore.requestAccess(for: .contacts) { (granted, error) in

            if let error = error {
                print("failed to request access", error)
                
                return
            }

            if granted {
                do {

                    try contactStore.enumerateContacts(with: request) {
                               (contact, stop) in
                        contacts.append([
                            "firstName": contact.givenName,
                            "lastName": contact.familyName,
                            "telephone": contact.phoneNumbers.first?.value.stringValue ?? ""
                        ])
                       }
                       print(contacts)
                        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: contacts)
                       
                      

                } catch {
                       print("unable to fetch contacts")
                       pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Something wrong")
                       
                       
                }

            } else {
                    print("access denied")
                      pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Something wrong")
                    
                  
            }


           }

           self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)

    }

    @objc(viewAR:) func viewAR(_ command: CDVInvokedUrlCommand) {
    
    /*
       ViewAR button for a BOOK in the UI will call the viewAR() function of the ArPlugin and will also pass the bookId.
       This function will open the camera view and will start looking for the anchors that are specific to the bookId. - done
       Once correct set of contents is found for the anchor, this content set will be rendered on
       the screen.
       
     */
            
        let bookName = (command.arguments[0] as? NSObject)?.value(forKey: "param1") as? String
        let anchorContentURLs = (command.arguments[0] as? NSObject)?.value(forKey: "param2") as? Array<[Any]>
        let bookID = (command.arguments[0] as? NSObject)?.value(forKey: "param3") as? String

        print("Received BOOK ID IS :", bookID)
        print("Received BOOK NAME IS BOOK NAME:", bookName!)
        print("Received BOOK URLs MAP:", anchorContentURLs!)
        let arViewController = BookARViewController()
        
        var bookAnchorContentURLsDict: [String : [String]] = [:]
        
        for item in anchorContentURLs ?? [] {
            print("Anchor URL \(item[0])")
            print("Content URLs \(item[1])")
            guard let key = item[0] as? String, let value = item[1] as? [String] else { continue }
            bookAnchorContentURLsDict[key] = value
        }
        print("created dict: \(bookAnchorContentURLsDict)")
        arViewController.bookAnchorContentNames = bookAnchorContentURLsDict
        //arViewController.bookDirectoryPath = getBookPath(forBookWithKey: bookCell.bookKey)
        arViewController.currentBookName = bookName!
        viewController.present(arViewController, animated: true, completion: nil)
        
        
    
    }

}


    


