//
//  DocumentBrowserViewController.swift
//  BookProject
//
//  Created by Kunal Patil on 2/23/21.
//

import UIKit

class DocumentBrowserViewController: UIDocumentBrowserViewController, UIDocumentBrowserViewControllerDelegate {
    
    //added by madhu
    var bookDirectoryPath = ""
    var anchorAndContentNames: [String : [String]] = [:]
    var anchorName: String = ""
    var currentBookName = ""
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        delegate = self
        
        allowsDocumentCreation = true
        allowsPickingMultipleItems = false
        
        // Update the style of the UIDocumentBrowserViewController
         browserUserInterfaceStyle = .dark
         view.tintColor = .lightGray
        
        // Specify the allowed content types of your application via the Info.plist.
        
        // Do any additional setup after loading the view.
        
       
    }
    
    
    // MARK: UIDocumentBrowserViewControllerDelegate
    
    func documentBrowser(_ controller: UIDocumentBrowserViewController, didRequestDocumentCreationWithHandler importHandler: @escaping (URL?, UIDocumentBrowserViewController.ImportMode) -> Void) {
        let newDocumentURL: URL? = nil
        
        // Set the URL for the new document here. Optionally, you can present a template chooser before calling the importHandler.
        // Make sure the importHandler is always called, even if the user cancels the creation request.
        if newDocumentURL != nil {
            importHandler(newDocumentURL, .move)
        } else {
            importHandler(nil, .none)
        }
    }
    
    func documentBrowser(_ controller: UIDocumentBrowserViewController, didPickDocumentsAt documentURLs: [URL]) {
        guard let sourceURL = documentURLs.first else { return }
        print("inside picked document")
        // Present the Document View Controller for the first document that was picked.
        // If you support picking multiple items, make sure you handle them all.
        presentDocument(at: sourceURL)
        
    }
    
    func documentBrowser(_ controller: UIDocumentBrowserViewController, didImportDocumentAt sourceURL: URL, toDestinationURL destinationURL: URL) {
        print("inside import document")
        // Present the Document View Controller for the new newly created document
        presentDocument(at: destinationURL)
    }
    
    func documentBrowser(_ controller: UIDocumentBrowserViewController, failedToImportDocumentAt documentURL: URL, error: Error?) {
        // Make sure to handle the failed import appropriately, e.g., by presenting an error message to the user
        
    }
    
    // MARK: Document Presentation
    
    func presentDocument(at documentURL: URL) {
        
        let storyBoard = UIStoryboard(name: "Main", bundle: nil)
        
        let documentViewController = storyBoard.instantiateViewController(withIdentifier: "StoryBoardID") as! DocumentViewController
        documentViewController.document = Document(fileURL: documentURL)
        documentViewController.modalPresentationStyle = .fullScreen
        
        print("book directory path: \(bookDirectoryPath)")
        print("anchor and content names: \(anchorAndContentNames)")
        print("anchor name: \(anchorName)")
        
       // let documentViewController = DocumentViewController()
        documentViewController.bookDirectoryPath = bookDirectoryPath
        documentViewController.currentAnchorAndContentNames = anchorAndContentNames
        documentViewController.anchorName = anchorName
        documentViewController.currentBookName = currentBookName
        present(documentViewController, animated: true, completion: nil)
        
        
    }
}

