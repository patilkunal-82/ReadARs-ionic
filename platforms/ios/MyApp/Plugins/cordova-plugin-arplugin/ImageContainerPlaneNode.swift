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

let imageWidthDimension: CGFloat = 0.2




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
               geometry?.firstMaterial?.diffuse.contents = video
                geometry?.firstMaterial?.locksAmbientWithDiffuse = true
                print("video orientation reset")
          //resetting
              //   simdWorldOrientation = simd_quatf(matrix_identity_float3x3)
            //    simdWorldOrientation = simd_quatf(angle: Float.pi/2, axis: simd_float3(x: 0, y: 0, z: -1))
              let controller = AVPlayerViewController()
               controller.player = video
               controller.player?.play()
                
                /*let videoMaterial = VideoMaterial(avPlayer: video)
                
                //Sets the aspect ratio of the video to be played, and the corner radius of the video
                let videoPlane = ModelEntity(mesh: .generatePlane(width: 0.2, depth: 0.1, cornerRadius: 0.3), materials: [videoMaterial])
                
                self.addChild(videoPlane)*/
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

