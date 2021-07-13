//////////////////////////////////////////////////////////////////////////////////
        //		Init
        //////////////////////////////////////////////////////////////////////////////////

        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            precision: 'mediump',
        });

        var clock = new THREE.Clock();

        var mixers = [];

        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.setClearColor(new THREE.Color('lightgrey'), 0)
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.domElement.style.position = 'absolute'
        renderer.domElement.style.top = '0px'
        renderer.domElement.style.left = '0px'
        document.body.appendChild( renderer.domElement );

        // init scene and camera
        var scene = new THREE.Scene();

        //////////////////////////////////////////////////////////////////////////////////
        //		Initialize a basic camera
        //////////////////////////////////////////////////////////////////////////////////

        // Create a camera
        var camera = new THREE.Camera();
        scene.add(camera);

        var light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        ////////////////////////////////////////////////////////////////////////////////
        //          handle arToolkitSource
        ////////////////////////////////////////////////////////////////////////////////

        var arToolkitSource = new THREEx.ArToolkitSource({
            sourceType : 'webcam',
            sourceWidth: 480,
            sourceHeight: 640,
        })

        arToolkitSource.init(function onReady(){
            // use a resize to fullscreen mobile devices
            setTimeout(function() {
                onResize()
            }, 1000);
        })

        // handle resize
        window.addEventListener('resize', function(){
            onResize()
        })

        // listener for end loading of NFT marker
        window.addEventListener('arjs-nft-loaded', function(ev){
          console.log(ev);
        })

        function onResize(){
            arToolkitSource.onResizeElement()
            arToolkitSource.copyElementSizeTo(renderer.domElement)
            if( arToolkitContext.arController !== null ){
                arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)
            }
        }

        ////////////////////////////////////////////////////////////////////////////////
        //          initialize arToolkitContext
        ////////////////////////////////////////////////////////////////////////////////

        // create atToolkitContext
        var arToolkitContext = new THREEx.ArToolkitContext({
            detectionMode: 'mono',
            canvasWidth: 480,
            canvasHeight: 640,
        }, {
            sourceWidth: 480,
            sourceHeight: 640,
        })

        // initialize it
        arToolkitContext.init(function onCompleted(){
            // copy projection matrix to camera
            camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
        })

        ////////////////////////////////////////////////////////////////////////////////
        //          Create a ArMarkerControls
        ////////////////////////////////////////////////////////////////////////////////

        // init controls for camera
        var markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
            type : 'nft',
            descriptorsUrl : 'homelibrary',
            changeMatrixMode: 'cameraTransformMatrix'
        })

        scene.visible = false

       
        var root = new THREE.Object3D();
        scene.add(root);


        //////////////////////////////////////////////////////////////////////////////////
        //		add an object in the scene
        //////////////////////////////////////////////////////////////////////////////////

        const map = new THREE.TextureLoader().load('cars.jpg');
        const material = new THREE.SpriteMaterial({map: map});
        const sprite = new THREE.Sprite(material);
        scene.add(sprite);
        
        function animate() {
            requestAnimationFrame( animate );
            ArToolkitContext.update(ArToolkitSource.domElement);
            scene.visible = camera.visible;
            renderer.render( scene, camera );
        };
        
        animate();