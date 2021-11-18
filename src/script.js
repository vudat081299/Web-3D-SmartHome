import './style.css'
import * as THREE from 'three'
// import { OBJLoader } from './OBJLoader.js';
// import { OBJLoader } from 'three/src/loaders/ObjectLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

// import * as THREE from '../build/three.module.js';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// 
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import { LoadingManager } from 'three/build/three.module';

//
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import * as dat from 'dat.gui'


// Render .obj file
/*
// // Sizes
const sizes = {
  width: 800,
  height: 600
}
      
// Cursor
const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (event) =>
{
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = - (event.clientY / sizes.height - 0.5)
})



      let camera, scene, renderer;

      let mouseX = 0, mouseY = 0;

      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;


      init();
      animate();


      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        // camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.z = 250;

        // scene

        scene = new THREE.Scene();

        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        scene.add( ambientLight );

        const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        camera.add( pointLight );
        scene.add( camera );

        // model

        const onProgress = function ( xhr ) {

          if ( xhr.lengthComputable ) {

            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

          }

        };

        const onError = function () { };

        const manager = new THREE.LoadingManager();
        manager.addHandler( /\.dds$/i, new DDSLoader() );

        // comment in the following line and import TGALoader if your asset uses TGA textures
        // manager.addHandler( /\.tga$/i, new TGALoader() );

        new MTLLoader( manager )
          .setPath( '../textures/' )
          .load( 'House.mtl', function ( materials ) {

            materials.preload();

            new OBJLoader( manager )
              .setMaterials( materials )
              .setPath( '../textures/' )
              .load( 'House.obj', function ( object ) {

                object.position.y = 0;
                scene.add( object );

              }, onProgress, onError );

          } );

        //

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove );

        //

        window.addEventListener( 'resize', onWindowResize );



// Controls
const controls = new OrbitControls(camera, container)
// controls.target.y = 2
controls.enableDamping = true
// Animate
const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

        tick()

      }

      function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX ) / 2;
        mouseY = ( event.clientY - windowHalfY ) / 2;

      }

      //

      function animate() {

        requestAnimationFrame( animate );
        render();

      }

      function render() {

        // camera.position.x += ( mouseX - camera.position.x ) * .05;
        // camera.position.y += ( - mouseY - camera.position.y ) * .05;

        camera.lookAt( scene.position );

        renderer.render( scene, camera );

      }
*/




























// Render .fbx file
/*
      let camera, scene, renderer, stats;

      const clock = new THREE.Clock();

      let mixer;

      init();
      animate();

      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.set( 100, 200, 300 );

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xa0a0a0 );
        scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
        hemiLight.position.set( 0, 200, 0 );
        scene.add( hemiLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( 0, 200, 100 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 180;
        dirLight.shadow.camera.bottom = - 100;
        dirLight.shadow.camera.left = - 120;
        dirLight.shadow.camera.right = 120;
        scene.add( dirLight );

        // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

        // ground
        const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add( mesh );

        const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        scene.add( grid );

        // model
        const manager = new LoadingManager();
        // add handler for TGA textures
        manager.addHandler( /\.tga$/i, new TGALoader() );
        const loader = new FBXLoader(manager);
        loader.load( '../textures/vikingroom.fbx', function ( object ) {

          // mixer = new THREE.AnimationMixer( object );

          // const action = mixer.clipAction( object.animations[ 0 ] );
          // action.play();

          object.traverse( function ( child ) {

            if ( child.isMesh ) {

              child.castShadow = true;
              child.receiveShadow = true;

            }

          } );

          scene.add( object );

        } );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = true;
        container.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.target.set( 0, 100, 0 );
        controls.update();

        window.addEventListener( 'resize', onWindowResize );

        // stats
        stats = new Stats();
        container.appendChild( stats.dom );

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      //

      function animate() {

        requestAnimationFrame( animate );

        const delta = clock.getDelta();

        if ( mixer ) mixer.update( delta );

        renderer.render( scene, camera );

        stats.update();

      }
*/



















// Render .gltf file method 1
/*
let camera, scene, renderer;

      init();
      render();

      function init() {

        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        camera.position.set( - 1.8, 0.6, 2.7 );

        scene = new THREE.Scene();

        new RGBELoader()
          .load( '../textures/royal_esplanade_1k.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            render();

            // model

            // use of RoughnessMipmapper is optional
            const roughnessMipmapper = new RoughnessMipmapper( renderer );

            new GLTFLoader().load( '../textures/DamagedHelmet.gltf', function ( gltf ) {

              gltf.scene.traverse( function ( child ) {

                if ( child.isMesh ) {

                  roughnessMipmapper.generateMipmaps( child.material );

                }

              } );

              scene.add( gltf.scene );

              roughnessMipmapper.dispose();

              render();

            } );

          } );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();

        window.addEventListener( 'resize', onWindowResize );

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

      }

      //

      function render() {

        renderer.render( scene, camera );

      }
*/


















