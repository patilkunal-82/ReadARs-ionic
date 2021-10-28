//
//  ImagesContainerPlaneNode.swift
//  BookProject
//
//  Created by Kunal Patil on 1/4/21.
//

import UIKit
import SceneKit
import AVKit
import RealityKit
import SwiftUI
import AVFoundation
import ARKit


let imageWidthDimension: CGFloat = 0.2
var sceneView: ARSCNView!


 final class ImagesContainerPlaneNode: SCNNode {
  
  let mixedContent: ArrayWithCyclingIndex
  
  
  
    init(mixedContent: [AssetContainer] ) {
          self.mixedContent = ArrayWithCyclingIndex(array: mixedContent)
          super.init()
          prepareGeometry()
        
    
       // simdWorldOrientation = simd_quatf(angle: Float.pi/2, axis: simd_float3(x: 0, y: 1, z: 0)) * simd_quatf(angle:Float.pi/2, axis: simd_float3(x: -1, y: 0, z: 0))
        
        simdWorldOrientation = simd_quatf(angle: Float.pi/2, axis: simd_float3(x: -1, y: 0, z: 0))
        
          
      }
      
    
    
    func showNextImage() {
        //images.cycleIndex()
        print("inside shownextimage")
        mixedContent.cycleIndex()
        prepareGeometry()
    }
    
    private func prepareGeometry(){
        
        guard let assetContainer = mixedContent.currentValue as? AssetContainer else {
            print("error: mixed content has non AssetContainer element")
            return
        }
        
        switch assetContainer.type {
        case .image:
            if let image = assetContainer.image {
              let imageAspectRatio = image.size.width / image.size.height
               geometry = SCNPlane(width: imageWidthDimension, height: imageWidthDimension / imageAspectRatio)
             geometry?.firstMaterial?.diffuse.contents = image
             geometry?.firstMaterial?.locksAmbientWithDiffuse = true
                
            
               // simdWorldOrientation = simd_quatf(matrix_identity_float3x3)
               //simdWorldOrientation = simd_quatf(angle: Float.pi/2, axis: simd_float3(x: 0, y: 1, z: 0)) * simd_quatf(angle:Float.pi/2, axis: simd_float3(x: -1, y: 0, z: 0))
                
                
             
                
               
                //Sets the aspect ratio of the video to be played, and the corner radius of the video
               
               
               /* var myMaterial = SimpleMaterial()
                myMaterial.baseColor = try! .texture(.load(contentsOf: assetContainer.imageURL!))
               // myMaterial.metallic = MaterialScalarParameter(floatLiteral: 0.5)
               // myMaterial.roughness = MaterialScalarParameter(floatLiteral: 0.5)
                
                
                let imagePlane = ModelEntity(mesh: .generatePlane(width: 0.2, depth: 0.1, cornerRadius: 0.03), materials: [myMaterial])
                
                
                self.addChild(imagePlane)
                print("image orientation reset")*/
            }
            break
            
        case .video:
            if let video = assetContainer.video {
             
                
                print("VIDEO \(video)")
            
                // A SpriteKit scene to contain the SpriteKit video node
            let spriteKitScene = SKScene(size: CGSize(width: 400, height: 400))
            spriteKitScene.scaleMode = .aspectFit

            
            // To make the video loop
            video.actionAtItemEnd = .none
            

            // Create the SpriteKit video node, containing the video player
            let videoSpriteKitNode = SKVideoNode(avPlayer: video)
            videoSpriteKitNode.position = CGPoint(x: spriteKitScene.size.width / 2.0, y: spriteKitScene.size.height / 2.0)
            videoSpriteKitNode.size = spriteKitScene.size
            videoSpriteKitNode.yScale = -1.0
            videoSpriteKitNode.play()
            spriteKitScene.addChild(videoSpriteKitNode)

//            // Create the SceneKit scene
//            let scene = SCNScene()
//            sceneView.scene = scene
//            sceneView.delegate = self
//            sceneView.isPlaying = true

            // Create a SceneKit plane and add the SpriteKit scene as its material
                let background = SCNPlane(width: 0.2, height: 0.2)
            background.firstMaterial?.diffuse.contents = spriteKitScene
            self.geometry = background                
              
            }
        break
       
        case .urlLink:
            if let urlLink = assetContainer.urlLink {
                //geometry = SCNPlane(width: imageWidthDimension, height: imageWidthDimension / imageAspectRatio)
                UIApplication.shared.open(urlLink)
                
                
            }
        break
            
        case .model3D:
            //handle 3d modeling
            print("inside 3d model case")
            break
        }
       
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}



final class ArrayWithCyclingIndex {
    let array: [Any]
    private var index: Int = 0
    init(array: [Any], index: Int = 0) {
        self.array = array
        self.index = index
    }
    
    var currentValue: Any {
        array[index]
    }
    
    func cycleIndex() {
        if index == array.count - 1 {
            index = 0
        } else {
            index += 1
        }
    }
    
}

class DisplayVideo: UIViewController {
    
    private func videoDisplay(videoData: AVPlayer) {
       
        let vc = AVPlayerViewController()
        vc.player = videoData
        vc.view.frame = self.view.frame
        self.view.addSubview(vc.view)
        self.addChildViewController(vc)
        videoData.play()
      
        
    }
}


