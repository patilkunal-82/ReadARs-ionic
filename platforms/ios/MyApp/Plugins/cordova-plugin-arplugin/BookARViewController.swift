//
//  ARViewController.swift
//  BookProject
//
//  Created by Kunal Patil on 1/4/21.
//

import UIKit
import ARKit
import AVFoundation
import AVKit
import os.log
import Foundation
import RealityKit
import SwiftUI

private let acceptedFileExtensions = ["jpg", "png", "jpeg", "MP4", "mp4"]

enum ContentType {
    case image
    case video
    case model3D
    case urlLink
}

struct AssetContainer {
    let type: ContentType
    let image: UIImage?
    var video: AVPlayer?
    var urlLink: URL?
    var imageURL: URL?
   // var model3D: Model3D?
}





class BookARViewController: ViewController, ARSCNViewDelegate, ARSessionDelegate {

   
    
    let sceneView = ARSCNView()
    //var arView = ARView(frame: .zero)
    
    // addition of buttons
   // let exploreMoreButton = UIButton(frame: CGRect(x: 225, y: 650, width: 145, height: 30))
    let clearButton = UIButton(frame: CGRect(x: 020, y: 650, width: 75, height: 30))
    var returnButton = UIButton();
    
    let anchorInstruction = UIButton(frame: CGRect(x: 125, y: 30, width: 125, height: 30))
   // let addYourDataButton = UIButton(frame: CGRect(x: 225, y: 150, width: 145, height: 30))
    
   let configuration = ARWorldTrackingConfiguration()
  // let configuration = ARImageTrackingConfiguration()
     
    var bookAnchorContentNames: [String : [String]] = [:] {
        didSet {
            print("bookAnchorContentNames: \(bookAnchorContentNames)")
        }
    }
    private var anchorsAndContentData: [ARReferenceImage : [AssetContainer]] = [:]
  //  private var anchorsAndContentData: [ARReferenceImage : [UIImage]] = [:]
    private let fileManager = FileManager()

    private var currentAnchor: ARReferenceImage? = nil
    private var docController: UIDocumentBrowserViewController? = nil
   
    
    var bookDirectoryPath: String = ""
    var document: UIDocument?
    var currentBookName: String = ""
   
    //var imageView: UIImageView?
    
    @IBOutlet weak var imageView: UIImageView!
    
    @IBOutlet weak var previewLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        sceneView.frame = view.bounds
        view.addSubview(sceneView)
       // arView.frame = view.bounds
       // view.addSubview(arView)
        
       /* exploreMoreButton.setTitle("Explore More...", for: .normal)
        exploreMoreButton.setTitleColor(.black, for: .normal)
        exploreMoreButton.backgroundColor = UIColor.lightGray
        self.view.addSubview(exploreMoreButton)
        exploreMoreButton.isHidden = true*/
        
        clearButton.setTitle("Clear", for: .normal)
        clearButton.setTitleColor( .white, for: .normal)
        clearButton.backgroundColor = UIColor.lightGray
        clearButton.layer.opacity = 0.8
        clearButton.layer.cornerRadius = 10.0
        clearButton.layer.borderWidth = 1.0
        clearButton.layer.borderColor = UIColor.lightGray.cgColor
        clearButton.layer.shadowRadius = 3.0
        clearButton.layer.shadowColor = UIColor.lightGray.cgColor
        clearButton.layer.shadowOpacity = 0.5
        self.view.addSubview(clearButton)
        clearButton.isHidden = true
        
       
        let returnIconConfiguration = UIImage.SymbolConfiguration(pointSize: 55, weight: .black)
        let returnIcon = UIImage(systemName: "arrowshape.turn.up.left.fill", withConfiguration: returnIconConfiguration)
        let width = returnIcon?.size.width
        let height = returnIcon?.size.height
        print("Width", width)
        print("Height", height)
        returnButton = UIButton(frame: CGRect(x: 275, y: 650, width: 40, height: 30))
        returnButton.tintColor = UIColor.lightGray
        returnButton.setImage(returnIcon, for: .normal)
        returnButton.layer.opacity = 0.8
        /*returnButton.layer.cornerRadius = 10.0
        returnButton.layer.borderWidth = 1.0
        returnButton.layer.borderColor = UIColor.lightGray.cgColor
        returnButton.layer.shadowRadius = 3.0
        returnButton.layer.shadowColor = UIColor.lightGray.cgColor
        returnButton.layer.shadowOpacity = 0.5*/
        self.view.addSubview(returnButton)
        returnButton.isHidden = false
        
