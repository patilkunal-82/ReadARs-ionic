//
//  DocumentViewController.swift
//  DocumentBrowser
//
//  Created by Kunal Patil on 2/23/21.
//

import UIKit
import ARKit
import Foundation

class DocumentViewController: UIViewController {
    
   
    var bookDirectoryPath = ""
    var currentAnchorAndContentNames: [String : [String]] = [:]
    var anchorName: String = ""
    var currentBookName = ""
    
    let sceneView = ARSCNView()
    let configuration = ARWorldTrackingConfiguration()
    
    
    
    // @IBOutlet weak var documentNameLabel: UILabel!
    
    
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var image: UIImageView!
    var document: UIDocument?
    @IBOutlet weak var cancelButton: UIButton!

    //added by kunal
    
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        // Access the document
       document?.open(completionHandler: { [self] (success) in
            if success {
                // Display the content of the document, e.g.:
                //self.label.text = self.document?.fileURL.lastPathComponent
                let uiImage = UIImage(contentsOfFile: (self.document?.fileURL.path)!)
                print("uiImage: \(uiImage.debugDescription)")
                self.image.image = uiImage
               
            } else {
                // Make sure to handle the failed import appropriately, e.g., by presenting an error message to the user.
            }
        })
    }
    
    @IBAction func dismissClicked(_ sender: Any) {
        dismiss(animated: true) {
                        self.document?.close(completionHandler: nil)
        }
    }
    
    @IBAction func confirmUploadClicked(_ sender: Any) {
        
        print("inside confirm upload dialogue")
        print("anchor and content names: \(currentAnchorAndContentNames)")
        
        let uiImage = UIImage(contentsOfFile: (self.document?.fileURL.path)!)!
        let pathName = bookDirectoryPath
        let bookName = currentBookName
        var anchorAndContentNames = currentAnchorAndContentNames
        let fileNameFirstPart = (anchorName as NSString).deletingPathExtension
        var fileNameLastPart = ""
        var fileName = ""
        print("anchor name :\(anchorName)")
        
        for key in anchorAndContentNames.keys {
            if key == anchorName {
                let count = anchorAndContentNames[key]?.count ?? 0
                print("total values for the key: \(String(describing: anchorAndContentNames[key]?.count))")
                fileNameLastPart = "content" + String(count)
                fileName = fileNameFirstPart + fileNameLastPart + ".jpg"
                let fileURL = URL(fileURLWithPath: pathName).appendingPathComponent(fileName)
                saveImageInDocumentDirectory(image: uiImage, fileURL: fileURL)
                anchorAndContentNames[key]?.append(fileName)
                updateBookPlist(plistPathName: pathName, plistFileName: fileName, plistBookName: bookName, plistAnchorandContentNames: anchorAndContentNames)
                break
            }
        }
        
        self.dismiss(animated: true, completion: nil)
        
        //sceneView.session.run(configuration, options: .resetTracking)
    
    }
     
}

func saveImageInDocumentDirectory(image: UIImage, fileURL: URL) {
    
        print("file URL: \(fileURL.absoluteString)")
    if let imageData = UIImageJPEGRepresentation(image, 1.0) { //image.jpegData(compressionQuality: 1.0) {
            try? imageData.write(to: fileURL, options: .atomic)
        }
    }

func updateBookPlist(plistPathName: String, plistFileName: String, plistBookName: String, plistAnchorandContentNames: [String : [String]]  ){
      
        print("Inside updateBookPlist")
        print("plist path name: \(plistPathName)")
        print("plist file name: \(plistFileName)")
        print("plist book name: \(plistBookName)")
        print("acnhor and content to be written : \(plistAnchorandContentNames)")
       
        let plistFilePath = plistPathName.appending("/" + plistBookName + ".plist")
        print("plist file path name: \(plistFilePath)")
        let fileManager = FileManager()
        
        guard fileManager.fileExists(atPath: plistFilePath), let plist = fileManager.contents(atPath: plistFilePath) else {
            print("plist for \(plistBookName) does not exist")
            return
        }
    
    if !plist.isEmpty {
        do {
            let plistData = try PropertyListSerialization.data(fromPropertyList: plistAnchorandContentNames, format: .xml, options: 0)
            try plistData.write(to: URL(fileURLWithPath: plistFilePath))
        } catch {
            print("Could not write updated plist \(error)")
        }
    }
    
}
   