// Render .gltf file method 2
/*
function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  // Lights
  // const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  // scene.add(ambientLight)

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
  // directionalLight.castShadow = true
  // directionalLight.shadow.mapSize.set(1024, 1024)
  // directionalLight.shadow.camera.far = 15
  // directionalLight.shadow.camera.left = - 7
  // directionalLight.shadow.camera.top = 7
  // directionalLight.shadow.camera.right = 7
  // directionalLight.shadow.camera.bottom = - 7
  // directionalLight.position.set(- 200, 50, 30)
  // scene.add(directionalLight)

  {
    const planeSize = 40;
    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  const cars = [];
  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('../textures/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);

      const loadedCars = root.getObjectByName('Cars');
      const fixes = [
        { prefix: 'Car_08', rot: [Math.PI * .5, 0, Math.PI * .5], },
        { prefix: 'CAR_03', rot: [0, Math.PI, 0], },
        { prefix: 'Car_04', rot: [0, Math.PI, 0], },
      ];

      root.updateMatrixWorld();
      // for (const car of loadedCars.children.slice()) {
      //  const fix = fixes.find(fix => car.name.startsWith(fix.prefix));
      //  const obj = new THREE.Object3D();
      //  car.getWorldPosition(obj.position);
      //  car.position.set(0, 0, 0);
      //  car.rotation.set(...fix.rot);
      //  obj.add(car);
      //  scene.add(obj);
      //  cars.push(obj);
      // }

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;  // convert to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    for (const car of cars) {
      car.rotation.y = time;
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
*/















// Render .gltf file method 3
// Base
/** 
  * Priority: 
  * 0 - independent method
  * 1 - depended method
  * 2 - depending method
  * n - depending method level n
  */


/** MARK: - Declaration --------------------------------------------------------------------------------------------------------------------------------------- */
const delta = 0.001 // 
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}


/** MARK: - Canvas --------------------------------------------------------------------------------------------------------------------------------------- */
const canvas = document.querySelector('canvas.webgl')


/** MARK: - Actions --------------------------------------------------------------------------------------------------------------------------------------- */
let mixer = null












let scene
/** 
 * MARK: - Scene 
 * - Priority: 1
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareScene() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color('white');
}


let renderer
/** 
 * MARK: - Renderer 
 * - Priority: 1
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function renderToCanvas() {
  renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
















/** 
 * MARK: - Models 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareModels () {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('../draco/')

  const gltfLoader = new GLTFLoader()
  // gltfLoader.setDRACOLoader(dracoLoader)

  // '../models/Fox/glTF/Fox.gltf',
  gltfLoader.load(
    '../textures/scene.gltf',
    (gltf) => {
      gltf.scene.scale.set(0.001, 0.001, 0.001)
      scene.add(gltf.scene)

      // Animation
      // mixer = new THREE.AnimationMixer(gltf.scene)
      // const action = mixer.clipAction(gltf.animations[2])
      // action.play()
    }
  )
}


let floor
/** 
 * MARK: - Floor 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareFloor () {
  floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#ffffff',
        metalness: 0,
        roughness: 0.5
    })
  )
  floor.receiveShadow = true
  floor.rotation.x = - Math.PI * 0.5
  floor.position.y -= 1
  scene.add(floor)
}


/** 
 * MARK: - Objects 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareObjects () {
  //Create a sphere that cast shadows (but does not receive them)
  // const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
  // const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
  // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  // sphere.castShadow = true; //default is false
  // sphere.receiveShadow = false; //default
  // scene.add( sphere );

  //Create a plane that receives shadows (but does not cast them)
  const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  scene.add(plane);
}


let directionalLight
/** 
 * MARK: - Lights 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareLight () {
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  // directionalLight.castShadow = true
  // directionalLight.shadow.mapSize.set(1024, 1024)
  // directionalLight.shadow.camera.far = 15
  // directionalLight.shadow.camera.left = - 7
  // directionalLight.shadow.camera.top = 7
  // directionalLight.shadow.camera.right = 7
  // directionalLight.shadow.camera.bottom = - 7
  // directionalLight.position.set(- 5, 5, 0)
  // scene.add(directionalLight)

  //Create a DirectionalLight and turn on shadows for the light
  directionalLight = new THREE.DirectionalLight(0xffffff, 1, 1);
  directionalLight.position.set(-1, -1, -1); //default; light shining from top
  directionalLight.castShadow = true; // default false
  scene.add(directionalLight);
}


let camera
/** 
 * MARK: - Camera 
 * - Priority: 2
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareCamera () {
  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0, 5, 20)
  scene.add(camera)
}


















/** 
 * MARK: - Helper 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareHelper () {
  //Create a helper for the shadow camera (optional)
  const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
  scene.add(helper);
}


/** 
 * MARK: - Shadow 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareShadow () {
  /** MARK: - Textures --------------------------------------------------------------------------------------------------------------------------------------- */
  const textureLoader = new THREE.TextureLoader()
  const bakedShadow = textureLoader.load('/textures/bakedShadow.jpg')
  const simpleShadow = textureLoader.load('/textures/simpleShadow.jpg')

  const sphereShadow = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      alphaMap: simpleShadow
    })
  )
  sphereShadow.rotation.x = - Math.PI * 0.5
  sphereShadow.position.y = floor.position.y + delta
  scene.add(sphereShadow)
}


let controls
/** 
 * MARK: - Controls 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareControls () {
  controls = new OrbitControls(camera, canvas)
  controls.target.set(0, 0.75, 0)
  controls.enableDamping = true
}


/** 
 * MARK: - Animations 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareAnimations () {
  const clock = new THREE.Clock()
  let previousTime = 0
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Model animation
    if (mixer) {
      mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }
  tick()
}


/** 
 * MARK: - Event listeners 
 * - Priority: 3
 * --------------------------------------------------------------------------------------------------------------------------------------- */
function prepareEventListeners () {
  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}







/** MARK: - Application --------------------------------------------------------------------------------------------------------------------------------------- */
/** Priority: - 0*/

/** Priority: - 1 */
prepareScene()
renderToCanvas()

/** Priority: - 2 */
prepareObjects()
prepareCamera()
prepareLight()
prepareFloor()
prepareModels()

/** Priority: - 3 */
prepareEventListeners()
prepareControls()
prepareShadow()
prepareHelper()

/** Priority: - 4 */
prepareAnimations()

















