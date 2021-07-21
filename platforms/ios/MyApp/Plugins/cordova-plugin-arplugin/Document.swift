//
//  Document.swift
//  DocumentBrowser
//
//  Created by Kunal Patil on 2/23/21.
//

import UIKit

class Document: UIDocument {
    
    
    override func contents(forType typeName: String) throws -> Any {
        // Encode your document with an instance of NSData or NSFileWrapper
        print("inside contents of Document")
        
        return Data()
    }
    
    override func load(fromContents contents: Any, ofType typeName: String?) throws {
        // Load your document from contents
        print("inside load of Document")
        
    
        
    }
}