        anchorInstruction.setTitle("Find Anchor", for: .normal)
        anchorInstruction.setTitleColor(.white, for: .normal)
        anchorInstruction.backgroundColor = UIColor.lightGray
        anchorInstruction.layer.opacity = 0.8
        anchorInstruction.layer.cornerRadius = 10.0
        anchorInstruction.layer.borderWidth = 1.0
        anchorInstruction.layer.borderColor = UIColor.lightGray.cgColor
        anchorInstruction.layer.shadowColor = UIColor.lightGray.cgColor
        anchorInstruction.layer.shadowRadius = 3.0
        anchorInstruction.layer.shadowOpacity = 0.5
        self.view.addSubview(anchorInstruction)
        anchorInstruction.isHidden = false
        
        
        
        /*addYourDataButton.setTitle("Upload Your Data", for: .normal)
        addYourDataButton.setTitleColor(.black, for: .normal)
        addYourDataButton.backgroundColor = UIColor.lightGray
        
        self.view.addSubview(addYourDataButton)
        addYourDataButton.isHidden = true*/
        
        // Set the view's delegate
        sceneView.delegate = self
        //arView.session.delegate = self
    
        do {
            try AVAudioSession.sharedInstance().setCategory(AVAudioSessionCategoryPlayback, mode: AVAudioSessionModeDefault, options: [])
        }
        catch {
            print("Setting category to AVAudioSessionCategoryPlayback failed.")
        }

        // Show statistics such as fps and timing information
        //sceneView.showsStatistics = true
        
       let tapGesture = UITapGestureRecognizer(target: self, action:#selector(didTap(_:)))
       sceneView.addGestureRecognizer(tapGesture)
       //arView.addGestureRecognizer(tapGesture)
       
        
       /* exploreMoreButton.addTarget(self, action: #selector(exploreMoreButtonClicked), for: .touchUpInside)*/
        clearButton.addTarget(self, action: #selector(clearButtonClicked), for: .touchUpInside)
        returnButton.addTarget(self, action: #selector(returnButtonClicked), for: .touchUpInside)
        /*addYourDataButton.addTarget(self, action: #selector(uploadYourDataButtonClicked), for: .touchUpInside)*/
        
    }
    
    @objc func exploreMoreButtonClicked(_ sender: Any) {
        
        guard let linkAnchor = sceneView.session.currentFrame?.anchors else {return}
        //guard let linkAnchor = arView.session.currentFrame?.anchors else {return}
        for anchor in linkAnchor {
                    if let myUrlAnchor = anchor as? ARImageAnchor{
                            let url = URL(string: "https://www.google.com")!
                            UIApplication.shared.open(url)
                        }
                    }
        
        print("Explore More Button Clicked!")
    }
    
    @objc func returnButtonClicked(_ sender: Any) {
        print("Return Button Clicked!")
        //sceneView.session.pause()
        self.dismiss(animated: false, completion: nil)
        anchorInstruction.isHidden = true
        clearButton.isHidden = true
        returnButton.isHidden = true
        
    }
    
    @objc func clearButtonClicked(_ sender: Any) {
        print("Clear Button Clicked!")
        sceneView.session.pause()
        sceneView.scene.rootNode.enumerateChildNodes{ (node,SSTOP) in
                node.removeFromParentNode()
        }
        sceneView.session.run(configuration, options: [.resetTracking, .removeExistingAnchors])
        runARWorldTracking();
        
        anchorInstruction.isHidden = false
       // exploreMoreButton.isHidden = true
        clearButton.isHidden = true
    }


    override func viewWillAppear(_ animated: Bool) {
        sceneView.session.run(configuration, options: .resetTracking)
        //arView.session.run(configuration, options: .resetTracking)
        super.viewWillAppear(animated)
        print("inside viewWillAppear")
        prepareAnchorsAndContentData()
        runARWorldTracking()
        
        // Create a session configuration
//        guard anchorsAndContentData.keys.count > 0 else {
//            fatalError("No anchors found")
//        }
        
        /*let configuration = ARWorldTrackingConfiguration()
        configuration.detectionImages = Set(anchorsAndContentData.keys)
        print("detection images")*/
        // Run the view's session
       // sceneView.session.run(configuration)
        //arView.session.run(configuration)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
       super.viewWillDisappear(animated)
       // Pause the view's session
       sceneView.session.pause()
       // arView.session.pause()
   }
    
    private func runARWorldTracking() {
        
        let configuration = ARWorldTrackingConfiguration()
        configuration.detectionImages = Set(anchorsAndContentData.keys)
        print("detection images")
        sceneView.session.run(configuration)
  
    }
    
    @objc
    func didTap(_ gesture:UITapGestureRecognizer) {
        // hittest
        
       guard let result = sceneView.hitTest(gesture.location(in: sceneView), options: nil).first, let imageNode = result.node as? ImagesContainerPlaneNode else { return }
       
        print("inside didTap")
        imageNode.showNextImage()
       
        
      // guard let result = arView.hitTest(gesture.location(in: arView)).first else { return }
        /*let imageNode = result.entity
        for childNode in imageNode.children {
            guard let planeNode = childNode as? ImagesContainerPlaneNode else { continue }
            print("showing next image")
            planeNode.showNextImage()
        }*/
        
    }
    
    // for the specific anchor that is seen in the world view, allow the user to add his own data
    //
    @objc func uploadYourDataButtonClicked(_ sender: Any) {
        print("Inside upload data button clicked!")
        guard let anchor = currentAnchor, let contentArray = anchorsAndContentData[anchor] else {
            print("no content found for current anchor")
            return
        }
        
        let documentBrowser = DocumentBrowserViewController()
        
        documentBrowser.bookDirectoryPath = bookDirectoryPath
        documentBrowser.anchorAndContentNames = bookAnchorContentNames
        documentBrowser.anchorName = (currentAnchor?.name)!
        documentBrowser.currentBookName = currentBookName
        
        present(documentBrowser, animated: true, completion: nil)
        
        //  contentArray.append(AssetContainer(type: <#T##ContentType#>, image: <#T##UIImage?#>, video: <#T##AVPlayer?#>, urlLink: <#T##URL?#>))
    }
    
}


//- ARSCNViewDelegate : code for SceneKit
extension BookARViewController {
    
    func renderer(_ renderer: SCNSceneRenderer, didAdd node: SCNNode, for anchor: ARAnchor) {
        guard let imageAnchor = anchor as? ARImageAnchor else { return }
        guard let contentArray = anchorsAndContentData[imageAnchor.referenceImage] else {
            print("no content found for anchor: \(String(describing: imageAnchor.name))")
            return
        }
        currentAnchor = imageAnchor.referenceImage
        DispatchQueue.main.async {
            self.anchorInstruction.isHidden=true
           // self.exploreMoreButton.isHidden=false
            self.clearButton.isHidden=false
           // self.addYourDataButton.isHidden=false
            self.returnButton.isHidden = false
          
        }
        
        let displayNode = ImagesContainerPlaneNode (mixedContent: contentArray)
        node.addChildNode(displayNode)
        
    }
}

// Code using RealityKit
/*extension BookARViewController {
    func session(_ session: ARSession, didAdd anchors: [ARAnchor]) {
        guard let imageAnchor = anchors.first as? ARImageAnchor else { return }
        guard let contentArray = anchorsAndContentData[imageAnchor.referenceImage] else {
            print("no content found for anchor: \(String(describing: imageAnchor.name))")
            return
        }
        currentAnchor = imageAnchor.referenceImage
        DispatchQueue.main.async {
            self.anchorInstruction.isHidden=true
            self.exploreMoreButton.isHidden=false
            self.clearButton.isHidden=false
            self.addYourDataButton.isHidden=false
          
        }
        
        /*let displayNode = ImagesContainerPlaneNode (mixedContent: contentArray)
        node.addChildNode(displayNode)*/
        
        
        let displayAnchor = AnchorEntity(anchor: imageAnchor)
        let displayNode = ImagesContainerPlaneNode (mixedContent: contentArray)
        displayAnchor.addChild(displayNode)
        arView.scene.addAnchor(displayAnchor)
    }
}*/

//Mark:- file access
extension BookARViewController {
    
    private func convertCIImageToCGImage(inputImage: CIImage) -> CGImage? {
        let context = CIContext(options: nil)
        if let cgImage = context.createCGImage(inputImage, from: inputImage.extent) {
         return cgImage
        }
        return nil
    }
    
    
    private func prepareAnchorsAndContentData() {
        for anchor in bookAnchorContentNames.keys {
            
           /* guard let image = getImageAtBookDirectory(atPath: bookDirectoryPath.appending("/" + anchor)) else { continue }*/
            
            guard let image = getImageAtBookDirectory(atPath: anchor) else {continue}
            
            guard let imageToCIImage = CIImage(image: image), let cgImage = convertCIImageToCGImage(inputImage: imageToCIImage) else {
                print("Can not convert UIImage to CGIImage \(anchor)")
                continue
            }

            let arImage = ARReferenceImage(cgImage, orientation: CGImagePropertyOrientation.up, physicalWidth: 0.2)
            // added by Madhu
            arImage.name = anchor
            
            
            print("inside prepareAnchorsAndContentData")
            anchorsAndContentData[arImage] = []
            
            
            for content in bookAnchorContentNames[anchor]! {
                
              /*  let path = bookDirectoryPath.appending("/" + content)*/
                let path = content
                
                let url = URL(fileURLWithPath: path)
                
                print("url last path component", url.lastPathComponent)
                
              
               // print("bookdirectorypath : \(bookDirectoryPath)")
                //print("content : \(content)")
                //print("path : \(path)")
                //print("url :\(url.absoluteString)")
               // if content.hasSuffix(".com"){print ("com is") }else {}
                
                /*if content.isValidURL {
                    print("handling links")
                    guard let contentLink = getLinkAtBookDirectory(atPath: content) else {continue}
                    let assetContainer = AssetContainer(type: .urlLink, image: image, urlLink: contentLink)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    //UIApplication.shared.open(url)
                    
                }*/ //else {
                
                    /*print("handling files")
                    let pathExtension = url.pathExtension
                    
                    if  pathExtension == "jpg" {
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "jpeg" {
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "png" {
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "PNG" {
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "JPG" {
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "JPEG" {
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "heic" {
                    print("inside heic")
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if  pathExtension == "HEIC" {
                    print("inside HEIC")
                    guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }

                    if pathExtension == "mp4" {
                    guard let contentVideo = getVideoAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .video, image: image, video: contentVideo, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if pathExtension == "MP4" {
                    guard let contentVideo = getVideoAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .video, image: image, video: contentVideo, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }
                    
                    if pathExtension == "MOV" {
                    guard let contentVideo = getVideoAtBookDirectory(atPath: path) else { continue }
                    let assetContainer = AssetContainer(type: .video, image: image, video: contentVideo, imageURL: url)
                    anchorsAndContentData[arImage]?.append(assetContainer)
                    }*/
                    
               // }
                
                guard let contentImage = getImageAtBookDirectory(atPath: path) else { continue }
                let assetContainer = AssetContainer(type: .image, image: contentImage, imageURL: url)
                anchorsAndContentData[arImage]?.append(assetContainer)
               
                   
                
            }
        }
    }
    
   /* private func getImageAtBookDirectory(atPath path: String) -> UIImage? {
        guard fileManager.fileExists(atPath: path), let image = UIImage(contentsOfFile: path) else {
            print("file does not exist \(path) or can't read file into UIImage")
            return nil
        }
        return image
    }*/
    /*
     do {
         print("inside showview")
         let data = try Data(contentsOf: contentURL)
         imageView.image = UIImage(data: data)
     } catch { return }
     */
    
    private func getImageAtBookDirectory(atPath path: String) -> UIImage? {
        
        let fileURL = URL(string: path)
        print("file URL", fileURL);
        guard let data = try? Data(contentsOf: fileURL!) else { return nil }
        
        
        guard let image = UIImage(data: data) else {
            print("file does not exist \(path) or can't read file into UIImage")
            return nil
        }
        return image
        
     }
    
    private func getVideoAtBookDirectory(atPath path: String) -> AVPlayer? {
        let videoURL = URL(fileURLWithPath: path)
        let video = AVPlayer(url: videoURL)
        //let videoController = AVPlayerViewController()
        guard fileManager.fileExists(atPath: path)  else {
            print("file does not exist \(path) or can't read file into UIImage")
            return nil
        }
        return video
    }
    
    private func getLinkAtBookDirectory(atPath path: String) -> URL? {
        
        let linkURL = URL(string: path)
        print("linkURL is : \(String(describing: linkURL))")
        guard path.isValidURL  else {
            print("file does not exist \(path) or can't read file into UIImage")
            return nil
        }
        return linkURL
    }
}

extension String {
    var isValidURL: Bool {
        let detector = try! NSDataDetector(types: NSTextCheckingResult.CheckingType.link.rawValue)
        if let match = detector.firstMatch(in: self, options: [], range: NSRange(location: 0, length: self.utf16.count)) {
            // it is a link, if the match covers the whole string
            return match.range.length == self.utf16.count
        } else {
            return false
        }
    }
}

